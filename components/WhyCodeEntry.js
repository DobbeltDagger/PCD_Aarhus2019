import Link from 'next/link'

// styled jsx for props in css
// https://nextjs.org/learn/basics/styling-components/no-effect-for-nested-components

const WhyCodeEntry = (props) => (
  <div className="whyCodeEntry" id={props.id}>    
    <span className="name">{props.name}</span>
    <span className="whyCode">{props.whyCode}</span>
  </div>
)

// <div className="whyCodeEntry" id={props.key} key={props.key}

export default WhyCodeEntry