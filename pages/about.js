// pages/about.js
import Layout from '../components/MyLayout.js'
import Title from '../components/Title'
import PeopleEntry from '../components/PeopleEntry'

const people = [
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
        <p>PCD @ Aarhus 2019 is organised by Nathalia Novais, Tobias Stenberg Christensen, Winnie Soon &amp; Anders Visti</p>
      </div>
      <div className="Grid-cell">
        <p>Winnie's contact info</p>
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
  </Layout>
)