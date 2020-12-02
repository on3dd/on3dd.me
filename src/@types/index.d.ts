declare module '@client' {
  export interface Route {
    to: string;
    name: string;
    disabled?: boolean;
  }

  export interface Skill {
    name: string;
    amount: number;
  }

  export type Theme = 'light' | 'dark';
}
