import React from "react";

function page({ params }) {
  const id = params.id;

  return (
    <div>
      <h2>Services details</h2>
      <h2>id = {id}</h2>
    </div>
  );
}

export default page;
