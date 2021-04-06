import { DOMSelectors } from "./DOM";
import { questionsList } from "./questions.js";
import { question1 } from "./questionFunctions.js";
import { question2 } from "./questionFunctions.js";
import { question3 } from "./questionFunctions.js";
import { question4 } from "./questionFunctions.js";
import { question5 } from "./questionFunctions.js";
import { question6 } from "./questionFunctions.js";
import { question7 } from "./questionFunctions.js";
import { question8 } from "./questionFunctions.js";
import { question9 } from "./questionFunctions.js";
import { question10 } from "./questionFunctions.js";

//QUESTIONS 1-6
question1();

document.getElementById("choice1").addEventListener("click", function () {
  //Remove existing green ones
  let correct = document.getElementsByClassName("correct");
  //console.log(correct);
  if (correct.length > 0) {
    correct[0].classList.remove("correct");
  }
  //Add green
  let addGreen = document.getElementById("choice1");
  addGreen.classList.add("correct");

  let selectedChoice = 1;
  //Go to question 2 when next button is clicked
  document.getElementById("nextButton").addEventListener("click", function () {
    question2();

    /*     let choice21 = document.getElementById("choice-2-1");
    console.log(choice21); */

    //QUESTION TWO CHOICES
    document
      .getElementById("choice-2-1")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-2-1");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
    document
      .getElementById("choice-2-2")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-2-2");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
    document
      .getElementById("choice-2-3")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-2-3");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();

            //QUESTION SIX QUESTION SIX QUESTION SIX QUESTION SIX
            //QUESTION SIX CHOICES
            document
              .getElementById("choice-6-1")
              .addEventListener("click", function () {
                //Remove existing green ones
                /*  let correct = document.getElementsByClassName("correct");
                //console.log(correct);
                if (correct.length > 0) {
                  correct[0].classList.remove("correct");
                } */

                //If already green, remove it
                let correct = document.getElementsByClassName("correct");
                let addGreen = document.getElementById("choice-6-1");
                let choice9 = document.getElementById("choice-6-9");

                //Add or remove
                //if addgreen already has a class of correct, then remove else add
                if (addGreen.classList.contains("correct")) {
                  addGreen.classList.remove("correct");
                  //console.log("Class correct removed");
                } else {
                  addGreen.classList.add("correct");
                  choice9.classList.remove("correct");
                  //console.log("Class correct added");
                }

                let selectedChoice = 1;
                //Go to question 7 when next button is clicked
                document
                  .getElementById("nextButton")
                  .addEventListener("click", function () {
                    question7();
                  });
              });
            document
              .getElementById("choice-6-2")
              .addEventListener("click", function () {
                let correct = document.getElementsByClassName("correct");
                let addGreen = document.getElementById("choice-6-2");
                let choice9 = document.getElementById("choice-6-9");

                if (addGreen.classList.contains("correct")) {
                  addGreen.classList.remove("correct");
                } else {
                  addGreen.classList.add("correct");
                  choice9.classList.remove("correct");
                }

                let selectedChoice = 1;
                //Go to question 7 when next button is clicked
                document
                  .getElementById("nextButton")
                  .addEventListener("click", function () {
                    question7();
                  });
              });
            document
              .getElementById("choice-6-3")
              .addEventListener("click", function () {
                let correct = document.getElementsByClassName("correct");
                let addGreen = document.getElementById("choice-6-3");
                let choice9 = document.getElementById("choice-6-9");

                if (addGreen.classList.contains("correct")) {
                  addGreen.classList.remove("correct");
                } else {
                  addGreen.classList.add("correct");
                  choice9.classList.remove("correct");
                }

                let selectedChoice = 1;
                //Go to question 7 when next button is clicked
                document
                  .getElementById("nextButton")
                  .addEventListener("click", function () {
                    question7();
                  });
              });
            document
              .getElementById("choice-6-4")
              .addEventListener("click", function () {
                let correct = document.getElementsByClassName("correct");
                let addGreen = document.getElementById("choice-6-4");
                let choice9 = document.getElementById("choice-6-9");

                if (addGreen.classList.contains("correct")) {
                  addGreen.classList.remove("correct");
                } else {
                  addGreen.classList.add("correct");
                  choice9.classList.remove("correct");
                }

                let selectedChoice = 1;
                //Go to question 7 when next button is clicked
                document
                  .getElementById("nextButton")
                  .addEventListener("click", function () {
                    question7();
                  });
              });
            document
              .getElementById("choice-6-5")
              .addEventListener("click", function () {
                let correct = document.getElementsByClassName("correct");
                let addGreen = document.getElementById("choice-6-5");
                let choice9 = document.getElementById("choice-6-9");

                if (addGreen.classList.contains("correct")) {
                  addGreen.classList.remove("correct");
                } else {
                  addGreen.classList.add("correct");
                  choice9.classList.remove("correct");
                }

                let selectedChoice = 1;
                //Go to question 7 when next button is clicked
                document
                  .getElementById("nextButton")
                  .addEventListener("click", function () {
                    question7();
                  });
              });
            document
              .getElementById("choice-6-6")
              .addEventListener("click", function () {
                let correct = document.getElementsByClassName("correct");
                let addGreen = document.getElementById("choice-6-6");
                let choice9 = document.getElementById("choice-6-9");

                if (addGreen.classList.contains("correct")) {
                  addGreen.classList.remove("correct");
                } else {
                  addGreen.classList.add("correct");
                  choice9.classList.remove("correct");
                }

                let selectedChoice = 1;
                //Go to question 7 when next button is clicked
                document
                  .getElementById("nextButton")
                  .addEventListener("click", function () {
                    question7();
                  });
              });
            document
              .getElementById("choice-6-7")
              .addEventListener("click", function () {
                let correct = document.getElementsByClassName("correct");
                let addGreen = document.getElementById("choice-6-7");
                let choice9 = document.getElementById("choice-6-9");

                if (addGreen.classList.contains("correct")) {
                  addGreen.classList.remove("correct");
                } else {
                  addGreen.classList.add("correct");
                  choice9.classList.remove("correct");
                }

                let selectedChoice = 1;
                //Go to question 7 when next button is clicked
                document
                  .getElementById("nextButton")
                  .addEventListener("click", function () {
                    question7();
                  });
              });
            document
              .getElementById("choice-6-8")
              .addEventListener("click", function () {
                let correct = document.getElementsByClassName("correct");
                let addGreen = document.getElementById("choice-6-8");
                let choice9 = document.getElementById("choice-6-9");

                if (addGreen.classList.contains("correct")) {
                  addGreen.classList.remove("correct");
                } else {
                  addGreen.classList.add("correct");
                  choice9.classList.remove("correct");
                }

                let selectedChoice = 1;
                //Go to question 7 when next button is clicked
                document
                  .getElementById("nextButton")
                  .addEventListener("click", function () {
                    question7();
                  });
              });
            document
              .getElementById("choice-6-9")
              .addEventListener("click", function () {
                let correct = document.getElementsByClassName("correct");
                let addGreen = document.getElementById("choice-6-9");
                let selectAll = document.getElementsByClassName("choice-text"); //returns nodelist
                //console.log(selectAll);
                //var selectAllArray = Array.from(selectAll);
                //console.log(selectAllArray);

                if (addGreen.classList.contains("correct")) {
                  addGreen.classList.remove("correct");
                  //console.log("Removed correct");
                } else {
                  [].forEach.call(selectAll, function (e) {
                    e.classList.remove("correct");
                  });
                  addGreen.classList.add("correct");
                  //console.log("All removed");
                }

                let selectedChoice = 1;
                //Go to question 7 when next button is clicked
                document
                  .getElementById("nextButton")
                  .addEventListener("click", function () {
                    question7();

                    let choice712 = document.getElementById("choice-7-12");

                    //QUESTION SEVEN CHOICES
                    document
                      .getElementById("choice-7-1")
                      .addEventListener("click", function () {
                        let correct = document.getElementsByClassName(
                          "correct"
                        );
                        let addGreen = document.getElementById("choice-7-1");

                        if (addGreen.classList.contains("correct")) {
                          addGreen.classList.remove("correct");
                        } else {
                          addGreen.classList.add("correct");
                          choice712.classList.remove("correct");
                        }

                        let selectedChoice = 1;
                        //Go to question 8 when next button is clicked
                        document
                          .getElementById("nextButton")
                          .addEventListener("click", function () {
                            question8();
                          });
                      });
                    document
                      .getElementById("choice-7-2")
                      .addEventListener("click", function () {
                        let correct = document.getElementsByClassName(
                          "correct"
                        );
                        let addGreen = document.getElementById("choice-7-2");

                        if (addGreen.classList.contains("correct")) {
                          addGreen.classList.remove("correct");
                        } else {
                          addGreen.classList.add("correct");
                          choice712.classList.remove("correct");
                        }

                        let selectedChoice = 1;
                        document
                          .getElementById("nextButton")
                          .addEventListener("click", function () {
                            question8();
                          });
                      });
                    document
                      .getElementById("choice-7-3")
                      .addEventListener("click", function () {
                        let correct = document.getElementsByClassName(
                          "correct"
                        );
                        let addGreen = document.getElementById("choice-7-3");

                        if (addGreen.classList.contains("correct")) {
                          addGreen.classList.remove("correct");
                        } else {
                          addGreen.classList.add("correct");
                          choice712.classList.remove("correct");
                        }

                        let selectedChoice = 1;
                        document
                          .getElementById("nextButton")
                          .addEventListener("click", function () {
                            question8();
                          });
                      });
                    document
                      .getElementById("choice-7-4")
                      .addEventListener("click", function () {
                        let correct = document.getElementsByClassName(
                          "correct"
                        );
                        let addGreen = document.getElementById("choice-7-4");

                        if (addGreen.classList.contains("correct")) {
                          addGreen.classList.remove("correct");
                        } else {
                          addGreen.classList.add("correct");
                          choice712.classList.remove("correct");
                        }

                        let selectedChoice = 1;
                        document
                          .getElementById("nextButton")
                          .addEventListener("click", function () {
                            question8();
                          });
                      });
                    document
                      .getElementById("choice-7-5")
                      .addEventListener("click", function () {
                        let correct = document.getElementsByClassName(
                          "correct"
                        );
                        let addGreen = document.getElementById("choice-7-5");

                        if (addGreen.classList.contains("correct")) {
                          addGreen.classList.remove("correct");
                        } else {
                          addGreen.classList.add("correct");
                          choice712.classList.remove("correct");
                        }

                        let selectedChoice = 1;
                        document
                          .getElementById("nextButton")
                          .addEventListener("click", function () {
                            question8();
                          });
                      });
                    document
                      .getElementById("choice-7-6")
                      .addEventListener("click", function () {
                        let correct = document.getElementsByClassName(
                          "correct"
                        );
                        let addGreen = document.getElementById("choice-7-6");

                        if (addGreen.classList.contains("correct")) {
                          addGreen.classList.remove("correct");
                        } else {
                          addGreen.classList.add("correct");
                          choice712.classList.remove("correct");
                        }

                        let selectedChoice = 1;
                        document
                          .getElementById("nextButton")
                          .addEventListener("click", function () {
                            question8();
                          });
                      });
                    document
                      .getElementById("choice-7-7")
                      .addEventListener("click", function () {
                        let correct = document.getElementsByClassName(
                          "correct"
                        );
                        let addGreen = document.getElementById("choice-7-7");

                        if (addGreen.classList.contains("correct")) {
                          addGreen.classList.remove("correct");
                        } else {
                          addGreen.classList.add("correct");
                          choice712.classList.remove("correct");
                        }

                        let selectedChoice = 1;
                        document
                          .getElementById("nextButton")
                          .addEventListener("click", function () {
                            question8();
                          });
                      });
                    document
                      .getElementById("choice-7-8")
                      .addEventListener("click", function () {
                        let correct = document.getElementsByClassName(
                          "correct"
                        );
                        let addGreen = document.getElementById("choice-7-8");

                        if (addGreen.classList.contains("correct")) {
                          addGreen.classList.remove("correct");
                        } else {
                          addGreen.classList.add("correct");
                          choice712.classList.remove("correct");
                        }

                        let selectedChoice = 1;
                        document
                          .getElementById("nextButton")
                          .addEventListener("click", function () {
                            question8();
                          });
                      });
                    document
                      .getElementById("choice-7-9")
                      .addEventListener("click", function () {
                        let correct = document.getElementsByClassName(
                          "correct"
                        );
                        let addGreen = document.getElementById("choice-7-9");

                        if (addGreen.classList.contains("correct")) {
                          addGreen.classList.remove("correct");
                        } else {
                          addGreen.classList.add("correct");
                          choice712.classList.remove("correct");
                        }

                        let selectedChoice = 1;
                        document
                          .getElementById("nextButton")
                          .addEventListener("click", function () {
                            question8();
                          });
                      });
                    document
                      .getElementById("choice-7-10")
                      .addEventListener("click", function () {
                        let correct = document.getElementsByClassName(
                          "correct"
                        );
                        let addGreen = document.getElementById("choice-7-10");

                        if (addGreen.classList.contains("correct")) {
                          addGreen.classList.remove("correct");
                        } else {
                          addGreen.classList.add("correct");
                          choice712.classList.remove("correct");
                        }

                        let selectedChoice = 1;
                        document
                          .getElementById("nextButton")
                          .addEventListener("click", function () {
                            question8();
                          });
                      });
                    document
                      .getElementById("choice-7-11")
                      .addEventListener("click", function () {
                        let correct = document.getElementsByClassName(
                          "correct"
                        );
                        let addGreen = document.getElementById("choice-7-11");

                        if (addGreen.classList.contains("correct")) {
                          addGreen.classList.remove("correct");
                        } else {
                          addGreen.classList.add("correct");
                          choice712.classList.remove("correct");
                        }

                        let selectedChoice = 1;
                        document
                          .getElementById("nextButton")
                          .addEventListener("click", function () {
                            question8();
                          });
                      });
                    document
                      .getElementById("choice-7-12")
                      .addEventListener("click", function () {
                        let correct = document.getElementsByClassName(
                          "correct"
                        );
                        let addGreen = document.getElementById("choice-7-12");
                        let selectAll = document.getElementsByClassName(
                          "choice-text"
                        ); //returns nodelist
                        //console.log(selectAll);
                        //var selectAllArray = Array.from(selectAll);
                        //console.log(selectAllArray);

                        if (addGreen.classList.contains("correct")) {
                          addGreen.classList.remove("correct");
                          //console.log("Removed correct");
                        } else {
                          [].forEach.call(selectAll, function (e) {
                            e.classList.remove("correct");
                          });
                          addGreen.classList.add("correct");
                          //console.log("All removed");
                        }

                        let selectedChoice = 1;
                        document
                          .getElementById("nextButton")
                          .addEventListener("click", function () {
                            question8();

                            //QUESTION EIGHT CHOICES
                            document
                              .getElementById("choice-8-1")
                              .addEventListener("click", function () {
                                let correct = document.getElementsByClassName(
                                  "correct"
                                );
                                let addGreen = document.getElementById(
                                  "choice-8-1"
                                );

                                if (addGreen.classList.contains("correct")) {
                                  addGreen.classList.remove("correct");
                                } else {
                                  addGreen.classList.add("correct");
                                  choice712.classList.remove("correct");
                                }

                                let selectedChoice = 1;
                                //Go to question 8 when next button is clicked
                                document
                                  .getElementById("nextButton")
                                  .addEventListener("click", function () {
                                    question9();
                                  });
                              });
                            document
                              .getElementById("choice-8-2")
                              .addEventListener("click", function () {
                                let correct = document.getElementsByClassName(
                                  "correct"
                                );
                                let addGreen = document.getElementById(
                                  "choice-8-2"
                                );

                                if (addGreen.classList.contains("correct")) {
                                  addGreen.classList.remove("correct");
                                } else {
                                  addGreen.classList.add("correct");
                                  choice712.classList.remove("correct");
                                }

                                let selectedChoice = 1;
                                //Go to question 8 when next button is clicked
                                document
                                  .getElementById("nextButton")
                                  .addEventListener("click", function () {
                                    question9();
                                  });
                              });
                            document
                              .getElementById("choice-8-3")
                              .addEventListener("click", function () {
                                let correct = document.getElementsByClassName(
                                  "correct"
                                );
                                let addGreen = document.getElementById(
                                  "choice-8-3"
                                );

                                if (addGreen.classList.contains("correct")) {
                                  addGreen.classList.remove("correct");
                                } else {
                                  addGreen.classList.add("correct");
                                  choice712.classList.remove("correct");
                                }

                                let selectedChoice = 1;
                                //Go to question 8 when next button is clicked
                                document
                                  .getElementById("nextButton")
                                  .addEventListener("click", function () {
                                    question9();
                                  });
                              });
                            document
                              .getElementById("choice-8-4")
                              .addEventListener("click", function () {
                                let correct = document.getElementsByClassName(
                                  "correct"
                                );
                                let addGreen = document.getElementById(
                                  "choice-8-4"
                                );

                                if (addGreen.classList.contains("correct")) {
                                  addGreen.classList.remove("correct");
                                } else {
                                  addGreen.classList.add("correct");
                                  choice712.classList.remove("correct");
                                }

                                let selectedChoice = 1;
                                document
                                  .getElementById("nextButton")
                                  .addEventListener("click", function () {
                                    question9();

                                    //QUESTION NINE CHOICES
                                    document
                                      .getElementById("choice-9-1")
                                      .addEventListener("click", function () {
                                        let correct = document.getElementsByClassName(
                                          "correct"
                                        );
                                        let addGreen = document.getElementById(
                                          "choice-9-1"
                                        );

                                        if (
                                          addGreen.classList.contains("correct")
                                        ) {
                                          addGreen.classList.remove("correct");
                                        } else {
                                          addGreen.classList.add("correct");
                                          choice712.classList.remove("correct");
                                        }

                                        let selectedChoice = 1;
                                        //Go to question 8 when next button is clicked
                                        document
                                          .getElementById("nextButton")
                                          .addEventListener(
                                            "click",
                                            function () {
                                              question10();
                                            }
                                          );
                                      });
                                    document
                                      .getElementById("choice-9-2")
                                      .addEventListener("click", function () {
                                        let correct = document.getElementsByClassName(
                                          "correct"
                                        );
                                        let addGreen = document.getElementById(
                                          "choice-9-2"
                                        );

                                        if (
                                          addGreen.classList.contains("correct")
                                        ) {
                                          addGreen.classList.remove("correct");
                                        } else {
                                          addGreen.classList.add("correct");
                                          choice712.classList.remove("correct");
                                        }

                                        let selectedChoice = 1;
                                        //Go to question 8 when next button is clicked
                                        document
                                          .getElementById("nextButton")
                                          .addEventListener(
                                            "click",
                                            function () {
                                              question10();
                                            }
                                          );
                                      });
                                    document
                                      .getElementById("choice-9-3")
                                      .addEventListener("click", function () {
                                        let correct = document.getElementsByClassName(
                                          "correct"
                                        );
                                        let addGreen = document.getElementById(
                                          "choice-9-3"
                                        );

                                        if (
                                          addGreen.classList.contains("correct")
                                        ) {
                                          addGreen.classList.remove("correct");
                                        } else {
                                          addGreen.classList.add("correct");
                                          choice712.classList.remove("correct");
                                        }

                                        let selectedChoice = 1;
                                        //Go to question 8 when next button is clicked
                                        document
                                          .getElementById("nextButton")
                                          .addEventListener(
                                            "click",
                                            function () {
                                              question10();
                                            }
                                          );
                                      });
                                    document
                                      .getElementById("choice-9-4")
                                      .addEventListener("click", function () {
                                        let correct = document.getElementsByClassName(
                                          "correct"
                                        );
                                        let addGreen = document.getElementById(
                                          "choice-9-4"
                                        );

                                        if (
                                          addGreen.classList.contains("correct")
                                        ) {
                                          addGreen.classList.remove("correct");
                                        } else {
                                          addGreen.classList.add("correct");
                                          choice712.classList.remove("correct");
                                        }

                                        let selectedChoice = 1;
                                        document
                                          .getElementById("nextButton")
                                          .addEventListener(
                                            "click",
                                            function () {
                                              question10();

                                              //QUESTION TEN CHOICES
                                              document
                                                .getElementById("choice-10-1")
                                                .addEventListener(
                                                  "click",
                                                  function () {
                                                    //Remove existing green ones
                                                    let correct = document.getElementsByClassName(
                                                      "correct"
                                                    );
                                                    //console.log(correct);
                                                    if (correct.length > 0) {
                                                      correct[0].classList.remove(
                                                        "correct"
                                                      );
                                                    }
                                                    //Add green
                                                    let addGreen = document.getElementById(
                                                      "choice-10-1"
                                                    );
                                                    addGreen.classList.add(
                                                      "correct"
                                                    );

                                                    let selectedChoice = 1;

                                                    document
                                                      .getElementById(
                                                        "nextButton"
                                                      )
                                                      .addEventListener(
                                                        "click",
                                                        function () {
                                                          //go to results
                                                        }
                                                      );
                                                  }
                                                );
                                              document
                                                .getElementById("choice-10-2")
                                                .addEventListener(
                                                  "click",
                                                  function () {
                                                    //Remove existing green ones
                                                    let correct = document.getElementsByClassName(
                                                      "correct"
                                                    );
                                                    //console.log(correct);
                                                    if (correct.length > 0) {
                                                      correct[0].classList.remove(
                                                        "correct"
                                                      );
                                                    }
                                                    //Add green
                                                    let addGreen = document.getElementById(
                                                      "choice-10-2"
                                                    );
                                                    addGreen.classList.add(
                                                      "correct"
                                                    );

                                                    let selectedChoice = 1;

                                                    document
                                                      .getElementById(
                                                        "nextButton"
                                                      )
                                                      .addEventListener(
                                                        "click",
                                                        function () {
                                                          //go to results
                                                        }
                                                      );
                                                  }
                                                );
                                              document
                                                .getElementById("choice-10-3")
                                                .addEventListener(
                                                  "click",
                                                  function () {
                                                    //Remove existing green ones
                                                    let correct = document.getElementsByClassName(
                                                      "correct"
                                                    );
                                                    //console.log(correct);
                                                    if (correct.length > 0) {
                                                      correct[0].classList.remove(
                                                        "correct"
                                                      );
                                                    }
                                                    //Add green
                                                    let addGreen = document.getElementById(
                                                      "choice-10-3"
                                                    );
                                                    addGreen.classList.add(
                                                      "correct"
                                                    );

                                                    let selectedChoice = 1;

                                                    document
                                                      .getElementById(
                                                        "nextButton"
                                                      )
                                                      .addEventListener(
                                                        "click",
                                                        function () {
                                                          //go to results
                                                        }
                                                      );
                                                  }
                                                );
                                            }
                                          );
                                      });
                                  });
                              });
                          });
                        //end question seven choices
                      });
                  });
              });
            //end question six choices
          });
      });
  });
});

