import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Post } from "src/modules/posts/entities/post.entity";
import { User } from "src/modules/users/entities/user.entity";

export class BlogDatabaseConfig {
    static createTypeOrmOptions(
        configService: ConfigService,
    ): TypeOrmModuleOptions {
        return {
            url: configService.get("DATABASE_URL"),
            ssl: false,
            useUTC: true,
            type: "postgres",
            synchronize: true,
            entities: [Post, User]
        }
    }
}