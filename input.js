let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    if (key === "\u0003") {
      process.exit();
    }
    if (key === "w") {
      console.log(`Up`);
      conn.write(`Move: up`);
    }
    if (key === "a") {
      console.log(`Left`);
      conn.write(`Move: left`);
    }
    if (key === "s") {
      console.log(`Down`);
      conn.write(`Move: down`);
    }
    if (key === "d") {
      console.log(`Right`);
      conn.write(`Move: right`);
    }
  };
  stdin.on("data", (data) => {
    handleUserInput(data);
  });
  return stdin;
};

module.exports = {
  setupInput,
};
