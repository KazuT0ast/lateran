import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

function CustomLink({ href, children, ...props }: { href?: string; children?: React.ReactNode }) {
    return href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
        </a>
    ) : (
        <a {...props}>{children}</a>
    );
}

export default async function BlogPost({ slug }: { slug: string }) {
    // 1. Find the file
    const filePath = path.join(process.cwd(), "./content/blog", `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf8");

    // 2. Separate the metadata (frontmatter) from the actual text
    const { data, content } = matter(fileContent);

    return (
        <article className="prose prose-zinc dark:prose-invert max-w-none bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
            {/* Header Section */}
            <header className="px-6 pt-6 pb-4 mb-4 border-b-4 border-zinc-200 dark:border-zinc-800">
                <time className="text-sm text-zinc-500 dark:text-zinc-400 mb-2 block">
                    {data.date}
                </time>
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    {data.title}
                </h1>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 -mt-1 mb-4">
                    {data.description}
                </p>
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
            </header>

            {/* Content Section */}
            <section className="px-6 pb-6">
                {/* The 'prose' class comes from the typography plugin and styles everything automatically! */}
                <ReactMarkdown components={{ a: CustomLink }}>{content}</ReactMarkdown>
            </section>
        </article>
    );
}