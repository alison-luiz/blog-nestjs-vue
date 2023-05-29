import { Exclude, Expose } from "class-transformer";
import { User } from "src/modules/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("posts")
export class Post {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({nullable: false})
    title: string;

    @Column({nullable: true})
    description: string;

    @Exclude()
    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;

    @ManyToOne(() => User, user => user.posts, {
        eager: true
    })
    @JoinColumn({name: "user_id"})
    user: User;

}
