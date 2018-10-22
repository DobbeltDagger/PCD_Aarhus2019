// import Link from 'next/link'
import workshops from '../data/WorkshopData.js'

const WorkshopFull = (props) => (
  <div className="workshop grid">
    <div className="col-1-1">
      <p>This is the full workshop display!!! + {props.id}</p>
      {workshops.map( function(ws, i) {
        if (i == props.id) {
          return <div key={i}>This is the one + {i}</div>
        } else {
          return <div key={i}>This was not the one + {i}</div>
        }
      })}

    </div>
  </div>
)

// <p>{props.ws.title}</p>
/*
// WorkshopFull.getInitialProps = async function() {
WorkshopFull.getInitialProps = function() {
  let theWs = workshops[props.id];
  console.log("theWs:", theWs);
  return {
    // ws: workshops,
    ws: theWs
  }
}
*/

export default WorkshopFull