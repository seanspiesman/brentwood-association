import React from "react";
import ContactUsSidebar from "../SupportContact/ContactUsSidebar";

const BNACalendar = () => {
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-lg-7 elements">
          <h1>Calendar</h1>
          <div className="aspect-ratio">
            <iframe
              src="https://www.google.com/calendar/embed?src=brentwood.austin%40gmail.com&ctz=America/Chicago"
              width="100%"
              height="800"
              scrolling="no"
              title="BNACalendar"
            />
          </div>
        </div>
        <ContactUsSidebar />
      </div>
    </div>
  );
};

export default BNACalendar;
