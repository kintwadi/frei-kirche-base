
export type Language = 'DE' | 'EN';

export interface NavItem {
  label: string;
  href: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface HistoryContent {
  title: string;
  subtitle: string;
  backButton: string;
  timelineTitle: string;
  timeline: TimelineEvent[];
  mediaTitle: string;
  videos: { title: string; thumbnail: string }[];
}

export interface LegalPageContent {
  title: string;
  backButton: string;
  sections: { heading?: string; text: string }[];
}

export interface Group {
  id: string;
  name: string;
  description: string;
  image: string;
  schedule: string;
}

export interface Content {
  nav: {
    home: string;
    about: string;
    services: string;
    groups: string;
    sermons: string;
    contact: string;
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  sunday: {
    title: string;
    time: string;
    address: string;
    whatToExpectTitle: string;
    expectations: string[];
  };
  values: {
    title: string;
    v1Title: string;
    v1Desc: string;
    v2Title: string;
    v2Desc: string;
    v3Title: string;
    v3Desc: string;
  };
  about: {
    title: string;
    welcome: string;
    storyLink: string;
    faqTitle: string;
    faqs: { question: string; answer: string }[];
  };
  history: HistoryContent;
  sermons: {
    title: string;
    latestTitle: string;
    latestDate: string;
    latestDesc: string;
    listen: string;
    download: string;
  };
  involved: {
    title: string;
    groupsTitle: string;
    groupsDesc: string;
    groups: Group[];
    connectBtn: string;
    modalTitle: string;
    modalDesc: string;
    eventsTitle: string;
    events: { day: string; month: string; year: string; name: string }[];
  };
  footer: {
    imprint: string;
    privacy: string;
    contact: string;
  };
  imprintPage: LegalPageContent;
  privacyPage: LegalPageContent;
}
