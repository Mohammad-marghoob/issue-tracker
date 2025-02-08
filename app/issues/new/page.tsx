"use client";

import { useForm, Controller } from "react-hook-form";
import { Button, Callout, TextField } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/ValidationSchemas";
import { z } from "zod";
import axios from "axios";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";

type IssueForm = z.infer<typeof createIssueSchema>;

const newIssuePage = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });

  const [error, setError] = useState("");
  const [isSubmitting, setisSubmitting] = useState(false);

  return (
    <div className="max-w-xl">
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            setisSubmitting(true);
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setisSubmitting(false);
            setError("An error occurred.");
          }
        })}
      >
        <TextField.Root placeholder="Title" {...register("title")} />
        {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
        <Controller
          name="description"
          control={control}
          render={({ field }) => {
            return <SimpleMDE placeholder="Description" {...field} />;
          }}
        ></Controller>
        {errors.description && (
          <ErrorMessage>{errors.description.message}</ErrorMessage>
        )}
        <Button disabled={isSubmitting}>
          Submit New Issue
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default newIssuePage;
