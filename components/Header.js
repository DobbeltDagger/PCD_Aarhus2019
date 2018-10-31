import Link from 'next/link'
import NavBar from './navbar'

const Header = () => (
  <header>
    <div id="logo">
      <Link href="/">
        <a>
          <img src="../static/images/pcdLogo.png" />
        </a>
      </Link>
    </div>
    <div id="headerMenu">
      <NavBar />
    </div>
    <div id="info">
      <p>Processing<br/>Community<br/>Day<br/>Aarhus<br/>Saturday,<br/>February 9th<br/>11.00&ndash;15.30<br/>@DOKK1</p>
    </div>
  </header>
)

export default Header