
const express = require('express');
const { GoogleGenAI } = require('@google/genai');
const cors = require('cors');
require('dotenv').config(); // For loading .env file locally

const app = express();

// --- CORS Configuration ---
// IMPORTANT: For production, set CORS_ORIGIN to your Azure Static Web App's specific URL.
// For local development, you might use 'http://localhost:your_react_app_port'
const DYNAMIC_CORS_ORIGIN = process.env.CORS_ORIGIN || '*'; // Default to wildcard if not set, but be specific in production
const corsOptions = {
  origin: DYNAMIC_CORS_ORIGIN,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
console.log(`CORS enabled for origin: ${DYNAMIC_CORS_ORIGIN}`);


app.use(express.json());

const apiKey = process.env.API_KEY;
if (!apiKey) {
  console.error("FATAL ERROR: API_KEY environment variable is not set.");
  process.exit(1); // Exit if API key is not configured
}

const ai = new GoogleGenAI({ apiKey });

// Define the allowed verdict labels based on your types.ts
const ALLOWED_VERDICTS = [
  "E Vërtetë",
  "Kryesisht e Vërtetë",
  "Pjesërisht e Vërtetë",
  "Kryesisht e Gabuar",
  "E Gabuar",
  "Mashtruese",
  "E Paverifikueshme",
  "Nuk Mund të Përcaktohet",
  "E Panjohur"
];

const SYSTEM_INSTRUCTION = `Ju jeni një IA e specializuar në verifikimin e fakteve. Analizoni pretendimin e dhënë.
Ktheni përgjigjen tuaj në formatin JSON.
Objekti JSON duhet të ketë dy fusha kryesore:
1.  "verdict_text": Një stringë që përfaqëson verdiktin tuaj. Verdikti duhet të jetë një nga këto vlera të sakta: "${ALLOWED_VERDICTS.join('", "')}".
2.  "summary_text": Një stringë që përmban një përmbledhje të shkurtër (maksimumi 3-4 fjali) dhe shpjegim të verifikimit tuaj, duke adresuar pretendimin kryesor.

Përdorni Google Search (i cili është aktivizuar për ju) për të gjetur informacion mbështetës ose kundërshtues nga burime të besueshme.
Bazojeni verdiktin dhe përmbledhjen tuaj në informacionin e gjetur.
Përqendrohuni në dhënien e një përgjigjeje të saktë dhe të paanshme.
Nëse pretendimi është kompleks, mund ta ndani në pjesë më të vogla dhe të vlerësoni secilën, por verdikti final duhet të jetë një nga vlerat e lejuara.
Përmbledhja duhet të shpjegojë arsyetimin pas verdiktit.
Mos përfshini vetë pretendimin origjinal në përmbledhje.
Shmangni përdorimin e frazave si "Sipas rezultateve të kërkimit..." në përmbledhje; integroni informacionin natyrshëm.`;

app.post('/api/fact-check', async (req, res) => {
  const { claim } = req.body;

  if (!claim || typeof claim !== 'string' || claim.trim() === "") {
    return res.status(400).json({ message: 'Pretendimi (claim) mungon ose është i pavlefshëm.' });
  }

  try {
    console.log(`[${new Date().toISOString()}] Processing claim: "${claim.substring(0, 100)}..."`);

    const geminiResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash-preview-04-17', // Use the recommended model
      contents: [{ role: "user", parts: [{text: claim}] }], // Correct format for contents
      systemInstruction: { role: "system", parts: [{text: SYSTEM_INSTRUCTION}] },
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.3, // Lower temperature for more factual responses
      },
      tools: [{googleSearch: {}}], // Enable Google Search
    });

    const responseText = geminiResponse.text;
    let parsedResultData;
    try {
      // Remove potential markdown fences for JSON
      let jsonStr = responseText.trim();
      const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
      const match = jsonStr.match(fenceRegex);
      if (match && match[2]) {
        jsonStr = match[2].trim();
      }
      parsedResultData = JSON.parse(jsonStr);
    } catch (e) {
      console.error(`[${new Date().toISOString()}] Failed to parse JSON response from Gemini:`, responseText, e);
      throw new Error("Përgjigja e IA nuk ishte në formatin e pritur JSON.");
    }

    const verdict = parsedResultData.verdict_text;
    const summary = parsedResultDatar