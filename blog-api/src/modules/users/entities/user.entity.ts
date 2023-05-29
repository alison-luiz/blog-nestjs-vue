import { Exclude } from "class-transformer";
import { Post } from "src/modules/posts/entities/post.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity("users")
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({ unique: true })
    email: string;

    @Exclude()
    @Column()
    password: string;

    @Column()
    date_of_birth: Date;

    @Column(({ unique: true }))
    document: string;

    @DeleteDateColumn()
    deleted_at: Date;

    @OneToMany(() => Post, post => post.user)
    posts: Post[];

}
