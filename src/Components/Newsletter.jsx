import React from "react";

const Newsletter = () => {
  return (
    <div className="Newsletter my-5 border bg-reddish rounded-5 d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-6 text-white mb-3 text-center">
        Subscribe to Our Newsletter
      </h1>
      <div className="row">
        <form action="">
          <div class="mb-3 border py-2 ps-3 pe-2 rounded-5 bg-white">
            <input
              type="email"
              class=""
              placeholder="Enter your Email"
              required
            />
            <button className="btn btn-outline-reddish rounded-5">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
