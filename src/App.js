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
            <div className="Title"> &lt;/HackerSpace&gt;</div>
            <div className="Links">
              <a href="https://github.com/HackerSpace-PESU">
                <div className="Link"><i id="github" class="fab fa-github"></i></div>
              </a>
              <a href="https://discord.com/invite/zEpxPnP">
                <div className="Link"><i id="discord" class="fab fa-discord"></i></div>
              </a>
            </div>
          </div>
        </AppBar>
        <ImageForm></ImageForm>
      </div>
    );
  }
}

export default App;
