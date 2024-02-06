'use client';

import { CreateWorkSpaceForm } from './CreateWorkSpaceForm';
import { CreateNewWorkSpace } from './CreateNewWorkSpace';

export const CreateWorkSpace = () => {
    return (
        <CreateNewWorkSpace>
            <CreateWorkSpaceForm />
        </CreateNewWorkSpace>
    );
};
