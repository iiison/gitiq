import React    from 'react'
import ReactDOM from 'react-dom'

var Test = React.createClass({
  render : function () {
    return (
      <div>{'Tesing the test'}</div>
    )
  }
})

ReactDOM.render(<Test />, document.getElementById('root'))
