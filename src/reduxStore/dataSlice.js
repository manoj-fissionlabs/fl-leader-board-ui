import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: {
    parentArr: {
      "Olivia": {
        "a_designation": "CEO", 
        "a_domain": "Management", 
        "a_experience (in years)": 25, 
        "a_skills": "full stack", 
        "nodeId": 101,
        "employees": {
          "Amelia": {
            "a_designation": "DM", 
            "a_domain": "Management", 
            "a_experience (in years)": 16, 
            "a_skills": "management skills", 
            "nodeId": 103, 
            "employees": {
              "Isabella": {
                "a_designation": "PM", 
                "a_domain": "Management", 
                "a_experience (in years)": 13, 
                "a_skills": "frontend", 
                "nodeId": 106, 
                "employees": {
                  "Evelyn": {
                    "a_designation": "TL", 
                    "a_domain": "Al & ML", 
                    "a_experience (in years)": 6, 
                    "a_skills": "uytresxcvb", 
                    "nodeId": 113, 
                    "employees": {
                      "Claire": {
                        "a_designation": "SE", 
                        "a_domain": "Al & ML", 
                        "a_experience (in years)": 6, 
                        "a_skills": "dfghvhb", 
                        "nodeId": 138
                      }, 
                      "Khaleesi": {
                        "a_designation": "SE", 
                        "a_domain": "Devops", 
                        "a_experience (in years)": 3, 
                        "a_skills": "xcfgvhb", 
                        "nodeId": 131
                      }, 
                      "Nora": {
                        "a_designation": "SE", 
                        "a_domain": "Data Science", 
                        "a_experience (in years)": 2, 
                        "a_skills": "sfghjhg", 
                        "nodeId": 136
                      }
                    }
                  }
                }
              }, 
              "Maia": {
                "a_designation": "PM", 
                "a_domain": "Management", 
                "a_experience (in years)": 14, 
                "a_skills": "dfghj", 
                "nodeId": 107, 
                "employees": {
                  "Ophelia": {
                    "a_designation": "TL", 
                    "a_domain": "Front end", 
                    "a_experience (in years)": 10, 
                    "a_skills": "redfghbvc", 
                    "nodeId": 114, 
                    "employees": {
                      "Adeline": {
                        "a_designation": "SE", 
                        "a_domain": "Testing", 
                        "a_experience (in years)": 6, 
                        "a_skills": "ertyuyt", 
                        "nodeId": 127
                      }, 
                      "Aurelia": {
                        "a_designation": "SE", 
                        "a_domain": "Al & ML", 
                        "a_experience (in years)": 3, 
                        "a_skills": "xfcgvhbjn", 
                        "nodeId": 129
                      }, 
                      "Elizabeth": {
                        "a_designation": "SE", 
                        "a_domain": "JAVA", 
                        "a_experience (in years)": 5, 
                        "a_skills": "cderfvbhgt", 
                        "nodeId": 124
                      }, 
                      "Jane": {
                        "a_designation": "SE", 
                        "a_domain": "dotNet", 
                        "a_experience (in years)": 5, 
                        "a_skills": "rtyui", 
                        "nodeId": 134
                      }, 
                      "Lucy": {
                        "a_designation": "SE", 
                        "a_domain": "JAVA", 
                        "a_experience (in years)": 2, 
                        "a_skills": "kjhgf", 
                        "nodeId": 132
                      }
                    }
                  }, 
                  "Rose": {
                    "a_designation": "TL", 
                    "a_domain": "Devops", 
                    "a_experience (in years)": 7, 
                    "a_skills": "cfrtyhjhgf", 
                    "nodeId": 115, 
                    "employees": {
                      "Arabella": {
                        "a_designation": "SE", 
                        "a_domain": "Testing", 
                        "a_experience (in years)": 5, 
                        "a_skills": "rfvgtyujm", 
                        "nodeId": 119
                      }, 
                      "Violet": {
                        "a_designation": "SE", 
                        "a_domain": "Python", 
                        "a_experience (in years)": 4, 
                        "a_skills": "crfgvgyujm", 
                        "nodeId": 117
                      }
                    }
                  }
                }
              }
            }
          }, 
          "Cora": {
            "a_designation": "DM", 
            "a_domain": "Management", 
            "a_experience (in years)": 19, 
            "a_skills": "management skills", 
            "nodeId": 102, 
            "employees": {
              "Charlotte": {
                "a_designation": "PM", 
                "a_domain": "Management", 
                "a_experience (in years)": 10, 
                "a_skills": "ui", 
                "nodeId": 104, 
                "employees": {
                  "Amara": {
                    "a_designation": "TL", 
                    "a_domain": "Python", 
                    "a_experience (in years)": 8, 
                    "a_skills": "tghnuj", 
                    "nodeId": 109, 
                    "employees": {
                      "Audrey": {
                        "a_designation": "SE", 
                        "a_domain": "Data Science", 
                        "a_experience (in years)": 5, 
                        "a_skills": "ryfvb", 
                        "nodeId": 126
                      }, 
                      "Esme": {
                        "a_designation": "SE", 
                        "a_domain": "Front end", 
                        "a_experience (in years)": 4, 
                        "a_skills": "qwerty", 
                        "nodeId": 122
                      }, 
                      "Genevieve": {
                        "a_designation": "SE", 
                        "a_domain": "Data Science", 
                        "a_experience (in years)": 4, 
                        "a_skills": "awsedrftgyhuij", 
                        "nodeId": 128
                      }, 
                      "Luna": {
                        "a_designation": "SE", 
                        "a_domain": "dotNet", 
                        "a_experience (in years)": 5, 
                        "a_skills": "rdcvhyhnm", 
                        "nodeId": 118
                      }
                    }
                  }, 
                  "Aurora": {
                    "a_designation": "TL", 
                    "a_domain": "JAVA", 
                    "a_experience (in years)": 10, 
                    "a_skills": "iuhgvc", 
                    "nodeId": 108, 
                    "employees": {
                      "Alice": {
                        "a_designation": "SE", 
                        "a_domain": "Python", 
                        "a_experience (in years)": 2, 
                        "a_skills": "dgjhhfb", 
                        "nodeId": 125
                      }, 
                      "Eleanor": {
                        "a_designation": "SE", 
                        "a_domain": "JAVA", 
                        "a_experience (in years)": 3, 
                        "a_skills": "rfcvbnj", 
                        "nodeId": 116
                      }, 
                      "Imogen": {
                        "a_designation": "SE", 
                        "a_domain": "Al & ML", 
                        "a_experience (in years)": 5, 
                        "a_skills": "asdfghjk", 
                        "nodeId": 121
                      }
                    }
                  }
                }
              }, 
              "Isla": {
                "a_designation": "PM", 
                "a_domain": "Management", 
                "a_experience (in years)": 15, 
                "a_skills": "backend", 
                "nodeId": 105, 
                "employees": {
                  "Ava": {
                    "a_designation": "TL", 
                    "a_domain": "dotNet", 
                    "a_experience (in years)": 9, 
                    "a_skills": "fghj", 
                    "nodeId": 110, 
                    "employees": {
                      "Iris": {
                        "a_designation": "SE", 
                        "a_domain": "Al & ML", 
                        "a_experience (in years)": 6, 
                        "a_skills": "dfghvhb", 
                        "nodeId": 137
                      }, 
                      "Ivy": {
                        "a_designation": "SE", 
                        "a_domain": "Python", 
                        "a_experience (in years)": 3, 
                        "a_skills": "uytgrfe", 
                        "nodeId": 133
                      }
                    }
                  }, 
                  "Penelope": {
                    "a_designation": "TL", 
                    "a_domain": "Data Science", 
                    "a_experience (in years)": 7, 
                    "a_skills": "erfghnm", 
                    "nodeId": 112, 
                    "employees": {
                      "Emilia": {
                        "a_designation": "SE", 
                        "a_domain": "Testing", 
                        "a_experience (in years)": 4, 
                        "a_skills": "erytuyiujk", 
                        "nodeId": 135
                      }, 
                      "Hazel": {
                        "a_designation": "SE", 
                        "a_domain": "Data Science", 
                        "a_experience (in years)": 2, 
                        "a_skills": "rfvhjik", 
                        "nodeId": 120
                      }, 
                      "Maeve": {
                        "a_designation": "SE", 
                        "a_domain": "Devops", 
                        "a_experience (in years)": 3, 
                        "a_skills": "zxcvbn", 
                        "nodeId": 123
                      }
                    }
                  }, 
                  "Rumi": {
                    "a_designation": "TL", 
                    "a_domain": "Testing", 
                    "a_experience (in years)": 9, 
                    "a_skills": "ytfdx", 
                    "nodeId": 111, 
                    "employees": {
                      "Thea": {
                        "a_designation": "SE", 
                        "a_domain": "Front end", 
                        "a_experience (in years)": 3, 
                        "a_skills": "uytgrfe", 
                        "nodeId": 130
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    currentTreeData:[
      {
          "name":"Olivia",
          "a_designation": "CEO", 
          "a_domain": "Management", 
          "a_experience (in years)": 25, 
          "a_skills": "full stack", 
          "nodeId": 101,
      },
       {
        name:"Amelia",
        "a_designation": "DM", 
        "a_domain": "Management", 
        "a_experience (in years)": 16, 
        "a_skills": "management skills", 
        "nodeId": 103,
        parentNodeId: 101,
      },
       {
        name:"Cora",
        "a_designation": "DM", 
        "a_domain": "Management", 
        "a_experience (in years)": 19, 
        "a_skills": "management skills", 
        "nodeId": 102, 
        parentNodeId: 101,
      },
    ]
  
  },
  reducers: {
    addToParent(state, actions) {
      state.parentArr.push(actions.payload);
    },
    updateCurrentTreeData(state,actions) {
      state.currentTreeData=actions.payload
    }  
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
