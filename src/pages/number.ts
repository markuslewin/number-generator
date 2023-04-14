import type { APIRoute } from "astro";
import { calculateNumberSlowly } from "../helpers/calculateNumber";

export const get: APIRoute = async () => {
  const number = await calculateNumberSlowly();
  return {
    body: JSON.stringify({ number }),
  };
};
