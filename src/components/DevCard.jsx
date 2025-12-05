import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid #434343;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    background: #f1babaff;
`

const Name = styled.h3`
    margin: 0 0 0.25rem 0;
    color: #890e0eff;
    font-size: 1.1rem;
`
// Using props
// export default function DevCard({name, role, seniority}) {
//   // const name = "Alice";
//   return (
//     <Card>
//       <Name>{name}</Name>
//       <p>{role}</p>
//       <small>{seniority}</small>
//     </Card>
//   );
// }

// Using the idea of props:children
function DevCard({ children }) {
  // const name = "Alice";
  return (
    <Card>
      {children}
    </Card>
  );
}

export {DevCard, Name};