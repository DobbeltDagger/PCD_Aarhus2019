import Link from 'next/link'

// styled jsx for props in css
// https://nextjs.org/learn/basics/styling-components/no-effect-for-nested-components

const ProgramEntry = (props) => (
  <div className="programEntry" id={props.key}>
    <span className="timeWrapper">{props.time}</span>
    <span className="infoWrapper">
      <span className="title">{props.title}</span>&nbsp;&nbsp;
      <span className="lead">{props.lead}</span>
    </span>
    <style jsx>{`
      .programEntry {
        padding: 0.5em 0px;
        width: 100%;
        border-bottom: 1px solid rgba(32,27,63,0.1);
      }
      span {
        text-align: left;
      }
      span.timeWrapper {
        display: inline-block;
        padding-right: 1em;
      }
      span.infoWrapper {
        display: inline-block;
      }
      span.title {
        background: rgba(255,255,0,0.4);
        font-style: italic;
        padding: 2px 3px;
      }
      span.lead {
        padding-right: 1em;
      }
    `}</style>
  </div>
  
)

export default ProgramEntry