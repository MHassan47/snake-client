const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Connected to game server");
    conn.write("Name: MH");
  });
  return conn;
};
connect();
