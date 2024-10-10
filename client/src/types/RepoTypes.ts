export interface Language  {
    id:number;
    label:string;
}

export interface Repo  {
    id: string;
    name: string;
    url: string;
   status: {
    label: string;
   };
   langs: Language[];
   isFavorite: boolean;
}
