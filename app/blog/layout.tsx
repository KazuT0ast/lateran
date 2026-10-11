import TopHeader from "@/components/top-header";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="w-full min-h-screen flex flex-col">
            <TopHeader />
            <main className="flex-1 p-8">{children}</main>
        </section>
    );
}
