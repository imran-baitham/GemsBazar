// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import product from "../../../mocks/product/product.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { projectId } = req.query;

  if (req.method === "GET") {
    const comment = product.find((c) => c.id === parseInt(projectId));
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const deleteComment = product.find((c) => c.id === parseInt(projectId));

    const index = product.findIndex((x) => x.id === parseInt(projectId));
    product.splice(index, 1);

    res.status(200).json(deleteComment);
  }
}
