import Link from 'next/link'

// styled jsx for props in css
// https://nextjs.org/learn/basics/styling-components/no-effect-for-nested-components

const ProgramEntry = (props) => (
  <div className="programEntry" id={props.key}>
    <span className="timeWrapper">{props.time}</span>
    <span className="lead">{props.lead}</span>
    <span className="title">{props.title}</span>
    <span className="desc">{props.desc}</span>
    <span className="link">
      <Link href={props.link}>
        <a target="_blank">{props.link}</a>
      </Link>
    </span>
    <style jsx>{`
      .programEntry {
        padding: 0.5em 0px;
        width: 100%;
        border-bottom: 1px solid rgba(32,27,63,0.1);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }
      span {
        text-align: left;
      }
      span.timeWrapper {
        padding-right: 1em;
        flex: 1;
      }
      span.lead {
        padding-right: 1em;
        flex: 2;
      }
      span.title {
        flex: 3;
      }
      span.desc {
        flex: 3;
        display: none;
      }
      span.link {
        flex: 2;
      }
    `}</style>
  </div>
  
)

export default ProgramEntry