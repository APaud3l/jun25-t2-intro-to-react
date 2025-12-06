import { useTheme } from "../context/ThemeContext";
import Hello from "./Hello";

function Header({ name }) {

  const { theme, toggleTheme } = useTheme();

  // Any JS compute code you want to write, you can do so here....
  const year = new Date().getFullYear();
  return (
    <header>
      <Hello name= {name} />
      <h1>Welcome to Dev Community {year}!</h1>
      <p>Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}

export default Header;