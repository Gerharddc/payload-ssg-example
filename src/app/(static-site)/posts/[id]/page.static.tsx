import { getPayload } from "payload";
import config from "@payload-config";
import styles from "../../page.module.css";

export default async function PostPage({ params }: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const payload = await getPayload({ config });
    const post = await payload.findByID({
        id,
        collection: "posts",
    });

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </main>
        </div>
    );
}

export async function generateStaticParams(): Promise<{ id: string; }[]> {
    const payload = await getPayload({ config });
    const posts = (await payload.find({ collection: "posts" })).docs;

    return posts.map((post) => ({ id: post.id.toString() }));
}
