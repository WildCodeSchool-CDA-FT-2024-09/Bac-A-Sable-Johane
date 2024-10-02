import express, {Response, Request} from "express"; 
import {Lang} from "./lang.entites"


const langController = express.Router();

langController.get("/", async (_:any, res: Response) => {
try {
    const langs = await Lang.find();
    res.status(200).json(langs)
} catch (error) {
    res.sendStatus(500)
}
})

langController.post("/", async (req: Request, res: Response) => {
    try {
        const langs = new Lang();
        langs.label = req.body.label;
 
        await langs.save();
        res.status(201).json(langs)
        
    } catch (error) {
        res.sendStatus(500)
    }
  
})

// langController.delete("/:id", (req: Request, res:Response) => {
//     myLangs = myLangs.filter((lang: Lang) => lang.id !== parseInt(req.params.id))
//     res.sendStatus(204)
// })


export default langController