import "reflect-metadata"; 
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from "typeorm";
import { Repo } from "../repos/repo.entities";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Status extends BaseEntity{
    @Field()
@PrimaryGeneratedColumn()
id : number;

@Field()
@Column()
label: string;

@Field(() => [Repo])
@OneToMany (() => Repo,( repo) => repo.status)
repos?:Repo[];
}