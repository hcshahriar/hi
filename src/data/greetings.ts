export type Region = "Europe" | "Asia" | "Middle East" | "Africa" | "Oceania" | "Americas";
export type Formality = "casual" | "neutral" | "formal";

export interface Greeting {
  id: string;
  word: string;
  translit?: string;
  language: string;
  region: Region;
  formality: Formality;
  meaning: string;
  pronunciation: string;
  gesture: string;
  note: string;
  tts: string | null;
}

export const GREETINGS: Greeting[] = [
  {
    id: "hello",
    word: "Hello",
    language: "English",
    region: "Europe",
    formality: "neutral",
    meaning: "an attention-call, turned welcome",
    pronunciation: "huh-LOH",
    gesture: "a nod, a wave, or a firm handshake",
    note: "Edison championed “hello” for the telephone; Bell wanted “ahoy!” Edison won.",
    tts: "en-US",
  },
  {
    id: "hola",
    word: "Hola",
    language: "Spanish",
    region: "Europe",
    formality: "casual",
    meaning: "hey! — a call to stop and look",
    pronunciation: "OH-lah",
    gesture: "a wave among friends, a handshake in offices",
    note: "The h is silent. Across Latin America it softens into ¿qué tal? and ¿cómo estás?",
    tts: "es-ES",
  },
  {
    id: "bonjour",
    word: "Bonjour",
    language: "French",
    region: "Europe",
    formality: "formal",
    meaning: "good day",
    pronunciation: "bon-ZHOOR",
    gesture: "la bise — air kisses, count varies by town",
    note: "In France, entering a shop without saying bonjour is considered rude — it opens every exchange.",
    tts: "fr-FR",
  },
  {
    id: "ciao",
    word: "Ciao",
    language: "Italian",
    region: "Europe",
    formality: "casual",
    meaning: "“I am your slave” — Venetian s-ciavo",
    pronunciation: "CHOW",
    gesture: "a kiss on both cheeks, left first",
    note: "A greeting of servitude that became the most exported hello on Earth. It also means goodbye.",
    tts: "it-IT",
  },
  {
    id: "guten-tag",
    word: "Guten Tag",
    language: "German",
    region: "Europe",
    formality: "formal",
    meaning: "good day",
    pronunciation: "GOO-ten tahk",
    gesture: "one firm, brief handshake — eye contact required",
    note: "Before noon it is Guten Morgen; in Bavaria, Grüß Gott — “God greet you.”",
    tts: "de-DE",
  },
  {
    id: "ahoj",
    word: "Ahoj",
    language: "Czech",
    region: "Europe",
    formality: "casual",
    meaning: "borrowed from sailors' “ahoy!”",
    pronunciation: "AH-hoy",
    gesture: "a raised hand or a quick hug",
    note: "A nautical hail that rowed up the Vltava and stayed. Also works as goodbye.",
    tts: "cs-CZ",
  },
  {
    id: "czesc",
    word: "Cześć",
    language: "Polish",
    region: "Europe",
    formality: "casual",
    meaning: "honour, glory",
    pronunciation: "CHESHCH",
    gesture: "handshake with direct eye contact",
    note: "You greet a friend with the word for honour. The formal door is Dzień dobry — “good day.”",
    tts: "pl-PL",
  },
  {
    id: "geia-sou",
    word: "Γεια σου",
    translit: "Yia sou",
    language: "Greek",
    region: "Europe",
    formality: "casual",
    meaning: "health to you",
    pronunciation: "YAH-soo",
    gesture: "a warm double handshake, or a hug among friends",
    note: "Every hello in Greek is a small wish for your health. Formal version: Γεια σας.",
    tts: "el-GR",
  },
  {
    id: "privet",
    word: "Привет",
    translit: "Privet",
    language: "Russian",
    region: "Europe",
    formality: "casual",
    meaning: "a greeting, a sending-over",
    pronunciation: "pree-VYET",
    gesture: "a firm handshake — never across a threshold",
    note: "Shaking hands over a doorway is bad luck; step inside first.",
    tts: "ru-RU",
  },
  {
    id: "szia",
    word: "Szia",
    language: "Hungarian",
    region: "Europe",
    formality: "casual",
    meaning: "from Latin servus — “your servant”",
    pronunciation: "SEE-yah",
    gesture: "a nod or a quick embrace",
    note: "Hungary's hello is a Roman salutation that outlived the empire. Formal: Jó napot.",
    tts: "hu-HU",
  },
  {
    id: "hej",
    word: "Hej",
    language: "Swedish",
    region: "Europe",
    formality: "casual",
    meaning: "hey — short, warm, enough",
    pronunciation: "yeh",
    gesture: "a small nod; Swedes keep it low-key",
    note: "One syllable, no ceremony. Repeated — hej hej — it becomes a goodbye.",
    tts: "sv-SE",
  },
  {
    id: "merhaba",
    word: "Merhaba",
    language: "Turkish",
    region: "Middle East",
    formality: "neutral",
    meaning: "be at ease — from an Arabic root for “wide, roomy”",
    pronunciation: "mer-hah-BAH",
    gesture: "handshake, then the right hand to the heart",
    note: "You are offering the other person space. Among close friends, a double cheek kiss.",
    tts: "tr-TR",
  },
  {
    id: "marhaban",
    word: "مرحبا",
    translit: "Marḥaban",
    language: "Arabic",
    region: "Middle East",
    formality: "neutral",
    meaning: "welcome — you have found room",
    pronunciation: "MAR-ha-ban",
    gesture: "hand over heart; cheek kisses among close friends",
    note: "Ahlan wa sahlan — “you have found family and easy land” — is the fuller welcome.",
    tts: "ar-SA",
  },
  {
    id: "shalom",
    word: "שלום",
    translit: "Shalom",
    language: "Hebrew",
    region: "Middle East",
    formality: "neutral",
    meaning: "peace, wholeness, completeness",
    pronunciation: "shah-LOHM",
    gesture: "a handshake; close friends add an embrace",
    note: "Like aloha, it is hello, goodbye, and a state of the world all at once.",
    tts: "he-IL",
  },
  {
    id: "salam",
    word: "سلام",
    translit: "Salām",
    language: "Persian",
    region: "Middle East",
    formality: "neutral",
    meaning: "peace",
    pronunciation: "sah-LAHM",
    gesture: "hand over heart, slight inclination of the head",
    note: "Often followed by ta'arof — a graceful, elaborate dance of politeness that can last minutes.",
    tts: "fa-IR",
  },
  {
    id: "namaste",
    word: "नमस्ते",
    translit: "Namaste",
    language: "Hindi",
    region: "Asia",
    formality: "formal",
    meaning: "I bow to you",
    pronunciation: "nuh-mus-TAY",
    gesture: "palms joined at the chest, a slight bow — añjali mudrā",
    note: "No contact needed: the folded hands carry the respect across any distance.",
    tts: "hi-IN",
  },
  {
    id: "konnichiwa",
    word: "こんにちは",
    translit: "Konnichiwa",
    language: "Japanese",
    region: "Asia",
    formality: "neutral",
    meaning: "“today is…” — the sentence trailing off",
    pronunciation: "kon-nee-chee-wah",
    gesture: "a bow of about 15 degrees",
    note: "Morning is ohayō, evening is konbanwa. The deeper the bow, the deeper the respect — up to 45°.",
    tts: "ja-JP",
  },
  {
    id: "annyeong",
    word: "안녕하세요",
    translit: "Annyeonghaseyo",
    language: "Korean",
    region: "Asia",
    formality: "formal",
    meaning: "“are you at peace?”",
    pronunciation: "an-nyong-hah-seh-yo",
    gesture: "a slight bow, hands at the sides or clasped",
    note: "Literally a question about the other person's peace. With close friends: just annyeong.",
    tts: "ko-KR",
  },
  {
    id: "nihao",
    word: "你好",
    translit: "Nǐ hǎo",
    language: "Mandarin Chinese",
    region: "Asia",
    formality: "neutral",
    meaning: "you + good",
    pronunciation: "nee how",
    gesture: "a nod, or a two-handed handshake in warm company",
    note: "Older generations may greet with 吃了吗? — “have you eaten?” Care is the hello.",
    tts: "zh-CN",
  },
  {
    id: "sawasdee",
    word: "สวัสดี",
    translit: "Sawasdee",
    language: "Thai",
    region: "Asia",
    formality: "formal",
    meaning: "wellbeing — from Sanskrit svasti",
    pronunciation: "sah-wah-DEE",
    gesture: "the wai — palms together, bowed head",
    note: "Men add khrap, women add kha. The higher the hands, the higher the honour.",
    tts: "th-TH",
  },
  {
    id: "xinchao",
    word: "Xin chào",
    language: "Vietnamese",
    region: "Asia",
    formality: "neutral",
    meaning: "a respectful hello",
    pronunciation: "sin CHOW",
    gesture: "a small nod of the head, hands relaxed",
    note: "Add anh, chị or em before it, tuned to the other person's age — age grammar built into hello.",
    tts: "vi-VN",
  },
  {
    id: "kumusta",
    word: "Kumusta",
    language: "Filipino (Tagalog)",
    region: "Asia",
    formality: "casual",
    meaning: "“how are you?” — from Spanish ¿cómo está?",
    pronunciation: "koo-moos-TAH",
    gesture: "mano po — an elder's hand touched to the forehead",
    note: "Five centuries of Spanish left a hello; the mano left the reverence.",
    tts: "fil-PH",
  },
  {
    id: "habari",
    word: "Habari",
    language: "Swahili",
    region: "Africa",
    formality: "neutral",
    meaning: "news? — literally asking for your news",
    pronunciation: "hah-BAH-ree",
    gesture: "a long, unhurried handshake, sometimes doubled",
    note: "The expected answer is nzuri — good — even on a hard day. The greeting holds the door open.",
    tts: "sw-KE",
  },
  {
    id: "sawubona",
    word: "Sawubona",
    language: "isiZulu",
    region: "Africa",
    formality: "neutral",
    meaning: "I see you",
    pronunciation: "sah-woo-BOH-nah",
    gesture: "a handshake that slides into interlocked thumbs",
    note: "The reply is yebo, sawubona — “yes, I see you too.” To be greeted is to be made real.",
    tts: "zu-ZA",
  },
  {
    id: "sannu",
    word: "Sannu",
    language: "Hausa",
    region: "Africa",
    formality: "neutral",
    meaning: "gently — take care, no rush",
    pronunciation: "SAHN-noo",
    gesture: "a soft handshake, right hand only",
    note: "A proper Hausa greeting walks the whole road: health, family, home, work. Rushing it is rude.",
    tts: "ha-NG",
  },
  {
    id: "kia-ora",
    word: "Kia ora",
    language: "te reo Māori",
    region: "Oceania",
    formality: "neutral",
    meaning: "be well — have life",
    pronunciation: "kee-ah OR-ah",
    gesture: "the hongi — noses and foreheads pressed",
    note: "In the hongi, hā — the breath of life — is shared. Two strangers become tangata whenua, people of the land.",
    tts: "mi-NZ",
  },
  {
    id: "bula",
    word: "Bula",
    language: "Fijian",
    region: "Oceania",
    formality: "casual",
    meaning: "life!",
    pronunciation: "MBOO-lah",
    gesture: "a wide smile and raised eyebrows",
    note: "Shouted across a village, across a road, across a reef. Bula is Fiji's open door.",
    tts: "fj",
  },
  {
    id: "aloha",
    word: "Aloha",
    language: "ʻŌlelo Hawaiʻi",
    region: "Oceania",
    formality: "neutral",
    meaning: "the presence of breath",
    pronunciation: "ah-LOH-hah",
    gesture: "the honi — touching foreheads and sharing breath",
    note: "Hello, farewell, love, and a law of conduct. Hawaii even has an “Aloha Spirit” statute.",
    tts: null,
  },
  {
    id: "talofa",
    word: "Talofa",
    language: "Samoan",
    region: "Oceania",
    formality: "casual",
    meaning: "greetings! — love to you",
    pronunciation: "tah-LOH-fah",
    gesture: "the Samoan eyebrow flash — brows up, quick smile",
    note: "Two raised eyebrows across a room are a complete Samoan hello. Talofa lava adds warmth.",
    tts: null,
  },
  {
    id: "eai",
    word: "E aí",
    language: "Brazilian Portuguese",
    region: "Americas",
    formality: "casual",
    meaning: "“what's up?”",
    pronunciation: "ee-EYE",
    gesture: "an abraço — a full hug, often with back pats",
    note: "Usually arrives with tudo bem? — and in Brazil the answer is always tudo.",
    tts: "pt-BR",
  },
  {
    id: "boozhoo",
    word: "Boozhoo",
    language: "Anishinaabemowin (Ojibwe)",
    region: "Americas",
    formality: "casual",
    meaning: "hello — perhaps from Nanabozho, the cultural hero",
    pronunciation: "boo-ZHOO",
    gesture: "a nod and a warm, unhurried welcome",
    note: "Kept alive by language nests and immersion schools across Anishinaabe territory.",
    tts: null,
  },
];

