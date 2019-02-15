import Link from 'next/link'

// styled jsx for props in css
// https://nextjs.org/learn/basics/styling-components/no-effect-for-nested-components

const GalleryEntry = (props) => (
  <div className="galleryEntry" id={props.id}>    
    <span className="thumb">
      <Link href={props.link}>
        <a target={props.newWindow}>
          <img src={props.thumb} />
        </a>
      </Link>
    </span>
    <span>
      <Link href={props.link}>
        <a target={props.newWindow}>{props.link}</a>
      </Link>
    </span>
  </div>
)

export default GalleryEntry