"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { inputFieldsData } from "@/utils/getData";
import { bookInquiryFormSchema } from "@/utils/getFormSchema";
import { toast } from 'sonner';

const formSchema = bookInquiryFormSchema;

const BookAnInquiryForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      time: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
   const loader = toast.loading("Sending Email...");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/sendMail`,
        {
          method: "POST",
          body: JSON.stringify(values),
        }
      );
      const data = await response.json();
      toast.success(data)
      toast.dismiss(loader)
      form.reset()
    } catch (error) {
      toast.error("Internal Server Error")
      toast.dismiss(loader)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        {inputFieldsData.map((e) => (
          <div key={e.name}>
            <FormField
              control={form.control}
              name={e.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{e.label}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={e.placeholder}
                      className="bg-transparent"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>{e.description}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default BookAnInquiryForm;