export const REGIONS: Array<Region | "All"> = [
  "All",
  "Europe",
  "Asia",
  "Middle East",
  "Africa",
  "Oceania",
  "Americas",
];

export const TICKER_WORDS = GREETINGS.map((g) => (g.translit ? g.translit.toUpperCase() : g.word.toUpperCase()));

/* ---------------- anatomy of a hello ---------------- */

export interface AnatomyStep {
  n: string;
  title: string;
  icon: string;
  body: string;
  detail: string;
}

export const ANATOMY: AnatomyStep[] = [
  {
    n: "01",
    title: "The Signal",
    icon: "sound",
    body: "A hello is phatic — it says nothing, and that is the point.",
    detail:
      "Linguist Roman Jakobson called it the phatic function: language used to open a channel, not to carry cargo. “How are you?” does not require medical honesty. The words are a handshake made of air.",
  },
  {
    n: "02",
    title: "The Gesture",
    icon: "bow",
    body: "Every culture pairs the word with a movement of the body.",
    detail:
      "A bow in Tokyo, a wai in Bangkok, interlocked thumbs in KwaZulu-Natal, three air-kisses in the Netherlands, an eyebrow flash in Samoa. The body speaks first; the voice signs the contract.",
  },
  {
    n: "03",
    title: "The Distance",
    icon: "gap",
    body: "Greetings are negotiated in centimetres.",
    detail:
      "Anthropologist Edward T. Hall mapped proxemics: the handshake keeps you at arm's length, the embrace collapses it to zero, the bow holds a respectful metre. Step into the wrong zone and you have said something else entirely.",
  },
  {
    n: "04",
    title: "The Register",
    icon: "dial",
    body: "Who you are changes which hello you may use.",
    detail:
      "Tu or vous. Annyeong or annyeonghaseyo. Cześć or Dzień dobry. Languages encode age, rank, and intimacy into the first syllable — choose wrong and the greeting still lands, just with a dent.",
  },
  {
    n: "05",
    title: "The Return",
    icon: "loop",
    body: "A greeting is a pair: it demands an echo.",
    detail:
      "Sociologists call it an adjacency pair — greeting obliges greeting, the way a question obliges an answer. Silence in the second slot is not neutral. It is the loudest sentence in the language.",
  },
];

