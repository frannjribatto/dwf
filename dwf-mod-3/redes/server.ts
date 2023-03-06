import * as net from "net";

function main() {
  const server = net.createServer();

  server.on("connection", (socket) => {
    socket.on("data", (data) => {
      console.log("Los clientes estan online", data);
    });

    socket.on("close", () => {
      console.log("Connection off");
    });

    socket.on("error", (err) => {
      console.log(err.message);
    });
    socket.write("Hola mundo, soy el servidor");
  });

  server.listen(80, () => {
    console.log("Servidor esta escuchando", server.address());
  });
}
main();
