import React from "react";

const Floodplain = () => {
  return (
    <div className="container elements">
      <br />
      <h1>Floodplain</h1>
      <p>
        The National Weather Service and NOAA conducted a rainfall study, Atlas
        14, across the nation to measure the intensity of rainfall and update
        our knowledge of flood risks. Based on this study, each region in the
        U.S. has been given updated information with the intention of directing
        city planning and risk management. The Atlas 14 study reveals that
        Central Texas region will experience greater, more intense rainfall
        events that may lead to property loss/damage.
        <br />
        <br />
        {
          "The City of Austin Watershed Protection Department proposed a new City ordinance that would serve to 1) Adopt the data from the Atlas 14 study as a legitimate tool for future regional and city planning, and 2) Revise City Code (including the Land Development Code) for properties that the City determines are at increased risk based on the information in the Atlas 14 study."
        }
        <br />
        <br />
        In July of 2019, neighbors became aware of the possible impacts to the
        neighborhood of this study, including an increase of properties being
        moved into regulatory floodplains and restrictions on future
        improvements to properties, and requested more information from the
        City. Working with the Brentwood NA Steering Committee, District 7
        Council Member Leslie Pool’s office agreed to hold a D7 Townhall meeting
        in August on this issue. The townhall was well-attended and allowed
        neighbors in Allandale, Brentwood, Crestview, Rosedale, and Wooten to
        hear the proposed changes from the Watershed Department. Click{" "}
        <b>
          <a href="/assets/Other/atlas14_presentation_9_12_18.pdf">here</a>
        </b>{" "}
        to view the Watershed Protection Department’s presentation on Atlas 14.
        <br />
        <br />
        Once the impacts were clearly identified (see list below), a group of
        neighborhood advocates organized and began to tackle the issues
        (advocacy efforts in red below).
      </p>
      <ol>
        <li>
          Properties from previously unverified 500-year floodplains would
          automatically be moved into the 100-year floodplain, resulting in a
          requirement to purchase FEMA floodplain insurance and adhere to city
          regulations restricting improvements.
          <br />
          <p style={{ color: "red" }}>
            Professional engineers challenged the hydrological models being used
            by the City and successfully proved the inaccuracy of the models,
            resulting in a majority of the properties remaining in the 500 year
            floodplain, and not being moved into the 100 year floodplain.
          </p>
        </li>
        <li>
          Properties previously identified in the 100-year floodplain (many of
          which were identified as recently as 2016) would move into the 25-year
          floodplain. Current City Code prohibits any improvements to properties
          that encroach on the 25 year floodplain.
          <br />
          <p style={{ color: "red" }}>
            Properties that would be moving into the 25 year floodplain were at
            risk of turning over to developers who would find it more
            cost-effective to raze lots and build larger homes at a higher
            elevation (vs. elevating the existing structure to meet the proposed
            requirements). Neighbors successfully argued that existing
            structures could remain at current elevation, while additional
            improvements would need to comply with a stricter building standard
            (elevation of additional improvements), preventing displacement of
            middle-income families from the City.
          </p>
        </li>
        <li>
          Interim maps would be used to enforce city regulations, effective
          immediately, on the above-stated properties until formal adoption of
          the maps by FEMA in 2-3 years.
        </li>
      </ol>
    </div>
  );
};

export default Floodplain;
