import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

export default function WorkEx() {
  return (
    <div id="workExperience">
      <h2>Work Examples</h2>
      <Row xs={1} md={2} className="g-4">
        <Card className="bg-dark text-white">
          <a href="https://jacobjgoldfine.github.io/quote_gen_translator/">
            <Card.Img src="assets/images/placeHolder1.jpg" alt="Work One Placeholder" />
            <Card.ImgOverlay>
              <Card.Title>Random Quote Generator and Translator</Card.Title>
              <Card.Text>Entertaining way to test your language skills.</Card.Text>
              <a href="https://github.com/jacobjgoldfine/quote_gen_translator">GitHub Link</a>
            </Card.ImgOverlay>
          </a>
        </Card>

        <Card className="bg-dark text-white">
          <a href="https://collection-social-share.herokuapp.com/">
            <Card.Img src="assets/images/placeHolder2.jpg" alt="Work 2 Placeholder" />
            <Card.ImgOverlay>
              <Card.Title>Collection Social Share</Card.Title>
              <Card.Text>
                A prototype for a social sharing application geared towards users that like to collect.
              </Card.Text>
              <a href="https://github.com/jacobjgoldfine/collection_social_share">GitHub Link</a>
            </Card.ImgOverlay>
          </a>
        </Card>

        <Card className="bg-dark text-white">
          <a href="https://powerful-reaches-64620.herokuapp.com/">
            <Card.Img src="assets/images/placeHolder3.jpg" alt="Work 3 Placeholder" />
            <Card.ImgOverlay>
              <Card.Title>App Track</Card.Title>
              <Card.Text>An application used to help keep track of your job applications.</Card.Text>
              <a href="https://github.com/jacobjgoldfine/app-track">GitHub Link</a>
            </Card.ImgOverlay>
          </a>
        </Card>
      </Row>
    </div>
  );
}
