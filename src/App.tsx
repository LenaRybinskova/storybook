import React from 'react';
import './App.css';
import {Button} from './stories/Button';

function App() {
    return (
        <div className="App">
            <Button label={'lena'} primary={true} size={'small'} onClick={() => {
            }} backgroundColor={'red'}/>
        </div>
    );
}

export default App;
