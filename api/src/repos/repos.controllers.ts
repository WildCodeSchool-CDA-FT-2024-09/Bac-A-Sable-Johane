// import express, {Response, Request} from "express";
// import {Repo} from "./repo.entities"
// import { Status } from "../status/status.entities";
// import { Lang } from "../langs/lang.entites";
// import { In } from "typeorm";
// // import {validate} from "class-validator";

// const repoControllers = express.Router();

// repoControllers.get("/", async (_: any, res: Response) => {
//    try {
//     const repos = await Repo.find({
//       relations : {
//         status : true,
//         langs: true
//       }
//     });
// res.status(200).json(repos)
//    } catch (error) {
//     res.sendStatus(500)
//    }
// })

// repoControllers.get("/:id", async (req: Request,res: Response) => {
   
//     try {
//       const id = req.params.id
//         const repo = await Repo.findOneBy({id});
//         console.log({id})
//         if (repo) {
//             res.status(200).json(repo)
//         }else {
//             res.status(400).json({message: "Not found"});
//         }
//     }catch (error) {
//         res.sendStatus(500)
//     }
// })


// repoControllers.post("/", async (req: Request, res: Response) => {
//   console.log(req.body)
//     try {
//       const repo = new Repo();
//       repo.id = req.body.id;
//       repo.name = req.body.name;
//       repo.url = req.body.url;
      
// const status = await Status.findOneOrFail({where : {id: req.body.isPrivate}})
// repo.status = status;

// const langs = await Lang.find({where : {id: In (req.body.langs.map((l: number) => l ))}});
// repo.langs = langs;

//         await repo.save();
//         res.status(201).json(repo);
//     } catch (error) {
//       console.log(error)
//       res.sendStatus(500)
//     }
//  })


//  repoControllers.delete("/:id", async (req: Request, res : Response) => {
// try {
//   const id = req.params.id; 
//   const repo = await Repo.findOneBy({ id });
//   if (repo) {
//     repo.remove()
//     res.status(204).json({ message : 'Delete'})
//   }else {
//     res.status(404).json({ message: "not found"})
//   }
// }catch (error) {
//   res.sendStatus(500)
// }

//  })

// export default repoControllers