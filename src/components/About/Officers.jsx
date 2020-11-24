import React from "react";

const Officers = () => {
  return (
    <div className="container elements">
      <h1 className="">Officers</h1>
      <br />
      <div className="row">
        <div className="col col-md-4">
          <h4>2020 Officers:</h4>
          <ul>
            <li>President: Kristine Poland, Woodrow</li>
            <li>Vice-President: Barbara McArthur, Clay</li>
            <li>Treasurer: Angie Ward, Romeria</li>
            <li>Secretary: Diane Larson, Choquette</li>
          </ul>
          <br />
          <br />
          <h4>Steering Committe:</h4>
          <ul>
            <li>Bill Morgan, Burbank</li>
            <li>Rachel Copperman, Wm. Holland</li>
            <li>Pam Leighton-Burwell, Palo Duro</li>
            <li>Bill Spiesman, Clay</li>
            <li>Don Leighton-Burwell, Palo Duro</li>
            <li>Lisa Boone, Santa Clara</li>
            <li>Joe Goessling, Karen</li>
          </ul>
        </div>
        <div className="col col-md-6">
          <p className="text-center">
            Officers and steering committee are elected in February for a
            one-year term. If you are interested in serving, please contact{" "}
            <a href="mailto:brentwood.austin@gmail.com">
              brentwood.austin@gmail.com
            </a>
            . It is a great way to meet others in your neighborhood, work to
            improve the neighborhood, and have fun.
            <br />
            <br />
            Join the Google neighborhood group! You can go to the Brentwood
            Neighborhood Google Group and apply for membership. In the
            information box, please include your name and address so we know you
            are a resident of Brentwood or a surrounding neighborhood.
            Nonresidents, please include why you would like to join the group.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Officers;
