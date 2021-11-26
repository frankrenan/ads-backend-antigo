import { Column, Entity, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm";
import { Conta } from "./Conta";
import { v4 as uuid } from "uuid";

@Entity("administrador")
class Administrador {

  constructor() {
    if (!this.id) this.id = uuid();
  }

  @PrimaryColumn()
  readonly id: string;

  @Column()
  id_perfil: string;

  @Column()
  id_conta: string;

  @JoinColumn({ name: "id_conta" })
  @JoinColumn({ name: "cpf_conta" })
  @ManyToOne(() => Conta)
  conta: Conta;

  @Column()
  cpf_conta: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export { Administrador }
