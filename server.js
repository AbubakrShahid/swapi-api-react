const express = require("express");

const app = express();

/**
 * Objective 1: Implement a mechanism to check for the presense of an
 * authorization header that runs on every request. The authorization
 * header should contain a bearer token. If it exists, log the value
 * of the token to the console and allow the request to proceed.
 *
 * Otherwise return an unauthorized response. Include an appropriate http response
 * code. The response can be in any format you choose, JSON, text etc.
 */

/**
 * Objective 2: Create a unit test for the function(s) implemented in objective 1. You can use any testing framework of your choice.
 */

const apiPort = 3001;

app.listen(apiPort, () => {
  console.log(`Application is ready at http://localhost:${apiPort}`);
});
