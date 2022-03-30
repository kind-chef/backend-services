import express from "express";

const port = 8090;
const app = express();

app.listen(port, () => {
  console.log(`[App]: Listening on port ${port}`);
});

app.get("/", (req: any, res: any) => {
  console.log(req);
  res.send("Hello World !");
});
