

##  Main Concept
[Official Note](https://bappa-saha.web.app/)

- 🔥🔥🔥[stater pack ](https://github.com/bappasahabapi/react-core-concept/tree/starter)
- 🎮🎮  [2.0-Tic Tac Toy](https://github.com/bappasahabapi/react-core-concept/tree/02/main/tic-tac-toe).**[both dom and react code]**

<h6>📚 React Previous Concept 2019 <a href="https://github.com/bappasahabapi/ReactApp"> Click the 👉 link</a> </h6> 
--- 
 
<details>

<summary>📚 React Main Concepts</summary>


- 05 🔥 [1.10-Lifting-up-state](https://github.com/bappasahabapi/react-core-concept/tree/1.10-lifting-state-up)
- 04 🔥 [1.9-Handle React Form](https://github.com/bappasahabapi/react-core-concept/tree/1.9-handle-react-forms)
- 03 🔥 [1.3-conditional-rendering](https://github.com/bappasahabapi/react-core-concept/tree/1.3-conditional-redering).
- 02 🔥 [1.2-props](https://github.com/bappasahabapi/raect-manage-forms/tree/1.2-props).
- 01 🔥 **Handling with multiple inputs in one useState** [1.1-managing multiple input fields](https://github.com/bappasahabapi/raect-manage-forms/tree/1.1-managing-multiple-input-fields).
<br>
</details>

<details>

<summary>📚 React 2.0 Hooks</summary>

- 06 🔥 [React useState hook](https://github.com/bappasahabapi/react-core-concept/tree/2.0-react-useState-hook)

</details>
<details>

<summary>📚 React Forms </summary>

- 01 🔥 [React Forms](https://github.com/bappasahabapi/react-core-concept/tree/max-17-Working-with-form-user-input)

</details>

###    Uncontrolled component:
- ইনপুট কম্পোনেন্টের মান যদি DOM দ্বারা নিয়ন্ত্রিত হয়, তাহলে এটি একটি `"uncontrolled component"।`

###    Controlled component:
- ইনপুট কম্পোনেন্টের মান যদি React দ্বারা নিয়ন্ত্রিত হয়, তাহলে এটি একটি `"কন্ট্রোলড কম্পোনেন্ট"।`
- An input form element whose value is controlled by React in this way is called a `“controlled component”.`

-  React এর মাধ্যমে `<input/>` কাজ করতে চাইলে, এখানে একটি `"value"` প্রপার্টি এবং "`onChange`" ফাংশন নিতে হবে। other wise this error happened.
    


    **Warning:** You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.


```javascript
 <form>
        <input  
            type='text'
            placeholder='enter any text'
            value='bappa'
            onChange={()=>console.log('first')}
        />
</form>
```

- **class component** , আমরা শুধুমাত্র `setState` ব্যবহার করে state পরিবর্তন করতে পারি। Means dynamic kora.

- সো, পরিবর্তন দেখতে চাইলে আমাদের `handleChange()` ফাংশনের ভিতরে `setState() কল` করতে হবে।

```javascript
    //initial value
    state={
        title:'Write here'
    };

    //change state value
    handleChange=(eventFire)=>{
        console.log(eventFire.target.value);
        this.setState({
            title:eventFire.target.value
        })
    }
```
###    Full Code
```javascript
import React from 'react'

export default class ClassInput  extends React.Component {
    state={
        title:'Write here'
    };

    handleChange=(eventFire)=>{
        console.log(eventFire.target.value);
        this.setState({
            title:eventFire.target.value
        })
    }


    render() {
        return (
            <div>
                <form>
                    <input  
                        type='text'
                        placeholder='enter any text'
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <p>{this.state.title}</p>
                </form>
            </div>
        )
    }
}

```
    

