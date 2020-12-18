import React from "react";

const Newsletter = () => (
  <div className="newsletter-section">
    <div className="section-content">
      <h5 className="tiny-texts">Great updates</h5>
      <h4>
        Sign up to our newsletter to get updates on events, news and
        opportunities
      </h4>
      <div class="subscribe_form">
        <input
          type="text"
          class="form-input"
          name="email"
          placeholder="Username or email"
        />
        <div class="input-group-btn">
          <button class="btn btn-default" type="button">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Newsletter;
