import { name, about, bio, avatar } from "../lib/info";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">{about()}</p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full"
          src={avatar}
          placeholder="blur"
          width={150}
          priority
        />
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">{bio()}</p>
    </section>
  );
}
