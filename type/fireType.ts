import { z } from "zod";

export const UserPost = z.object({
  email: z.string().email(),
  id: z.string(),
  image: z.string(),
  messages: z.number(),
  name: z.string(),
});
export type UserPostType = z.infer<typeof UserPost>;

// Example usage:
// const user = UserType.parse({
//   email: "muwaffaqimam@gmail.com",
//   id: "12345678987654",
//   image: "",
//   messages: 100,
//   name: "Muwaffaq imam",
// });
