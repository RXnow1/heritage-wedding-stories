export const couple = {
  groom: {
    name: "Abhimanyu",
    fullName: "Kunwar Abhimanyu Singh Rathore",
    parents: "Son of Raja Vikramaditya & Rani Sushila Rathore",
    home: "Jodhpur, Rajasthan",
  },
  bride: {
    name: "Meera",
    fullName: "Rajkumari Meera Devi Chauhan",
    parents: "Daughter of Thakur Devendra & Thakurain Radhika Chauhan",
    home: "Chittorgarh, Rajasthan",
  },
  hashtag: "#AbhiFoundHisMeera",
  dateISO: "2027-02-14T19:30:00+05:30",
  dateLabel: "Sunday, 14 February 2027",
  venue: "Sajjan Garh Palace",
  city: "Udaipur, Rajasthan",
};

export type WeddingEvent = {
  name: string;
  hindiName: string;
  date: string;
  time: string;
  venue: string;
  dressCode: string;
  description: string;
  image?: string;
};

export const events: WeddingEvent[] = [
  {
    name: "Mehndi",
    hindiName: "मेहंदी",
    date: "Wednesday, 10 February 2027",
    time: "4:00 PM onwards",
    venue: "Rose Courtyard, Sajjan Garh Palace",
    dressCode: "Pastels & Florals",
    description:
      "An afternoon of henna, laughter and hidden initials. The bride's hands become a canvas while the women sing traditional Rajasthani suhag geet.",
  },
  {
    name: "Haldi",
    hindiName: "हल्दी",
    date: "Thursday, 11 February 2027",
    time: "10:00 AM",
    venue: "Marigold Garden, Sajjan Garh Palace",
    dressCode: "Sunshine Yellow",
    description:
      "Turmeric, marigolds and blessings — wear clothes you don't mind turning gold. Expect more haldi on faces than in bowls.",
  },
  {
    name: "Sangeet",
    hindiName: "संगीत",
    date: "Friday, 12 February 2027",
    time: "7:30 PM",
    venue: "Crystal Durbar Hall",
    dressCode: "Regal Maroon & Gold",
    description:
      "Both families take the stage — ghoomar, dhol, and a fiercely contested family dance-off judged very unfairly by the grandparents.",
  },
  {
    name: "Baraat & Varmala",
    hindiName: "बारात",
    date: "Saturday, 13 February 2027",
    time: "6:00 PM",
    venue: "Palace Forecourt",
    dressCode: "Sherwanis & Lehengas",
    description:
      "The groom arrives on a decorated white mare amid dhol beats and dancing baraatis, followed by the garland exchange on the Durbar stairs.",
  },
  {
    name: "Pheras & Reception",
    hindiName: "फेरे",
    date: "Sunday, 14 February 2027",
    time: "7:30 PM",
    venue: "Lakefront Mandap & Zenana Lawn",
    dressCode: "Formal Traditional",
    description:
      "Seven vows around the sacred fire under the stars, followed by dinner, champagne toasts and a first dance on the lawn.",
  },
];

export type StoryChapter = {
  year: string;
  title: string;
  text: string;
};

export const story: StoryChapter[] = [
  {
    year: "2019",
    title: "A Wedding They Weren't Invited To",
    text: "Abhimanyu crashed the wrong wedding in Jaipur chasing a lost scooter key; Meera, hiding from a pushy aunty in the same courtyard, lent him her phone torch to find them. They talked till the band packed up.",
  },
  {
    year: "2020",
    title: "The Chai Courtship",
    text: "A year of midnight chai on video calls, debating whether mawa kachori beats pyaaz kachori (it does, says Meera; Abhimanyu still disputes the ruling).",
  },
  {
    year: "2022",
    title: "Pushkar & The Promise",
    text: "At the Pushkar camel fair, above the sunset, Abhimanyu fumbled a ring box out of a jalebi box. Meera said yes before he finished the third sentence of his speech.",
  },
  {
    year: "2024",
    title: "The Rokka",
    text: "Both families met at Sajjan Garh Palace, shared a thali with nine dishes, and the elders agreed the alliance was written in the stars long before the couple found each other.",
  },
  {
    year: "2027",
    title: "The Wedding",
    text: "And now, five palaces of history, two families, one very opinionated parrot named Moti — we gather to celebrate the marriage of Abhimanyu and Meera.",
  },
];

export const galleryImages = [
  { caption: "The royal couple at golden hour", src: "hero" },
  { caption: "Haldi — a sea of marigolds", src: "haldi" },
  { caption: "Sangeet night under the lanterns", src: "sangeet" },
  { caption: "The mandap at dusk", src: "mandap" },
  { caption: "Mehndi, a canvas of love", src: "mehndi" },
  { caption: "The baraat arrives", src: "baraat" },
  { caption: "Tables set for the feast", src: "reception" },
  { caption: "A moment before forever", src: "candid" },
];

export const familyQuotes = [
  {
    quote:
      "He argued with me about kachori politics for two hours on our first call. I knew then.",
    by: "Meera, about Abhimanyu",
  },
  {
    quote:
      "She laughed at my worst joke in a courtyard full of strangers. Marrying her was the easy part.",
    by: "Abhimanyu, about Meera",
  },
];

export const rsvpSideOptions = ["Attending with family", "Attending solo", "Not able to attend"];

export const eventsAttendingOptions = [
  "All celebrations",
  "Sangeet & Wedding",
  "Wedding & Reception only",
  "Mehndi & Haldi",
];
