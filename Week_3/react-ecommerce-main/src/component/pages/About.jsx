import react, { useState } from "react";

export default function About() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("ram");
  return (
    <div className="mt-15 ml-10">
      Count : {count}
      <br></br>
      <button onClick={() => setCount(count + 1)}> Increment</button>
      <br></br>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <div>
        <h3>FirstName: {firstName}</h3>
      </div>
    </div>
  );
}