import Counter from "./Counter";
import CounterClass from "./CounterClass";


function Footer() {
  const year = new Date().getFullYear();
  return (
  <>
  <p> Copyright {year} React Dev</p>
  <CounterClass />
  <Counter />
  </>
  )
}

export default Footer;