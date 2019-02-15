import {Component} from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: "../static/images/PCDimgs/0.jpg", width: 3, height: 2 },
  { src: "../static/images/PCDimgs/1.jpg", width: 3, height: 2 },
  { src: "../static/images/PCDimgs/2.jpg", width: 3, height: 2 },
  { src: "../static/images/PCDimgs/3.jpg", width: 3, height: 2 },
  { src: "../static/images/PCDimgs/4.jpg", width: 3, height: 2 },
  { src: "../static/images/PCDimgs/5.jpg", width: 3, height: 2 },
  { src: "../static/images/PCDimgs/6.jpg", width: 3, height: 2 },
  { src: "../static/images/PCDimgs/7.jpg", width: 3, height: 2 },
  { src: "../static/images/PCDimgs/8.jpg", width: 3, height: 2 },
  { src: "../static/images/PCDimgs/9.jpg", width: 3, height: 2 },
  { src: "../static/images/PCDimgs/10.jpg", width: 3, height: 2 },
  { src: "../static/images/PCDimgs/11.jpg", width: 3, height: 2 },
  { src: "../static/images/PCDimgs/12.jpg", width: 3, height: 2 },
  { src: "../static/images/PCDimgs/13.jpg", width: 3, height: 2 },
  { src: "../static/images/PCDimgs/14.jpg", width: 3, height: 2 },
  { src: "../static/images/PCDimgs/15.jpg", width: 3, height: 2 },
  { src: "../static/images/PCDimgs/16.jpg", width: 3, height: 2 },
  { src: "../static/images/PCDimgs/17.jpg", width: 3, height: 2 },
  { src: "../static/images/PCDimgs/18.jpg", width: 3, height: 2 },
  { src: "../static/images/PCDimgs/19.jpg", width: 3, height: 2 },
  { src: "../static/images/PCDimgs/20.jpg", width: 4, height: 3 }
];

class GalleryComplete extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}
export default GalleryComplete