import {Repo, LightRepo } from "./repo.entities";
import {Arg, Field, Resolver, InputType, Query, Mutation } from "type-graphql";
import {Status} from "../status/status.entities"

@InputType()
class RepoInput implements Partial<Repo> {
    @Field()
    id: string;

    @Field()
    url: string;

    @Field()
    name: string;
    
    @Field() 
    isPrivate: number;
    
}

@Resolver(Repo)
export default class RepoResolver{
    @Query(() => [Repo])
    async fullrepos() {
        const repos = await Repo.find({
            relations: {
                status : true, 
                langs: true,
            },
        });
        console.info(repos)
        return repos
    }

    @Query(() => [LightRepo])
    async lightrepos() {
        const repos = await Repo.find()
        console.info(repos)
        return repos;
    }

    @Mutation(() => Repo)
    async createNewRepo(@Arg("data") newRepo : RepoInput) {
        console.info(newRepo); 
       const repo = new Repo();
       repo.id= newRepo.id;
       repo.name = newRepo.name;
       repo.url = newRepo.url;

       const status = await Status.findOneOrFail({
        where : {id: +newRepo.isPrivate},
       });
       repo.status = status;

       await repo.save();
       console.log("repo", repo);
       
       const myRepo = await Repo.findOneOrFail({
        where : {id : newRepo.id},
        relations : {
            langs: true, 
            status: true,
        },
       });
       console.log("myRepo", myRepo);
       return myRepo;
    }
}