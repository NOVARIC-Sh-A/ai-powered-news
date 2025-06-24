
import React from 'react';

interface NewsValuesPolicyProps {
  onBackToMain: () => void;
}

export const NewsValuesPolicy: React.FC<NewsValuesPolicyProps> = ({ onBackToMain }) => {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-lg shadow-xl text-slate-700 dark:text-slate-200">
        <h1 className="text-3xl font-bold mb-4 text-center text-primary-700 dark:text-primary-500">DEKLARATA E NOVARIC® MEDIA HOUSE PËR VLERAT DHE PARIMET E LAJMEVE</h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 text-center mb-1">E vlefshme nga: 01/06/2025</p>
        <p className="text-sm text-slate-600 dark:text-slate-400 text-center mb-6">Përditësuar më: 08/06/2025</p>

        <section className="mb-6">
          <p className="mb-4">NOVARIC® Media House sjell lajme dhe informacion për audiencën shqiptare dhe më gjerë, duke përdorur një qasje inovative hibride. Ekipi ynë, i përbërë nga profesionistë me mbi 10 vjet përvojë në gazetari, mbështetet nga mjeti ynë i avancuar, AI Verifikues Faktesh (AI News Fact Checker). Së bashku, ne bëjmë përpjekje të mëdha për të siguruar që lajmet të raportohen shpejt, saktë dhe sinqerisht, në një mënyrë të ekuilibruar dhe të paanshme, duke iu përgjigjur nevojave specifike për informacion cilësor në Shqipëri. Përpjekjet tona janë shpërblyer me besim: Një numër në rritje i qytetarëve shqiptarë dhe institucioneve i referohen NOVARIC® për informacion të verifikuar dhe analiza të thelluara.</p>
          <p className="mb-4">Në shekullin e 21-të, ky lajm transmetohet në më shumë mënyra se kurrë më parë – online dhe celular, në shtyp dhe në transmetim, me fjalë, video, fotografi, interaktive, grafika, të dhëna dhe audio. Pavarësisht platformës, ne këmbëngulim në standardet më të larta të integritetit dhe sjelljes etike, veçanërisht të rëndësishme në mjedisin mediatik dinamik të Shqipërisë. Kjo arrihet përmes një procesi hibrid ku AI Verifikuesi ynë i Fakteve mbështet gazetarët tanë me përvojë në mbledhjen, analizimin dhe shpërndarjen e lajmeve.</p>
          <p className="mb-4">Ne neverisim pasaktësitë, pakujdesinë, anshmërinë ose shtrembërimet, duke kontribuar kështu në një diskurs publik më të shëndetshëm në Shqipëri. Mjeti ynë AI Verifikues Faktesh ndihmon në identifikimin e hershëm të thashethemeve ose informacionit potencialisht të rremë, i cili më pas verifikohet me rigorozitet nga ekipi ynë profesional me mbi 10 vjet përvojë. Ne nuk do të fusim me dije thashetheme ose informacion të rremë në materialin e destinuar për publikim ose transmetim; as nuk do të shtrembërojmë përmbajtjen vizuale pa transparencë të plotë dhe justifikim. Citatet duhet të jenë të sakta dhe precise; AI ndihmon në kontrollin e tyre, por verifikimi final bëhet nga gazetarët tanë. Ne ruajmë distancën e duhur profesionale nga ata që mbulojmë, qofshin këta figura politike, zyrtarë publikë apo aktorë të tjerë në skenën shqiptare.</p>
          <p className="mb-4">Ne gjithmonë përpiqemi të identifikojmë të gjitha burimet e informacionit tonë. Mjeti ynë AI Verifikues Faktesh mund të ndihmojë në gjetjen e burimeve të shumta dhe korroborimin e informacionit, por vlerësimi përfundimtar i besueshmërisë së tyre dhe vendimi për përdorim mbetet te gazetarët tanë me përvojë. Ne i mbrojmë burimet me anonimitet vetëm kur ata këmbëngulin për këtë për një arsye të vlefshme, kur ofrojnë informacion jetik – jo opinion ose spekulim; kur nuk ka mënyrë tjetër për të marrë atë informacion; dhe kur ekipi ynë profesional është i sigurt se burimi është i besueshëm dhe në një pozitë për të ditur, veçanërisht kur raportojmë mbi çështje sensitive në kontekstin shqiptar, ku transparenca mund të vërë në rrezik burimet. Ne nuk plagjiarisim, dhe ne respektojmë të drejtën e autorit, duke u përmbajtur ligjeve shqiptare dhe ndërkombëtare dhe duke përdorur mjetet tona për të ndihmuar në këtë proces.</p>
        </section>

        <section className="mb-6">
          <p className="mb-4">Ne shmangim sjelljet ose aktivitetet që krijojnë një konflikt interesi që komprometon aftësinë tonë për të raportuar lajmet në mënyrë të drejtë dhe të saktë, pa ndikimin e ndonjë personi apo veprimi, duke adresuar sfidat specifike të ndikimeve të jashtme në median shqiptare. Ky parim udhëheq si stafin tonë ashtu edhe mënyrën se si konfigurojmë dhe përdorim mjetet tona AI.</p>
          <p className="mb-4">Ne identifikojmë qartë reklamat në platformat tona, dhe i mbajmë aktivitetet tregtare të NOVARIC® të ndara nga redaksia jonë dhe proceset e verifikimit të fakteve, duke siguruar që linjat editoriale të mos ndikohen nga interesat tregtare, një praktikë kjo thelbësore për besueshmërinë në tregun mediatik shqiptar.</p>
          <p className="mb-4">Ne nuk keqidentifikohemi ose keqparaqitemi për të marrë një histori. Kur kërkojmë një intervistë, ne identifikohemi si gazetarë të NOVARIC®. Ne balancojmë rëndësinë e lajmit të një historie me respektin për privatësinë dhe interesat e sigurisë kur ndjekim imazhe, një proces ky që mbikëqyret nga profesionistë me përvojë.</p>
          <p className="mb-4">Ne nuk paguajmë lajmbërësit për intervista, për të marrë fotografitë e tyre ose për t'i filmuar apo regjistruar ata. Ne nuk ofrojmë lista të plota të pyetjeve paraprakisht ose nuk lejojmë subjektet e intervistës të miratojnë tekstin ose imazhet tona përpara publikimit.</p>
          <p className="mb-4">Ne duhet të jemi të drejtë. Sa herë që portretizojmë dikë në një dritë negative, duhet të bëjmë një përpjekje të vërtetë për të marrë një përgjigje nga ai person apo institucion, veçanërisht kur bëhet fjalë për figura publike apo zyrtarë në Shqipëri, duke respektuar parimin e 'audiatur et altera pars'. Kjo është një detyrë thelbësore për ne.</p> {/* Added "ne." to the end of the sentence */}
        </section>
        
        <div className="mt-8 text-center">
          <button
            onClick={onBackToMain}
            className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-md shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            aria-label="Kthehu te faqja kryesore"
          >
            Kthehu te Faqja Kryesore
          </button>
        </div>
      </div>
    </main>
  );
};
