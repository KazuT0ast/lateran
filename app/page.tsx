import TopHeader from "@/components/top-header";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <TopHeader />
      <main className="flex-1 p-8 flex items-center justify-center">
        <h1 className="text-4xl">Lateran</h1>
      </main>
    </section>
  );
}
