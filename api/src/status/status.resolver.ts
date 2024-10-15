import {Status} from "./status.entities"; 
import {Arg, Field, InputType, Mutation, Query, Resolver} from "type-graphql";

@InputType()
class StatusInput implements Partial<Status>{
    @Field()
    id: number;

    @Field()
    label: string;
}

@Resolver(Status)
export default class StatusResolver{
    @Query(() => [Status])
    async status() {
        const status = await Status.find({
            relations: {
                repos: true,
            }
        });
        console.info("status:",status)
        return status
    }

    @Mutation(() => Status)
    async createNewStatus(@Arg("data") newStatus : StatusInput) {
        console.info(newStatus);

        const status = new Status();
        status.id= newStatus.id;
        status.label= newStatus.label;

        await status.save();

        const myStatus = await Status.findOneOrFail({
            where: {id: newStatus.id},
            relations: {
                repos: true,
            }
        });
        console.log(myStatus)
        return myStatus
    }
}
