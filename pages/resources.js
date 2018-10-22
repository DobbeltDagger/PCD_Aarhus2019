// pages/resources.js
import {Component} from 'react'
import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'
import Title from '../components/Title'
import ResourceEntry from '../components/ResourceEntry'

// resource array with images
const resources = [
  {
    thumb: '../static/images/resources/processing.jpg',
    name: 'Processing',
    desc: 'some short description here',
    link: 'https://processing.org/'
  },
  {
    thumb: '../static/images/resources/p5.jpg',
    name: 'p5.js',
    desc: 'some short description here',
    link: 'https://p5js.org/'
  },
  {
    thumb: '../static/images/resources/CodingTrain.jpg',
    name: 'Coding Train',
    desc: 'some short description here',
    link: 'https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw' // youtube
  },
  {
    thumb: '../static/images/catThumb.jpg',
    name: 'Coding Train',
    desc: 'some short description here',
    link: 'https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw' // youtube
  },
  {
    thumb: '../static/images/catThumb.jpg',
    name: 'Coding Train',
    desc: 'some short description here',
    link: 'https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw' // youtube
  }, 
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
        <Title txt="Resources" />
        <div className="Grid Grid--gutters Grid--full large-Grid--fit">
          <div className="Grid-cell">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat imperdiet sapien eget posuere. Phasellus aliquet orci sed augue pulvinar tempor. Nullam non ipsum eget lorem ullamcorper tristique vel non leo.</p>
          </div>
          <div className="Grid-cell">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat imperdiet sapien eget posuere. Phasellus aliquet orci sed augue pulvinar tempor. Nullam non ipsum eget lorem ullamcorper tristique vel non leo.</p>
          </div>
          <div className="Grid-cell">
            <p>Cras pretium enim ac ex accumsan dapibus. Nullam luctus egestas semper. Sed rhoncus mollis est at porttitor. Sed placerat aliquet dignissim. Curabitur in tristique tortor. Fusce lorem metus, suscipit nec ante in, lobortis rutrum lacus.</p>
          </div>
        </div>
        <Title txt="Resource links" />
        <div className="resourceWrapper">
          {resources.map( function(re, i) {
            return <ResourceEntry
              key={re.id}
              id={re.id}
              name={re.name}
              desc={re.desc}
              link={re.link}
              thumb={re.thumb}    
              />
          })}
        </div>
      </Layout>
    )
  }
}

export default Program