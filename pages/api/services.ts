import { services } from "@/data";
import type { NextApiRequest, NextApiResponse } from "next";

export default function about(req: NextApiRequest, res: NextApiResponse) {
  console.log(services);
  res.status(200).json(services);
}
