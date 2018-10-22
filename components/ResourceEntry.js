import Link from 'next/link'

// styled jsx for props in css
// https://nextjs.org/learn/basics/styling-components/no-effect-for-nested-components

const ResourceEntry = (props) => (
  <div className="resourceEntry">    
    <span className="thumb">
      <Link href={props.link}>
        <a target="_blank">
          <img src={props.thumb} />
        </a>
      </Link>
    </span>
    <span className="name">{props.name}</span>
    <span className="desc">{props.desc}</span>
  </div>
)

export default ResourceEntry