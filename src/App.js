import React from 'react';
import ImageForm from './Components/ImageForm';
import AppBar from '@material-ui/core/AppBar';


import "./App.css"

class App extends React.Component{
  render(){
    return (
      <div>
        <AppBar position="static">
          <div className="AppBar">
            <div className="Title">hackerspace</div>
            <div className="Links">
              <a href="https://github.com/HackerSpace-PESU">
                <div className="Links">Github</div>
              </a>
              <a href="https://github.com/HackerSpace-PESU"><div className="Links">Instagram</div></a>
            </div>
          </div>
        </AppBar>
        <ImageForm></ImageForm>
      </div>
    );
  }
}

export default App;
