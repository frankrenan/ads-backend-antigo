import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn,  UpdateDateColumn } from "typeorm";
import { Permissoes } from "./Permissoes";
import { v4 as uuid } from "uuid";

@Entity("usuarios")
class Usuario {

  constructor() {
    if (!this.id) this.id = uuid();
  }

  @PrimaryColumn()
  readonly id: string;

  @ManyToMany( () => Permissoes)
  @JoinTable()
  permissoes: Permissoes[];

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