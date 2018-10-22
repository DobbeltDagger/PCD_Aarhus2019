import Link from 'next/link'

// styled jsx for props in css
// https://nextjs.org/learn/basics/styling-components/no-effect-for-nested-components

const ResourceEntry = (props) => (
  <div className="resourceEntry">    
    <span className="thumb">
      <Link href={props.link}>
        <a target="_blank">
          <img src='../static/images/{props.thumb}' />
        </a>
      </Link>
    </span>
    <span className="name">{props.name}</span>
    <style jsx>{`
      .resourceEntry {
        padding: 0.5em 0px;
        width: 100%;
        color: darkslateblue;
      }
      span.thumb a {
        width: 100%;
        height: auto;
        margin-bottom: 1em;
        border: 1px solid red;
      }
      span.name {
        color: red;
      }
    `}</style>
  </div>
)

export default ResourceEntry