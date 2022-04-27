import { wrapper } from '@/modules/store'
import { Header, Layout, Nav } from "@/components"
import { useEffect, useState } from 'react'
const App = ({ Component, pageProps}) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(true)
  }, [])
  return (<>
  <Nav/>
    <Header/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default wrapper.withRedux(App)




