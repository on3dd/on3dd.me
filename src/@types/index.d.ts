declare module '@client' {
  type IconPack = 'fas' | 'fab';
  export interface Route {
    to: string;
    name: string;
    icon?: string;
    pack?: IconPack;
    disabled?: boolean;
  }

  export interface Skill {
    name: string;
    amount: number;
  }

  export type Theme = 'light' | 'dark';
}
