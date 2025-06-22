import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <Link href="/graph-1" target="_blank" className="font-bold text-blue-500">Graph 1</Link>
      <Link href="/graph-2" target="_blank" className="font-bold text-blue-500">Graph 2</Link>
    </div>
  );
}
