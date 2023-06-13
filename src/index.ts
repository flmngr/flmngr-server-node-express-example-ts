import express from "express";
import {bindFlmngr} from "@flmngr/flmngr-server-node-express";


// Create Express app
const app = express();

// Let Flmngr to serve "/flmngr" URL on your webserver with storage placed in "./files" (mapped to "/files" URL)
bindFlmngr({
    app: app,
    urlFileManager: "/flmngr",
    urlFiles: "/files/",
    dirFiles: "./files"
});

/*

  Here you can use your own routes that your app/website will have:

    app.get("/some/page", ...);
    app.post("/some/request", ...);

  etc.

 */

app.listen(
    3000,
    '127.0.0.1',
    function() {
        // Server started successfully
        console.log("Express server with Flmngr started");
    }
);