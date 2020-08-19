import React from "react";

const DeadlinesAds = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-6">
          <h1 className="text-center">Deadlines</h1>
          <p>
            If you are wanting to submit an article for publication, please
            submit it to our newsletter editor at:{" "}
            <a href="mailto:brentwood.newsletter@gmail.com">
              brentwood.newsletter@gmail.com
            </a>
            . Articles submitted should be of specific or general interest to
            Brentwood residents; no commercial submissions, please.
          </p>
          <br />
          Schedule for Article & Ad Graphic Submissions:
          <ul>
            <li>
              At least seven (7) days prior to end of January, March, May, July,
              September & November.
            </li>
            <li>
              Newsletters will be posted in early February, April, June, August,
              October & December.
            </li>
          </ul>
        </div>
        <div className="col col-md-6">
          <h1 className="text-center">Ads</h1>
          <p>
            BNA runs advertisements by local businesses to fund projects for the
            neighborhood such at the Arroyo Hike & Bike Trail installation and
            maintenance. ALL ADS must be PREPAID, prior to issuance of the
            newsletter. Our current ad rates are:
          </p>
          <ul>
            <li>
              <b>$50.00 per eighth </b> page/business card (3.75"w x 2.5"h);
            </li>

            <li>
              <b>$100.00 per quarter page</b> (3.75"w x 5"h); (no half or full
              page ads will be sold due to demand for space);
            </li>
            <li>
              <b>NOTE:</b> Ad rates are projected to decrease in cost in 2021
              due to reduced costs of production and increased frequency.
            </li>
          </ul>
          <h4>STEPS TO ADVERTISE</h4>
          <ul>
            <li>
              Contact us at brentwood.adsales@gmail.com to confirm space is
              available. We encourage advertisers to pay for one (1) full year
              in advance for ease of accounting.
            </li>
            <li>
              Please make checks payable to Brentwood Neighborhood Association.
              Mail the check to BNA, 1417 Palo Duro Rd., Austin, TX 78757.
            </li>
            <li>
              Send the digital file to brentwood.adsales@gmail.com prior to
              deadline shown above in the Schedule for Article & Ad Graphic
              Submissions.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeadlinesAds;
