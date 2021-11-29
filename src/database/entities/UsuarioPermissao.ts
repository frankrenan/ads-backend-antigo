import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Permissoes } from "./Permissoes";
import { Usuario } from "./Usuario";
import { v4 as uuid } from "uuid";

@Entity("usuario_permissao")
class UsuarioPermissao {

  constructor() {
    if (!this.id) this.id = uuid();
  }

  @PrimaryColumn()
  readonly id: string;

  @Column()
  id_usuario: string;

  @JoinColumn({ name: "id_usuario" })
  @ManyToOne(() => Usuario)
  usuario: Usuario

  @Column()
  id_permissao: string;

  @JoinColumn({ name: "id_permissao" })
  @ManyToOne(() => Permissoes)
  permissao: Permissoes

  @CreateDateColumn()
  created_at: Date;

}

export { UsuarioPermissao }
