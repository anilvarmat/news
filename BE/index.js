const express = require("express"),
    http = require("http"),
    { config } = require("dotenv");
config();
const app = express();
const { routes } = require("./utils/routes");
for (const route of routes) {
    app.use(route.routePath, route.router);
}
(async () => {
    try {
        await http.createServer(app).listen(process.env.PORT);
        console.log("Express Server is running on port 3005");
    } catch (e) {
        console.error(`Server startup failed. Error: ${e}`);
        console.error(e.stack);
    }
})();

const logFunction = console.log;
const errFunction = console.error;

console.log = logStatement => {
    logFunction(new Date() + " " + logStatement);
};

console.error = errStatement => {
    errFunction(new Date() + " " + errStatement);
};