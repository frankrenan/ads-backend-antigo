import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("conta")
class Conta {

  constructor() {
    if (!this.id) this.id = uuid();
  }

  @PrimaryColumn()
  readonly id: string;

  @PrimaryColumn()
  cpf: string;

  @Column()
  senha: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export { Conta }
