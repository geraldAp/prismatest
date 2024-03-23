import { Post, Tag } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  description: string;
  id: string;
  tag: Tag;
}

const PostCard: React.FC<Props> = ({ title, description, tag, id }) => {
  return (
    <div className="card w-full border bg-base-100 shadow-lg">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end items-center">
          <span className="badge badge-neutral">{tag.name}</span>
          <Link className="hover:underline" href={`/blog/${id}`}>
            Read more...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
