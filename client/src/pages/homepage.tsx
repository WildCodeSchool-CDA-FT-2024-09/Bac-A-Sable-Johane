import type {Repo} from "../types/RepoTypes.ts"
// import data from "../assets/data.json"
import RepoCard from "../components/RepoCard.tsx"
// import connexion from "../services/connexion.ts"
// import { useEffect, useState } from "react"
// import { useLoaderData } from "react-router-dom"
import {useFullreposQuery} from  "../generated/graphql-types.ts"


// const GET_LANGS = gql `
// query Fulllangs {
//   fulllangs {
//   id
//   label
//   }
// }`


export default function HomePage (){

  const {loading, data} = useFullreposQuery();
console.log(data)

// const {loading : loadingLang, data: dataLang} = useQuery(GET_LANGS)
// console.log("datalang:", dataLang)
// console.log(loadingLang)

  if(loading) return <h1> Loading </h1> 


// const dataLangs = useLoaderData() as Language[]
// console.log("lang :", dataLangs)
// const [repos, setRepos] = useState<Repo[]>([]);
// console.log("repos :", repos)
// const [filter, setFilter] = useState<string>("")
// useEffect(() => {
//   const fetchRepos= async () => {
//     try {
//       const repos = await connexion.get<Repo[]>("/api/repos");
//       setRepos(repos.data)
//     } catch (error) {
//       console.error(error)
  
//     }
//   }
//   fetchRepos()
// }, [])

// const repoFilter = filter ? repos.filter((r) => r.langs.some((l) => l.label === filter)) : repos ; 


// const handleFilterChange = (e:any) => {setFilter(e.target.value)}

    return (
        <> 
        <h1 > Mes repo github  </h1>
      
{/* {dataLang.map(( lang: Language) => (
  <button type="button"> {lang.label} </button>
))} */}

        <section className="all-cards">
  {data.fullrepos.map((repo: Repo)=> (
    <RepoCard key={repo.id} id={repo.id} name={repo.name} url={repo.url} status={repo.status} langs={repo.langs} isFavorite={repo.isFavorite}/>
  ) )}

          {/* {repos.map((repo: Repo) => (
            <RepoCard name={repo.name} url={repo.url} langs={repo.langs} id={repo.id} status={repo.status}/>
          ))} */}
      
        </section>
        </>
    )
}