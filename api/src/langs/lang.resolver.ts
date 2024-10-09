import {Lang} from "./lang.entites";
import { Resolver,Query} from "type-graphql";


// @InputType()
// class LangInput implements Partial<Lang> { 
//     @Field()
//     id: number; 

//     @Field()
//     label: string;
// }

@Resolver(Lang)
export default class LangResolver{
    @Query(() => [Lang])
    async langs(){
    const langs = await Lang.find({
        relations: {
        repos: true, 
    },
    });
    console.info('lang', langs)
    return langs
}
}