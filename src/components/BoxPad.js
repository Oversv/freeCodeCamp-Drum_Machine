import React from 'react'
import DrumPad from './DrumPad'

function BoxPad(props){

    return(
        <>  
            {
                props.drumPads.map((e, i)=>{
                    return <DrumPad 
                            value ={e.value} 
                            audioUrl = {e.audioUrl}
                            clipName ={e.clipName}
                            key = {i.toString()}
                            handleAudioClick = {props.handleAudioClick}
                            handleAudioKey = {props.handleAudioKey}
                            />
                })
            }
        </>
    )    

}

export default BoxPad