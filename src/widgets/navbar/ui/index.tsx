import { UserPanel, Logout } from '@/entities';
import styled from 'styled-components';

export const Navbar =   () => {


    return (
        <NavbarWrapper>
            <UserPanel />
            <Logout />
        </NavbarWrapper>
    );
};
export const NavbarWrapper = styled.nav`
    height: 100%;
    
 
`;