document.getElementById("choice2").addEventListener("click", function () {
  let correct = document.getElementsByClassName("correct");
  //console.log(correct);
  if (correct.length > 0) {
    correct[0].classList.remove("correct");
  }

  let addGreen = document.getElementById("choice2");
  addGreen.classList.add("correct");

  let selectedChoice = 1;
  document.getElementById("nextButton").addEventListener("click", function () {
    question3();

    //QUESTION THREE CHOICES
    document
      .getElementById("choice-3-1")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-3-1");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
    document
      .getElementById("choice-3-2")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-3-2");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
    document
      .getElementById("choice-3-3")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-3-3");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
    document
      .getElementById("choice-3-4")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-3-4");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
  });
});

document.getElementById("choice3").addEventListener("click", function () {
  let correct = document.getElementsByClassName("correct");
  //console.log(correct);
  if (correct.length > 0) {
    correct[0].classList.remove("correct");
  }

  let addGreen = document.getElementById("choice3");
  addGreen.classList.add("correct");

  let selectedChoice = 1;
  document.getElementById("nextButton").addEventListener("click", function () {
    question4();

    //QUESTION FOUR CHOICES
    document
      .getElementById("choice-4-1")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-4-1");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
    document
      .getElementById("choice-4-2")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-4-2");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
    document
      .getElementById("choice-4-3")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-4-3");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
  });
});

