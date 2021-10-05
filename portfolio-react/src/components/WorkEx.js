import React from "react";

export default function WorkEx() {
  return (
    <div>
      <article id="first_work" className="work">
        <h2>Work</h2>
        <h3>First Work overlay</h3>
        <button type="button">
          <img src="assets/images/placeHolder1.jpg" alt="Work One Placeholder" />
        </button>
      </article>

      <article className="work">
        <h3>Second Work overlay</h3>
        <button type="button">
          <img src="assets/images/placeHolder2.jpg" alt="Work Two Placeholder" />
        </button>
      </article>

      <article className="work">
        <h3>Third Work overlay</h3>
        <button type="button">
          <img src="assets/images/placeHolder3.jpg" alt="Work Three Placeholder" />
        </button>
      </article>
    </div>
  );
}
