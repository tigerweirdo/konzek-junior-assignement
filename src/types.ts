// src/types.ts

// Define a type for the language data
export interface Language {
    name: string;
  }
  
  // Define a type for the continent data
  export interface Continent {
    name: string;
  }
  
  // Define a type for the state data
  export interface State {
    name: string;
  }
  
  // Define a type for a country
  export interface Country {
    code: string;
    name: string;
    continent: Continent;
    languages: Language[];
    currency: string;
    emoji: string;
  }
  
  // Define props for the CountriesList component
  export interface FilterGroupProps {
    filter: string;
    groupBy: string;
  }
  