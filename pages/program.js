// pages/program.js
import {Component} from 'react'
import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'
import ProgramEntry from '../components/ProgramEntry'
import Title from '../components/Title'

/*
> 11.00 - 11.10 - Introduction
> 11.15 - 11.30 - p5.js by Lauren Lee McCarthy 
> 11. 35 -11.50 - Learning or mimicry? On mimetic bots and developmental robopsychology by Malthe Stavning Erslev 
> 11.55  - 12.10 - Object awareness by Ester Marie Aagard
> 12.15 - 12.30 -  Alex Mørch
> 12.35 - 12.50  - Tobias Stenberg Christensen + Anders Visti
> LUNCH BREAK (included)
> 13.20 - 13.35 - Introducing Code in Graphic Design Education by Stig Møller Hansen
> 13.40 - 13.55 - Who are YOU? by Ann Karring
> 14.00 - 14.15 - Numbers, Networks, Noise by Andreja Andric + Anders Visti
> 14.20 - 14.35 - Data Erasure - The Act of Forgetting by Tilde LD 
> 14.40 - 14.55 - Vocable Code by Winnie Soon
> SAY SOMETHING to end this session 
[Code & Share] 
> 11.30 - 15.30
*/

// make the program as JSON
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
        <p>11.30 – 15.30<br/>[Code &amp; Share]&nbsp;&nbsp;&nbsp;Presenters and audiences are welcome to stay on and hang out together during the program, to discuss presentations and share code</p>
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
        <p>To be announced ...</p>
        <p>Presenters so far:<br/>
        Ester Marie Aagard<br/>
        Andreja Andric<br/>
        Tobias Stenberg Christensen<br/>
        Malthe Stavning Erslev<br/>
        Stig Møller Hansen<br/>
        Ann Karring<br/>
        Tilde LD<br/>
        Lauren Lee McCarthy<br/>
        Alex Mørch<br/>
        Anders Visti<br/>
        </p>
      </Layout>
    )
  }
}
*/

export default Program