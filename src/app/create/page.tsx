"use client";
import BackButton from "@/components/ui/BackButton";
import FormPost from "@/components/ui/FormPost";
import React from "react";
import { SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { error } from "console";
import { useRouter } from "next/navigation";

const Create = () => {
  const router = useRouter();

  const HandleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    createPost(data);
  };

  const { mutate: createPost, isPending } = useMutation({
    mutationFn: (newPost: FormInputPost) => {
      return axios.post("/api/posts/create", newPost);
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
    <main>
      <BackButton />
      <h1 className="text-2xl mb-3 font-semibold text-center">Add new post</h1>
      <FormPost submit={HandleCreatePost} />
    </main>
  );
};

export default Create;
