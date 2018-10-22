// pages/program.js
import {Component} from 'react'
import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'
import program from '../data/programDataTest.js'

// try to get the unique id of program from route arg
const RouteVal = withRouter((props) => (
  <div>
    <p>id from route: {props.router.query.id}</p>
    <p>{program[props.router.query.id].summary}</p>
  </div>
))

class Program extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // some code here
    return (
      <Layout>
        <div className="grid">
          <div className="col-1-1">
            <RouteVal />
          </div>
        </div>
      </Layout>
    )
  }
}

// Keep this below!
/*
const Workshop = withRouter((props) => (
  <Layout>
    <WorkshopFull id={props.router.query.id} />
  </Layout>
))
*/

export default Program