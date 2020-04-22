import React from "react";

function Footer() {
  var date = new Date();
  return (
    <div style={{ height: 90, background: "black" }}>
      <footer>
        <div>
          <p
            style={{
              color: "white",
              fontFamily: "cursive",
              fontSize: "17px",
              textAlign: "center"
            }}
          >
            So here is this small project using nearly all react basic
            properties without any use of API.
            <br /> One can edit or remove the notes using this small react App
            <br />
            CopyRight @{date.getDate()}/{date.getMonth()}/{date.getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
