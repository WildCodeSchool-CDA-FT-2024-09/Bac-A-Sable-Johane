import "reflect-metadata"; 
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, BaseEntity, JoinTable } from "typeorm";
import { Repo } from "../repos/repo.entities";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class Lang extends BaseEntity{
    @Field()
@PrimaryGeneratedColumn()
id : number;

@Field()
@Column()
label: string;

@Field(() => [Repo])
@ManyToMany(() => Repo, (repo) => repo.langs)
@JoinTable()
repos?:Repo[];

}