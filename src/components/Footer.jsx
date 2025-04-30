function Footer() {
    const date = new Date();
    const hour = date.getHours();
    const openHour = 12;
    const closeHour = 22;
    const open = hour >= openHour && hour <= closeHour;

  return (

    <footer className="footer">{(open?` We are Open till ${closeHour}:00:00`:" Sorry we are close")}</footer>
  );
}

export default Footer;
