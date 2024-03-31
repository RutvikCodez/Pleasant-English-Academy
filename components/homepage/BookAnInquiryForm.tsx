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

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  time: z.string().refine(
    (value) => {
      const timeRegex = /^\d{1,2}\/\d{1,2}\/\d{2,4},\s*\d{1,2}(?:am|pm)$/i;
      return timeRegex.test(value);
    },
    {
      message: "Please enter time in the format '28/4/23, 1pm'.",
    }
  ),
});

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    form.reset()
  }
  

  const fields: {
    name: "name" | "phoneNumber" | "email" | "time";
    label: string;
    placeholder: string;
    description: string;
  }[] = [
    {
      name: "name",
      label: "Name",
      placeholder: "John Doe",
      description: "Your full name.",
    },
    {
      name: "phoneNumber",
      label: "Phone Number",
      placeholder: "1234567890",
      description: "Your phone number.",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "example@example.com",
      description: "Your email address.",
    },
    {
      name: "time",
      label: "Time",
      placeholder: "28/4/23, 1pm",
      description: "The desired time for the inquiry.",
    },
  ];

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        {fields.map((e) => (
          <div key={e.name}>
            <FormField
            // key={e.name}
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
                <FormDescription>
                  {e.description}
                </FormDescription>
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
