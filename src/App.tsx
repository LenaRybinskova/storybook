import React from 'react';
import './App.css';
import {Page} from './stories/Page';
import {AddItemForm} from './stories/AddItemForm';
import {Task} from './stories/Task';

function App() {
    return (
        <div className="App">
            <Page/>
            {/*<Header onCreateAccount={()=>{}} onLogin={()=>{}} onLogout={()=>{}} ></Header>
            <Button label={'lena'} primary={true} size={'small'} onClick={() => {
            }} backgroundColor={'red'}/>*/}
            <hr/>
                <AddItemForm addItem={()=>{}}/>
            <Task task={{id:"2", title:"хлеб", isDone:true}} todolistId={"22"} removeTask={()=>{}} changeTaskStatus={()=>{}} changeTaskTitle={()=>{}}/>

        </div>
    );
}

export default App;
