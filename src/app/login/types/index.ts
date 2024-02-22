import * as z from 'zod';

export const schema = z.object({
    password: z
        .string()
        .min(6, { message: 'Length of password should be minimum 6 letter.' }),
    username: z
        .string()
        .min(1, { message: 'Please enter an username for login.' }),
});
export type ValidationLoginForm = z.infer<typeof schema>;
