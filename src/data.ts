import { Module, Testimonial, DigitalIdea, Category, PromptItem, CoverStyle, FAQItem } from './types';

// Sostituisci questo link con il tuo checkout di Hotmart reale una volta pronto!
export const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/V106020422J?off=8pt9x3ew&checkoutMode=10";

export const modulesData: Module[] = [
  {
    id: 1,
    title: "La Mentalità Giusta per Iniziare",
    subtitle: "Riprogramma la tua mente e sblocca il tuo potenziale creativo",
    page: 5,
    description: "Supera i blocchi mentali e la sindrome dell'impostore per iniziare con fiducia anche senza alcuna competenza grafica.",
    highlights: [
      "Come iniziare a costo zero e senza competenze di programmazione o grafica",
      "La verita sul fattore 'Troppa concorrenza' e come trovare il tuo posizionamento",
      "L'Esercizio Pratico 'Il tuo Perché' per trovare la motivazione finanziaria concreta"
    ]
  },
  {
    id: 2,
    title: "Cos'è un Prodotto Digitale",
    subtitle: "La via piu veloce verso la liberta finanziaria scalabile",
    page: 10,
    description: "Cos'è un info-prodotto, perché è incredibilmente scalabile e come venderlo all'infinito senza costi fisici o di spedizione.",
    highlights: [
      "Analisi dettagliata delle 7 tipologie ideali per i principianti (Ebook, Planner, Template Canva, Journal, Checklist...)",
      "Perche iniziare con un file PDF o un planner e la scelta strategica migliore in assoluto",
      "Comprensione del pricing ottimale (generalmente compreso tra 3€ e 29€)"
    ]
  },
  {
    id: 3,
    title: "Come Trovare la Tua Nicchia",
    subtitle: "Non parlare a tutti: impara a farti cercare da chi ha bisogno di te",
    page: 16,
    description: "Trova il tuo pubblico ideale e scopri come posizionarti in nicchie redditizie ed emotive per farti cercare dai clienti.",
    highlights: [
      "Le 3 macro-categorie che convertono sempre: Nicchie Evergreen, Nicchie Emotive e Nicchie di Passione",
      "Il metodo guidato in 3 passi per capire cosa sai fare, cosa vorresti imparare e dove c'e mercato",
      "Esempi di accoppiamento micidiale Nicchia-Prodotto Ideale e scelta della piattaforma giusta"
    ]
  },
  {
    id: 4,
    title: "ChatGPT: il Tuo Assistente Creativo",
    subtitle: "Usa l'intelligenza artificiale per scrivere l'80% del tuo prodotto",
    page: 22,
    description: "Impara a formulare prompt precisi per scrivere testi, raccogliere idee e strutturare il tuo prodotto in pochi minuti.",
    highlights: [
      "La formula segreta per scrivere prompt perfetti che distruggono il blocco dello scrittore",
      "Accesso a 25 Prompt Pronti all'uso per generare idee, titoli, indici, capitoli interi e introduzioni",
      "Prompt pronti per il marketing: descrizioni Etsy ad alta conversione, tag SEO e ganci social"
    ]
  },
  {
    id: 5,
    title: "Canva per Principianti",
    subtitle: "Crea design professionali e mockup magnetici senza saper disegnare",
    page: 32,
    description: "Usa Canva Gratis per creare design eleganti, impaginare ebook e realizzare mockup 3D raddoppiando il valore dei prodotti.",
    highlights: [
      "I 5 passi per avviare il tuo primo progetto, scegliere il formato ideale e personalizzare",
      "Le 3 regole auree del design che vende: abbinamenti di font, palette colori e gestione degli spazi",
      "Come creare mockup 3D professionali e fotorealistici (iPad, iPhone, taccuino) per raddoppiare il valore percepito"
    ]
  },
  {
    id: 6,
    title: "Crea il Tuo Primo Prodotto",
    subtitle: "Il tuo planner mensile pronto da essere venduto in un solo weekend",
    page: 40,
    description: "Tutorial pratico passo-passo per creare, esportare e preparare un planner pronto alla vendita in meno di un weekend.",
    highlights: [
      "Fase 1 e 2: Definizione del cliente ideale e generazione totale del contenuto pianificato tramite ChatGPT",
      "Fase 3: Design completo su Canva partendo da un template minimalist e customizzando il tutto in 1 ora",
      "Fase 4: Esportazione in PDF ad altissima qualita per la stampa, salvataggio file in ZIP e preparazione immagini"
    ]
  },
  {
    id: 7,
    title: "Dove Vendere i Tuoi Prodotti",
    subtitle: "Analisi delle migliori piattaforme per lanciare la tua attivita",
    page: 48,
    description: "Confronto e scelta delle migliori piattaforme (Etsy, Gumroad, Hotmart) per lanciare il tuo store digitale senza abbonamenti.",
    highlights: [
      "Etsy: la scelta n.1 per principianti per via del traffico organico gratuito gia pronto ed enorme",
      "Gumroad: la piu immediata, setup in 5 minuti con commissione flat del 10% sulle vendite reali",
      "Hotmart e Payhip: ideali per info-prodotti strutturati, bundle e ottimizzazione IVA europea automatica"
    ]
  },
  {
    id: 8,
    title: "Le Prime Vendite: Come Promuoverti",
    subtitle: "Attira clienti qualificati a costo zero, anche se parti da 0 follower",
    page: 54,
    description: "Promuovi il tuo prodotto a costo zero usando Pinterest, TikTok e Instagram Reels, senza bisogno di avere gia dei follower.",
    highlights: [
      "Pinterest: il motore di ricerca visivo sottovalutato che porta traffico passivo e vendite automatiche per mesi",
      "TikTok: la piattaforma che spinge i nuovi creator con un boost organico pazzesco senza bisogno di follower",
      "Instagram Reels: la guida pratica per mostrare il tuo flusso di lavoro e creare una community fedele"
    ]
  },
  {
    id: 9,
    title: "Il Piano Operativo di 30 Giorni",
    subtitle: "La tua tabella di marcia quotidiana per pubblicare ed incassare",
    page: 60,
    description: "La tua tabella di marcia giornaliera per i primi 30 giorni: ricerca, lancio dello store, promozione ed ottimizzazione.",
    highlights: [
      "Settimana 1 e 2: Ricerca nicchia, setup ChatGPT e design completo della copertina e delle pagine interne",
      "Settimana 3: Apertura store, caricamento del primo listing ottimizzato ed avvio dei primi 5 Pin di Pinterest",
      "Settimana 4: Riproduzione di contenuti video brevi quotidiani, analisi dei dati, ottimizzazione e celebrazione dei progressi"
    ]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    sender: "Laura",
    avatar: "L",
    message: "Ciao Ali tutto bene ?\nVolevo solo avvisarti che a meno di un mese dal lancio dello store ho fatto la mia prima vendita 🎉🎉 + di 500€ guadagnati in un giorno mi sembra surreale !\n\nGrazie per avermi sempre consigliato e supportato\n\nDomani ti mando le statistiche delle analitiche che mi avevi chiesto 😊",
    revenue: "€500.00+",
    source: "Primi 30 giorni"
  },
  {
    id: 2,
    sender: "Andrea",
    avatar: "A",
    message: "Ciao Aliceee! Ti scrivo perché sono rimasto senza parole... Ho aperto lo store su Etsy venerdì e stasera ho ricevuto la notifica della mia seconda vendita automatica! Totale €120 guadagnati in soli 3 giorni senza sborsare un centesimo in annunci, usando solo il metodo Pinterest organico che spieghi nel corso 🤯 All'inizio ero spaventato dal non avere follower ma mi devo ricredere alla grande. Grazie infinite!",
    revenue: "€120.00",
    source: "Pochi giorni"
  },
  {
    id: 3,
    sender: "Chiara (Studentessa)",
    avatar: "C",
    message: "Aliii non ci credo!! Ho appena ricevuto la notifica di Hotmart mentre stavo facendo colazione 😍 Un altro PDF venduto, siamo già a 7 vendite questa settimana!\n\nPraticamente ho recuperato il costo del bundle ben 6 volte in soli quattro giorni. Il modulo su Canva è così chiaro e immediato che sono riuscita a creare tutto il planner in un pomeriggio selvaggio!",
    revenue: "7 vendite in 1 settimana",
    source: "Canva + ChatGPT"
  },
  {
    id: 4,
    sender: "Federica",
    avatar: "F",
    message: "Buongiorno Alice! Ti mando questo messaggio velocissimo solo per ringraziarti con tutto il cuore ❤️ Ieri ho superato ufficialmente la soglia di €1.000,00 netti totali di guadagno grazie al tuo percorso! E considera che sono partita con soli 150 followers sul mio profilo, è una gioia incredibile!",
    revenue: "€1,000.00+",
    source: "Attività Organica"
  },
  {
    id: 5,
    sender: "Marco",
    avatar: "M",
    message: "Ciao Alice, ci tenevo a scriverti qui per farti i complimenti. Il capitolo sul piano d'azione di 30 giorni è pazzesco, ti guida letteralmente passo passo senza farti perdere tempo.\n\nOggi pomeriggio ho pubblicato il mio primo ebook e ho registrato la mia prima vendita dopo sole due ore dalla pubblicazione! Ti aggiorno presto sicuramente 💪",
    revenue: "Prima vendita in 2 ore",
    source: "E-book Digitale"
  }
];

