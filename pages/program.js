// pages/program.js
import {Component} from 'react'
import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'
import ProgramEntry from '../components/ProgramEntry'
import Title from '../components/Title'

// make the program as JSON
var prgJson = [
  {
    id: 0,
    title: 'title #1',
    lead: 'First Middle Namesen',
    desc: 'This is some dummy text here to the first guy here',
    link: 'https://somelink.com',
    time: '12.15 - 12.30'
  },
  {
    id: 1,
    title: 'title #2, the Second Title of the day!',
    lead: 'This is the name of the 2nd',
    desc: 'This is some dummy text here to the second guy here',
    link: 'https://somelinkOrOther.com',
    time: '12.30 - 12.45'
  },
  {
    id: 2,
    title: 'title #3',
    lead: 'This is the name #3',
    desc: 'This is some dummy text here',
    link: 'https://somelink.com',
    time: '12.45 - 13.00'
  }    
];


class Program extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // some code here
    return (
      <Layout>
        <Title txt="Program" />
        <p>To be announced ...</p>
        <p>Presenters so far:<br/>
        Ester Marie Aagard<br/>
        Andreja Andric<br/>
        Malthe Stavning Erslev<br/>
        Stig Møller Hansen<br/>
        Ann Karring<br/>
        Tilde LD<br/>
        Lauren Lee McCarthy<br/>
        </p>
      </Layout>
    )
  }
}

/*
class Program extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // some code here
    return (
      <Layout>
        <Title txt="Program" />
        {prgJson.map( function(pe, i) {
          return <ProgramEntry
            key={pe.id}
            title={pe.title}
            lead={pe.lead}
            desc={pe.desc}
            link={pe.link}
            time={pe.time}    
            />
        })}        
      </Layout>
    )
  }
}
*/

export default Program