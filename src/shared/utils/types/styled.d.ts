import { ThemeType } from '@/shared/theme/colors';
import 'styled-components';


// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}