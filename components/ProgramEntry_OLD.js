import Link from 'next/link'

// styled jsx for props in css
// https://nextjs.org/learn/basics/styling-components/no-effect-for-nested-components

const ProgramEntry = (props) => (
  <div className="programEntry">
    <Link as={`/workshop/${props.shortUrl}`} href={`/workshop?id=${props.id}`}>
      <a>
        <span className="timeWrapper">{props.time}</span>
        <span className="lead">{props.lead}</span>
        <span className="title">{props.title}</span>
        <span className="desc">{props.desc}</span>
      </a>
    </Link>
    <style jsx>{`
      .programEntry a {
        padding: 0.35em 0px;
        width: 100%;
        border-bottom: 1px dotted purple;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
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
        flex: 1;
      }
      span.desc {
        flex: 3;
      }
    `}</style>
  </div>
  
)

export default ProgramEntry