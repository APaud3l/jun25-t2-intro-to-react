function Header() {
  // Any JS compute code you want to write, you can do so here....
  const year = new Date().getFullYear();
  return (
    <header>
      <h1>Welcome to Dev Community {year}!</h1>
    </header>
  );
}

export default Header;