export const bonus1Categories: Category[] = [
  {
    id: "prod",
    name: "Organizzazione & Produttività",
    ideas: [
      { id: 1, name: "Planner Mensile per Mamme con Bimbi 0-6 Anni", target: "Mamme impegnate", difficulty: "Facile", platform: "Etsy", reason: "Le mamme cercano costantemente organizzazione visiva per gestire le giornate e i pasti. Altamente virale." },
      { id: 2, name: "Planner Settimanale Minimalista", target: "Studenti e professionisti", difficulty: "Facile", platform: "Etsy", reason: "L'estetica minimalista e neutra e un trend evergreen sempre in cima alle ricerche globali." },
      { id: 3, name: "Budget Tracker Mensile", target: "Chi vuole pianificare e risparmiare", difficulty: "Facile", platform: "Etsy", reason: "Argomento salvadanaio molto cercato, in particolare nei periodi di rincari economici." },
      { id: 4, name: "Agenda Scolastica per Studenti Universitari", target: "Studenti", difficulty: "Facile", platform: "Etsy", reason: "Fortissimi picchi di vendita stagionale nei mesi di Gennaio, Agosto e Settembre." },
      { id: 5, name: "Routine Tracker Abitudini e Sogni", target: "Chi desidera un cambio di vita", difficulty: "Facile", platform: "Etsy", reason: "Gamifica il miglioramento personale. Ideale per la condivisione su TikTok e Pinterest." }
    ]
  },
  {
    id: "salute",
    name: "Salute & Benessere",
    ideas: [
      { id: 16, name: "Diario di Meditazione e Mindfulness 30 Giorni", target: "Principianti", difficulty: "Facile", platform: "Etsy", reason: "La ricerca di sollievo dallo stress ed equilibrio quotidiano e ai massimi storici." },
      { id: 17, name: "Food Journal & Calorie Tracker delle Ricette", target: "Chi vuole rimettersi in forma", difficulty: "Facile", platform: "Etsy", reason: "Combina l'esigenza di pianificare i pasti settimanali con un diario alimentare emotivo." },
      { id: 18, name: "Workout Planner Settimanale Palestra / Casa", target: "Appassionati fitness", difficulty: "Facile", platform: "Etsy", reason: "Ideale da vendere con foto estetiche di fitness o da promuovere tramite Instagram Reels." }
    ]
  },
  {
    id: "finanza",
    name: "Finanza Personale",
    ideas: [
      { id: 31, name: "Budget Mensile Familiare Excel / Google Sheets", target: "Famiglie monoreddito o bi-reddito", difficulty: "Facile", platform: "Etsy / Payhip", reason: "Fornisce una soluzione immediata e matematica a un problema estremamente concreto." },
      { id: 32, name: "Sinking Funds Tracker (Fondi di Risparmio)", target: "Seguaci del risparmio strutturato", difficulty: "Facile", platform: "Etsy", reason: "Basato sul famosissimo metodo Dave Ramsey, attrae una nicchia fedele online." },
      { id: 37, name: "Guida d'Investimento Completa per Principianti", target: "Chi approccia i mercati per la prima volta", difficulty: "Media", platform: "Hotmart", reason: "Altissimo valore percepito. Ti consente di posizionarti come esperto vendendo a un prezzo premium." }
    ]
  },
  {
    id: "growth",
    name: "Crescita Personale",
    ideas: [
      { id: 46, name: "Gratitude Journal di 90 Giorni", target: "Chi vuole focalizzarsi sul positivo", difficulty: "Facile", platform: "Etsy", reason: "Un classico intramontabile che registra vendite costanti nel tempo ed e perfetto per i pacchetti regalo." },
      { id: 48, name: "Shadow Work Journal (Lavoro sulle Ombre)", target: "Chi fa percorsi di auto-terapia", difficulty: "Media", platform: "Etsy", reason: "Trend in crescita esponenziale globale su TikTok. Pochi competitor strutturati in Italia." },
      { id: 50, name: "Confidence Building Workbook per Donne", target: "Donne in cerca di autostima", difficulty: "Media", platform: "Hotmart", reason: "Un cammino trasformativo profondo che risolve un forte blocco emotivo. Prezzo di vendita piu alto." }
    ]
  },
  {
    id: "creator",
    name: "Business & Creator Economy",
    ideas: [
      { id: 76, name: "Instagram Content Planner con 30 Idee Post", target: "Creator e piccoli brand italiani", difficulty: "Facile", platform: "Etsy", reason: "Tutte le piccole aziende e i liberi professionisti hanno un disperato bisogno di idee per i social." },
      { id: 77, name: "Social Media Calendar e Strategia 90 Giorni", target: "Social Media Manager", difficulty: "Media", platform: "Gumroad", reason: "Strumento di stampo professionale vendibile a un prezzo decisamente piu elevato (anche 49€ o piu)." },
      { id: 83, name: "Brand Identity Workbook per Startups", target: "Imprenditori in apertura", difficulty: "Media", platform: "Gumroad", reason: "Kit completo che accompagna l'imprenditore a definire vision, logo, mission e colori." }
    ]
  }
];

