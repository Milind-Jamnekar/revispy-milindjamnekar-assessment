"use server";

import { generateRandmonInterests } from "@/lib/utils";
import { cache } from "react";

export const getInterests = cache(
  async () => generateRandmonInterests()
  //   ["interests"]
);
