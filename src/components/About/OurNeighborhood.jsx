import React from "react";
import { Link } from "react-router-dom";

const OurNeighborhood = () => {
  return (
    <div className="container">
      <h1 className="text-center"> Our Neighborhood</h1>
      <p>
        The Brentwood Neighborhood Association serves North Central Austin,
        Texas. BNA is bisected by Koenig Lane into North Brentwood and Baja
        Brentwood.
      </p>
      <iframe
        title="Brentwood"
        width="100%"
        frameBorder="0"
        height="350"
        marginHeight="0"
        marginWidth="0"
        scrolling="no"
        src="https://maps.google.com/maps/ms?hl=en&ie=UTF8&msa=0&msid=108544093169339984261.000485b3cb7346c0a1074&ll=30.335621,-97.731285&spn=0.051855,0.072956&z=13&output=embed"
      />
      <br />
      <p>
        New to the neighborhood? Check out the Brentwood History page to know
        more about how we got here and our Resources page to know how to move
        foward.
        <br />
        We support widening Koenig Lane into a boulevard with trees planted in
        the median. We oppose expansion of Koenig Lane into a freeway because it
        would sound a death knell for our beloved neighborhood.
      </p>
      <br />
      <br />
      <p>
        The following major facilities are located within the boundaries of BNA:
      </p>
      <ul>
        <li>McCallum High School</li>
        <li>Brentwood Elementary School</li>
        <li>Austin Community Gardens</li>
        <li>Texas Department of Health</li>
        <li>Texas Rehabilitation Commission</li>
        <li>Texas Youth Commission</li>
        <li>Texas Commission for the Blind</li>
        <li>Criss Cole Rehabilitation Center</li>
        <li>Texas School for the Blind and Visually Impaired</li>
        <li>Recording for the Blind</li>
      </ul>
      <br />
      <br />
      The following churches are in (or near) our neighborhood:
      <br />
      <ul>
        <li>Austin Bible Church 7500 Woodrow Ave. 78757 454-7493</li>
        <li>
          Crestview United Methodist Church 1300 Morrow St. 78757 451-1741
        </li>
        <li>Faith Lutheran Church - ELCA 6600 Woodrow Ave. 78757 451-1116</li>
        <li>First Cumberland Presbyterian Church 6800 Woodrow Ave. 453-8434</li>
        <li>
          First Unitarian Universalist 4700 Grover Avenue 78756 (512) 452-6168
          (512) 453-5912 FAX
        </li>
        <li>Grace Church of the Nazarene 1006 W. Koenig Lane 459-1261</li>
        <li>Hope Chapel 6701 Arroyo Seco 78757 453-7012</li>
        <li>Koenig Lane Christian Church 908 Old Koenig Ln. 78756 454-7679</li>
        <li>Northwest Baptist 6301 Woodrow Ave 78757 454-6815</li>
        <li>Church of the Resurrection 2200 Justin Lane 78757 459-0027</li>
      </ul>
      <br />
    </div>
  );
};

export default OurNeighborhood;
