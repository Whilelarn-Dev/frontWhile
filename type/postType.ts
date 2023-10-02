import z, { object } from "zod";

export const Post = z.object({
  search_result: z.string(),
  post_info: z.object({
    postUrl: z.string(),
    postContent: z.string(),
    videoUrl: z.string(),
    imgUrl: z.string(),
    relevant_posts: z.array(z.string()),
    questions: z.array(z.string()),
  }),
});

export type PostSchema = z.infer<typeof Post>;

export const PostArray = z.array(Post);
export type PostArraySchema = z.infer<typeof PostArray>;

export const Payload = z.object({
  query: z.string(),
  apiKey: z.string(),
  isShort: z.boolean(),
  isArabic: z.boolean(),
  isContentCreator: z.boolean(),
});
export type PayloadSchema = z.infer<typeof Payload>;

export const Person = z.object({
  name: z.string(),
  image: z.string(),
  specialize: z.string(),
  discreption: z.string(),
  firstName: z.string(),
  apiKey: z.string(),
  isArabic: z.boolean(),
  isContentCreator: z.boolean(),
});
export type PersonSchema = z.infer<typeof Person>;

export const Message = z.object({
  message: z.string(),
  right: z.boolean(),
});

export type MessageSchema = z.infer<typeof Message>;
