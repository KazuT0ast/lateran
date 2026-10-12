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
            <div className="flex items-center gap-4 mb-8">
                <p className="text-sm text-zinc-500">{data.date}</p>
                {(data.tags as string[])?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {(data.tags as string[]).map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Render the Markdown */}
            <ReactMarkdown>{content}</ReactMarkdown>
        </article>
    );
}