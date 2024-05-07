import { createSlice } from '@reduxjs/toolkit';

const groupsData = [
  { 
    id: 1, 
    name: "Tech Enthusiasts", 
    prompts: ["Share your favorite programming language and why you love it.", "Discuss your most challenging coding project and how you overcame it.", "What emerging technology are you most excited about and why?"] 
  },
  { 
    id: 2, 
    name: "Book Club", 
    prompts: ["What book are you currently reading and what do you think about it so far?", "Recommend a book that has had a significant impact on you and why.", "Share your thoughts on the ending of the last book you read."] 
  },
  { 
    id: 3, 
    name: "Fitness Fanatics", 
    prompts: ["What's your favorite type of workout and why?", "Share your go-to healthy recipe for a quick meal.", "Discuss your biggest fitness achievement and how you accomplished it."] 
  },
  { 
    id: 4, 
    name: "Travel Junkies", 
    prompts: ["Share a memorable travel experience and what made it special.", "Recommend a hidden gem destination that you think everyone should visit.", "Discuss a travel mishap and how you handled it."] 
  },
  { 
    id: 5, 
    name: "Artistic Minds", 
    prompts: ["Share your latest creative project and the inspiration behind it.", "Discuss an artist or artwork that has influenced your own creative journey.", "What's your favorite medium to work with and why?"] 
  }
];

const groupSlice = createSlice({
  name: 'groups',
  initialState: groupsData,
  reducers: {
    addGroup(state, action) {
      state.push(action.payload);
    },
    removegroup(state, action) {
      return state.filter(group => group.id !== action.payload);
    },
  },
});

export const { addGroup, removeGroup } = groupSlice.actions;
export default groupSlice.reducer;