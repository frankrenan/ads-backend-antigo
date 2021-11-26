import { EntityRepository, Repository } from "typeorm";
import { Servidor } from "../database/entities/Servidor";


@EntityRepository(Servidor)
class ServidorRepository extends Repository<Servidor> { }

export { ServidorRepository }