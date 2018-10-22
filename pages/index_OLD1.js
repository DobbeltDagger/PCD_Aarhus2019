// pages/index.js
import {Component} from 'react'
import Layout from '../components/MyLayout.js'
import HeaderCategory from '../components/HeaderCategory.js'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    console.log("component did mount");
    /* var mymap = L.map('mapid', {dragging: false, scrollWheelZoom: false}).setView([51.505, -0.09], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiYXZpc3RpIiwiYSI6ImNqbGlkYjF0NTAwMWkza3J6bWg4OGU1ajMifQ.CaYGpEN8sjY8LKaGSr4U_A'
    }).addTo(mymap);
    */
  }
  
  render() {
    return (
      <Layout>
        <div className="Grid Grid--gutters">
          <div className="Grid-cell">
            <div id="mapid"></div>
            <iframe width="100%" height="480px" frameBorder="0" allowfullscreen src="http://umap.openstreetmap.fr/en/map/processing-community-day-worldwide-2019_254734?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=false&searchControl=null&tilelayersControl=false&embedControl=null&datalayersControl=false&onLoadPanel=undefined&captionBar=false&fullscreenControl=false&measureControl=false&editinosmControl=false"></iframe>
            <br/>
          </div>
        </div>
        <div className="Grid Grid--gutters Grid--full large-Grid--fit">
          <div className="Grid-cell">
            <h2>Processing Community Day</h2>
          </div>
        </div>
        <div className="Grid Grid--gutters Grid--full large-Grid--fit">
          <div className="Grid-cell">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat imperdiet sapien eget posuere. Phasellus aliquet orci sed augue pulvinar tempor. Nullam non ipsum eget lorem ullamcorper tristique vel non leo. Curabitur vel mauris nunc. Suspendisse non semper diam. Sed vitae lectus sit amet magna congue pretium.</p>
          </div>
          <div className="Grid-cell">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat imperdiet sapien eget posuere. Phasellus aliquet orci sed augue pulvinar tempor. Nullam non ipsum eget lorem ullamcorper tristique vel non leo. Curabitur vel mauris nunc. Suspendisse non semper diam.</p>
          </div>
          <div className="Grid-cell">
            <p>Cras pretium enim ac ex accumsan dapibus. Nullam luctus egestas semper. Sed rhoncus mollis est at porttitor. Sed placerat aliquet dignissim. Curabitur in tristique tortor. Fusce lorem metus, suscipit nec ante in, lobortis rutrum lacus. Nunc id viverra lacus. Nulla blandit vehicula sodales. Vivamus facilisis blandit diam, in pretium leo volutpat non</p>
          </div>
        </div>
        <div className="Grid Grid--gutters Grid--full large-Grid--fit">
          <div className="Grid-cell">
            <h2>Processing Community Day</h2>
          </div>
        </div>
        <div className="Grid Grid--gutters Grid--full large-Grid--fit">
          <div className="Grid-cell">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat imperdiet sapien eget posuere. Phasellus aliquet orci sed augue pulvinar tempor. Nullam non ipsum eget lorem ullamcorper tristique vel non leo. Curabitur vel mauris nunc. Suspendisse non semper diam. Sed vitae lectus sit amet magna congue pretium.</p>
          </div>
          <div className="Grid-cell">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat imperdiet sapien eget posuere. Phasellus aliquet orci sed augue pulvinar tempor. Nullam non ipsum eget lorem ullamcorper tristique vel non leo. Curabitur vel mauris nunc. Suspendisse non semper diam.</p>
          </div>
          <div className="Grid-cell">
            <p>Cras pretium enim ac ex accumsan dapibus. Nullam luctus egestas semper. Sed rhoncus mollis est at porttitor. Sed placerat aliquet dignissim. Curabitur in tristique tortor. Fusce lorem metus, suscipit nec ante in, lobortis rutrum lacus. Nunc id viverra lacus. Nulla blandit vehicula sodales. Vivamus facilisis blandit diam, in pretium leo volutpat non</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Index