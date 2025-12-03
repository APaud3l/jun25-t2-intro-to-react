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

export default function DevCard() {
  const name = "Alice";
  return (
    <Card>
      <Name>{name}</Name>
      <p>Loves Node, is now learning React.</p>
    </Card>
  );
}