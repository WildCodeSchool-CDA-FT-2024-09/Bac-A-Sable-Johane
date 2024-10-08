import { useLoaderData, useParams} from "react-router-dom";
// import { useEffect, useState } from "react";
//import connexion from "../services/connexion"
import type { Repo } from "../types/RepoTypes";

export default function Detail() {
const {id} = useParams()
    const data = useLoaderData() as Repo ;

    // const {id} = useParams();
    // const [data, setData] = useState();

    // useEffect(() => {
    //     const fecthRepos = async () => {
    //         try {
    //             const repo = await connexion.get<Repo[]>(`/api/repos/${id}`); 
    //             console.log("useeffect repos", repo);
    //             setData(data);
    //         } catch(error){
    //             console.error(error)
    //         }
    //     };
    //     fecthRepos()
    // }, [id,data]);

    return (
<>
<p> {id} </p> 
<h1>  {data.name}</h1>

 </>
    // <div> Detail {id} </div>
    )
}
