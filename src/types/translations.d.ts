interface Translation {
    title: string;
    subtitle: string;
    description: string;
    howItWorks: string;
    steps?: string[];
    startButton: string;
    formTitle: string;
    disclaimer: string[];
  }
  
  type Translations = Record<string, Translation>;