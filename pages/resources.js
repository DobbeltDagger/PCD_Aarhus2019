// pages/resources.js
import {Component} from 'react'
import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'
import Title from '../components/Title'
import ResourceEntry from '../components/ResourceEntry'

// resource array with images
const resources = [
  {
    id: 0,
    thumb: '../static/images/resources/processing.jpg',
    name: 'Processing',
    desc: 'A flexible software sketchbook and a language for learning how to code within the context of the visual arts',
    link: 'https://processing.org/'
  },
  {
    id: 1,
    thumb: '../static/images/resources/p5.jpg',
    name: 'p5.js',
    desc: 'A javascript client-side library for creating graphic and interactive experiences, based on the core principles of Processing',
    link: 'https://p5js.org/'
  },
  {
    id: 2,
    thumb: '../static/images/resources/CodingTrain.jpg',
    name: 'Coding Train',
    desc: 'A YouTube channel dedicated to beginner-friendly creative coding tutorials and challenges',
    link: 'https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw' // youtube
  },
  {
    id: 3,
    thumb: '../static/images/resources/ProcessingFoundation.jpg',
    name: 'Processing Foundation',
    desc: 'Empowering people of all interests and backgrounds to learn how to program',
    link: 'https://processingfoundation.org/' // p foundation
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
        <Title txt="Resource links" />
        <div className="resourceWrapper">
          {resources.map( function(re, i) {
            return <ResourceEntry
              id={re.id}
              name={re.name}
              desc={re.desc}
              link={re.link}
              thumb={re.thumb}    
              />
          })}
        </div>
        <br/>
        <Title txt="Additional resources" />
        <div className="Grid Grid--gutters Grid--full large-Grid--fit">
          <div className="Grid-cell">
            <div className="padlet-embed">
              <p>
                <iframe src="https://padlet.com/embed/69nef43cadri" frameBorder="0" allow="camera;microphone;geolocation"></iframe>
              </p>
            </div>
          </div>
        </div>
        <style jsx>{`
          .padlet-embed {
            border-radius: 2px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            overflow: hidden;
            position: relative;
            width: 100%;
            background: #F4F4F4;
          }
          .padlet-embed p {
            padding: 0;
            margin: 0;
          }
          .padlet-embed iframe {
            width:100%;
            height: 608px;
            display: block;
            float: left;
            padding:0;
            margin:0;
            overflow-x:hidden;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Program