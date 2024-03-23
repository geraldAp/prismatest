"use client";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { Pencil, Trash } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface ButtonActionProps {
  id: string;
}

const ButtonAction: React.FC<ButtonActionProps> = ({ id }) => {
  const router = useRouter();
  const { mutate: deletePost } = useMutation({
    mutationFn: async () => {
      return axios.delete(`/api/posts/${id}`);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  return (
    <div>
      <Link className="btn mr-2" href={`/edit/${id}`}>
        <Pencil />
        Edit
      </Link>
      <button
        onClick={() => deletePost()}
        className="btn cursor-pointer btn-error "
      >
        <Trash />
        Delete
      </button>
    </div>
  );
};

export default ButtonAction;
