import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "body",
      type: "text",
      required: true,
    },
  ],
}
