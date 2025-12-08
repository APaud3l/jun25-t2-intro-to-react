import { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";

const Card = styled.div`
  border: 1px solid #434343;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #f1babaff;
`;

const Name = styled.h3`
  margin: 0 0 0.25rem 0;
  color: #890e0eff;
  font-size: 1.1rem;
`;
// Using props
export default function DevCard({ name, role, seniority, isMentor }) {
  const { theme } = useTheme();

  // const [constName, functionThatSetsTheValue ] = useState(default_value)
  const [isFavourite, setIsFavourite] = useState(false);

  function handleToggleFavourite() {
    setIsFavourite((prev) => !prev);
  }

  const handleCardClick = () => {
    console.log(`Clicked dev: ${name} ${role}`);
  };

  return (
    <Card
      onClick={handleCardClick}
      style={{
        background: theme === "dark" ? "#2b1f1fff" : "#cfb7b7ff",
        color: theme === "dark" ? "#ffffff" : "#000000",
      }}
    >
      <Name>{name}</Name>
      <p>{role}</p>
      <small>{seniority}</small>
      {
        // condition && <Something />
        isMentor && (
          <span style={{ margin: "0.5rem", color: "#9d0958ff" }}>⭐Mentor</span>
        )
      }
      <button onClick={handleToggleFavourite}>
        {isFavourite ? "Remove as favourite" : "Add as Favourite"}
      </button>

      {/* <Options seniority={seniority}  /> */}
    </Card>
  );
}

// Using the idea of props:children
// function DevCard({ highlighted, children }) {
//   // const name = "Alice";
//   return (
//     <Card style={{ borderColor: highlighted ? '#ff0000ff' : '#434343' }}>
//       {children}
//     </Card>
//   );
// }

export { DevCard, Name };
