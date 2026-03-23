import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Exclude, Expose } from "class-transformer";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  name: string;

  @Column("varchar")
  email: string;

  @Column("varchar")
  @Exclude()
  password: string;

  @Column("varchar")
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: "avatar_url" })
  getAvatarUrl(): string | null {
    const appApiUrl = process.env.APP_API_URL || "http://localhost:3333";

    return this.avatar
      ? `${appApiUrl}/files/${this.avatar}`
      : null;
  }
}

export default User;
