import React from "react";

const ContactUsSidebar = () => {
  return (
    <>
      {/* <div className="spacer"></div> */}
      {/* <div className="col-1"></div> */}
      <div className="col-lg-3 ">
        <div className="elements">
          {/* <h4>Contact Us</h4>
              <p>
                To correspond directly with the Officers and Steering Committee
                for the BNA, please send emails to:{" "}
                <a href="mailto:brentwood.austin@gmail.com">
                  brentwood.austin@gmail.com
                </a>
                <br />
                <br /> */}
          <p style={{ marginBottom: 0 }}>
            <b>Stay in Touch</b>
          </p>
          <hr className="solid"></hr>
          <p>
            Join the Google neighborhood group! Go to{" "}
            <a href="https://groups.google.com/g/brentwood-na">
              BNA Google Group
            </a>{" "}
            and apply for membership.
            <br />
            <br />
            Like and follow us on{" "}
            <a href="https://www.facebook.com/BrentwoodAustin/">Facebook</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUsSidebar;
