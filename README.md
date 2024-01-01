##    Conditional Rendering.
- **App.js** file code 
- 
- 
```javascript
import "./App.css";
import ConRending from "./lesson/conditon-rendering/ConRending";

function App() {
  const quantities = [1];
  return (
    <div className="App">
      <h1>React Conditional Rendering </h1>
      <hr></hr>
      <ConRending/>
    </div>
  );
}

export default App;

```
-**ConRendering.js** file



-    todo:1 ways of conditional rendering. 
   - -   amra jsx element gulo k javaScript Variable er moto imagine korbo 
```javascript
        

        let button;
        if (locale === 'bn-BD') {
            button = (
                <ConButton
                    change={this.handleClick}
                    locale="en-US"
                >
                    Click Me
                </ConButton>
            )
        } else {
            button = (<ConButton
                change={this.handleClick}
                locale="bn-BD"
            >
                Click Me
            </ConButton>)
        }
```
jeikane rendering korbo sekane `{button}` paste kore dibo

```javascript
  <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                {button}
            </div>
```
-  2nd way

```javascript
 return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                {locale === "bn-BD" ?
                    (
                        <ConButton
                            change={this.handleClick}
                            locale="en-US"
                        >
                            Click Me
                        </ConButton>
                    )
                    : (<ConButton
                        change={this.handleClick}
                        locale="bn-BD"
                    >
                        Click Me
                    </ConButton>)
                }
            </div>
        );
```





#    Full code   

```javascript
import React from 'react';
import ConButton from './ConButton';

// import Button from '../../components/Button';

class ConRending extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }


    render() {
        const { date, locale } = this.state;


        
        //todo:1 ways of conditional rendering. 
        // amra jsx element gulo k javaScript Variable er moto imagine korbo
        let button;
        if (locale === 'bn-BD') {
            button = (
                <ConButton
                    change={this.handleClick}
                    locale="en-US"
                >
                    Click Me
                </ConButton>
            )
        } else {
            button = (<ConButton
                change={this.handleClick}
                locale="bn-BD"
            >
                Click Me
            </ConButton>)
        }
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                {button}
            </div>
        );
    }
}

export default ConRending;
``` 