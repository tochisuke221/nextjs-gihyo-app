import { addDecorator } from '@storybook/react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../src/themes'
import * as NextImage from 'next/image'

export const parameters = {
  actions: { argTypeRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    }
  }
}

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -aaple-system, BlinkMacSystemFont, Segoe UI, Robot, Oxygen, Ubuntu, 
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    transition: 0.25s;
    color: #000000;
  }
`

//  Themeの適用
addDecorator((story) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {story()}
    </ThemeProvider>
  );
})

// next/imageの差し替え
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
   configurable: true,
   value: (props) => typeof props.src === 'string' ? (
     <OriginalNextImage {...props} unoptimized blurDataURL={props.src}></OriginalNextImage>
   ): (
    <OriginalNextImage {...props} unoptimized></OriginalNextImage>
   )
})
