// pages/program.js
import {Component} from 'react'
import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'
import ProgramEntry from '../components/ProgramEntry'
import Title from '../components/Title'

// JSON program
var prgJson = [
  {
    id: 0,
    time: '11.00 – 11.10',
    title: 'Introduction',
    lead: 'by PCD organizers',
  },
  {
    id: 1,
    time: '11.15 – 11.30',
    title: 'p5.js (video)',
    lead: 'by Lauren Lee McCarthy',
  },
  {
    id: 2,
    time: '11.35 – 11.50',
    title: 'Learning or mimicry? On mimetic bots and developmental robopsychology',
    lead: 'by Malthe Stavning Erslev',
  },
  {
    id: 3,
    time: '11.55 – 12.10',
    title: 'Object awareness',
    lead: 'by Ester Marie Aagard',
  }, 
  {
    id: 4,
    time: '12.15 – 12.30',
    title: 'i[x]',
    lead: 'by Alex Mørch',
  }, 
  {
    id: 5,
    time: '12.35 – 12.50',
    title: 'Turmites',
    lead: 'by Tobias Stenberg Christensen & Anders Visti',
  }, 
  {
    id: 6,
    time: '12.50 – 13.20',
    title: 'LUNCH BREAK',
    lead: '',
  }, 
  {
    id: 7,
    time: '13.20 – 13.35',
    title: 'Introducing Code in Graphic Design Education',
    lead: 'by Stig Møller Hansen',
  }, 
  {
    id: 8,
    time: '13.40 – 13.55',
    title: 'Who are YOU?',
    lead: 'by Ann Karring',
  }, 
  {
    id: 9,
    time: '14.00 – 14.15',
    title: 'Numbers, Networks, Noise',
    lead: 'by Andreja Andric & Anders Visti',
  }, 
  {
    id: 10,
    time: '14.20 – 14.35',
    title: 'Data Erasure — The Act of Forgetting',
    lead: 'by Tilde Lageri Damborg',
  }, 
  {
    id: 11,
    time: '14.40 – 14.55',
    title: 'Vocable Code',
    lead: 'by Winnie Soon',
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
        {prgJson.map( function(pe, i) {
          return <ProgramEntry
            key={pe.id}
            title={pe.title}
            lead={pe.lead}
            time={pe.time}    
            />
        })}
        <br/>
        <p>11.30 – 15.30<br/>[Code &amp; Share]&nbsp;&nbsp;&nbsp;Presenters and audiences hang out together  to discuss presentations and share code</p>
      </Layout>
    )
  }
}

export default Program