'use client';

import { requestCreateWorkspace } from '@/shared/utils';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { CreateWorkSpaceForm } from './CreateWorkSpaceForm';
import { CreateNewWorkSpace } from './CreateNewWorkSpace';

export const CreateWorkSpace = () => {
    const router = useRouter();
    const createWorkSpace = useMutation({
        onSuccess:  (data) => {
            router.push(
                `${data.url}/team/${data.name
                    .substring(0, 3)
                    .toUpperCase()}/active`
            );
        },
        mutationFn: requestCreateWorkspace,
    });

    return (
        <CreateNewWorkSpace>
            <CreateWorkSpaceForm
                onSubmit={async (data) => createWorkSpace.mutate(data)}
                errorMessage={createWorkSpace?.error?.message}
                isLoading={createWorkSpace.isPending}
                isError={createWorkSpace.isError}
            />
        </CreateNewWorkSpace>
    );
};
