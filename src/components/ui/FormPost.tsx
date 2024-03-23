"use client";
import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Tag } from "@prisma/client";
import { Loader1 } from "./loader";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing?: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputPost>();

  const { data: dataTags, isPending: isLoadingTags } = useQuery<Tag[]>({
    queryKey: ["tags"],
    queryFn: async () => {
      const res = await axios.get("/api/tags");
      return res.data;
    },
  });

  console.log(dataTags);

  return (
    <form
      action="
   "
      onSubmit={handleSubmit(submit)}
      className="flex mx-auto w-[500px] flex-col items-center justify-center gap-5 mt-10"
    >
      <input
        type="text"
        {...register("title", { required: true })}
        placeholder="Post title"
        className="input input-bordered w-full max-w-lg"
        defaultValue={""}
      />
      <textarea
        className="textarea w-full mx-w-lg 
        textarea-bordered"
        placeholder="Post Description"
        {...register("description", { required: true })}
        defaultValue={""}
      ></textarea>
      <textarea
        className="textarea w-full mx-w-lg 
        textarea-bordered"
        placeholder="Post Content"
        {...register("content", { required: true })}
        defaultValue={""}
      ></textarea>
      {isLoadingTags ? (
       <Loader1/>
      ) : (
        <select
          {...register("tag", { required: true })}
          className="select select-bordered w-full max-w-lg"
          defaultValue={""}
        >
          <option disabled selected value={""}>
            Select Tags
          </option>
          {dataTags?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      )}

      <button type="submit" className="btn w-full bg-blue-500 ">
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FormPost;
