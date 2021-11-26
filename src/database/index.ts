import "reflect-metadata";
import { createConnection } from "typeorm";

// createConnection({
//   type: "mysql",
//   host: "localhost",
//   port: 3306,
//   username: "root",
//   password: "ads",
//   database: "base_ads",
  
// }).catch((err) => console.log(err));

createConnection().catch((err) => console.log(err));