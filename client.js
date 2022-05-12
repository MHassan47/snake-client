const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.on("connect", (connect) => {
    console.log("Connected to game server");
  });
  conn.on("connect", () => {
    conn.write("Name: MH");
  });

  conn.setEncoding("utf8");
  return conn;
};
module.exports = {
  connect,
};
