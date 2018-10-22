// styled jsx for props in css
// https://nextjs.org/learn/basics/styling-components/no-effect-for-nested-components

const Title = (props) => (
  <div className="Grid Grid--gutters Grid--full large-Grid--fit">
    <div className="Grid-cell">
      <h2>{props.txt}</h2>
    </div>
  </div>
)

export default Title