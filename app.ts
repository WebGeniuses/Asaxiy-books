import fastify from "fastify";
import path  from "path";
import dotenv from "dotenv";

dotenv.config({
    path:path.resolve(__dirname,'../.env')
})

const server = fastify({
    logger:true
})

function start(){
    server.listen({
        port:Number(process.env.PORT),
        host:String(process.env.HOST)
    }).then(()=>console.log("Muvaffaqiyatli ishga tushdi !!!"))
    .catch((e)=>console.log("Serverda xatolik: ",e))

}

start()