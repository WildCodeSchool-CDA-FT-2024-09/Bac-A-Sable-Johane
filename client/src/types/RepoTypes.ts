export interface Repo  {
    id: string;
    name: string;
    url: string;
   langs: Language[];
   status: {
    label: string;
   }
}

export interface Language  {
    id:number;
    label:string;
}
