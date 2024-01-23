export interface Country {
  name: {
    official: string;
    nativeName: {
      [nameCode: string]: { official: string };
    };
  };
  population: number;
  region: string;
  capital: string;
  flags: { png: string };
  cca3: string;
  tld: string[];
  currencies: {
    [currencyCode: string]: {
      name: string;
    };
  };
  languages: {
    [languageCode: string]: string;
  };
  borders?: string[];
}
