import TopHeader from "@/components/top-header";
import MusicCatalog from "@/components/music/MusicCatalog";

export default function CatalogPage() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <TopHeader />

      <main className="flex p-10">
        <section className="flex-1 flex border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
          <MusicCatalog />
        </section>
      </main>
    </section>
  );
}
