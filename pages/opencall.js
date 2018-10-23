import {Component} from 'react'
import Layout from '../components/MyLayout.js'
import Title from '../components/Title'

export default () => (
  <Layout>
    <Title txt="Open Call" />
    <div className="Grid Grid--gutters Grid--full large-Grid--fit">
      <div className="Grid-cell">
        <p>PCD @ Aarhus is now looking for artists/designers/creative practitioners/computer scientists/amateurs or basically anyone who has an interest in code and would like to show and tell your software-based project. We are aiming at having 15 people for the show and tell session, and each presenter will give a max of 15 mins presentation. The project can be something very simple and fun from basic geometry to complex interactive sketches across disciplines.</p>
      </div>
      <div className="Grid-cell">
        <p>The aim is to showcase a wide range of projects and to discuss how everyone might work and think with code differently. If you are interested to take part, please get in touch with us in advance so that we can arrange it accordingly. Although we are primarily focused on Processing (URL here) and p5.js (URL here), we also welcome you to show and tell something regarding other programming languages. </p>
      </div>
    </div>
  </Layout>
)