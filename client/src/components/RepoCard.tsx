import { Link } from "react-router-dom";
import type {  Repo } from "../types/RepoTypes";
import "./RepoCard.css" 

export default function RepoCard({name, url,  id}: Repo){

    return (

  <article className="card"> 

        <h2> {name} </h2>
         <a href={url}> Voir le repo</a>
   


  <Link to={`/detail/${id}`}> Plus d'info</Link>


       </article>

    );
}