document.getElementById("choice4").addEventListener("click", function () {
  let correct = document.getElementsByClassName("correct");
  //console.log(correct);
  if (correct.length > 0) {
    correct[0].classList.remove("correct");
  }

  let addGreen = document.getElementById("choice4");
  addGreen.classList.add("correct");

  let selectedChoice = 1;
  document.getElementById("nextButton").addEventListener("click", function () {
    question5();

    //QUESTION FIVE CHOICES
    document
      .getElementById("choice-5-1")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-5-1");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
    document
      .getElementById("choice-5-2")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-5-2");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
    document
      .getElementById("choice-5-3")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-5-3");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
  });
});

document.getElementById("choice5").addEventListener("click", function () {
  let correct = document.getElementsByClassName("correct");
  //console.log(correct);
  if (correct.length > 0) {
    correct[0].classList.remove("correct");
  }

  let addGreen = document.getElementById("choice5");
  addGreen.classList.add("correct");

  let selectedChoice = 1;
  document.getElementById("nextButton").addEventListener("click", function () {
    question6();
  });
});

document.getElementById("choice6").addEventListener("click", function () {
  let correct = document.getElementsByClassName("correct");
  //console.log(correct);
  if (correct.length > 0) {
    correct[0].classList.remove("correct");
  }

  let addGreen = document.getElementById("choice6");
  addGreen.classList.add("correct");

  let selectedChoice = 1;
  document.getElementById("nextButton").addEventListener("click", function () {
    question6();
  });
});

document.getElementById("choice7").addEventListener("click", function () {
  let correct = document.getElementsByClassName("correct");
  //console.log(correct);
  if (correct.length > 0) {
    correct[0].classList.remove("correct");
  }

  let addGreen = document.getElementById("choice7");
  addGreen.classList.add("correct");

  let selectedChoice = 1;
  document.getElementById("nextButton").addEventListener("click", function () {
    question6();
  });
});

//listen for click, if choice x then question2();

//console.log(DOMSelectors.displayContainer);

/* Whalen fix npm good. Work branch. */
