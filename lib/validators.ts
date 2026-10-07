import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name is required." }),
  phone: z.string().min(7, { message: "Please enter a valid phone number." }),
  projectType: z.string().min(1, { message: "Please select a project type." }),
  budget: z.string().min(1, { message: "Please select an estimated budget." }),
  message: z.string().min(10, { message: "Project details must be at least 10 characters." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const consultationFormSchema = z.object({
  fullName: z.string().min(2, { message: "Name is required." }),
  workEmail: z.string().email({ message: "Valid work email is required." }),
  phoneNumber: z.string().optional(),
  serviceCategory: z.string().min(1, { message: "Please select a service." }),
  timeframe: z.string().min(1, { message: "Please select a target timeframe." }),
  briefDescription: z.string().min(10, { message: "Brief details are required." }),
});

export type ConsultationFormValues = z.infer<typeof consultationFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export type NewsletterFormValues = z.infer<typeof newsletterSchema>;
