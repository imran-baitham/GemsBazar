// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import newUser from "../../../mocks/users/newusers.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { projectId }: any = req.query;

  if (req.method === "GET") {
    const comment = newUser.find((c) => c.id === parseInt(projectId));
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const deleteComment = newUser.find((c) => c.id === parseInt(projectId));

    const index = newUser.findIndex((x) => x.id === parseInt(projectId));
    newUser.splice(index, 1);

    res.status(200).json(deleteComment);
  }
}
