import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  // applicationName:"PWA App",
  // appleMobileWebAppCapable:"yes",
  // appleMobileWebAppStatusBarStyle:"default",
  // appleMobileWebAppTitle:"PWA App",
  // description:"Best PWA App in the world",
  // mobileWebAppCapable:"yes",
  // msapplicationConfig:"/icons/browserconfig.xml",
  // msapplicationTileColor:"#2B5797",
  // msapplicationTapHighlight:"no",
  // themeColor:"#000000"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'/>
        <meta name="application-name" content="PWA App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta name="description" content="Best PWA App in the world" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=412, initial-scale=1" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />

       
      <body className={inter.className}>{children}</body>
    </html>
  )
}
