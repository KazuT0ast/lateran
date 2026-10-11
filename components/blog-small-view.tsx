import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default async function BlogPost({ slug }: { slug: string }) {
    // 1. Find the file
    const filePath = path.join(process.cwd(), "./content/blog", `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf8");

    // 2. Separate the metadata (frontmatter) from the actual text
    const { data, content } = matter(fileContent);

    return (
        <article className="prose prose-zinc dark:prose-invert max-w-none">
            {/* The 'prose' class comes from the typography plugin and styles everything automatically! */}
            <h1 className="text-4xl font-bold mb-2">{data.title}</h1>

            {/* Render the Markdown */}
            <ReactMarkdown>{content}</ReactMarkdown>
        </article>
    );
}