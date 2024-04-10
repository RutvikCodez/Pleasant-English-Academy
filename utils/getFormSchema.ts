import { z } from "zod";

export const bookInquiryFormSchema = z.object({
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
