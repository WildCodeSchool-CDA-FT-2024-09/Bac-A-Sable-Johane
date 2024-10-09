import {Status} from "./status.entities"; 
import {Query, Resolver} from "type-graphql";

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
}
