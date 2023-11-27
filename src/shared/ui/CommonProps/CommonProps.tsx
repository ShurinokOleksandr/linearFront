import styled from 'styled-components';
import * as CSS from 'csstype';

export const CommonProps = styled.div.withConfig({
	shouldForwardProp: (prop) => !['marginBottom','marginRight','textAlign'].includes(prop),
})<CSS.Properties>`
  user-select: ${({ userSelect }) => userSelect ?  userSelect   : 'none'};
  height:${({ height }) => height &&  height};
  width:${({ width   }) => width ?  width   : '100%'};
  margin:${({ margin }) => margin ?  margin   :  '0px'};
  margin-bottom:${({ marginBottom  }) => marginBottom ?  marginBottom   : '0px'};
  margin-left:${({ marginLeft  }) => marginLeft ?  marginLeft   : '0px'};
  margin-right:${({ marginRight  }) => marginRight ?  marginRight   : '0px'};
  margin-top:${({ marginTop  }) => marginTop ?  marginTop   : '0px'};
  padding:  ${({ padding }) => padding ? padding : '0px'};
  padding-bottom:${({ paddingBottom  }) => paddingBottom ?  paddingBottom   : '0px'};
  padding-left:${({ paddingLeft  }) => paddingLeft ?  paddingLeft   : '0px'};
  padding-right:${({ paddingRight  }) => paddingRight ?  paddingRight   : '0px'};
  padding-top:${({ paddingTop  }) => paddingTop ?  paddingTop   : '0px'};
  text-decoration: ${({ textDecoration }) => textDecoration ? textDecoration : 'none'};
  outline:  ${({ outline }) => outline ? outline : 'none'};
  border:  ${({ border }) => border ? border : 'none'};
  font-size:  ${({ fontSize }) => fontSize ? fontSize : 'inherit'};
  padding:  ${({ padding }) => padding ? padding : '0px'};
   transition-duration: ${({ transitionDuration }) => transitionDuration ? transitionDuration : '0.5s'};
  transition-timing-function:  ${({ transitionTimingFunction }) => transitionTimingFunction ? transitionTimingFunction : 'easy-in-out'};
  transition-property: opacity, color, background-color, border;
  color: ${({ theme, color }) => color ? color :  theme.gray200};
  display: ${({ display }) => display ? display : 'block' } ;
  font-weight:${({ fontWeight }) => fontWeight ? fontWeight : '500' } ;
  text-align:${({ textAlign }) => textAlign ?  textAlign   : 'start'};
  text-justify:${({ textJustify }) => textJustify ?  textJustify   : 'start'};

`;