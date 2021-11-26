import { Column, CreateDateColumn, Entity,  PrimaryColumn,  PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("perfil")
class Perfil {

  constructor() {
    if (!this.id) this.id = uuid();
  }

  @PrimaryColumn()
  readonly id: string;

  @Column()
  tipo_perfil: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Perfil }
