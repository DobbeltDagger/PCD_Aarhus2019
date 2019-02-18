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

export default WorkshopFull