import '~~/public/external-import.css'

import { isEmpty } from '~/lib/utils'
import Header from '~/components/custom/Header'
import Footer from '~/components/custom/Footer'
import Providers from '~/app/[lang]/providers'

export const metadata = {
  title: 'NEXT WITH APP ROUTER',
  description: '',
}

async function getCommonData(){
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/wp-json/api/v1/commonDatas`, {
  //   method: 'GET',
  //   next: {
  //     revalidate: 60
  //   },
  // })

  // const json = await response.json()

  // return json?.data
  return {}
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  // fetch data from server side
  const commonData = await getCommonData()

  return <html>
    <body>
      <Providers commonData={commonData}>
        <div id="app" className="flex h-screen flex-col">
          <Header />
          <div className="grow">
            { children }
          </div>
          <Footer />
        </div>
      </Providers>
    </body>
  </html>
}
