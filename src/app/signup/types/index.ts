import * as z from 'zod';

export const signUpFormSchema = z
    .object({
        password: z.string().min(6, {
            message: 'Length of password should be minimum 6 letters.',
        }),
        username: z
            .string()
            .min(1, { message: 'Please enter an username for login.' }),
        repeatPassword: z
            .string()
            .min(1, { message: 'Confirm Password is required' }),
    })
    .refine(({ repeatPassword, password }) => password === repeatPassword, {
        message: 'Password do not match',
        path: ['repeatPassword'],
    });
export type signUpValidationType = z.infer<typeof signUpFormSchema>;
