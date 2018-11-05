// pages/about.js
import Link from 'next/link'
import Layout from '../components/MyLayout.js'
import Title from '../components/Title'
import PeopleEntry from '../components/PeopleEntry'

const people = [
  {
    key: 0,
    thumb: '../static/images/people/TobiasStenberg.jpg',
    name: 'Tobias Stenberg Christensen',
    desc: 'Graphic designer and visual artist. Currently a master student of the Digital Design program at Aarhus University ',
    link: 'http://tobiasstenberg.dk/'
  },
  {
    key: 1,
    thumb: '../static/images/people/NathaliaNovais.jpg',
    name: 'Nathalia Novais',
    desc: 'Graphic designer, researcher and filmmaker-producer from Brazil based in Denmark. Currently a master student of the Information Studies program at Aarhus University. Some work available at ',
    link: 'https://behance.net/nathnovais'
  },
  {
    key: 2,
    thumb: '../static/images/people/WinnieSoon.jpg',
    name: 'Winnie Soon',
    desc: 'Artist-researcher examining the cultural implications of technologies in which computational processes and infrastructure underwrite our experiences, which are ever more programmed. Her current research focuses on aesthetic coding in the realm of software studies, working on two books titled “Aesthetic Programming” (w/ Geoff Cox) and “Fix My Code” (w/ Cornelia Sollfrank) ',
    link: 'http://www.siusoon.net'
  },
  {
    key: 3,
    thumb: '../static/images/people/AndersVisti.jpg',
    name: 'Anders Visti',
    desc: 'Visual artist working with code. Founder and co-editor of the publishing house * [asterisk] from 2002-12. Founder and editor of the printed web publication ‡ DobbeltDagger and initiator of !=null, a public forum for artists, researchers, developers and hackers using contemporary technology for creative expression and aesthetic inquiry',
    link: 'https://andersvisti.dk'
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
        <p>Winnie Soon / mail: rwx@siusoon.net<br/>
        Anders Visti / mail: andersvisti@gmail.com</p>
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