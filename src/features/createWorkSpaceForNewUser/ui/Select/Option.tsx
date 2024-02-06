'use client';
import styled, { useTheme } from 'styled-components';
import { useListItem } from '@floating-ui/react';
import { SelectedArrow, Box } from '@/shared/ui';
import React from 'react';

import { SelectContext } from '../../model/SelectCompanySizeContext';

export type OptionItemType = {
	label: string
}
export const OptionItem = ({ label }:OptionItemType) => {
    const {
        selectedIndex,
        getItemProps,
        handleSelect,
        activeIndex
    } = React.useContext(SelectContext);
    const theme = useTheme();
    const { index, ref } = useListItem({ label });
	
    const isActive = activeIndex === index;
    const isSelected = selectedIndex === index;
    return (
        <Option
            style={{
                backgroundColor:isSelected ? theme.surface7 : ''
            }}
            aria-selected={isActive && isSelected}
            tabIndex={isActive ? 0 : -1}
            role='option'
            ref={ref}
            {...getItemProps({
                onClick: () => handleSelect(index)
            })}
        >
            {label}
            {isSelected ? <SelectedArrow fill={theme.surface1} /> : <></>}
        </Option>
    );
};

const Option = styled(Box)`
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 30px;
    margin: 2px 0;
    width: 100%;
    border-radius: ${({ theme }) => theme.border.regular};
    padding: 0 5px;
    justify-content: space-between;
    &:hover{
        background-color: ${({ theme }) => theme.surface7};
    }
`;