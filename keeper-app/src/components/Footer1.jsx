import React from "react";

const currYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright c {currYear}</p>
    </footer>
  );
}

export default Footer;
