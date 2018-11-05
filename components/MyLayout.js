import Head from 'next/head'
import Header from './Header'
import SubHeader from './SubHeader'
import Footer from './Footer'
// import "../static/css/font.css"
import "../static/css/reset.css"
import "../static/css/grid.css"
import "../static/css/style.css"

const Layout = (props) => (
  <div id="pageWrapper">
    <Head>
      <title>Processing Community Day @ Aarhus 2019</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="../static/images/favicon.png" />
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css"
        integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
        crossOrigin=""/>
      <script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js"
        integrity="sha512-nMMmRyTVoLYqjP9hrbed9S+FzjZHW5gY1TWCHA5ckwXZBadntCNs8kEqAWdrb9O7rxbCaA4lKTIWjDXZxflOcA=="
        crossOrigin=""></script>
      <script src="../static/js/functions.js"></script>
    </Head>
    <Header />
    <SubHeader />
    <main id="MainContent">
      <div className="maxWidth">
        {props.children}
      </div>
    </main>
    <Footer />
  </div>
)

export default Layout