import "reflect-metadata"; 
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, BaseEntity, JoinTable } from "typeorm";
import { Repo } from "../repos/repo.entities";

@Entity()
export class Lang extends BaseEntity{
@PrimaryGeneratedColumn()
id : number;

@Column()
label: string;

@ManyToMany(() => Repo, repo => repo.langs)
@JoinTable()
repos?:Repo[]

}