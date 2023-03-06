import * as net from "net";

function main() {
  const client = net.createConnection({ port: 80 }, () => {
    console.log("Servidor conectado");
    client.write("Hola mundo, soy el cliente");
  });

  client.on("data", (data) => {
    console.log(data.toString());
    client.end;
  });

  client.on("end", () => {
    console.log("Desconectado del servidor");
  });
}

main();
