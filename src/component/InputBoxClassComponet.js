import React from 'react'

export default class ClassInputBox  extends React.Component {
    state={
        title:'Write here'
    };

    handleChange=(eventFire)=>{
        console.log(eventFire.target.value);

        //change state show korbe ekon
        this.setState({
            title:eventFire.target.value
        })
    }


    render() {
        return (
            <div>
                <h1>Class Component</h1>
                <form>
                    <input  
                        type='text'
                        placeholder='enter any text'
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <p>{this.state.title}</p>
                    {/* <input  
                        type='text'
                        placeholder='enter any text'
                        value='bappa'
                        onChange={()=>console.log('first')}
                    /> */}
                </form>
            </div>
        )
    }
}
