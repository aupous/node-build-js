const execa = require("execa");

(async () => {
  try {
    await execa("yarn", ["build", "--productID=1234", "--shopID=shopName"], {
      cwd: "./frontend",
    });
  } catch (error) {
    console.log(error);
  }
})();
