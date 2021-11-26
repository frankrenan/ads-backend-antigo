import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn,  UpdateDateColumn } from "typeorm";
import { Conta } from "./Conta";
import { Perfil } from "./Perfil";
import { v4 as uuid } from "uuid";

@Entity("servidor")
class Servidor {

  constructor() {
    if (!this.id) this.id = uuid();
  }

  @PrimaryColumn()
  readonly id: string;

  @Column()
  id_perfil: string;

  @JoinColumn({ name: "id_perfil" })
  @ManyToOne(() => Perfil)
  perfil: Perfil;

  @Column()
  id_conta: string;

  @Column()
  cpf_conta: string;

  @JoinColumn({ name: "id_conta" })
  @JoinColumn({ name: "cpf_conta" })
  @ManyToOne(() => Conta)
  conta: Conta;

  @Column()
  nome: string;

  @Column()
  matricula: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export { Servidor }