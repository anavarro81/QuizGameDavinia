

const questions =
  [
    {
      "question": "Which American manufactured submachine gun was informally known by the American soldiers that used it as &quot;Grease Gun&quot;?",
      "correct_answer": "M3",
      "incorrect_answers": [
        "Colt 9mm",
        "Thompson",
        "MAC-10"
      ]
    },
    {
      "question": "Which of these Nicktoons were NOT originally a short on Oh Yeah! Cartoons before becoming their own series?",
      "correct_answer": "Danny Phantom",
      "incorrect_answers": [
        "ChalkZone",
        "My Life as a Teenage Robot",
        "The Fairly OddParents"
      ]
    },
    {
      "question": "What is the romanized Russian word for &quot;winter&quot;?",
      "correct_answer": "Zima",
      "incorrect_answers": [
        "Leto",
        "Vesna",
        "Osen&#039;"
      ]
    },
    {
      "question": "The early part of which decade, did the Goth Subculture begin?",
      "correct_answer": "1980s",
      "incorrect_answers": [
        "1990s",
        "2000s",
        "1970s"
      ]
    },
    {
      "question": "What does the &quot;G&quot; mean in &quot;G-Man&quot;?",
      "correct_answer": "Government",
      "incorrect_answers": [
        "Going",
        "Ghost",
        "Geronimo"
      ]
    },
    {
      "question": "What is a &quot;dakimakura&quot;?",
      "correct_answer": "A body pillow",
      "incorrect_answers": [
        "A Chinese meal, essentially composed of fish",
        "A yoga posture",
        "A word used to describe two people who truly love each other"
      ]
    },
    {
      "question": "What is the full title of the Prime Minister of the UK?",
      "correct_answer": "First Lord of the Treasury",
      "incorrect_answers": [
        "Duke of Cambridge",
        "Her Majesty&#039;s Loyal Opposition",
        "Manager of the Crown Estate"
      ]
    },
    {
      "question": "After how many years would you celebrate your crystal anniversary?",
      "correct_answer": "15",
      "incorrect_answers": [
        "20",
        "10",
        "25"
      ]
    },
    {
      "question": "Linus Pauling, one of the only winners of multiple Nobel Prizes, earned his Nobel Prizes in Chemistry and what?",
      "correct_answer": "Peace",
      "incorrect_answers": [
        "Physics",
        "Economics",
        "Physiology/Medicine"
      ]
    },
    {
      "question": "Which of these American singers and songwriters won a Nobel Prize in Literature?",
      "correct_answer": "Bob Dylan",
      "incorrect_answers": [
        "Buddy Holly",
        "Johnny Cash",
        "Alice Cooper"
      ]
    }
  ];

const insertQuestion = q => {
  if (!localStorage.questions)
    localStorage.questions = JSON.stringify([q]);
  else {
    let questions = JSON.parse(localStorage.questions);
    questions.push(q);
    localStorage.questions = JSON.stringify(questions);
  }
}


questions.forEach(q => { insertQuestion(q) });