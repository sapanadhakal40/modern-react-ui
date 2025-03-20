import { z } from 'zod';

export const registerSchema = z.object({
    email: z.string({
        required_error: 'Email is required',
    })
        .email({
            message: 'Invalid email address',
        }),
        fullName: z.string({
            required_error: 'Full Name is required',
        })
        .min(3, 'Full Name must be at least 3 characters long'),

         password: z.string({
        required_error: 'Password is required',
    })
        .min(6),
    confirmPassword: z.string({
        required_error: 'Confirm Password is required',
    })
        .min(6),
})
.refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;