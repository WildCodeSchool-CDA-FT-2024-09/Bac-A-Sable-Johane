export interface Repo  {
    id: string;
    name: string;
    url: string;
   langs: {
    label: string
   };
   status: {
    label: string;
   }
}

export interface Language  {
    id:number;
    label:string;
}
