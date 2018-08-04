import * as express from "express";

const app  = express();
const port = 3000;

// Greet a user
app.get("/greet", (request, response) => {
    response.status(200).send({
        success: true,
        message: "Hi there!"
    });
});

// Get a current time
app.get("/time", (request, response) => [
    response.status(200).send({
        success: true,
        message: new Date()
    })
])

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});