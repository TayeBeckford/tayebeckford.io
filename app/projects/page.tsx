import Link from "next/link";

export default async function ProjectsPage() {
  return (
    <div className="flex flex-col w-full">
      <h1 className="font-bold text-3xl font-serif mb-6">Projects</h1>
      <div className="flex flex-col">
        <Link
          href="/projects"
          className="card bg-zinc-800 p-2 -ml-1 mt-2 max-w-[7cm] mb-10 rounded">
          <div className="self-start">
            <div className="kaiseiFont text-base">Blockchain Explorer</div>
            <div className="kaiseiFont opacity-30 text-sm">work in progress</div>
          </div>
        </Link>
      </div>
    </div>
  );
}