export const bonus2Prompts: PromptItem[] = [
  {
    id: 1,
    title: "Genera idee per il tuo primo prodotto digitale",
    prompt: "Sono una creator digitale principiante. La mia nicchia è [argomento]. Suggeriscimi 10 idee di prodotti digitali facili da creare con Canva, adatti a un pubblico di [target]. Per ogni idea indica: nome prodotto, formato consigliato e perché potrebbe vendere bene.",
    category: "IDEAZIONE"
  },
  {
    id: 2,
    title: "Crea titoli accattivanti per Ebook",
    prompt: "Scrivi 15 titoli per un ebook su [argomento] rivolto a [target]. I titoli devono essere chiari, motivazionali e far capire subito il beneficio. Includi sia titoli pratici ('Come fare X') sia emotivi ('Da X a Y').",
    category: "COPYWRITING"
  },
  {
    id: 3,
    title: "Costruisci l'indice completo del tuo Ebook",
    prompt: "Crea la struttura completa di un ebook intitolato '[titolo]' rivolto a [target]. Organizza il contenuto in 7-9 capitoli. Per ogni capitolo scrivi: titolo, 3-5 punti principali trattati, e un esercizio pratico per il lettore.",
    category: "CREAZIONE"
  },
  {
    id: 4,
    title: "Scrivi un capitolo completo in tono amichevole",
    prompt: "Scrivi il contenuto completo del capitolo '[nome capitolo]' per un ebook su [argomento]. Il tono deve essere amichevole, pratico e incoraggiante. Includi: introduzione, 3-4 sezioni con titolo, esempi concreti e un riepilogo operativo.",
    category: "CREAZIONE"
  },
  {
    id: 8,
    title: "Ottimizza la tua descrizione per lo store Etsy",
    prompt: "Scrivi una descrizione per Etsy di un prodotto digitale chiamato '[nome]'. Il prodotto è [descrizione breve] rivolto a [target]. La descrizione deve: iniziare con il beneficio principale, elencare cosa è incluso nell'acquisto, rispondere alle obiezioni comuni e finire con una chiara chiamata all'azione (CTA).",
    category: "MARKETING"
  },
  {
    id: 11,
    title: "Trova e analizza le parole chiave (Tag Etsy SEO)",
    prompt: "Suggeriscimi 13 tag ottimizzati per Etsy per un prodotto digitale chiamato '[nome]' nella categoria [categoria]. Considera sia tag inglesi che italiani se il pubblico è italiano. Indica la difficoltà di ranking per ognuno.",
    category: "MARKETING"
  },
  {
    id: 14,
    title: "Scrivi lo script per un fantastico Reel di 30 secondi",
    prompt: "Scrivi uno script TikTok/Reel di 30-45 sec per promuovere il mio [prodotto] su [argomento]. Struttura: gancio (hook) magnetico iniziale (5 sec) + problema comune (10 sec) + soluzione/presentazione del mio file (15 sec) + CTA finale (5-10 sec). Tono super naturale.",
    category: "SOCIAL"
  }
];

