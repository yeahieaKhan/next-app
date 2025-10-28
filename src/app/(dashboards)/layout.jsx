import React from "react";

function DashboardLayout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <h2>Dashboard layout</h2>
        </div>
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
