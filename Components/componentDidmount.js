import React from 'react'
import './style.css'
export class ComponentDidmount extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            favcolor: "red"
        }
    }

    componentDidMount(){
        setTimeout(() =>{
            this.setState({
                favcolor:"vine" })
        } , 2000)
    }



    render() {
        return (
            <div>
                <h1>My favcolor is <span className='didmount'> {this.state.favcolor}</span></h1>
            </div>
        )
    }
}

export default ComponentDidmount;