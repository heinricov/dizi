import { Sidebar } from "@/components/navigasi/sidebar";

export default function DocsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container px-4 mx-auto">
      <div className="flex gap-8 py-8">
        <Sidebar />
        <div className="flex-1 min-w-0 md:pl-4">{children}</div>
      </div>
    </div>
  );
}
