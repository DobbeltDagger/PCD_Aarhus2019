// pages/about.js
import Link from 'next/link'
import Layout from '../components/MyLayout.js'
import Title from '../components/Title'
import PeopleEntry from '../components/PeopleEntry'

const people = [
  {
    thumb: '../static/images/people/WinnieSoon.jpg',
    name: 'Winnie Soon',
    desc: 'Winnie (artist-researcher). Winnie Soon is an artist-researcher who resides in Hong Kong and Denmark. Her works explore themes/concepts around digital culture, specifically concerning internet censorship, data circulation, real-time processing, infrastructure and the culture of code practice. Winnie’s projects have been exhibited and presented internationally at museums, festivals, universities and conferences across Europe, Asia and America. Her current research focuses on exploratory and aesthetic programming, working on two books titled “Aesthetic Programming” (with Geoff Cox) and “Fix My Code” (with Cornelia Sollfrank). She is Assistant Professor at Aarhus University. More info: http://www.siusoon.net'
  },
  {
    thumb: '../static/images/people/CatPortrait.jpg',
    name: 'First Name, Last Name',
    desc: 'Some short desciption here maybe?'
  },
  {
    thumb: '../static/images/people/CatPortrait.jpg',
    name: 'First Middle Last',
    desc: 'Some short desciption here maybe?'
  },
  {
    thumb: '../static/images/people/CatPortrait.jpg',
    name: 'First Name of someone',
    desc: 'Some short desciption here maybe?'
  },
  {
    thumb: '../static/images/people/CatPortrait.jpg',
    name: 'First Name, Last Name',
    desc: 'Some short desciption here maybe?'
  },
  {
    thumb: '../static/images/people/CatPortrait.jpg',
    name: 'First Middle Last',
    desc: 'Some short desciption here maybe?'
  },    
];

export default () => (
  <Layout>
    <Title txt="About" />
    <div className="Grid Grid--gutters Grid--full large-Grid--fit">
      <div className="Grid-cell">
        <p>PCD @ Aarhus 2019 is organised by:<br/>Nathalia Novais, Tobias Stenberg Christensen, Winnie Soon &amp; Anders Visti</p>
      </div>
      <div className="Grid-cell">
        <p>Winnie Soon<br/>www.siusoon.net<br/>rwx@siusoon.net</p>
      </div>
      <div className="Grid-cell">
        <p>Anders Visti<br/>https://andersvisti.dk<br/>andersvisti@gmail.com<br/>+45 60 63 02 84</p>
      </div>
    </div>
    <Title txt="People" />
    <div className="peopleWrapper">
      {people.map( function(pe, i) {
        return <PeopleEntry
          key={pe.id}
          id={pe.id}
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