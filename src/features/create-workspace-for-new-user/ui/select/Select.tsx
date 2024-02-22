'use client';
import {
    FloatingFocusManager,
    useListNavigation,
    useInteractions,
    FloatingList,
    useTypeahead,
    useFloating,
    autoUpdate,
    useDismiss,
    useClick,
    useRole,
    flip,
} from '@floating-ui/react';
import React, { ComponentProps, useCallback, useState, useMemo } from 'react';
import { DropDownArrowIcon, Button, Span, Box } from '@/shared/ui';
import { ValidationCreateWorkSpaceFormType } from '@/shared/utils';
import { AnimatePresence, motion } from 'framer-motion';
import styled, { useTheme } from 'styled-components';
import { UseFormSetValue } from 'react-hook-form';

import { SelectContext } from '../../model/SelectCompanySizeContext';

export type SelectCompanySizeType = {
    setValue: UseFormSetValue<ValidationCreateWorkSpaceFormType>;
    field: 'companySize' | 'role';
} & ComponentProps<'div'>;

export const Select = ({
    children,
    setValue,
    field,
}: SelectCompanySizeType) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
    const { floatingStyles, context, refs } = useFloating({
        whileElementsMounted: autoUpdate,
        placement: 'bottom-start',
        onOpenChange: setIsOpen,
        middleware: [flip()],
        open: isOpen,
    });
    const elementsRef = React.useRef<Array<HTMLElement | null>>([]);
    const labelsRef = React.useRef<Array<string | null>>([]);

    const handleSelect = useCallback((index: number | null) => {
        setSelectedIndex(index);
        setIsOpen(false);
        if (index !== null && labelsRef.current) {
            setSelectedLabel(labelsRef.current[index]);
            setValue(field, labelsRef.current[index] as string);
        }
    }, []);

    function handleTypeaheadMatch(index: number | null) {
        if (isOpen) {
            setActiveIndex(index);
        } else {
            handleSelect(index);
        }
    }

    const listNav = useListNavigation(context, {
        onNavigate: setActiveIndex,
        listRef: elementsRef,
        selectedIndex,
        activeIndex,
    });
    const typeahead = useTypeahead(context, {
        onMatch: handleTypeaheadMatch,
        listRef: labelsRef,
        selectedIndex,
        activeIndex,
    });
    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: 'select' });

    const { getReferenceProps, getFloatingProps, getItemProps } =
        useInteractions([listNav, typeahead, click, dismiss, role]);

    const selectContext = useMemo(
        () => ({
            selectedIndex,
            getItemProps,
            handleSelect,
            activeIndex,
        }),
        [activeIndex, selectedIndex, getItemProps, handleSelect]
    );

    const theme = useTheme();
    return (
        <>
            <Box ref={refs.setReference}>
                <SelectButton
                    ref={refs.setReference}
                    type='button'
                    tabIndex={0}
                    {...getReferenceProps()}
                >
                    <Span>{selectedLabel ?? 'Selected value test'}</Span>
                    <DropDownArrowIcon fill={theme.gray400} />
                </SelectButton>
            </Box>
            <SelectContext.Provider value={selectContext}>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {isOpen && (
                                <FloatingFocusManager
                                    context={context}
                                    modal={false}
                                >
                                    <OptionsBox
                                        ref={refs.setFloating}
                                        style={floatingStyles}
                                        {...getFloatingProps()}
                                    >
                                        <FloatingList
                                            elementsRef={elementsRef}
                                            labelsRef={labelsRef}
                                        >
                                            {children}
                                        </FloatingList>
                                    </OptionsBox>
                                </FloatingFocusManager>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </SelectContext.Provider>
        </>
    );
};
const SelectButton = styled(Button)`
    background-color: ${({ theme }) => theme.surface6};
    display: flex;
    box-shadow: ${({ theme }) => theme.boxShadow.boxShadowBorder1};
    justify-content: space-between;
    height: 30px;
    width: 100%;
    padding: 0 10px;
`;
const OptionsBox = styled(Box)`
    box-shadow: ${({ theme }) => theme.boxShadow.boxShadowBorder1};
    border-radius: ${({ theme }) => theme.border.large};
    padding: 5px;
    width: 412px;
    background: ${({ theme }) => theme.surface3};
    overflow: auto;
    height: 200px;
    margin-top: -30px;
    z-index: 200;
    &::-webkit-scrollbar {
        display: none;
    }
`;
