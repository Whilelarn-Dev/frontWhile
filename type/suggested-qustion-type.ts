import { z } from "zod";

export const SuggestQustion = z.array(z.string());

export type SuggestQustionType = z.infer<typeof SuggestQustion>;

export const SuggestPayload = z.object({
  query: z.string(),
});

export type SuggestPayloadType = z.infer<typeof SuggestPayload>;
