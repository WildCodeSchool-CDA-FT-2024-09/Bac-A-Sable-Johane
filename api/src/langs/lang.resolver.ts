import {Lang} from "./lang.entites";
import { Resolver,Query, InputType, Field, Mutation, Arg} from "type-graphql";


@InputType()
class LangInput implements Partial<Lang> { 
    @Field()
    id: number; 

    @Field()
    label: string;
}

@Resolver(Lang)
export default class LangResolver{
    @Query(() => [Lang])
    async fulllangs(){
    const langs = await Lang.find({
        relations: {
        repos: true, 
    },
    });
    console.info('lang', langs)
    return langs
}

@Mutation(() => Lang)
async createNewLand(@Arg("data") newLang : LangInput) {
    console.info(newLang);
    const lang = new Lang();
    lang.id = newLang.id;
    lang.label= newLang.label

    await lang.save()
    console.log("lang", lang);

    const myLang = await Lang.findOneOrFail({
        where : {id: newLang.id},
        relations:{
            repos: true,
        },
    });
    console.log(myLang)
    return myLang
}
}