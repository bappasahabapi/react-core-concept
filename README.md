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
    



