import { NewIssueIcon, Typography, Flex } from '@/shared/ui';
import styled, { useTheme } from 'styled-components';
import { padding, gap } from '@/shared/theme';

export const CreateNewIssue = () => {
    const theme = useTheme();
    return (
        <Wrapper role='button'>
            <NewIssueIcon/>
            <Typography
                fontSize={theme.fontSizes.mini}
            >
                New issue
            </Typography>
        </Wrapper>
    );
};
const Wrapper = styled(Flex)`
    align-items: center;
    padding: 0 ${padding.sm};
    gap: ${gap.md};
    height: 28px;
    cursor:pointer;
    flex-grow: 1;
    box-shadow:${({ theme }) =>  theme.boxShadow.boxShadow};
    border: ${({ theme }) =>  theme.borderColor} 1px solid ;
    background: ${({ theme }) => theme.surface75};
    border-radius: ${({ theme }) => theme.border.small};
    &:hover{
        background: ${({ theme }) => theme.surface4};
    }
`;