import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";
import { Mdx } from "@components/mdx";

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogProps {
  params: {
    slug: string;
  };
}

export default async function Blog({ params }: BlogProps) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <h1 className="mb-4 pb-2 pr-2 font-bold text-3xl font-serif max-w-[650px]">
        <Balancer>{post.title}</Balancer>
      </h1>
      <Mdx code={post.body.code} />
    </section>
  );
}
