import {Component} from 'react'
import Layout from '../components/MyLayout.js'
import Title from '../components/Title'

export default () => (
  <Layout>
    <Title txt="Open Call" />
    <div className="Grid Grid--gutters Grid--full large-Grid--fit">
      <div className="Grid-cell">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat imperdiet sapien eget posuere. Phasellus aliquet orci sed augue pulvinar tempor. Nullam non ipsum eget lorem ullamcorper tristique vel non leo. Curabitur vel mauris nunc. Suspendisse non semper diam. Sed vitae lectus sit amet magna congue pretium.</p>
      </div>
      <div className="Grid-cell">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat imperdiet sapien eget posuere. Phasellus aliquet orci sed augue pulvinar tempor. Nullam non ipsum eget lorem ullamcorper tristique vel non leo. Curabitur vel mauris nunc. Suspendisse non semper diam.</p>
      </div>
      <div className="Grid-cell">
        <p>Cras pretium enim ac ex accumsan dapibus. Nullam luctus egestas semper. Sed rhoncus mollis est at porttitor. Sed placerat aliquet dignissim. Curabitur in tristique tortor. Fusce lorem metus, suscipit nec ante in, lobortis rutrum lacus. Nunc id viverra lacus. Nulla blandit vehicula sodales. Vivamus facilisis blandit diam, in pretium leo volutpat non</p>
      </div>
    </div>
  </Layout>
)