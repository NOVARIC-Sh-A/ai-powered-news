
    import { FactCheckResult } from '../types';

    // The URL of your deployed proxy server.
    // For local development, this might be 'http://localhost:3001/api/fact-check'
    // For production, this will be the public URL of your deployed proxy server.
    const PROXY_SERVER_URL = process.env.REACT_APP_PROXY_URL || 'https://your-deployed-proxy-server.example.com/api/fact-check';
    // Example: If your proxy is on Google Cloud Run, it might be:
    // const PROXY_SERVER_URL = 'https://novaric-proxy-abcd123-uc.a.run.app/api/fact-check';


    export const factCheckNews = async (claim: string): Promise<FactCheckResult> => {
      try {
        const response = await fetch(PROXY_SERVER_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ claim }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({ message: response.statusText }));
          throw new Error(errorData.message || `Kërkesa te serveri dështoi me status: ${response.status}`);
        }

        const data: FactCheckResult = await response.json();
        return data;

      } catch (error) {
        console.error('Gabim gjatë thirrjes së proksi serverit:', error);
        if (error instanceof Error) {
          throw new Error(`Dështoi marrja e verifikimit të faktit nga serveri: ${error.message}`);
        }
        throw new Error('Ndodhi një gabim i panjohur gjatë komunikimit me serverin.');
      }
    };
    