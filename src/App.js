import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
        let r ='<b>React</b>'
        let rn = 'React Native'
        const el = (
            <div>
                Create Web & Moblie App<br/>
                with <span dangerouslySetInnerHTML={{__html: r}}/> & {rn}
            </div>
        )
    return el
}

export default App;