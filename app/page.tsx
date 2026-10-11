import BlogPost from "@/components/blog-post";
import TopHeader from "@/components/top-header";
import LatestBlogs from "@/components/latest-blogs";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <TopHeader />

      <section className="w-full flex-1 flex flex-col items-center justify-center gap-4">
        <Image src="/Laterano.webp" alt="Lateran" width={300} height={300} />
        <h1 className="text-4xl">Lateran</h1>
      </section>

      <main className="flex-1 flex flex-row items-center justify-center p-4">
        {/* <BlogPost slug="my-first-blog" /> */}
        <LatestBlogs />
      </main>

    </section>
  );
}
