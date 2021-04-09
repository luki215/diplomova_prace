const fs = require("fs");
const axios = require("axios");
const endOfLine = require("os").EOL;
const apiURL = "https://api-dp-eshop.web.app";
const routesFile = "./routes.txt";

const routes = [];

const writeCategories = () => {
  axios
    .get(`${apiURL}/categories`)
    .then((res) => {
      res.data.forEach((cat) => {
        routes.push("cat/" + cat.slug);
      });
    })
    .catch((e) => console.log(e));
};

const writeProducts = () => {
  axios
    .get(`${apiURL}/products?pageSize=9999`)
    .then((res) => {
      res.data.items.forEach((product) => {
        routes.push("product/" + product.slug);
      });
      fs.writeFileSync(routesFile, routes.join(endOfLine), "utf8");
    })
    .catch((e) => console.log(e));
};

const writePages = () => {
  axios
    .get(`${apiURL}/static-page`)
    .then((res) => {
      res.data.forEach((page) => {
        routes.push("pages/" + page.slug);
      });
      fs.writeFileSync(routesFile, routes.join(endOfLine), "utf8");
    })
    .catch((e) => console.log(e));
};

fs.writeFileSync(routesFile, routes.join(endOfLine), "utf8");

writeCategories();
writeProducts();
writePages();