export const coverStylesData: CoverStyle[] = [
  {
    id: "01",
    name: "Minimal Bianco e Oro",
    palette: ["#FFFFFF", "#D4A853", "#1A1A1A"],
    description: "Sfondo bianco ottico, titolo elegante in font serif dorato con una sottile linea decorativa geometrica.",
    idealFor: "Ebook premium e workbook per il settore business e coaching."
  },
  {
    id: "02",
    name: "Rose Dusty Femminile",
    palette: ["#E8B4A4", "#FFFFFF", "#8B4A4A"],
    description: "Sfondo rosa antico polveroso, testi bianchi puliti ed elementi floreali geometrici ultra moderni.",
    idealFor: "Planner per mamme, diari di gravidanza, yoga journals e benessere."
  },
  {
    id: "03",
    name: "Dark Moody Creator",
    palette: ["#1A1A2E", "#FFFFFF", "#E94560"],
    description: "Sfondo blu notte profondo, quasi nero, testi ultra leggibili bianchi e un colore accento neon vibrante.",
    idealFor: "Prodotti digitali rivolti a creator, programmatori e nicchie tech."
  },
  {
    id: "04",
    name: "Verde Sage Naturale",
    palette: ["#F5F0E8", "#7B9E87", "#4A6741"],
    description: "Sfondo color crema naturale, titoli floreali in verde salvia, con motivi botanici ornamentali leggeri.",
    idealFor: "Ebook sul giardinaggio, sulla salute interna, erboristeria o mindfulness."
  },
  {
    id: "05",
    name: "Lavanda Spirituale",
    palette: ["#E8E4F0", "#6B5B95", "#2D2547"],
    description: "Sfondo color lavanda etereo, font calligrafico romantico accompagnato da elementi stellari e fasi lunari.",
    idealFor: "Journal spirituali, pianificazione dei tarocchi e diario dell'astrologia."
  }
];

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Quanto tempo serve dedicare al giorno per vedere i primi risultati?",
    answer: "Meno di un'ora al giorno è più che sufficiente! Il percorso è strutturato per essere completato un passo alla volta nel tuo tempo libero. Puoi dedicare il sabato a pianificare i contenuti con ChatGPT e la domenica mattina a disegnarli su Canva. Molti studenti con impegni familiari o lavorativi a tempo pieno lanciano il primo prodotto nel giro di due weekend!"
  },
  {
    id: 2,
    question: "Posso davvero vendere i miei prodotti anche se non so usare Canva o ChatGPT?",
    answer: "Assolutamente sì! Questo bundle è pensato appositamente per chi parte da zero. La guida ti spiega esattamente come creare un account gratuito, come copiare e incollare i prompt del 'Kit Canva' pronti all'uso e come scegliere i fantastici template predefiniti gratuiti su Canva. Non serve essere programmatori né designer professionisti."
  },
  {
    id: 3,
    question: "È obbligatorio aprire una partita IVA fin dal primo giorno per vendere online?",
    answer: "No! All'inizio per testare le tue idee e fare le tue prime vendite occasionali non è necessario aprire una partita IVA (entro le soglie previste dalla legge italiana di lavoro autonomo occasionale). Le piattaforme consigliate come Etsy o Hotmart trattengono l'IVA sugli acquisti dei clienti europei e gestiscono gran parte della fatturazione, permettendoti di focalizzarti solo sulla creazione e promozione del prodotto."
  },
  {
    id: 4,
    question: "Quali sono i reali costi iniziali per lanciare il primo prodotto digitale?",
    answer: "Il budget iniziale richiesto è letteralmente 0€! Canva ha un piano gratuito completissimo, ChatGPT si usa gratuitamente e l'apertura di store su Gumroad, Hotmart o Payhip non richiede alcun abbonamento mensile. Etsy ti chiede solo 0,20€ per pubblicare un annuncio, facendoti avviare una vera attività online indipendente con una spesa irrisoria."
  },
  {
    id: 5,
    question: "Come posso ricevere i guadagni derivanti dalle vendite del mio bundle?",
    answer: "Le piattaforme utilizzate rilasciano i pagamenti direttamente sul tuo account bancario italiano o tramite PayPal. Durante il setup della tua dashboard di Hotmart o Etsy, ti basterà collegare il tuo IBAN personale in totale sicurezza per ricevere bonifici automatici ogni volta che un cliente scarica un tuo file digitale."
  }
];
