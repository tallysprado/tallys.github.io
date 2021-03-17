import '../styles/globals.css'
import '../components/Menu/styles.scss'
import '../pages/Landing/styles.scss'
import '../pages/Projects/styles.scss'
import "animate.css/animate.min.css"

import '../pages/Landing/animations.scss'

import '../components/DownButton/styles.scss'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
