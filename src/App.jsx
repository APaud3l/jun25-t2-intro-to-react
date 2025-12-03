function Header() {
  // Any JS compute code you want to write, you can do so here....
  const year = new Date().getFullYear();
  return (
    <header>
      <h1>Welcome to Dev Community {year}!</h1>
    </header>
  );
}

function DevCard() {
  const name = "Alice";
  return (
    <div>
      <h3>{name}</h3>
      <p>Loves Node, is now learning React.</p>
    </div>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return <p> Copyright {year} React Dev</p>;
}

function App() {
  // const name = "React Devs";
  // const year = new Date().getFullYear();

  return (
    <>
      {/* <h1>Welcome to Dev Community {year}!</h1> */}
      <Header />
      {/* <p>Welcome, {name}</p> */}
      <main>
        <DevCard />
        <DevCard />
      </main>
      <Footer />
    </>
  );
}

export default App;
