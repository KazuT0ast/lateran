import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface BlogMeta {
    title: string;
    date: string;
    description: string;
    slug: string;
}

export default async function LatestBlogs() {
    const blogDir = path.join(process.cwd(), "./content/blog");
    const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));

    const blogs: BlogMeta[] = files.map((file) => {
        const filePath = path.join(blogDir, file);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContent);
        const slug = file.replace(".md", "");
        return { title: data.title as string, date: data.date as string, description: data.description as string, slug };
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
            {/* <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
                Latest Posts
            </h2> */}
            <div className="flex flex-col w-full">
                {latest.map((blog) => (
                    <a
                        key={blog.slug}
                        href={`/blog/${blog.slug}`}
                        className="mb-4 group block p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors duration-200"
                    >
                        <time className="text-sm text-zinc-500 dark:text-zinc-400 mb-2 block">
                            {blog.date}
                        </time>
                        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
                            {blog.title}
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                            {blog.description}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
}
