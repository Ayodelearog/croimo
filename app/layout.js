import './globals.css'
import { Raleway } from 'next/font/google'
import { Providers } from "./providers";

import { extendTheme, ChakraProvider } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: {
    green1: '#ecf5f5',
    green2: '#d1e8e6',
    green3: '#acd6d3',
    green4: '#86c3be',
    green5: '#62b0ab',
    green6: '#3f9f98',
    green7: '#368781',
    green8: '#2d716c',
    green9: '#245b57',
    green10: '#1c4844',
  },
  secondary: {
    blue1: '#e7e7ef',
    blue2: '#c5c5d9',
    blue3: '#9798bb',
    blue4: '#67689b',
    blue5: '#393a7d',
    blue6: '#0d0f61',
    blue7: '#0d0b52',
    blue8: '#090b45',
    blue9: '#070937',
    blue10: '#06072c',
  }
}

export const theme = extendTheme({ colors })

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Croimo',
  description: 'A finance management app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
