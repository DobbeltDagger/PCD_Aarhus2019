import {Component} from 'react'
import Link from 'next/link'
import ResponsiveMenu from 'react-responsive-navbar'
// import { FaBars, FaClose } from 'react-icons/fa'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IoIosMenu, IoIosClose } from 'react-icons/io'
import { MdMenu, MdClose } from 'react-icons/md'

// https://www.npmjs.com/package/react-responsive-navbar
class NavBar extends Component {
  render() {
    return (
      <ResponsiveMenu
        menuOpenButton={<MdMenu size={48} />}
        menuCloseButton={<MdClose size={48} />}
        changeMenuOn="800px"
        largeMenuClassName="large-menu"
        smallMenuClassName="small-menu"
        menu={
          <ul>
            <li>
              <Link href="/program">
                <a className="active">program</a>
              </Link>
            </li>
            <li>
              <Link href="/resources">
                <a>resources</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>about</a>
              </Link>
            </li>
            <li>
              <Link href="/open-call">
                <a className="openCall">open call</a>
              </Link>
            </li>
          </ul>
        }
      />
    );
  }
}
export default NavBar