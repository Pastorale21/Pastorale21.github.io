import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).optional(),
      cover: image().optional(),
    }),
});

// 影集：一次投放 = 一「贴」。三种来源共用同一模型，只靠 kind 区分眉标：
//   roll   胶卷贴 —— 一卷冲完发一贴（roll: 卷七, film: Kodak Gold 200）
//   theme  主题贴 —— 跨日期收拢的一组（title 即主题名）
//   casual 散拍贴 —— 当天随手几张（眉标显示日期 · 散拍）
const albums = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/albums" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      kind: z.enum(["roll", "theme", "casual"]).default("casual"),
      roll: z.string().optional(), // 「卷七」；kind=roll 时必填
      film: z.string().optional(), // 「Kodak Gold 200」
      note: z.string().optional(), // 卷头一句话；可省
      draft: z.boolean().optional(),
      photos: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
          }),
        )
        .min(1),
    }),
});

export const collections = { blog, albums };
