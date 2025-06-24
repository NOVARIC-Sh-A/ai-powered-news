
import { BreakingNewsItemData } from '../types';

// Helper to create static mock date strings
const createStaticMockDateString = (year: number, monthIndex: number, day: number): string => {
  const date = new Date(year, monthIndex, day);
  const dayOfMonth = date.getDate();
  const monthNames = ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"];
  const monthName = monthNames[date.getMonth()];
  return `${dayOfMonth} ${monthName}, ${date.getFullYear()}`;
};

// Helper to format an actual Date object to the Albanian string format
const formatActualDateToAlbanian = (date: Date): string => {
  const day = date.getDate();
  const monthNames = ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"];
  const monthName = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${monthName}, ${year}`;
};

// Create dynamic dates for "always recent" items
const actualToday = new Date();
const actualYesterday = new Date();
actualYesterday.setDate(actualToday.getDate() - 1);
const twoDaysAgo = new Date();
twoDaysAgo.setDate(actualToday.getDate() - 2);


// Static dates for older news (for testing filtering)
// Assuming "today" for static mock data generation was around June 16, 2024
const threeDaysBeforeMockBase = new Date(2024, 5, 13); // June 13, 2024
const fiveDaysBeforeMockBase = new Date(2024, 5, 11); // June 11, 2024
const olderDate1 = new Date(2024, 5, 9); // June 9, 2024
const olderDate2 = new Date(2024, 5, 8); // June 8, 2024
const olderDate3 = new Date(2024, 5, 7); // June 7, 2024
const olderDate4 = new Date(2024, 5, 6); // June 6, 2024


export const mockBreakingNews: BreakingNewsItemData[] = [
  {
    id: 1,
    title: "Samiti Global: Diskutime mbi Paqen dhe Sigurinë (GJITHMONË I RI)",
    sourceName: "Associated Press",
    sourceType: "international",
    publishedDate: formatActualDateToAlbanian(actualToday), // Dynamically today
    imageUrl: "https://images.unsplash.com/photo-1549925244-6e6a12f91a92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    content: "Liderë botërorë u mblodhën për të diskutuar hapat drejt një zgjidhjeje paqësore të konflikteve aktuale dhe për të planifikuar përpjekjet për rindërtim. [[Pjesëmarrësit theksuan rëndësinë e dialogut|Deklaratë e përgjithshme, rezultatet konkrete mbeten për t'u parë.|info]] dhe nevojën për mbështetje ndërkombëtare.",
    newsAuthenticity: "MOSTLY_ACCURATE",
    sourceReliability: "VERY_HIGH_REPUTATION"
  },
  {
    id: 2,
    title: "Paketa e Re Fiskale: Miratohet në Kuvend (GJITHMONË I RI & RELEVANT)",
    sourceName: "Top Channel",
    sourceType: "albanian",
    publishedDate: formatActualDateToAlbanian(actualYesterday), // Dynamically yesterday
    imageUrl: "https://images.unsplash.com/photo-1523961131990-5EA7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60", // Added image
    content: "Kuvendi i Shqipërisë i ka dhënë miratimin paketës së re fiskale. Kjo paketë përfshin ndryshime në disa taksa. [[Opozita ka shprehur kritika|Kritikat e opozitës janë standarde.|info]]. Debatet pritet të vazhdojnë.",
    newsAuthenticity: "VERIFIED_ACCURATE",
    sourceReliability: "HIGH_REPUTATION",
    isHighlyRelevantCurrentDevelopment: true,
  },
  {
    id: 3,
    title: "BQE mban normat e interesit të pandryshuara, monitoron inflacionin (I VJETËR)",
    sourceName: "Reuters",
    sourceType: "international",
    publishedDate: createStaticMockDateString(threeDaysBeforeMockBase.getFullYear(), threeDaysBeforeMockBase.getMonth(), threeDaysBeforeMockBase.getDate()),
    imageUrl: "https://images.unsplash.com/photo-1600985395465-9477e19b8f1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    content: "Banka Qendrore Evropiane (BQE) ka vendosur të mbajë normat e interesit të pandryshuara. [[Analistët presin që BQE të fillojë uljen e normave më vonë gjatë vitit|Ky është një parashikim, jo një fakt i konfirmuar nga BQE.|warning]].",
    newsAuthenticity: "VERIFIED_ACCURATE",
    sourceReliability: "VERY_HIGH_REPUTATION"
  },
  {
    id: 4,
    title: "Rriten investimet në energjinë e rinovueshme në Ballkan (GJITHMONË I RI)",
    sourceName: "TV Klan",
    sourceType: "albanian",
    publishedDate: formatActualDateToAlbanian(actualToday), 
    content: "Vendet e Ballkanit Perëndimor po shohin një rritje të ndjeshme të investimeve në sektorin e energjisë së rinovueshme. Projekte të shumta për parqe diellore dhe turbina ere janë në zhvillim.",
    newsAuthenticity: "MOSTLY_ACCURATE",
    sourceReliability: "HIGH_REPUTATION",
  },
  {
    id: 5,
    title: "Tensionet tregtare globale ndikojnë çmimet (I VJETËR)",
    sourceName: "CNN", // Placeholder as original request didn't list it, but it was in previous data
    sourceType: "international",
    publishedDate: createStaticMockDateString(fiveDaysBeforeMockBase.getFullYear(), fiveDaysBeforeMockBase.getMonth(), fiveDaysBeforeMockBase.getDate()),
    content: "Tensionet e vazhdueshme tregtare po ushtrojnë presion mbi çmimet e lëndëve të para. [[Ekspertët parashikojnë se kjo situatë mund të vazhdojë|Parashikimet e ekspertëve mund të variojnë.|warning]]",
    newsAuthenticity: "PARTIALLY_ACCURATE",
    sourceReliability: "HIGH_REPUTATION"
  },
  {
    id: 6,
    title: "Festivali Veror i Artit nis edicionin e ri në kryeqytet (GJITHMONË I RI)",
    sourceName: "RTSH", // Placeholder, original list was for News24 etc.
    sourceType: "albanian",
    publishedDate: formatActualDateToAlbanian(actualYesterday), 
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    content: "Kryeqyteti ka çelur siparin e edicionit të ri të Festivalit Veror të Artit. Artistë vendas dhe të huaj do të performojnë.",
    newsAuthenticity: "VERIFIED_ACCURATE",
    sourceReliability: "MEDIUM_REPUTATION"
  },
  {
    id: 7,
    title: "Inteligjenca Artificiale: Zhvillime dhe etika (I VJETËR)",
    sourceName: "BBC News",
    sourceType: "international",
    publishedDate: createStaticMockDateString(olderDate1.getFullYear(), olderDate1.getMonth(), olderDate1.getDate()),
    content: "Një forum ndërkombëtar diskutoi zhvillimet më të fundit në IA. [[Ndikimin e AI në tregun e punës që pretendohet se do jetë katastrofik|Ky është një pretendim ekstrem.|error]].",
    newsAuthenticity: "MOSTLY_ACCURATE",
    sourceReliability: "VERY_HIGH_REPUTATION"
  },
  {
    id: 8,
    title: "Moti i paqëndrueshëm prek prodhimin bujqësor vendor (UPDATED & RECENT)",
    sourceName: "News24",
    sourceType: "albanian",
    publishedDate: formatActualDateToAlbanian(actualToday), // Updated to today
    imageUrl: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    content: "Reshjet e dendura të shiut dhe breshëri i ditëve të fundit kanë shkaktuar dëme në disa kultura bujqësore. [[Fermerët kërkojnë mbështetje nga qeveria|Kërkesat janë paraqitur, por përgjigja ende pritet.|info]]. Ndikimi në çmimet e tregut pritet të analizohet.",
    newsAuthenticity: "MOSTLY_ACCURATE",
    sourceReliability: "MEDIUM_REPUTATION"
  },
   {
    id: 9,
    title: "Ndryshimet klimatike: Raport i ri paralajmëron (I VJETËR)",
    sourceName: "France24", // Changed from AFP to match list provided by user previously
    sourceType: "international",
    publishedDate: createStaticMockDateString(olderDate3.getFullYear(), olderDate3.getMonth(), olderDate3.getDate()),
    content: "Një raport i ri shkencor paralajmëron për vera gjithnjë e më të nxehta. [[Komunitetet bregdetare dhe bujqësia pritet të jenë ndër më të prekurat|Ky është një projeksion bazuar në modele klimatike.|info]]",
    newsAuthenticity: "ACCURACY_UNCLEAR",
    sourceReliability: "HIGH_REPUTATION"
  },
  {
    id: 10,
    title: "Diskutime për rritjen e pagës minimale në vend (UPDATED & RELEVANT)",
    sourceName: "ABC News Albania",
    sourceType: "albanian",
    publishedDate: formatActualDateToAlbanian(actualYesterday), // Updated to yesterday
    content: "Partnerët socialë janë angazhuar në diskutime për një rritje të mundshme të pagës minimale. [[Sindikatat kërkojnë një rritje prej 15%|Ky është propozimi fillestar i sindikatave, negociatat vazhdojnë.|warning]]. Qeveria pritet të japë qëndrimin e saj së shpejti.",
    newsAuthenticity: "PARTIALLY_ACCURATE",
    sourceReliability: "MEDIUM_REPUTATION",
    isHighlyRelevantCurrentDevelopment: true,
  },
  {
    id: 11,
    title: "Perspektivat Ekonomike Rajonale (GJITHMONË I RI)",
    sourceName: "Al Jazeera",
    sourceType: "international",
    publishedDate: formatActualDateToAlbanian(actualYesterday), // Dynamically yesterday
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    content: "Al Jazeera raporton mbi perspektivat ekonomike për rajonin e Lindjes së Mesme dhe Afrikës Veriore. [[Analistët tregohen të matur në parashikimet e tyre afatshkurtra|Opinion i bazuar në të dhëna aktuale, por subjekt ndryshimesh.|info]].",
    newsAuthenticity: "MOSTLY_ACCURATE",
    sourceReliability: "HIGH_REPUTATION"
  },
  {
    id: 12,
    title: "Debat mbi Reformën Zgjedhore (GJITHMONË I RI)",
    sourceName: "BalkanWeb", // Changed from Ora News to match list
    sourceType: "albanian",
    publishedDate: formatActualDateToAlbanian(twoDaysAgo), // Dynamically two days ago
    content: "Partitë politike vazhdojnë diskutimet për reformën zgjedhore. [[Propozimet e fundit kanë hasur në kundërshtime|Negociatat janë në proces e sipër.|warning]]. Shoqëria civile kërkon më shumë transparencë.",
    newsAuthenticity: "PARTIALLY_ACCURATE",
    sourceReliability: "MEDIUM_REPUTATION",
    isHighlyRelevantCurrentDevelopment: true,
  },
  {
    id: 13,
    title: "Zgjedhjet Evropiane: Analizë e Rezultateve (GJITHMONË I RI)",
    sourceName: "Euronews",
    sourceType: "international",
    publishedDate: formatActualDateToAlbanian(actualToday),
    imageUrl: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    content: "Euronews ofron një analizë të thelluar të rezultateve të zgjedhjeve të fundit evropiane dhe ndikimin e tyre në politikat e BE-së. [[Formimi i koalicioneve të reja është në fokus|Procesi politik është kompleks dhe në zhvillim.|info]].",
    newsAuthenticity: "MOSTLY_ACCURATE",
    sourceReliability: "HIGH_REPUTATION"
  },
  {
    id: 14,
    title: "Legjislacioni i Ri Digjital i BE-së Hyn në Fuqi (GJITHMONË I RI)",
    sourceName: "EUobserver",
    sourceType: "international",
    publishedDate: formatActualDateToAlbanian(actualYesterday),
    content: "EUobserver raporton mbi hyrjen në fuqi të legjislacionit të ri digjital të Bashkimit Evropian, duke përfshirë Aktin e Shërbimeve Dixhitale. [[Kompanitë teknologjike përballen me rregulla më të rrepta|Detajet e zbatimit do të jenë kyçe.|warning]].",
    newsAuthenticity: "VERIFIED_ACCURATE",
    sourceReliability: "HIGH_REPUTATION"
  },
  {
    id: 15,
    title: "Politika e Jashtme Gjermane: Sfida dhe Mundësi (GJITHMONË I RI)",
    sourceName: "Deutsche Welle",
    sourceType: "international",
    publishedDate: formatActualDateToAlbanian(actualToday),
    imageUrl: "https://images.unsplash.com/photo-1512428553556-5135a585f58c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    content: "Deutsche Welle analizon sfidat aktuale dhe mundësitë për politikën e jashtme gjermane në kontekstin evropian dhe global. [[Qëndrimet ndaj konflikteve ndërkombëtare janë pjesë e diskutimit|Opinionet dhe strategjitë mund të evoluojnë.|info]].",
    newsAuthenticity: "MOSTLY_ACCURATE",
    sourceReliability: "VERY_HIGH_REPUTATION"
  },
  {
    id: 16,
    title: "Ekonomia Italiane: Raporti i Fundit (GJITHMONË I RI)",
    sourceName: "ANSA",
    sourceType: "international",
    publishedDate: formatActualDateToAlbanian(actualYesterday),
    content: "Agjencia italiane e lajmeve ANSA publikon raportin më të fundit mbi gjendjen e ekonomisë italiane, duke përfshirë të dhëna mbi inflacionin dhe punësimin. [[Parashikimet për rritje janë modeste|Situata ekonomike globale ndikon.|warning]].",
    newsAuthenticity: "VERIFIED_ACCURATE",
    sourceReliability: "HIGH_REPUTATION"
  },
  {
    id: 17,
    title: "Masat e reja për sigurinë rrugore prezantohen nga policia (NEW & RECENT)",
    sourceName: "Top Channel",
    sourceType: "albanian",
    publishedDate: formatActualDateToAlbanian(actualToday),
    imageUrl: "https://images.unsplash.com/photo-1570121404100-348111a8b38a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    content: "Policia e Shtetit ka prezantuar një paketë të re masash për rritjen e sigurisë rrugore gjatë sezonit veror. [[Fushata ndërgjegjësuese do të intensifikohen|Efektiviteti i fushatave varet nga zbatimi dhe ndërgjegjësimi qytetar.|info]]. Do të ketë kontrolle të shtuara për shpejtësinë dhe alkoolin.",
    newsAuthenticity: "VERIFIED_ACCURATE",
    sourceReliability: "HIGH_REPUTATION",
    isHighlyRelevantCurrentDevelopment: true,
  }
];
