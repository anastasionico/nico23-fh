import './globals.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import "app/css/customcss.css"
// import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { Comfortaa } from 'next/font/google';
import Header from './components/Header';
const comfortaa = Comfortaa({ subsets: ['latin'] })

export const metadata = {
  title: 'Anastasionico.uk',
  description: 'Content writer | web development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ `container-fluid ${comfortaa.className}` }>
        <Header/>
        {children}

        {/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous" /> */}
      </body>
    </html>
  )
}
