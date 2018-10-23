// pages/index.js
import {Component} from 'react'
import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import Title from '../components/Title'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    console.log("component did mount");
  }
  
  render() {
    return (
      <Layout>
        <div className="Grid Grid--gutters Grid--full large-Grid--fit">
          <div className="Grid-cell">
            <iframe width="100%" height="480px" frameBorder="0" allowfullscreen src="https://umap.openstreetmap.fr/en/map/processing-community-day-worldwide-2019_254734?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=false&searchControl=null&tilelayersControl=false&embedControl=null&datalayersControl=false&onLoadPanel=undefined&captionBar=false&fullscreenControl=false&measureControl=false&editinosmControl=false"></iframe>
          </div>
        </div>
        <Title txt="Processing Community Day @Worldwide" />
        <div className="Grid Grid--gutters Grid--full large-Grid--fit">
          <div className="Grid-cell">
            <p><Link href='https://processing.org'><a target="_blank">Processing</a></Link> is a free and open-source software platform for learning how to code within the context of the visual arts, created by Casey Reas and Ben Fry. It is complemented by a web version, called <Link href='https://p5js.org/'><a target="_blank">p5.js</a></Link>, created by Lauren McCarthy.<br/>To date, Processing and p5.js are used by a worldwide community of artists, coders, educators, students.</p>
          </div>
          <div className="Grid-cell">
            <p>A focus of this project is to make learning how to program and make creative work with code accessible to diverse communities. The <Link href='https://medium.com/processing-foundation/after-processing-community-day-8e124b1ec85e'><a target="_blank">first Processing Community Day (PCD)</a></Link>, organized by Taeyoon Choi and the Processing Foundation in 2017 was an effort to improve diversity within the art and programming community.</p>
          </div>
          <div className="Grid-cell">
            <p>For Processing Community Day 2019, we would like to broaden the reach and impact of this community by organizing with hundreds of Processing communities around the world. The Processing Foundation will be organizing a Processing Community Day in Los Angeles as well as inviting node organizers from all over the world to join us in organizing events in multiple locations.</p>
          </div>
        </div>
        <Title txt="PCD @Aarhus 2019, How to think about code differently" />
        <div className="Grid Grid--gutters Grid--full large-Grid--fit">
          <div className="Grid-cell">
            <p>For PCD @ Aarhus 2019, we are aiming to build an open and local community to explore code and coding practice in many different ways beyond science and engineering specialisation and functional applications development.</p>
          </div>
          <div className="Grid-cell">
            <p>Together with each of you from diverse backgrounds, we would like to explore how could we think about code differently and creatively via art, design and beyond.</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Index