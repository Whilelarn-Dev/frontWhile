import { z } from "zod";

export const SuggestQustion = z.array(z.string());

export type SuggestQustionType = z.infer<typeof SuggestQustion>;
