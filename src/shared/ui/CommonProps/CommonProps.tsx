import styled, { CSSProperties } from 'styled-components';

export type DefaultElementProps = {
	_hover?: KebabKeys<CSSProperties>
} & CSSProperties
export type Kebab<T extends string, A extends string = ''> =
	T extends `${infer F}${infer R}` ?
		Kebab<R, `${A}${F extends Lowercase<F> ? '' : '-'}${Lowercase<F>}`> :
		A
export type KebabKeys<T> = { [K in keyof T as K extends string ? Kebab<K> : K]: T[K] };
function inlineRules(rulesObj: CSSProperties) {
	return Object.entries(rulesObj).map(([property, value]) => `${property}: ${value};`).join('');
}

export const CommonProps = styled.div.withConfig({
	shouldForwardProp: (prop) => !['marginBottom','marginRight','marginLeft','marginTop','textAlign'].includes(prop),
})<DefaultElementProps>`
    user-select: ${({ userSelect }) => userSelect ?  userSelect   : 'none'};
    border-radius:${({ borderRadius }) => borderRadius && borderRadius} ;
    height:${({ height }) => height &&  height};
    box-shadow:${({ boxShadow }) => boxShadow &&  boxShadow};
    top:${({ top }) => top &&  top};
    left:${({ left }) => left &&  left};
    right:${({ right }) => right &&  right};
    bottom:${({ bottom }) => bottom &&  bottom};
    transform:${({ transform }) => transform &&  transform};
	width:${({ width }) => width  &&  width};
    max-width:${({ maxWidth }) => maxWidth  &&  maxWidth};
    min-width:${({ minWidth }) => minWidth  &&  minWidth};
    position:${({ position }) => position  &&  position};
    margin:${({ margin }) => margin  ?   margin : '0px'};
    margin-bottom:${({ marginBottom  }) => marginBottom  &&   marginBottom  };
    margin-left:${({ marginLeft  }) => marginLeft  &&   marginLeft   };
    margin-right:${({ marginRight  }) => marginRight  &&   marginRight };
    margin-top:${({ marginTop  }) => marginTop  &&   marginTop  };
    padding:  ${({ padding }) => padding  &&  padding  };
    padding-bottom:${({ paddingBottom  }) => paddingBottom  &&   paddingBottom  };
    padding-left:${({ paddingLeft  }) => paddingLeft  &&   paddingLeft  };
    padding-right:${({ paddingRight  }) => paddingRight  &&   paddingRight  };
    padding-top:${({ paddingTop  }) => paddingTop  &&   paddingTop   };
    text-decoration: ${({ textDecoration }) => textDecoration ? textDecoration : 'none'};
    outline:  ${({ outline }) => outline ? outline : 'none'};
    border:  ${({ border }) => border ? border : 'none'};
    font-size:  ${({ fontSize }) => fontSize ? fontSize : 'inherit'};
    transition-duration: ${({ transitionDuration }) => transitionDuration ? transitionDuration : '0.3s'};
    transition-timing-function:  ${({ transitionTimingFunction }) => transitionTimingFunction ? transitionTimingFunction : 'easy-in-out'};
    transition-property: opacity, color, background-color, border;
    color: ${({ theme, color }) => color ? color :  theme.gray200};
    display: ${({ display }) => display && display } ;
    font-weight:${({ fontWeight }) => fontWeight ? fontWeight : '500' } ;
    text-align:${({ textAlign }) => textAlign ?  textAlign   : 'start'};
    text-justify:${({ textJustify }) => textJustify ?  textJustify   : 'start'};
    &:hover {
        ${(props) => props._hover && inlineRules(props._hover)}
    }
`;