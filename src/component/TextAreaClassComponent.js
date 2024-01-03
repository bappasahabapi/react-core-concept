import React from 'react'

export default class TextAreaClassComponent extends React.Component {
    state = {
        title: 'Write here',
        text: 'Write your comment',
        jsLibrary:'React'

    };

    handleChange = (e) => {
        // this.setState({
        //     title:e.target.value
        // })
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value
            })
        }
        else if (e.target.type === 'textarea'){
            this.setState({
                text:e.target.value
            })
        }
        else if (e.target.type === 'select-one'){
            this.setState({
                jsLibrary:e.target.value
            })
        }
        else{console.log('others')}
           
     }

    

    render() {
        return (
            <div>
                <h1>Text Area Class Component</h1>
                <form>
                    <p>{this.state.title}</p>
                    <input
                        type='text'
                        placeholder='enter any text'
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    {/* The type attribute [ type='text']is not valid for a <textarea> element. */}
                    <textarea
                        name="text"
                        placeholder='this is text area'
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                     <br /> <br />
                     <select 
                     value={this.state.jsLibrary}
                     onChange={this.handleChange}
                     >
                        <option  value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                     </select>
                        
                   


                </form>
            </div>
        )
    }
}
