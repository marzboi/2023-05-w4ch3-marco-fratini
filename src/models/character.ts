export interface Character {
  id: number;
  name: string;
  family: string;
  age: number;
  alive: boolean;
  warcry: string;
}

export interface Swordsman extends Character {
  weapon: string;
  dexterity: number;
}

export interface King extends Character {
  reignyears: number;
}

export interface Kingshand extends Character {
  supports: King | Swordsman;
}

export interface Squire extends Character {
  supports: Swordsman;
  pelotismo: string;
}
