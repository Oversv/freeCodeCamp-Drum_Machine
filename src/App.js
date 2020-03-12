import React from 'react';
import './App.css';
import BoxPad from './components/BoxPad'
import Display from './components/Display'
import Header from './components/Header';

class App extends React.Component {

  constructor(props){
    super(props)

    this.state={  
      drumPads: [
        {
          value: "Q",
          audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
          clipName: 'Heater 1'       
        },
        {
          value: "W",
          audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
          clipName: 'Heater 2'       
        },
        {
          value: "E",
          audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
          clipName: 'Heater 3'       

        },
        {
          value: "A",
          audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
          clipName: 'Heater 4'       
        },
        {
          value: "S",
          audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
          clipName: 'Heater 6'       
        },
        {
          value: "D",
          audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
          clipName: 'DSC'
        },
        {
          value: "Z",
          audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
          clipName: 'Kick Hat'
        },
        {
          value: "X",
          audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
          clipName: 'Kick 1'
        },
        {
          value: "C",
          audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
          clipName: 'Cev'
        }
      ], 
      display : ''
    }  
  }

  handleAudioKey = (clipName)=>{  
    
    this.setState({display: clipName}) 
  }

  handleAudioClick = (clipName)=>{ 

    this.setState({display: clipName})    
  }

  render(){

    return (
      <div >
        <Header/>       
        <div className="d-flex flex-row container bg-secondary boxSize ">
          <div id="drum-machine" className="row no-gutters">
            <BoxPad 
              drumPads = {this.state.drumPads}
              handleAudioKey = {this.handleAudioKey}
              handleAudioClick = {this.handleAudioClick}
            />
          </div>
            <Display display ={this.state.display}/>
        </div>

      </div>

    );
  }
}

export default App;