import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";


class ContaMiddleware {

  verificarConta(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) return response.status(401).send({ mensagem: "Você não tem token para passar!" });

    const parts = authHeader.split(' ');

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) return response.status(401).send({ mensagem: "Você não tem token para passar!" });

    verify(token, process.env.API_SECRET_KEY, (err, decoded) => {
      if (err) return response.status(401).send({mensagem: "Token Inválido!"});

      request.params.id = decoded.id;
      // console.log(request.params.id);
      return next();
    })
  }

}

export { ContaMiddleware }