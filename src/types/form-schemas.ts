import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, { message: "Minimum length 8 required" })
  .max(20, { message: "Maximum length should be 20" })
  .refine((password) => /[A-Z]/.test(password), {
    message: "Uppercase character required (A-A)",
  })
  .refine((password) => /[a-z]/.test(password), {
    message: "Lowercase character required (a-z)",
  })
  .refine((password) => /[0-9]/.test(password), {
    message: "Number should be required (0-9)",
  })
  .refine((password) => /[!@#$%^&*]/.test(password), {
    message: "Special character required (!@#$%^&*)",
  });

const signupFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name should be containe atleast 3 characters" }),
  email: z
    .string()
    .min(1, { message: "Email connot be empty" })
    .max(255)
    .email(),
  password: passwordSchema,
});

const siginFormSchema = z.object({
  email: z.string().email().min(1).max(255),
  password: passwordSchema,
});

const otpFormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const interestFormShema = z.object({
  interests: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export {
  passwordSchema,
  signupFormSchema,
  siginFormSchema,
  otpFormSchema,
  interestFormShema,
};
