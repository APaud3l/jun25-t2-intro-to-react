import { useState } from "react";
import { DevCard, Name } from "./components/DevCard.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

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
  const [query, setQuery] = useState("");

  return (
    <>
      <Header name="user" />
      <div>
        <label>
          Search devs:{" "}
          <input
            type="text"
            value={query}
            placeholder="Type a name..."
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>
      <main>
        {/* Using Props */}
        {devs
          .filter((dev) => dev.name.toLowerCase().includes(query.toLowerCase()))
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
