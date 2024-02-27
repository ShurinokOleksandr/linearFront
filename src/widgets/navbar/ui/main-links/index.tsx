'use client';
import { Typography, Flex } from '@/shared/ui';
import { padding, gap } from '@/shared/theme';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import Link from 'next/link';

import { main_pages } from '../../lib/consts';

export const MainLinks = () => {
    const pathname = usePathname();
    const workspace_url = pathname.split('/');
    const match = pathname.match(/\/team\/SAD\/active/) || false;
    return (
        <List>
            {
                main_pages.map(item =>
                    <ListItem $isActiveLink={match && match[0] === item.href} key={item.text}>
                        <Link href={`/${workspace_url[1]}${item.href}`}>
                            <Flex gap='9px'>
                                {item.icon}
                                <Typography>
                                    {item.text}
                                </Typography>
                            </Flex>
                        </Link>
                    </ListItem>
                )
            }
        </List>
    );
};
const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: ${({ theme }) => theme.fontSizes.smallPlus};
`;
const ListItem = styled.li<{ $isActiveLink: boolean; }>`
    display: flex;
    align-items: center;
    padding: 0 ${padding.sm};
    gap: ${gap.md};
    height: 27px;
    cursor: pointer;
    flex-grow: 1;
    background: ${({ $isActiveLink,theme }) => $isActiveLink && theme.surface75};
    border-radius: ${({ theme }) => theme.border.small};

    &:hover {
        background: ${({ theme }) => theme.surface4};
    }
`;