import styles from "./page.module.css";
import { getPayload } from "payload";
import config from "@payload-config";
import Link from "next/link";

export default async function Home() {
  const payload = await getPayload({ config });
  const posts = (await payload.find({ collection: "posts" })).docs;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </h1>
            <p>{post.body}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
