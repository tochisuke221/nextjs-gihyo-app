import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import Box from '@/components/layout/Box'
import Separator from '@/components/atoms/Separator'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Box padding={3}>
          <Footer></Footer>
      </Box>
    </>
  )
}

export default Layout
