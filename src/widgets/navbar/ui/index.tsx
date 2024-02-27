import { FindIcon, Loading, Button, Flex, Box } from '@/shared/ui';
import { useRequestAllWorkSpaceQuery } from '@/shared/utils';
import { UserPanel, Logout } from '@/entities';
import { padding, gap } from '@/shared/theme';
import { CreateNewIssue } from '@/features';
import styled from 'styled-components';

import { MainLinks } from './main-links';

export const Navbar =   () => {

    const all_Workspaces = useRequestAllWorkSpaceQuery();
    if(all_Workspaces.isPending){
        return <Loading/>;
    }
    if(all_Workspaces.isError){
        return <div>{all_Workspaces.error.message}</div>;
    }
    return (
        <NavbarWrapper>
            <NavbarHeader>
                <UserPanel />
                <Flex
                    gap={gap.md}
                >
                    <CreateNewIssue/>
                    <SearchButton>
                        <FindIcon/>
                    </SearchButton>
                </Flex>
            </NavbarHeader>
            <NavbarBody>
                <Box paddingRight='10px'>
                    <MainLinks/>
                </Box>
                <Logout />
            </NavbarBody>

        </NavbarWrapper>
    );
};
export const NavbarWrapper = styled.nav`
    display: flex;
    flex-direction: column;
`;
const NavbarHeader = styled.nav`
    display: flex;
    flex-direction: column;
    gap: ${gap.lg};
    height: 100%;
    padding: ${padding.md};

`;
const NavbarBody = styled.nav`
    height: 100vh;
    overflow: auto;
    padding: 0 0 0 ${padding.md};

`;
const SearchButton = styled(Button)`
    height: 28px;
    min-width: 28px;
    font-weight: 500;
    line-height: 28px;
    position: relative;
    box-shadow:${({ theme }) =>  theme.boxShadow.boxShadow};
    border: ${({ theme }) =>  theme.borderColor} 1px solid ;
    background: ${({ theme }) => theme.surface75};
    border-radius: ${({ theme }) => theme.border.small};
`;