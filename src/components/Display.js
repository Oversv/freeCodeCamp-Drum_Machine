import React from 'react'

class Display extends React.Component{
    
    render(){
        return(
        <div id="display" className="display">{this.props.display}</div>
        )
    }
}

export default Display