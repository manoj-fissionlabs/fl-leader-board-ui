import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: {
    test: "Hello World",
    parentArr: [
      {
        id: 0,
        name: "Ishwar",
        parent_id: "",
        children_id: 1,
        role: "CEO",
      },
      {
        id: 1,
        name: "Irshad",
        parent_id: 0,
        children_id: 2,
        role: "Delivery Manager",
      },
      {
        id: 2,
        name: "Jithin",
        parent_id: 1,
        children_id: 3,
        role: "Project Manager",
      },
      {
        id: 6,
        name: "Resources",
        parent_id: 1,
        children_id: 3,
        role: "",
      },
      {
        id: 6,
        name: "Manoj",
        parent_id: 1,
        children_id: 3,
        role: "UI-Developer",
      },
      [
        {
          id: 3,
          name: "Arpit",
          parent_id: 2,
          children_id: 4,
          role: "UI-Developer",
        },
        {
          id: 4,
          name: "Yeshwanth",
          parent_id: 2,
          children_id: "",
          role: "UI-Developer",
        },
        {
          id: 5,
          name: "Hari",
          parent_id: 2,
          children_id: 4,
          role: "UI-Developer",
        },
        {
          id: 4,
          name: "Sajjad",
          parent_id: 2,
          children_id: "",
          role: "UI-Developer",
        },
        {
          id: 4,
          name: "Ramakanth",
          parent_id: 2,
          children_id: "",
          role: "UI-Developer",
        },
      ],
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
