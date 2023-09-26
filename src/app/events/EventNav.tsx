import React from "react";

const EventNav = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl">Events</h1>

        <div>
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default EventNav;
