import { EmptyUserIcon, Box } from '@/shared/ui';
import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

type AvatarProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
    src?:string | null;
}


export const Avatar = ({ src,...props  }:AvatarProps) => {
    return (
        <AvatarWrapper>
            {
                src
                    ?  <img src={src} {...props} />
                    : <EmptyUserIcon />
            }
        </AvatarWrapper>
    );
};

const AvatarWrapper = styled(Box)`
    width: 18px;
    height: 18px;
    border-radius: 50%;
`;