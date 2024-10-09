import type {Repo} from "../types/RepoTypes.ts"
// import data from "../assets/data.json"
import RepoCard from "../components/RepoCard.tsx"
// import connexion from "../services/connexion.ts"
// import { useEffect, useState } from "react"
// import { useLoaderData } from "react-router-dom"
import { useQuery, gql } from "@apollo/client";


const GET_REPOS = gql `
query Fullrepos {
  fullrepos {
    id 
    name
    url
  }
}
`;





export default function HomePage (){

  const {loading, error, data } = useQuery(GET_REPOS);


  if(loading) return <h1> Loading </h1> 
  if (error) return <p> Error </p>

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
        <h1 > Mes repo github </h1>
      
        <section className="all-cards">
  {data.fullrepos.map((repo: Repo)=> (
    <RepoCard key={repo.id} id={repo.id} name={repo.name} url={repo.url} status={repo.status} langs={repo.langs}/>
  ) )}

          {/* {repos.map((repo: Repo) => (
            <RepoCard name={repo.name} url={repo.url} langs={repo.langs} id={repo.id} status={repo.status}/>
          ))} */}
      
        </section>
        </>
    )
}