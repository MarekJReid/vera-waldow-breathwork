import { Typography } from "../src/Components/StyledComponents/typography.css"

function MyApp({ Component, pageProps }) {
  return (
  <>
   <Typography/>
      
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
