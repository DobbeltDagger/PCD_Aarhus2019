// pages/about.js
import Link from 'next/link'
import Layout from '../components/MyLayout.js'
import Title from '../components/Title'
import WhyCodeEntry from '../components/WhyCodeEntry'

const whyCodes = [
  {
    key: 0,
    thumb: '../static/images/people/EsterMarieAagard.jpg',
    name: 'Ester Marie Aagard',
    whyCode: 'The software we use can influence our life in many ways, some we are aware of and some which are hidden. I want to understand the hidden parts as data-tracking, the way in which different software’s are programmed and so forth. And in my projects, I try to visualize the hidden parts to try to make people reflect upon them. Therefore, I use coding both to understand and explain the software that we use'
  },
  {
    key: 1,
    thumb: '../static/images/people/AndrejaAndric.jpg',
    name: 'Andreja Andric',
    whyCode: 'I subscribe to the Pythagorean idea that numbers are behind everything. With this in mind, coding helps me connect to the hidden side of the world and is a form of contemplative action'
  },
  {
    key: 2,
    thumb: '../static/images/people/MalteStavningErslev.jpg',
    name: 'Malthe Stavning Erslev',
    whyCode: 'I am interested in coding because it inspires me and enables me to think trough conceptual ideas, notions, concerns etc. I will often start out with a vague idea of a concept that I want to explore, and the practice of coding will ‘take’ me somewhere I did not anticipate. I like to remain open and curious as to what reveals itself as being interesting, troubling or surprising when coding. As such, coding is not only a constructive practice for me (where the goal is working software), but is as much a practice of knowledge development. I mostly explore concepts related to words, language and literature, and my practice often results in a rough sketch or proof-of-concept – hence I refer to my practice as ‘conceptual software design’'
  }
];

export default () => (
  <Layout>
    <Title txt='“Why are you interested in coding?”' />
    <div className="WhyCodeWrapper">
      {whyCodes.map( function(wc, i) {
        return <WhyCodeEntry
          key={wc.key}
          name={wc.name}
          thumb={wc.thumb}
          whyCode={wc.whyCode}
          />
      })}
    </div>
  </Layout>
)