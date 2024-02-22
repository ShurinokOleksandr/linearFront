'use client';
import {
    ValidationCreateWorkSpaceFormType,
    createWorkSpaceSchema,
} from '@/shared/utils/api';
import { Typography, Button, Input, Flex, Span, Box } from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import styled, { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';
import React from 'react';

import { companyRoles, companySizes } from '../lib/index';
import { OptionItem } from './select/Option';
import { Select } from './select';

export type CreateWorkSpaceFormProps = {
    onSubmit: (data: ValidationCreateWorkSpaceFormType) => void;
    errorMessage?: string;
    isLoading: boolean;
    isError: boolean;
};
export const CreateWorkSpaceForm = ({
    errorMessage,
    isLoading,
    onSubmit,
    isError,
}: CreateWorkSpaceFormProps) => {
    const theme = useTheme();
    const {
        formState: { errors },
        handleSubmit,
        register,
        setValue,
    } = useForm<ValidationCreateWorkSpaceFormType>({
        resolver: zodResolver(createWorkSpaceSchema),
    });

    const handleChangeWorkSpaceName = (value: string) => {
        setValue('url', value.replace(/(?!\/)\s/g, '-').toLowerCase());
    };
    return (
        <Box>
            <Form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                <Box
                    boxShadow={theme.boxShadow.boxShadow}
                    backgroundColor={theme.surface3}
                    borderRadius='8px'
                    padding='24px'
                >
                    <Box marginBottom='20px'>
                        <TitleForInput>Workspace Name</TitleForInput>
                        <InputUrl
                            {...register('name', {
                                onChange: (e) =>
                                    handleChangeWorkSpaceName(e.target.value),
                            })}
                            padding='12px'
                        />
                        {isError &&
                            errorMessage === 'This workspace already exist' && (
                            <Typography data-testid='name' variant='error'>
                                {errorMessage}
                            </Typography>
                        )}
                        {errors?.name?.message && (
                            <Typography data-testid='name' variant='error'>
                                {errors?.name?.message}
                            </Typography>
                        )}
                    </Box>
                    <Box marginBottom='20px'>
                        <TitleForInput>Workspace URL</TitleForInput>
                        <Box position='relative'>
                            <SpanUrl>localhost/</SpanUrl>
                            <InputUrl
                                {...register('url')}
                                padding='12px 12px 12px 77.375px'
                            />
                            {isError && 
                                errorMessage === 'This url already exist' && (
                                <Typography
                                    data-testid='name'
                                    variant='error'
                                >
                                    {errorMessage}
                                </Typography>
                            )}
                            {errors?.url?.message && (
                                <Typography data-testid='url' variant='error'>
                                    {errors?.url?.message}
                                </Typography>
                            )}
                        </Box>
                    </Box>
                    <Divider />
                    <Box>
                        <TitleForInput>
                            How large is your company?
                        </TitleForInput>
                        <Select field='companySize' setValue={setValue}>
                            {companySizes.map(({ text }) => (
                                <OptionItem label={text} key={text} />
                            ))}
                        </Select>
                    </Box>
                    <Box marginTop='30px'>
                        <TitleForInput>What is your role?</TitleForInput>
                        <Select setValue={setValue} field='role'>
                            {companyRoles.map(({ role }) => (
                                <OptionItem label={role} key={role} />
                            ))}
                        </Select>
                    </Box>
                </Box>
                <Flex width='100%'>
                    <Button
                        isLoading={isLoading}
                        variant='secondary'
                        margin='20px auto'
                        type='submit'
                    >
                        Create Workspace
                    </Button>
                </Flex>
            </Form>
        </Box>
    );
};
const Form = styled.form`
    font-size: ${({ theme }) => theme.fontSizes.smallPlus};
`;
const TitleForInput = styled(Typography)`
    color: ${({ theme }) => theme.color2};
    margin-bottom: 10px;
`;
const SpanUrl = styled(Span)`
    color: ${({ theme }) => theme.color3};
    position: absolute;
    top: 22.5px;
    left: 15px;
    z-index: 10;
`;
const InputUrl = styled(Input)`
    margin: 4px 0;
    background: ${({ theme }) => theme.surface3};
`;
const Divider = styled.div`
    background: rgb(53, 56, 74);
    width: 100%;
    height: 1px;
    margin: 24px 0 18px;
`;
