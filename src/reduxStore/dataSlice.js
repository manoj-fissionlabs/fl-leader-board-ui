import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: {
    test: "Hello World",
    parentArr: [
      {
        nodeId: 1,
        name: "Manoj Jadala",
        parent_id: "",
        role: "UI-Developer",
      },
      {
        nodeId: 2,
        name: "Hari Nagarjuna",
        parentNodeId: 1,
        role: "UI-Developer",
      },
      {
        nodeId: 3,
        name: "Yeshwanth",
        parentNodeId: 1,
        role: "UI-Developer",
      },
      {
        nodeId: 4,
        name: "Sajjad",
        parentNodeId: 1,
        role: "UI-Developer",
      },
      {
        nodeId: 5,
        name: "Arpit",
        parentNodeId: 1,
        role: "UI-Developer",
      },
    ],
  },
  reducers: {
    addToParent(state, actions) {
      state.parentArr.push(actions.payload);
    },
    NewSibilings(state, actions) {
      state.childrenArr = [...actions.payload];
    },
  },
});

export const dataactions = dataSlice.actions;

export default dataSlice;
