import { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div style={{border:'4px solid yellow'}}>
      <h3 style={{textAlign:'center'}}>Example-1: This is an Accordion</h3>
      <Panel 
       title="Panel-1-Title" 
       isActive={activeIndex===0}
       onShow={()=>setActiveIndex(0)}
      >
        <p>This is description of panel-1</p>
      </Panel>
      <br />
      <Panel 
       title="Panel-2-Title" 
       isActive={activeIndex===1}
       onShow={()=>setActiveIndex(1)}
      >
        <p>This is description of panel-2 </p>
      </Panel>
    </div>
  );
}


function Panel({ title, children, isActive ,onShow}) {
  return (
    <div style={{ border: "1px solid black" }}>
      <h2>{title}</h2>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={(onShow)}>  Click to open</button>
      )}
    </div>
  );
}
