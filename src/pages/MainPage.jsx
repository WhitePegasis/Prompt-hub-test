// MainPage.js

import React, { useState } from "react";
import GroupList from "../components/GroupList";
import { useDispatch, useSelector } from "react-redux";

function MainPage() {
  const [showAddGroupForm, setShowAddGroupForm] = useState(false);
  const [showAddPromptForm, setShowAddPromptForm] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [newPromptText, setNewPromptText] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");

  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups);

  const handleAddGroup = () => {
    if (newGroupName.trim() !== "") {
      dispatch(addGroup({ name: newGroupName }));
      setNewGroupName("");
      setShowAddGroupForm(false);
    }
  };

  const handleAddPrompt = () => {
    if (newPromptText.trim() !== "") {
      dispatch(addPrompt({ text: newPromptText }));
      setNewPromptText("");
      setShowAddPromptForm(false);
    }
  };

  const toggleAddGroupForm = () => {
    setShowAddGroupForm(!showAddGroupForm);
  };

  const toggleAddPromptForm = () => {
    setShowAddPromptForm(!showAddPromptForm);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-3xl font-bold">Library</h1>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
              onClick={toggleAddGroupForm}
            >
              Add Group
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={toggleAddPromptForm}
            >
              Add Prompt
            </button>
          </div>
        </div>
        {showAddGroupForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Add Group</h2>
              <input
                type="text"
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
                placeholder="Group Name"
                className="border border-gray-400 p-2 mb-2 w-full"
              />
              <div className="flex justify-end">
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={toggleAddGroupForm}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleAddGroup}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
        {showAddPromptForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Add Prompt</h2>
              <textarea
                value={newPromptText}
                onChange={(e) => setNewPromptText(e.target.value)}
                placeholder="Prompt Text"
                className="border border-gray-400 p-2 mb-2 w-full"
              />
              <label className="block mb-2">
                Select Group:
                <select
                  value={selectedGroup}
                  onChange={(e) => setSelectedGroup(e.target.value)}
                  className="border border-gray-400 p-2 w-full"
                >
                  <option value="">Select Group</option>
                  {groups.map((group) => (
                    <option key={group.id} value={group.id}>
                      {group.name}
                    </option>
                  ))}
                </select>
              </label>
              <div className="flex justify-end">
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={toggleAddPromptForm}
                >
                  Cancel
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleAddPrompt}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}

        <GroupList />
      </div>
    </div>
  );
}

export default MainPage;
