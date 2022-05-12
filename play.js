const net = require("net");

console.log("Connecting ...");
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function () {
  if (key === "\u0003") {
    process.exit();
  }
};

connect();
setupInput();
handleUserInput();
