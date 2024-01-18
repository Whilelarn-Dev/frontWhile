import { z } from 'zod';

export const Client = z.object({
  apiKey: z.string(),
  button_color: z.string(),
  clientName: z.string(),
  folderName: z.string(),
  hint: z.string(),
  id: z.string(),
  image: z.string().optional(),
  isEnded: z.boolean(),
  questions: z.array(z.string()).optional(),
});
 export type ClientType = z.infer<typeof Client>;
