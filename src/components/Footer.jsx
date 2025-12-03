function Footer() {
  const year = new Date().getFullYear();
  return <p> Copyright {year} React Dev</p>;
}

export default Footer;