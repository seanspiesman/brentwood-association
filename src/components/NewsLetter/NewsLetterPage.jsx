import React from "react";

const NewsLetterPage = () => {
  return (
    <div className="container">
      <h1 className="text-center">News Letters</h1>

      <div className="accordion" id="news-letter-accordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-center"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                August 2020 Newsletter
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#news-letter-accordion"
          >
            <div className="card-body">
              <div style={{ width: "100%", paddingBottom: "30px" }}>
                <object
                  title="News Letter"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                  data="/assets/NewsLetters/BNA2020-08.pdf"
                  type="application/pdf"
                  width="100%"
                  height="1000"
                >
                  <p>
                    Your web browser doesn't have a PDF plugin. Instead you can{" "}
                    <a href="/assets/NewsLetters/BNA2020-08.pdf">
                      click here to download the PDF file.
                    </a>
                  </p>
                </object>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-center collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                June 2020 Newsletter
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#news-letter-accordion"
          >
            <div className="card-body">
              <div style={{ width: "100%", paddingBottom: "30px" }}>
                <object
                  title="News Letter"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                  type="application/pdf"
                  data="/assets/NewsLetters/BNA2020-06.pdf"
                  width="100%"
                  height="1000"
                >
                  <p>
                    Your web browser doesn't have a PDF plugin. Instead you can{" "}
                    <a href="/assets/NewsLetters/BNA2020-06.pdf">
                      click here to download the PDF file.
                    </a>
                  </p>
                </object>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-center collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                April 2020 Newsletter
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#news-letter-accordion"
          >
            <div className="card-body">
              <div style={{ width: "100%", paddingBottom: "30px" }}>
                <object
                  title="News Letter"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                  data="/assets/NewsLetters/BNA2020-04.pdf"
                  type="application/pdf"
                  width="100%"
                  height="1000"
                >
                  <p>
                    Your web browser doesn't have a PDF plugin. Instead you can{" "}
                    <a href="/assets/NewsLetters/BNA2020-04.pdf">
                      click here to download the PDF file.
                    </a>
                  </p>
                </object>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingFour">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-center collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                January 2020 Newsletter
              </button>
            </h2>
          </div>
          <div
            id="collapseFour"
            className="collapse"
            aria-labelledby="headingFour"
            data-parent="#news-letter-accordion"
          >
            <div className="card-body">
              <div style={{ width: "100%", paddingBottom: "30px" }}>
                <object
                  title="News Letter"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                  data="/assets/NewsLetters/BNA2020-01.pdf"
                  type="application/pdf"
                  width="100%"
                  height="1000"
                >
                  <p>
                    Your web browser doesn't have a PDF plugin. Instead you can{" "}
                    <a href="/assets/NewsLetters/BNA2020-01.pdf">
                      click here to download the PDF file.
                    </a>
                  </p>
                </object>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingFive">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-center collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                November 2019 Newsletter
              </button>
            </h2>
          </div>
          <div
            id="collapseFive"
            className="collapse"
            aria-labelledby="headingFive"
            data-parent="#news-letter-accordion"
          >
            <div className="card-body">
              <div style={{ width: "100%", paddingBottom: "30px" }}>
                <object
                  title="News Letter"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                  data="/assets/NewsLetters/BNA2019-11.pdf"
                  type="application/pdf"
                  width="100%"
                  height="1000"
                >
                  <p>
                    Your web browser doesn't have a PDF plugin. Instead you can{" "}
                    <a href="/assets/NewsLetters/BNA2019-11.pdf">
                      click here to download the PDF file.
                    </a>
                  </p>
                </object>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterPage;
