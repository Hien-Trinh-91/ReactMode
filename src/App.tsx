import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.scss';
import './Config/interceptor'

import Main from './Components/Main.component';
class App extends React.Component {
    render() {
        return (
            <div>
                <Main />
            </div>

        )
    }
}
export default App;