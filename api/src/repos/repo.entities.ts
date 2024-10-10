import "reflect-metadata";
import {Entity, Column, PrimaryColumn, ManyToOne, BaseEntity, ManyToMany} from "typeorm";
import { IsString, Min, Max, IsBoolean} from "class-validator";
import { Status } from "../status/status.entities";
import { Lang } from "../langs/lang.entites";
import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
@Entity()
export class Repo extends BaseEntity{
    @Field(() => ID)
    @PrimaryColumn()
    @IsString()
    id: string; 

    @Field()
    @Column()
    @IsString()
    name: string;

    @Field()
    @Column()
    @IsString()
    url: string;

    @Field()
    @Column({ default: ()=> false})
    @IsBoolean()
    isFavorite: boolean;

    @Field(() => Status)
    @ManyToOne(() => Status, (status) => status.id)
    @Min(1)
    @Max(2)
    status: Status;

    @Field(() => [Lang])
    @ManyToMany(() => Lang, (langs) => langs.repos)
    langs?:Lang[];
}

@ObjectType()
export class LightRepo extends BaseEntity{
    @Field (() => ID)
    id : string;

    @Field()
    name: string;

    @Field()
    url : string;

    @Field()
    isFavorite: boolean;
}