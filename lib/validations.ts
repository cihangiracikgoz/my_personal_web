import { z } from "zod";

export const contactFormSchema = z.object({
    firstName: z.string().nonempty('First name is required').max(100, 'First name is too long'),
    lastName: z.string().nonempty('Last name is required').max(100, 'Last name is too long'),
    email: z.string().email('Please enter a valid email address').max(320, 'Email is too long'),
    message: z.string().nonempty('Message is required').max(1000, 'Message is too long'),
});