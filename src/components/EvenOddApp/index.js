import Component from 'react'

import './index.css'

class EvenOddApp extends Component {
  render() {
    return (
      <div className="bgContainer">
        <div className="card">
          <h1 className="head1">Count 0</h1>
          <h1 className="head2">Count is Even</h1>
          <div>
            <button className="button" type="button">
              Increment
            </button>
          </div>
          <p className="paragraph">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
