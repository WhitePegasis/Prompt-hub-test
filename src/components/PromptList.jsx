// PromptList.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function PromptList() {
  const { groupId } = useParams();
  const groups = useSelector(state => state.groups);
  const group = groups.find(group => group.id.toString() === groupId);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPrompts = group ? group.prompts.filter(prompt =>
    prompt.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  if (!group) {
    return <div>Group not found!</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{group.name}</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by prompt"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="border border-gray-400 p-2 rounded w-full"
        />
      </div>
      <div className="grid grid-cols-1 gap-4">
        {filteredPrompts.map((prompt, index) => (
          <div key={index} className="bg-white p-4 rounded-md">
            <h3 className="text-lg font-semibold">{prompt}</h3>
            {/* <Lisnk to={`/group/${groupId}`}>Back to Group</Link> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PromptList;
