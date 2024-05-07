// GroupList.js

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function GroupList() {
  const groups = useSelector((state) => state.groups);

  return (
    <div className="container mx-auto p-4">
       <h1 className="text-3xl font-bold my-7">Groups</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {groups.map((group) => (
          <Link to={`/group/${group.id}`} key={group.id}>
            <div className="p-4 rounded-md cursor-pointer bg-white">
              <h2 className="text-lg font-semibold">{group.name}</h2>
              <p className="text-gray-600">{group.prompts.length} Prompts</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GroupList;
