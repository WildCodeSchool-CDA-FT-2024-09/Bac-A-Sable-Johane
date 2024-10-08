import type {Repo} from "../types/RepoTypes.ts"
// import data from "../assets/data.json"
import RepoCard from "../components/RepoCard.tsx"
import connexion from "../services/connexion.ts"
import { useEffect, useState } from "react"
// import { useLoaderData } from "react-router-dom"

export type Language = {
  id: number;
  label:string;
}

export default function HomePage (){

// const dataLangs = useLoaderData() as Language[]
// console.log("lang :", dataLangs)

const [repos, setRepos] = useState<Repo[]>([]);
console.log("repos :", repos)

const [filter, setFilter] = useState<string>("")

useEffect(() => {
  const fetchRepos= async () => {
    try {
      const repos = await connexion.get<Repo[]>("/api/repos");
      setRepos(repos.data)
    } catch (error) {
      console.error(error)
  
    }
  }
  fetchRepos()
}, [])

const repoFilter = filter ? repos.filter((r) => r.langs.some((l) => l.label === filter)) : repos ; 


const handleFilterChange = (e:any) => {setFilter(e.target.value)}

    return (
        <> 
        <h1 > Mes repo github </h1>
<label htmlFor=""> Filter </label>
        <select 
        id="lang"
        name="lang"
        value={filter}
        onChange= {handleFilterChange}>
          <option value=""> Tous </option>
          <option value="CSS"> CSS</option>
          <option value="Dockerfile"> Dockerfile</option>
          <option value="HTML"> HTML</option>
          <option value="Shell"> Shell</option>
          <option value="JavaScript"> Javascript </option>
          {/* {dataLangs.map((l) => (
            <option value={l.id} key={l.id}> {l.label}</option>
          ))} */}
        </select>
 
        <section className="all-cards">
  {repoFilter.map((repo: Repo)=> (
    <RepoCard key={repo.id} id={repo.id} name={repo.name} url={repo.url} langs={repo.langs } status={repo.status}/>
  ) )}

          {/* {repos.map((repo: Repo) => (
            <RepoCard name={repo.name} url={repo.url} langs={repo.langs} id={repo.id} status={repo.status}/>
          ))} */}
      
        </section>
        </>
    )
}