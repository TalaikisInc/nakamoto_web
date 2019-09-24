import React from 'react'
import ReactDOM from 'react-dom'
import App from 'containers/App'
import * as serviceWorker from 'serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'css/style.css'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
