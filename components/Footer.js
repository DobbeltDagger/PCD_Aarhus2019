import Link from 'next/link'

const Footer = () => (
  <footer id="Footer">
    <div className="Grid Grid--gutters Grid--full large-Grid--fit">
      <div className="Grid-cell">
        <div className="bar">&nbsp;</div>
      </div>
    </div>
    <div className="Grid Grid--gutters Grid--full large-Grid--fit">
      <div className="Grid-cell">
        <p>Some stuff here .. maybe contact info and such</p>
      </div>
      <div className="Grid-cell">
        <p>Something else here: <a href="#" target="_top">top</a></p>
      </div>
    </div>
  </footer>
)

export default Footer