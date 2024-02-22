import * as z from 'zod';

export const createWorkSpaceSchema = z.object({
    name: z.string().min(1, { message: 'Required' }),
    url: z.string().min(1, { message: 'Required' }),
    companySize: z.string().optional(),
    role: z.string().optional(),
});
export type ValidationCreateWorkSpaceFormType = z.infer<
    typeof createWorkSpaceSchema
>;
