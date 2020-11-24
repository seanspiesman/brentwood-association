import React from "react";

const CodeNext = () => {
  return (
    <div className="container text-center elements">
      <h1>CodeNEXT</h1>
      <p>
        CodeNEXT is the first major rewrite of Austin’s Land Development Code in
        30 years. <br />
        <br />
        <b>
          Regardless of how the code is implemented, there will be implications
          for Brentwood residents and conflicts with the adopted neighborhood
          plan for Brentwood.
        </b>
      </p>
      <br />
      <br />
      <object
        title="codeNEXT"
        style={{ marginLeft: "auto", marginRight: "auto" }}
        type="application/pdf"
        data="/assets/CodeNEXT/CodeNEXTV4Brentwood.pdf"
        width="100%"
        height="1000px"
      >
        <p>
          Your web browser doesn't have a PDF plugin. Instead you can{" "}
          <a href="/assets/CodeNEXT/CodeNEXTV4Brentwood.pdf">
            click here to download the PDF file.
          </a>
        </p>
      </object>
    </div>
  );
};

export default CodeNext;
