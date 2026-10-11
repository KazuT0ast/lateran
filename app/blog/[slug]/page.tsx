import fs from "fs";
import path from "path";
import { Suspense } from "react";
import BlogPost from "@/components/blog-post";

export async function generateStaticParams() {
    const blogDir = path.join(process.cwd(), "./content/blog");
    const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));
    return files.map((file) => ({ slug: file.replace(".md", "") }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Details params={params} />
        </Suspense>
    );
}

async function Details({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <BlogPost slug={slug} />;
}
