import "reflect-metadata";
import {Entity, Column, PrimaryColumn, ManyToOne, BaseEntity, ManyToMany} from "typeorm";
import { IsString, Min, Max} from "class-validator";
import { Status } from "../status/status.entities";
import { Lang } from "../langs/lang.entites";

@Entity()
export class Repo extends BaseEntity{
    @PrimaryColumn()
    @IsString()
    id: string; 

    @Column()
    @IsString()
    name: string;

    @Column()
    @IsString()
    url: string;

    @ManyToOne(() => Status, status => status.id)
    @Min(1)
    @Max(2)
    status: Status;

    @ManyToMany(() => Lang, lang => lang.repos)
    langs?:Lang[]
}