import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn,  UpdateDateColumn } from "typeorm";
import { Perfil } from "./Perfil";
import { v4 as uuid } from "uuid";

@Entity("usuario")
class Usuario {

  constructor() {
    if (!this.id) this.id = uuid();
  }

  @PrimaryColumn()
  readonly id: string;

  // @Column()
  // id_perfil: string;

  // @JoinColumn({ name: "id_perfil" })
  // @ManyToOne(() => Perfil)
  // perfil: Perfil;

  @Column()
  cpf: string;

  @Column()
  senha: string;

  @Column()
  nome: string;

  @Column()
  administrador: boolean;

  @Column()
  email: string;
  
  @Column()
  ativo: boolean;

  @Column()
  matricula: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export { Usuario }