/* ---------------- world clocks ---------------- */

export interface TimeSlot {
  word: string;
  translit?: string;
}

export interface CityClock {
  city: string;
  country: string;
  tz: string;
  script: string;
  slots: { morning: TimeSlot; afternoon: TimeSlot; evening: TimeSlot };
}

export const CITIES: CityClock[] = [
  {
    city: "Tokyo",
    country: "Japan",
    tz: "Asia/Tokyo",
    script: "日本",
    slots: {
      morning: { word: "おはようございます", translit: "Ohayō gozaimasu" },
      afternoon: { word: "こんにちは", translit: "Konnichiwa" },
      evening: { word: "こんばんは", translit: "Konbanwa" },
    },
  },
  {
    city: "Seoul",
    country: "South Korea",
    tz: "Asia/Seoul",
    script: "한국",
    slots: {
      morning: { word: "좋은 아침이에요", translit: "Joheun achim-iyeyo" },
      afternoon: { word: "안녕하세요", translit: "Annyeonghaseyo" },
      evening: { word: "좋은 저녁이에요", translit: "Joheun jeonyeok-iyeyo" },
    },
  },
  {
    city: "Mumbai",
    country: "India",
    tz: "Asia/Kolkata",
    script: "भारत",
    slots: {
      morning: { word: "सुप्रभात", translit: "Suprabhāt" },
      afternoon: { word: "नमस्ते", translit: "Namaste" },
      evening: { word: "शुभ संध्या", translit: "Shubh sandhyā" },
    },
  },
  {
    city: "Cairo",
    country: "Egypt",
    tz: "Africa/Cairo",
    script: "مصر",
    slots: {
      morning: { word: "صباح الخير", translit: "Ṣabāḥ al-khayr" },
      afternoon: { word: "أهلاً وسهلاً", translit: "Ahlan wa sahlan" },
      evening: { word: "مساء الخير", translit: "Masāʾ al-khayr" },
    },
  },
  {
    city: "Nairobi",
    country: "Kenya",
    tz: "Africa/Nairobi",
    script: "Kenya",
    slots: {
      morning: { word: "Habari za asubuhi" },
      afternoon: { word: "Habari za mchana" },
      evening: { word: "Habari za jioni" },
    },
  },
  {
    city: "London",
    country: "United Kingdom",
    tz: "Europe/London",
    script: "UK",
    slots: {
      morning: { word: "Good morning" },
      afternoon: { word: "Good afternoon" },
      evening: { word: "Good evening" },
    },
  },
  {
    city: "Paris",
    country: "France",
    tz: "Europe/Paris",
    script: "France",
    slots: {
      morning: { word: "Bonjour" },
      afternoon: { word: "Bonjour" },
      evening: { word: "Bonsoir" },
    },
  },
  {
    city: "São Paulo",
    country: "Brazil",
    tz: "America/Sao_Paulo",
    script: "Brasil",
    slots: {
      morning: { word: "Bom dia" },
      afternoon: { word: "Boa tarde" },
      evening: { word: "Boa noite" },
    },
  },
  {
    city: "Reykjavík",
    country: "Iceland",
    tz: "Atlantic/Reykjavik",
    script: "Ísland",
    slots: {
      morning: { word: "Góðan morgun" },
      afternoon: { word: "Góðan daginn" },
      evening: { word: "Gott kvöld" },
    },
  },
];

