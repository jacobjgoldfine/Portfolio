import React from "react";

export default function WorkEx() {
  return (
    <div>
      <article id="first_work" className="work">
        <h2>Work Examples</h2>

        <button type="button">
          <a href="https://github.com/jacobjgoldfine/quote_gen_translator">
            <h3>Random Quote Generator and Translator</h3>
            <img src="assets/images/placeHolder1.jpg" alt="Work One Placeholder" />
          </a>
        </button>
      </article>

      <article className="work">
        <button type="button">
          <a href="https://github.com/jacobjgoldfine/collection_social_share">
            <h3>Collection Social Share</h3>
            <img src="assets/images/placeHolder2.jpg" alt="Work Two Placeholder" />
          </a>
        </button>
      </article>

      <article className="work">
        <h3>Project3 Goes Here</h3>
        <button type="button">
          <img src="assets/images/placeHolder3.jpg" alt="Work Three Placeholder" />
        </button>
      </article>
    </div>
  );
}
