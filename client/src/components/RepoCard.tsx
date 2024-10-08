import { Link } from "react-router-dom";
import type { Language, Repo } from "../types/RepoTypes";
import "./RepoCard.css" 

export default function RepoCard({name, url, langs, id, status}: Repo){

    return (

  <article className="card"> 

        <h2> {name} </h2>
         <a href={url}> Voir le repo</a>
  
  {langs.map((lang:Language) => (
    <p> {lang.label} </p>
  ))} 
  <Link to={`/detail/${id}`}> Plus d'info</Link>

  <p> {status.label} </p>
       </article>

    );
}