/* ---------------- quiz ---------------- */

export interface QuizQuestion {
  q: string;
  options: string[];
  answer: number;
  fact: string;
}

export const QUIZ: QuizQuestion[] = [
  {
    q: "“Kia ora” greets you in which language?",
    options: ["Hawaiian", "te reo Māori", "Samoan", "Fijian"],
    answer: 1,
    fact: "Kia ora means “be well” — and New Zealand's phone company once used it as its answering greeting.",
  },
  {
    q: "The Italian “ciao” originally meant…",
    options: ["“see you soon”", "“peace be with you”", "“I am your slave”", "“good fortune”"],
    answer: 2,
    fact: "It descends from Venetian s-ciavo — “your servant” — the same root as “slave”.",
  },
  {
    q: "In Japan, the depth of a bow communicates…",
    options: ["how fast the day is going", "the level of respect or apology", "the speaker's age", "the time of day"],
    answer: 1,
    fact: "Eshaku is a casual 15°, keirei a respectful 30°, and saikeirei — a full 45° — is for deep gratitude or apology.",
  },
  {
    q: "The hongi, a Māori greeting, exchanges…",
    options: ["gifts of food", "woven cloaks", "breath", "names"],
    answer: 2,
    fact: "Noses and foreheads press together to share hā — the breath of life.",
  },
  {
    q: "“Shalom” and “salām” both literally mean…",
    options: ["friend", "peace", "welcome", "home"],
    answer: 1,
    fact: "Hebrew and Arabic are cousins — both roots s-l-m carry peace, wholeness, safety.",
  },
  {
    q: "Who won the fight over the telephone's first word?",
    options: ["Alexander Graham Bell, with “ahoy!”", "Thomas Edison, with “hello”", "Nikola Tesla, with “ready”", "Nobody — phones rang silently"],
    answer: 1,
    fact: "Bell insisted on “ahoy-hoy” for years. Edison's 1877 letter proposing “hello” reached the first phone books — and won.",
  },
];

