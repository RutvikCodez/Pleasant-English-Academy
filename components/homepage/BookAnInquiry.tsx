"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import BookAnInquiryForm from "./BookAnInquiryForm";

const BookAnInquiry = () => {
  const [open, setopen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setopen}>
      <DialogTrigger className="bg-black p-4 rounded-md hover:bg-green-500 transition-colors duration-300">
        Book an Inquiry
      </DialogTrigger>
      <DialogContent className="bg-black text-white">
        <BookAnInquiryForm />
      </DialogContent>
    </Dialog>
  );
};

export default BookAnInquiry;
