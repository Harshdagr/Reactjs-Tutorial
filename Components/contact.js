import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Contact extends Component {
  render() {
    return (
      <div>
        <h1>contact works</h1>
        <Link to="/">Back to header</Link>
      </div>
    )
  }
}

export default Contact
