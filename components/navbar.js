import {Component} from 'react'
import ActiveLink from '../components/ActiveLink'
import ResponsiveMenu from 'react-responsive-navbar'
// import { FaBars, FaTimes } from 'react-icons/fa'
// import { IoIosMenu, IoIosClose } from 'react-icons/io'
import { MdMenu, MdClose } from 'react-icons/md'

// https://www.npmjs.com/package/react-responsive-navbar
class NavBar extends Component {
  render() {
    return (
      <ResponsiveMenu
        menuOpenButton={<MdMenu size={64} />}
        menuCloseButton={<MdClose size={64} />}
        changeMenuOn="800px"
        largeMenuClassName="large-menu"
        smallMenuClassName="small-menu"
        menu={
          <ul>
            <li>
              <ActiveLink href="/program">
                <a className="active">program</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/resources">
                <a>resources</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/about">
                <a>about</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/opencall">
                <a className="openCall">open call</a>
              </ActiveLink>
            </li>
          </ul>
        }
      />
    );
  }
}
export default NavBar