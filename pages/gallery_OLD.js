// pages/about.js
import Link from 'next/link'
import Layout from '../components/MyLayout.js'
import Title from '../components/Title'
import GalleryEntry from '../components/GalleryEntry'

const people = [
  {
    id: 0,
    thumb: '../static/images/people/EsterMarieAagard.jpg',
    link: '',
    newWindow: ''
  },
  {
    id: 1,
    thumb: '../static/images/people/AndrejaAndric.jpg',
    link: 'http://andrejaandric.altervista.org/',
    newWindow: '_blank'
  },
  {
    id: 2,
    thumb: '../static/images/people/AnnaBrynskov.jpg',
    link: 'https://vimeo.com/annabrynskov',
    newWindow: '_blank'
  },
  {
    id: 3,
    thumb: '../static/images/people/Tilde.jpg',
    link: '',
    newWindow: ''
  },
  {
    id: 4,
    thumb: '../static/images/people/MalteStavningErslev.jpg',
    link: '',
    newWindow: ''
  },
  {
    id: 5,
    thumb: '../static/images/people/StigMoellerHansen.jpg',
    link: 'http://www.stigmollerhansen.dk/',
    newWindow: '_blank'
  },

  {
    id: 6,
    thumb: '../static/images/people/AnnKarring.jpg',
    link: '',
    newWindow: ''
  },
  {
    id: 7,
    thumb: '../static/images/people/FrederikLaCour.jpg',
    link: 'https://vimeo.com/l4cour',
    newWindow: '_blank'
  },
  {
    id: 8,
    thumb: '../static/images/people/AlexMorch.jpg',
    link: 'https://alexmorch.com/',
    newWindow: '_blank'
  }
];

export default () => (
  <Layout>
    <Title txt="Pics from PCD @Aarhus" />
    <div className="galleryWrapper">
      {people.map( function(pe, i) {
        return <GalleryEntry
          id={pe.id}
          key={pe.id}
          link={pe.link}
          newWindow={pe.newWindow}
          thumb={pe.thumb}
          whyCode={pe.whyCode}
          />
      })}
    </div>
  </Layout>
)