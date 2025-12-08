import { React, useState } from "react";
import { DevCard, Name } from "./components/DevCard.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import AddDevForm from "./components/AddDevForm.jsx";

// Let's say we have some info we got from the database
const devs = [
  {
    id: 1,
    name: "Alice",
    role: "Loves Node, now learning React.",
    seniority: "Senior",
    isMentor: true,
  },
  {
    id: 2,
    name: "Bob",
    role: "Express Wizard, exploring frontend.",
    seniority: "Mid",
    isMentor: false,
  },
  {
    id: 3,
    name: "Charlie",
    role: "Fullstack Learner, JS everywhere.",
    seniority: "Junior",
    isMentor: false,
  },
];

function App() {
  // const [query, setQuery] = useState("");
  const [inputQuery, setInputQuery] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [devList, setDevList] = useState(devs);

  
  const handleAddDev = (newDev) => {
    setDevList((prev) => [...prev, newDev]);
    // Add the new dev to the start of the list
    // setDevList((prev) => [newDev, ...prev]);
  };

  return (
    <>
      <Header name="user" />
      {/* Filtering using div */}
      {/* <div>
        <label>
          Search devs:{" "}
          <input
            type="text"
            value={query}
            placeholder="Type a name..."
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div> */}

      {/* Form component: Adding a new Dev */}
      <AddDevForm onAddDev={handleAddDev} />

      {/* Filtering using form element */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setActiveQuery(inputQuery);
          console.log("Search submitted: ", inputQuery);
        }}
      >
        <label>
          Search devs:{" "}
          <input
            type="text"
            value={inputQuery}
            placeholder="Type a name..."
            onChange={(event) => setInputQuery(event.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>

      <main>
        {/* Using Props */}
        {devList
          .filter((dev) =>
            dev.name.toLowerCase().includes(activeQuery.toLowerCase())
          )
          .map((dev) => (
            <DevCard
              key={dev.id}
              name={dev.name}
              role={dev.role}
              seniority={dev.seniority}
              isMentor={dev.isMentor}
            />
          ))}

        {/* Implementing props.children + props IDEA */}
        {/* <DevCard highlighted>
          <Name>Alice</Name>
          <p>Loves Node, now learning React.</p>
          <small>Senior Developer</small>
          <p>Here is a new badge</p>
        </DevCard>
        <DevCard>
          <Name>Bob</Name>
          <p>Loves Node, now learning React.</p>
          <small>Senior Developer</small>
        </DevCard>
        <DevCard>
          <Name>Charlie</Name>
          <p>Loves Node, now learning React.</p>
          <small>Senior Developer</small>
        </DevCard> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
