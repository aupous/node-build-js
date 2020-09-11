const execa = require("execa");

(async () => {
  try {
    await execa("npx", ["vue-cli-service", "build"], { cwd: "./frontend" });
  } catch (error) {
    console.log(error);
  }
})();
