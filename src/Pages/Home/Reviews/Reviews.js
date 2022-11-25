import React from "react";

const Reviews = () => {
  return (
    <div className="bg-base-200 p-4 my-12">
      <h2 className="text-slate-200 text-2xl font-semibold bg-slate-700 text-center p-3 rounded">
        Some Users Ratings
      </h2>
      <div className="my-12 flex flex-col lg:flex-row gap-3">
        <div className="flex flex-col w-full">
          <div
            tabIndex={0}
            className="collapse collapse-arrow grid h-28 card place-items-center border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-center text-xl font-medium">
              <p>Reviewer's Name: Md Rahi</p>
            </div>
            <div className="collapse-content">
              <p>Rating:(70 of 100)</p>
              <progress
                className="progress progress-info w-96"
                value="70"
                max="100"
              ></progress>
            </div>
          </div>

          <div className="divider"></div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow grid h-28 card place-items-center border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-center text-xl font-medium">
              <p>Reviewer's Name: Md Forhad Hossain</p>
            </div>
            <div className="collapse-content">
              <p>Rating:(80 of 100)</p>
              <progress
                className="progress progress-info w-96"
                value="80"
                max="100"
              ></progress>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col w-full">
          <div
            tabIndex={0}
            className="collapse collapse-arrow grid h-28 card place-items-center border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-center text-xl font-medium">
              <p>Reviewer's Name: Md Arif</p>
            </div>
            <div className="collapse-content">
              <p>Rating:(79 of 100)</p>
              <progress
                className="progress progress-info w-96"
                value="79"
                max="100"
              ></progress>
            </div>
          </div>

          <div className="divider"></div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow grid h-28 card place-items-center border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-center text-xl font-medium">
              <p>Reviewer's Name: Md Rakib</p>
            </div>
            <div className="collapse-content">
              <p>Rating:(85 of 100)</p>
              <progress
                className="progress progress-info w-96"
                value="85"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
