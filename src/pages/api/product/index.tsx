// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import product from "../../../mocks/product/product.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(product);
  } else if (req.method === "POST") {
    const comment = req.body.comment;
    const newComment = {
      id: Date.now(),
      text: comment,
    };
    product.push(newComment);
    res.status(201).json(newComment);
  }
}
