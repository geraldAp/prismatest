"use client";
import React from "react";
import FormPost from "@/components/ui/FormPost";
import { SubmitHandler } from "react-hook-form";

const EditPage = () => {
  const HandleEditPost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  return (
    <main>
      <h1 className="text-2xl mb-3 font-semibold text-center">Edit post</h1>
      <FormPost submit={HandleEditPost} isEditing />
    </main>
  );
};

export default EditPage;
