import BlogPost from "@/components/blog-post";
import TopHeader from "@/components/top-header";
import LatestBlogs from "@/components/latest-blogs";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <TopHeader />
      {/* <h1 className="text-4xl">Lateran</h1> */}

      <main className="flex-1 flex items-center justify-center p-4">
        {/* <BlogPost slug="my-first-blog" /> */}
        <LatestBlogs />
      </main>

    </section>
  );
}
