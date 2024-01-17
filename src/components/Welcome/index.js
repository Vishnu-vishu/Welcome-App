import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubcribed: true}

  onSubcribedText = () => {
    this.setState(prevState => ({isSubcribed: !prevState.isSubcribed}))
  }

  onButtonText = () => {
    const {isSubcribed} = this.state

    return isSubcribed ? 'Subscribe' : 'Subscribed'
  }

  render() {
    const buttonText = this.onButtonText()
    
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="message">Thank you! Happy Learning</p>
        <button className="button" onClick={this.onSubcribedText} type="button" >
        {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
