import { createConnection } from "typeorm"
import { Banker } from "./entities/Banker"
import { Client } from "./entities/Client"


const main = async () =>{
    try {
        const connection = await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "root",
            password: "12345",
            database: "typeorm",
            entities: [Client, Banker],
            synchronize: true
        })
        console.log("connected to postgres")

    } catch (error) {
        console.log(error)
        throw new Error("Unable to connect to db")
    }
}

main()