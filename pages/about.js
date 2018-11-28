// pages/about.js
import Link from 'next/link'
import Layout from '../components/MyLayout.js'
import Title from '../components/Title'
import PeopleEntry from '../components/PeopleEntry'

const people = [
  {
    key: 0,
    thumb: '../static/images/people/EsterMarieAagard.jpg',
    name: 'Ester Marie Aagard',
    desc: 'My name is Ester Marie Aagaard and I’m 23 years old. I study Digital Design, IT, Aesthetics and Interaction at Aarhus University in my 4th semester. I first started programming last year, where I was introduced to aesthetic programming as a part of my education. I have always explored my creativity with different materials and find the materiality of programming and what you can do with it very inspiring',
    link: '',
    whyCode: '“Why are you interested in coding?”: The software we use can influence our life in many ways, some we are aware of and some which are hidden. I want to understand the hidden parts as data-tracking, the way in which different software’s are programmed and so forth. And in my projects, I try to visualize the hidden parts to try to make people reflect upon them. Therefore, I use coding both to understand and explain the software that we use'
  },
  {
    key: 1,
    thumb: '../static/images/people/AndrejaAndric.jpg',
    name: 'Andreja Andric',
    desc: 'Andreja Andric is a Serbian composer and programmer, living in Aarhus. Using computer programming as key means of artistic expression, he aims at discovering pristine, dynamic and complex sound worlds. Pioneer of smartphone recital as a concert practice. Holds a PhD in Music Informatics from Milan University, Italy',
    link: 'http://andrejaandric.altervista.org/',
    whyCode: '“Why are you interested in coding?”: I subscribe to the Pythagorean idea that numbers are behind everything. With this in mind, coding helps me connect to the hidden side of the world and is a form of contemplative action'
  },
  {
    key: 2,
    thumb: '../static/images/people/MalteStavningErslev.jpg',
    name: 'Malthe Stavning Erslev',
    desc: 'Malthe is a PhD fellow at Aarhus University. He is currently finishing his MSc in Digital Design as part of his PhD studies. His academic work is based on practice and experimentation, with a research through- design-and-art approach, mostly within the realms of conceptual software design (and/or software art) and speculative/critical design',
    link: '',
    whyCode: '“Why are you interested in coding?”: I am interested in coding because it inspires me and enables me to think trough conceptual ideas, notions, concerns etc. I will often start out with a vague idea of a concept that I want to explore, and the practice of coding will ‘take’ me somewhere I did not anticipate. I like to remain open and curious as to what reveals itself as being interesting, troubling or surprising when coding. As such, coding is not only a constructive practice for me (where the goal is working software), but is as much a practice of knowledge development. I mostly explore concepts related to words, language and literature, and my practice often results in a rough sketch or proof-of-concept – hence I refer to my practice as ‘conceptual software design’'
  },
  {
    key: 3,
    thumb: '../static/images/people/StigMoellerHansen.jpg',
    name: 'Stig Møller Hansen',
    desc: 'Graphic designer, coder, teacher and researcher. Bought an Amiga 500 in 1989 and quickly developed a passion for mixing art and code. Thirty years later, Stig has made his childhood excitement his professional career, teaching programming for graphic designers',
    link: 'http://www.stigmollerhansen.dk/',
    whyCode: '“Why are you interested in coding?”: '
  },
  {
    key: 4,
    thumb: '../static/images/people/NathaliaNovais.jpg',
    name: 'Nathalia Novais',
    desc: 'Graphic designer, researcher and filmmaker-producer from Brazil based in Denmark. Currently a master student of the Information Studies program at Aarhus University. Some work available at ',
    link: 'https://behance.net/nathnovais',
    whyCode: ''
  },
  {
    key: 5,
    thumb: '../static/images/people/LaurenMcCarthy.jpg',
    name: 'Lauren Lee McCarthy',
    desc: 'Lauren (US) is the creator of p5.js, an open source platform for learning creative expression. As an artist, her work has been exhibited internationally, examining how issues of surveillance, automation, and network culture affect our social relationships. She is an Assistant Professor at UCLA Design Media Arts',
    link: 'http://lauren-mccarthy.com/',
    whyCode: ''
  },
  {
    key: 6,
    thumb: '../static/images/people/WinnieSoon.jpg',
    name: 'Winnie Soon',
    desc: 'Artist-researcher examining the cultural implications of technologies in which computational processes and infrastructure underwrite our experiences, which are ever more programmed. Her current research focuses on aesthetic coding in the realm of software studies, working on two books titled “Aesthetic Programming” (w/ Geoff Cox) and “Fix My Code” (w/ Cornelia Sollfrank) ',
    link: 'http://www.siusoon.net',
    whyCode: ''
  },
  {
    key: 7,
    thumb: '../static/images/people/TobiasStenberg.jpg',
    name: 'Tobias Stenberg Christensen',
    desc: 'Graphic designer and visual artist. Currently a master student of the Digital Design program at Aarhus University',
    link: 'http://tobiasstenberg.dk/',
    whyCode: ''
  },
  {
    key: 8,
    thumb: '../static/images/people/AndersVisti.jpg',
    name: 'Anders Visti',
    desc: 'Visual artist working with code. Founder and co-editor of the publishing house * [asterisk] from 2002-12. Founder and editor of the printed web publication ‡ DobbeltDagger and initiator of !=null, a public forum for artists, researchers, developers and hackers using contemporary technology for creative expression and aesthetic inquiry',
    link: 'https://andersvisti.dk',
    whyCode: ''
  } 
];

export default () => (
  <Layout>
    <div className="Grid Grid--gutters Grid--full large-Grid--fit">
      <div className="Grid-cell">
        <h2>About</h2><br/>
        <p><b>PCD @Aarhus takes place Saturday, February 9th from 11.00-15.30 at DOKK1, Hack Kampmanns Pl. 2, 8000 Aarhus</b>. PCD @Aarhus is organised by Nathalia Novais, Tobias Stenberg Christensen, Winnie Soon &amp; Anders Visti</p>
      </div>
      <div className="Grid-cell">
        <h2>Contact</h2><br/>
        <p>Winnie Soon / <Link href="mailto:rwx@siusoon.net"><a>mail: rwx@siusoon.net</a></Link><br/>
        Anders Visti / <Link href="mailto:andersvisti@gmail.com"><a>mail: andersvisti@gmail.com</a></Link></p>
      </div>
    </div>
    <Title txt="People" />
    <div className="peopleWrapper">
      {people.map( function(pe, i) {
        return <PeopleEntry
          key={pe.key}
          name={pe.name}
          desc={pe.desc}
          link={pe.link}
          thumb={pe.thumb}
          whyCode={pe.whyCode}
          />
      })}
    </div>
    <Title txt="Partnerships"/>
    <div className="Grid Grid--gutters Grid--full large-Grid--fit">
      <div className="Grid-cell">
        <p>The event is supported by:<br/>
        <Link href="https://notnull.andersvisti.dk/"><a target="_blank">!=null</a></Link><br/>
        <Link href="http://cc.au.dk/en/about-the-school/departments/digital-design-and-information-studies/"><a target="_blank">Department of Digital Design and Information Studies, Aarhus University</a></Link><br/>
        <Link href="https://dokk1.dk/"><a target="_blank">DOKK1, Aarhus Public Library</a></Link></p>
      </div>
    </div>
  </Layout>
)