import { getAll, getByID } from "./cosas";

function main() {
  console.table(getAll());
  console.log("\n");
  console.table(getByID(2));
}

main();
