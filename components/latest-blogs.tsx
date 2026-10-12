import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface BlogMeta {
    title: string;
    date: string;
    description: string;
    slug: string;
    tags: string[];
}

export default async function LatestBlogs() {
    const blogDir = path.join(process.cwd(), "./content/blog");
    const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));

    const blogs: BlogMeta[] = files.map((file) => {
        const filePath = path.join(blogDir, file);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContent);
        const slug = file.replace(".md", "");
        return { title: data.title as string, date: data.date as string, description: data.description as string, slug, tags: (data.tags as string[]) || [] };
    });

    // Sort by date descending (newest first)
    blogs.sort((a, b) => (b.date as string).localeCompare(a.date as string));

    // Take the latest 5
    const latest = blogs.slice(0, 5);

    if (latest.length === 0) {
        return null;
    }

    return (
        <section className="w-full">
            <div className="flex flex-col w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl">
                <div className="px-6 pt-4 pb-2">
                    <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">RECENT BLOGS</span>
                </div>
                {latest.map((blog) => (
                    <a
                        key={blog.slug}
                        href={`/blog/${blog.slug}`}
                        className="group block p-6 hover:bg-indigo-600/50 dark:hover:bg-indigo-500/50 transition-colors duration-200"
                    >
                        <time className="text-sm text-zinc-500 dark:text-zinc-400 mb-2 block">
                            {blog.date}
                        </time>
                        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
                            {blog.title}
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-3">
                            {blog.description}
                        </p>
                        {blog.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {blog.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-2 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </a>
                ))}
            </div>
        </section>
    );
}
