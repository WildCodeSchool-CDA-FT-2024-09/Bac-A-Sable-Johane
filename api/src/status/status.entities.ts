import "reflect-metadata"; 
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from "typeorm";
import { Repo } from "../repos/repo.entities";

@Entity()
export class Status extends BaseEntity{
@PrimaryGeneratedColumn()
id : number;

@Column()
label: string;

@OneToMany (() => Repo, repo => repo.status)
repos?:Repo[]
}