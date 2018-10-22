// pages/contact.js
import {Component} from 'react'
import Layout from '../components/MyLayout.js'
import Title from '../components/Title'

export default () => (
  <Layout>
    <Title txt="Contact" />
    <div className="Grid Grid--gutters Grid--full large-Grid--fit">
      <div className="Grid-cell">
        <p>Winnie's contact info</p>
      </div>
      <div className="Grid-cell">
        <p>Anders Visti<br/>https://andersvisti.dk<br/>andersvisti@gmail.com<br/>+45 60 63 02 84</p>
      </div>
    </div>
  </Layout>
)