/* ---------------- field notes (postcards) ---------------- */

export interface FieldNote {
  n: string;
  title: string;
  body: string;
  stamp: string;
  tint: string;
}

export const FIELD_NOTES: FieldNote[] = [
  {
    n: "Nº 01",
    title: "The empty hand",
    body: "The handshake is ancient Greek: a 5th-century BCE gravestone shows two soldiers clasping hands — proof neither held a weapon. Two millennia later, the proof still opens every meeting.",
    stamp: "GR",
    tint: "marigold",
  },
  {
    n: "Nº 02",
    title: "Borrowed breath",
    body: "In the Māori hongi, foreheads and noses press together and breath is shared. For a moment, visitor and host breathe the same air — and the visitor is no longer manuhiri, but one of the people of the land.",
    stamp: "NZ",
    tint: "sage",
  },
  {
    n: "Nº 03",
    title: "Degrees of respect",
    body: "A Japanese bow is geometry: 15° for a passing hello, 30° for clients and elders, 45° for deep gratitude or apology. The angle does the talking before a single word does.",
    stamp: "JP",
    tint: "vermilion",
  },
  {
    n: "Nº 04",
    title: "Counting kisses",
    body: "France: two. The Netherlands: three. Belgium: one — sometimes. Parts of southern France start left, parts start right. Cheek-kiss arithmetic is a sport with local rules and no referee.",
    stamp: "FR",
    tint: "mist",
  },
  {
    n: "Nº 05",
    title: "The kunik",
    body: "Among Inuit families, the kunik presses nose and upper lip to skin — a cheek, a forehead — and breathes in. It is affection in its most literal form: taking someone's warmth into yourself.",
    stamp: "CA",
    tint: "mist",
  },
  {
    n: "Nº 06",
    title: "Hands climb with rank",
    body: "In the Thai wai, the height of the joined hands measures honour — thumb to chest for equals, to the nose for elders, to the brow for monks. Royalty is greeted even higher. Physics becomes etiquette.",
    stamp: "TH",
    tint: "marigold",
  },
  {
    n: "Nº 07",
    title: "Hello vs. ahoy",
    body: "When the telephone arrived, Bell wanted “ahoy-hoy!”; Edison proposed “hello” in an 1877 letter. The first phone books printed Edison's word. Mr. Burns still answers ahoy-hoy.",
    stamp: "US",
    tint: "sage",
  },
];

export const GOODBYES = [
  "GOODBYE",
  "ADIÓS",
  "AU REVOIR",
  "CIAO",
  "さようなら",
  "안녕히 가세요",
  "مع السلامة",
  "TOT ZIENS",
  "KA kite anō",
  "МО LEI",
  "再见",
  "DO WIDZENIA",
  "TOTSiens".toUpperCase(),
  "VAI COM DEUS",
];
