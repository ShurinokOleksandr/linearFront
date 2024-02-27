'use client';
import { useRequestAllWorkSpaceQuery } from '@/shared/utils/api';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Loading } from '@/shared/ui';
import Split from '@uiw/react-split';
import { Navbar } from '@/widgets';

export const ClientWrapper = () => {
    const workSpaces = useRequestAllWorkSpaceQuery();
    const router = useRouter();
    const refSplit = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        //сомнителдьно пока что, потом посмотреть какое будет поведение при большом кол данных
        workSpaces.refetch();
    }, []);
    if(workSpaces.isPending){
        return <Loading />;
    }
    return (
        <>
            <Split
                renderBar={({ onMouseDown, ...props }) => {
                    return (
                        <div
                            {...props}
                            style={{
                                backgroundColor: '#292B41',
                                boxShadow: 'none',
                                width: '1px',
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: '#292B41',
                                    boxShadow: 'none',
                                }}
                                onMouseDown={onMouseDown}
                            />
                        </div>
                    );
                }}
                // onDragEnd={() =>
                //     localStorage.setItem(
                //         'split',
                //         JSON.stringify({ width: refSplit.current })
                //     )
                // }
                style={{ height: '100dvh' }}
            >
                <div style={{ maxWidth: 330, minWidth: 220 }} ref={refSplit}>
                    <Navbar />
                </div>
                <div style={{ minWidth: 80, flex: 1 }}>
                    {JSON.stringify(workSpaces.data)}asdasda
                    <div>
                        <button
                            onClick={() => {
                                router.push('/test');
                                router.refresh();
                            }}
                        >
                            test
                        </button>
                    </div>
                </div>
            </Split>
        </>
    );
};
