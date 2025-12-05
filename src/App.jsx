import DevCard from './components/DevCard.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

// Let's say we have some info we got from the database
const devs = [
  {id: 1, name: "Alice", role: "Loves Node, now learning React.", seniority: "Senior"},
  {id: 2, name: "Bob", role: "Express Wizard, exploring frontend.", seniority: "Mid"},
  {id: 3, name: "Charlie", role: "Fullstack Learner, JS everywhere.", seniority: "Junior"}
];

function App() {

  return (
    <>
      <Header />
      <main>
        {/* Using Props */}
        {/* {
        devs.map((dev) => (
          <DevCard 
            key={dev.id}
            name={dev.name}
            role={dev.role}
            seniority={dev.seniority}
          />
        ))
        } */}
      </main>
      <Footer />
    </>
  );
}

export default App;
