import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { buildConfig } from "payload";
import path from "path";
import { fileURLToPath } from "url";

import { Users } from "./collections/Users";
import { Posts } from "./collections/Posts";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    editor: lexicalEditor(),
    collections: [Users, Posts],
    secret: process.env.PAYLOAD_SECRET || "",
    typescript: {
        outputFile: path.resolve(dirname, "payload-types.ts"),
    },
    db: sqliteAdapter({
        client: {
            url: process.env.DATABASE_URI || "",
        },
    }),
    sharp,
});
