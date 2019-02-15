import Layout from '../components/MyLayout.js'
import Title from '../components/Title'
import Gallery from 'react-grid-gallery';

// https://benhowell.github.io/react-grid-gallery/
// gallery options: https://github.com/benhowell/react-grid-gallery#image-options

const IMAGES =
[
  {
    src: "../static/images/PCDimgs/0.jpg",
    thumbnail: "../static/images/PCDimgs/thumbs/0.jpg",
    caption: "PCD 2019 @Aarhus"
  },
  {
    src: "../static/images/PCDimgs/1.jpg",
    thumbnail: "../static/images/PCDimgs/thumbs/1.jpg",
    caption: "PCD 2019 @Aarhus"
  },
  {
    src: "../static/images/PCDimgs/2.jpg",
    thumbnail: "../static/images/PCDimgs/thumbs/2.jpg",
    caption: "PCD 2019 @Aarhus"
  },
  {
    src: "../static/images/PCDimgs/3.jpg",
    thumbnail: "../static/images/PCDimgs/thumbs/3.jpg",
    caption: "PCD 2019 @Aarhus. Lauren Lee McCarthy"
  },
  {
    src: "../static/images/PCDimgs/4.jpg",
    thumbnail: "../static/images/PCDimgs/thumbs/4.jpg",
    caption: "PCD 2019 @Aarhus. Lauren Lee McCarthy"
  },
  {
    src: "../static/images/PCDimgs/5.jpg",
    thumbnail: "../static/images/PCDimgs/thumbs/5.jpg",
    caption: "PCD 2019 @Aarhus. Malthe Stavning Erslev"
  },
  {
    src: "../static/images/PCDimgs/6.jpg",
    thumbnail: "../static/images/PCDimgs/thumbs/6.jpg",
    caption: "PCD 2019 @Aarhus. Malthe Stavning Erslev"
  },
  {
    src: "../static/images/PCDimgs/7.jpg",
    thumbnail: "../static/images/PCDimgs/thumbs/7.jpg",
    caption: "PCD 2019 @Aarhus. Ester Marie Aagard"
  },
  {
    src: "../static/images/PCDimgs/8.jpg",
    thumbnail: "../static/images/PCDimgs/thumbs/8.jpg",
    caption: "PCD 2019 @Aarhus. Ester Marie Aagard"
  },
  {
    src: "../static/images/PCDimgs/9.jpg",
    thumbnail: "../static/images/PCDimgs/thumbs/9.jpg",
    caption: "PCD 2019 @Aarhus. Tobias Stenberg and Anders Visti"
  },
  {
    src: "../static/images/PCDimgs/10.jpg",
    thumbnail: "../static/images/PCDimgs/thumbs/10.jpg",
    caption: "PCD 2019 @Aarhus. Tobias Stenberg and Anders Visti"
  },
  {
    src: "../static/images/PCDimgs/11.jpg",
    thumbnail: "../static/images/PCDimgs/thumbs/11.jpg",
    caption: "PCD 2019 @Aarhus. Stig Møller Hansen"
  },
  {
    src: "../static/images/PCDimgs/12.jpg",
    thumbnail: "../static/images/PCDimgs/thumbs/12.jpg",
    caption: "PCD 2019 @Aarhus. Stig Møller Hansen"
  },
  {
    src: "../static/images/PCDimgs/13.jpg",
    thumbnail: "../static/images/PCDimgs/thumbs/13.jpg",
    caption: "PCD 2019 @Aarhus. Ann Karring"
  },
  {
    src: "../static/images/PCDimgs/14.jpg",
    thumbnail: "../static/images/PCDimgs/thumbs/14.jpg",
    caption: "PCD 2019 @Aarhus. Ann Karring"
  },
  {
    src: "../static/images/PCDimgs/15.jpg",
    thumbnail: "../static/images/PCDimgs/thumbs/15.jpg",
    caption: "PCD 2019 @Aarhus. Andreja Andric"
  },
  {
    src: "../static/images/PCDimgs/16.jpg",
    thumbnail: "../static/images/PCDimgs/thumbs/16.jpg",
    caption: "PCD 2019 @Aarhus. Andreja Andric"
  },
  {
    src: "../static/images/PCDimgs/17.jpg",
    thumbnail: "../static/images/PCDimgs/thumbs/17.jpg",
    caption: "PCD 2019 @Aarhus. Tilde Lageri Damborg"
  },
  {
    src: "../static/images/PCDimgs/18.jpg",
    thumbnail: "../static/images/PCDimgs/thumbs/18.jpg",
    caption: "PCD 2019 @Aarhus. Tilde Lageri Damborg"
  },
  {
    src: "../static/images/PCDimgs/19.jpg",
    thumbnail: "../static/images/PCDimgs/thumbs/19.jpg",
    caption: "PCD 2019 @Aarhus. Winnie Soon"
  },
  {
    src: "../static/images/PCDimgs/20.jpg",
    thumbnail: "../static/images/PCDimgs/thumbs/20.jpg",
    caption: "PCD 2019 @Aarhus. Winnie Soon"
  }
];

export default () => (
  <Layout>
    <Title txt="Pics from PCD 2019 @Aarhus" />
    <Gallery images={IMAGES} enableImageSelection={false} showImageCount={true}/>
  </Layout>
)