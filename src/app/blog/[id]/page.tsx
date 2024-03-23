import BackButton from "@/components/ui/BackButton";
import ButtonAction from "@/components/ui/ButtonAction";
import { db } from "@/lib/db";
import React from "react";

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

async function getPost(id: string) {
  const res = db.post.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
  });

  return res;
}

const BlogDataPage: React.FC<BlogDetailPageProps> = async ({ params }) => {
  const post = await getPost(params.id);

  return (
    <main>
      <BackButton />
      <div className="flex  items-center justify-between">
        <h2 className="text-2xl font-bold my-4">{post?.title}</h2>
        <ButtonAction id={params.id} />
      </div>
      <span className="font-semibold text-gray-300 ">{post?.tag.name}</span>
      <p>{post?.content}</p>
    </main>
  );
};

export default BlogDataPage;
