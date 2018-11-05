import Link from 'next/link'

// styled jsx for props in css
// https://nextjs.org/learn/basics/styling-components/no-effect-for-nested-components

const PeopleEntry = (props) => (
  <div className="peopleEntry" id={props.key}>    
    <span className="thumb">
      <Link href={props.link}>
        <a target="_blank">
          <img src={props.thumb} />
        </a>
      </Link>
    </span>
    <span className="name">{props.name}</span>
    <span className="desc">{props.desc}</span>
    <span>
      <Link href={props.link}>
        <a target="_blank">{props.link}</a>
      </Link>
    </span>
  </div>
)

export default PeopleEntry