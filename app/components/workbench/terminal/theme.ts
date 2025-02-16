import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--codeuiapp-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--codeuiapp-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--codeuiapp-elements-terminal-textColor'),
    background: cssVar('--codeuiapp-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--codeuiapp-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--codeuiapp-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--codeuiapp-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--codeuiapp-elements-terminal-color-black'),
    red: cssVar('--codeuiapp-elements-terminal-color-red'),
    green: cssVar('--codeuiapp-elements-terminal-color-green'),
    yellow: cssVar('--codeuiapp-elements-terminal-color-yellow'),
    blue: cssVar('--codeuiapp-elements-terminal-color-blue'),
    magenta: cssVar('--codeuiapp-elements-terminal-color-magenta'),
    cyan: cssVar('--codeuiapp-elements-terminal-color-cyan'),
    white: cssVar('--codeuiapp-elements-terminal-color-white'),
    brightBlack: cssVar('--codeuiapp-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--codeuiapp-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--codeuiapp-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--codeuiapp-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--codeuiapp-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--codeuiapp-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--codeuiapp-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--codeuiapp-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}
