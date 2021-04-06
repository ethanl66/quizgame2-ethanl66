console.log("Connected");

//Max 13 choices
let questionsList = [
  {
    questionNum: 1,
    question: "What kind of stuff do you like to watch?",
    //value: 3,
    choice1: "Romance or drama", //CAN INCLUDE: Comedy, drama, music, mystery, romance, slice of life. DO YOU LIKE ELEMENTS OF MYSTERY
    choice2: "Fight scenes", //Action, comedy, drama, horror, mystery, sports SOMETHING FUNNY OR SOMETHING DARK
    choice3: "Everyday life", //Comedy, drama, music, romance, slice of life SOMETHING LAID BACK OR SOMETHING WITH DRAMA
    choice4: "Something that will keep me on the edge of the chair", //Action, comedy, drama, horror, mystery, sports HORROR? OR COMPETITION?
    choice5: "Someone painting or playing music", //Comedy, music, slice of life
    choice6: "Youtubers playing video games", //Action, comedy, sports
    choice7: "None of these", //go read a book
  },
  {
    questionNum: 2,
    question: "Do you want elements of mystery or suspense?", //IF choice1
    //value: 3,
    choice1: "Yes", //Must have mystery
    choice2: "No", //Must not have
    choice3: "Don't care", //Can be both (no action)
  },
  {
    questionNum: 3,
    question: "Do you want something funny or something dark?", //IF choice2
    //value: 3,
    choice1: "Funny",
    choice2: "Dark",
    choice3: "Both funny and dark",
    choice4: "Don't care",
  },
  {
    questionNum: 4,
    question: "Do you want something laid-back or something with drama?", //IF choice3    //value: 3,
    choice1: "Something chill", //Must not have drama
    choice2: "Drama", //Must have drama
    choice3: "Don't care", //Can be both (no action)
  },
  {
    questionNum: 5,
    question: "Do you want anything dark or scary?", //IF choice4
    //value: 3,
    choice1: "Yes", //Must include horror
    choice2: "No", //Must not include horror
    choice3: "Don't care", //No action
  },
  /*   {
    question: "What genre are you looking for?",
    //value: 3,
    choice1: "Action",
    choice2: "Comedy",
    choice3: "Drama",
    choice4: "Horror",
    choice5: "Music",
    choice6: "Mystery",
    choice7: "Romance",
    choice8: "Slice of Life",
    choice9: "Sports",
  }, */
  {
    questionNum: 6,
    question:
      "Which of these genres do you want your recommendations to include?", //checklist
    //value: 3,
    choice1: "Ecchi",
    choice2: "Magic",
    choice3: "Psychological",
    choice4: "School",
    choice5: "Sci-fi",
    choice6: "Supernatural",
    choice7: "Thriller",
    choice8: "Vampires",
    choice9: "None of these",
  },
  {
    questionNum: 7,
    question: "Any of these that you want to see?", //checklist
    //value: 3,
    //choice1: "Cars",
    choice1: "Mind-twisting plots", //Dementia
    choice2: "Demons and dark creatures", //Demons
    choice3: "Video games or board games", //Game
    choice4: "Harems", //Harem
    choice5: "History or historical fiction", //Historical
    //choice7: "Shows for kids", //Kids
    //choice8: "Martial arts",
    choice6: "Giant robots and big machines", //Mecha
    choice7: "A heavy militaristic feel", //Military
    choice8: "Parodies", //Parody
    //choice12: "Police",
    choice9: "Samurai",
    choice10: "Space",
    choice11: "Superpowers", //Superpower
    choice12: "No preference",
  },
  {
    questionNum: 8,
    question: "Air date?",
    //value: 3,
    choice1: "Before 1989",
    choice2: "1990-1999",
    choice3: "2000-2009",
    choice4: "2010-present",
  },
  {
    questionNum: 9,
    question: "How many episodes would you prefer?", //checklist
    //value: 3,
    choice1: "13 or less",
    choice2: "13 to 26",
    choice3: "26 or less",
    choice4: "Greater than 26",
  },
  {
    questionNum: 10,
    question: "How much anime have you watched?", //SORT BY POPULARITY NOT NETSCORE
    //value: 3,
    choice1: "A lot", //Less popular
    choice2: "I can count them on my fingers", //Not top 5
    choice3: "Anime?", //All
  },
];

export { questionsList };

//sssss
