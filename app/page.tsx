import BlogPost from "@/components/blog-post";
import TopHeader from "@/components/top-header";
import LatestBlogs from "@/components/latest-blogs";
import Image from "next/image";
import LastFMCard from "@/components/last-fm-card";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <TopHeader />

      <section className="w-3/4 mx-auto flex-1 flex flex-col items-center justify-center border-b border-zinc-200 dark:border-zinc-600">
        <Image src="/Laterano.webp" alt="Lateran" width={300} height={300} />
        <h1 className="text-4xl">Lateran</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-10">"Apple pie, with char siu!"</p>
      </section>

      <main className="flex p-10">
        <section className="flex-1 flex flex-row items-center justify-center">
          {/* <BlogPost slug="my-first-blog" /> */}
          <LatestBlogs />
        </section>

        <section>
          <LastFMCard />
        </section>

      </main>

    </section>
  );
}
