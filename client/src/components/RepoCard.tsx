import { Link } from "react-router-dom";
import type {  Repo, Language } from "../types/RepoTypes";
import "./RepoCard.css" 

export default function RepoCard({name, url,  id, isFavorite, langs, status}: Repo){

    return (

  <article className="card"> 
        <h2> {name} </h2>
        <h3> {status.label}</h3>
         <a href={url}> Voir le repo</a>
   
         {langs.map((lang: Language) => (
    <p> {lang.label} </p>
  ))} 

  <Link to={`/detail/${id}`}> Plus d'info</Link>
<p> {isFavorite ? "❤️" : "🤍"} </p>

       </article>

    );
}