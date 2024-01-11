 
  import { z } from 'zod';

  const WebPost = z.object({
    query: z.string(),
    apiKey: z.string(),
    userId: z.string(),
    isOpenAi: z.boolean(),
    isArabic: z.boolean(),
    isWeb: z.boolean(),
    isContentCreator: z.boolean()
  });
  export type WebPostType = z.infer<typeof WebPost>;

  // Example usage:
  // const result = WebPostSchema.safeParse({
  //   query: "I want to learn On grid system",
  //   apiKey: "taqa_space_web-Th7NtVJoKItIC4lFhFCHhuwkP50dTl62KbUnhlaVC54",
  //   userId: "105962983257369026275",
  //   isOpenAi: true,
  //   isArabic: false,
  //   isWeb: false,
  //   isContentCreator: false
  // });

  // if (!result.success) {
  //   console.error(result.error);
  // }

const WebPostResponse = z.object({
   // Replace z.any() with a more specific schema if the cost structure is known
  search_result: z.string(),
  source: z.string().url(),
  title: z.string(),
  context: z.string().optional() // Use .optional() if context can be absent
});

export type WebPostResponseType = z.infer<typeof WebPostResponse>;
