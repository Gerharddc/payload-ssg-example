import { notFound } from "next/navigation";

export default function catchAll() {
    return notFound();
}