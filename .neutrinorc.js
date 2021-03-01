const web = require("@neutrinojs/web");
const jest = require("@neutrinojs/jest");

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    web({
      html: {
        title: "tonejs",
      },
    }),
    jest(),
  ],
};
