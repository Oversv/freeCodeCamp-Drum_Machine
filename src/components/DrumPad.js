import React from 'react'

class DrumPad extends React.Component{
    
    constructor(props){
        super(props)

        this.audioRef = React.createRef();       
    }    

    audioKey = (e) =>{        
        
        let clipName;

        if(this.audioRef.current.id === e.key.toUpperCase()){ 
  
            this.audioRef.current.play()       
           
            clipName = this.props.clipName;
            const handleAudioKey = this.props.handleAudioKey       
            handleAudioKey(clipName)
        }  
    }

    audioClick = ()=>{ 
        
        this.audioRef.current.play()  

        let clipName = this.props.clipName;
        const handleAudioClick = this.props.handleAudioClick  
        handleAudioClick(clipName)
    }    

    /***Para que se pueda usar el keydown sin tener que hacer el focus en alguno de los botones ***/
    componentDidMount(){
        document.addEventListener('keydown', this.audioKey)  
    }
      
    componentWillUnmount(){ 
        document.removeEventListener('keydown', this.audioKey);
    }
    /*** Fin ***/

    render(){
        const {value, audioUrl} = this.props

        return(
           <>   
            <div className="col-4" >
                       
                <div
                    className="drum-pad bg-dark text-warning controls" 
                    id={value}  
                    onClick = {this.audioClick} 
                    onKeyDown = {this.audioKey}                   
                    tabIndex="0" //Para que se detecte el keyDown
                    >{value}
                    
                    <audio 
                        className ="clip"
                        id={value} 
                        src={audioUrl}                        
                        ref={this.audioRef}
                    />  
                </div>

            </div>    
           
            </>
        )
    }

}

export default DrumPad