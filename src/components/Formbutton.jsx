import { useState } from "react";
const Formbutton = () => {
  const [index, setindex] = useState([
    { name: "task1", priority: "1", completed: false },
    { name: "task2", priority: "2", completed: false },
  ]);

  const Deletee = (indexToDelete) => {
    setindex(prevIndex => prevIndex.filter((_, i) => i !== indexToDelete));
  };
  
  const Completee = (indexToComplete) => {
    setindex(prevIndex =>
      prevIndex.map((item, i) =>
        i === indexToComplete ? { ...item, completed: true } : item
      )
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "3px solid black",
        minHeight: 100,
        flexDirection: "column",
      }}
    >
      <h1 
      >
        Todo App
      </h1>

      <form>
        <input
          type="text"
          name="nm"
          style={{
            display: "block",
            backgroundColor: "#777",
            color: "white",
            padding: "10px 15px"
          }}
        ></input>
      </form>

      {index.map((element, i) => {
        return (
          <div key={i} style={{ textDecoration: element.completed ? "line-through" : "none", color: element.completed ? "red" : "black" }}>
            {element.name}, {element.priority}
            <button  onClick={() => Deletee(i)}>Delete Item</button>
            <button style={{marginTop:"20px"}} onClick={() => Completee(i)}>Complete Item</button>
          </div>
        );
      })}
    </div>
  );
};

export default Formbutton;