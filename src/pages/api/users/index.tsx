// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs");
import type { NextApiRequest, NextApiResponse } from "next";
import newusers from "../../../mocks/users/newusers.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(newusers);
  } else if (req.method === "POST") {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = {
      id: Date.now(),
      name: username as string,
      email: email as string,
      password: password as string,
    };
    newusers.push(newUser);
    console.log(newUser, "console");
    res.status(201).json(newUser);
    // console.log(newUser);
    fs.writeFileSync("users/newusers.json", JSON.stringify(newUser, null, 4));
  }
}
