import "./utils.js";
let pQuestions = document.querySelectorAll(".question");

let quiz = [];
let pregunta = 0;
let pos = [];

const questionsLS = JSON.parse(localStorage.questions);
//posiciones 0 y 1 de este array de posiciones van a ser las dos preguntas del localStoarge

const calcPosLS = () => {
  //pos = [4,8]
  let lS = Math.floor(Math.random() * 10);
  pos.push(lS);
  lS = Math.floor(Math.random() * 10);
  while (lS == pos[0]) lS = Math.floor(Math.random() * 10);
  pos.push(lS);
};



//Mostramos las preguntas del localStorage
calcPosLS();

const loadLSQuestion = () => {
  let question = {
    question: questionsLS[pos[0]].question,
    answers: [
      ...questionsLS[pos[0]].incorrect_answers,
      questionsLS[pos[0]].correct_answer,
    ],
    correct_answer: questionsLS[pos[0]].correct_answer,
  };

  quiz.push(question);

  question = {
    question: questionsLS[pos[1]].question,
    answers: [
      ...questionsLS[pos[1]].incorrect_answers,
      questionsLS[pos[1]].correct_answer,
    ],
    correct_answer: questionsLS[pos[1]].correct_answer,
  };

  quiz.push(question);
};

const loadApiQuestion = () => {
  fetch(
    "https://opentdb.com/api.php?amount=8&category=9&difficulty=medium&type=multiple",
  )
    .then((textRes) => textRes.json())
    .then((quizAPI) => {
      //pos[0,8,1,2,3,4,5,6,7,9]
      //Obtiene las posiciones de p libres
      for (let i = 0; i < pQuestions.length; i++) {
        if (!pos.includes(i)) pos.push(i);
      }
      //Mostramos las preguntas de la API
      for (let i = 0; i < 8; i++) {
        let question = {
          question: quizAPI.results[i].question,
          answers: [
            ...quizAPI.results[i].incorrect_answers,
            quizAPI.results[i].correct_answer,
            ,
          ],
          correct_answer: questionsLS[pos[0]].correct_answer,
        };
        quiz.push(question);
      }
    });
};


const starGame = () => {
  loadLSQuestion();
  loadApiQuestion();

  createQuestionCard(quiz[0].question, quiz[0].answers, pregunta + 1);
};

const createQuestionCard = (question, answers, order) => {
  const template = document.getElementById("quiz-card");

  const instancia = template.content.cloneNode(true);

  const prevBtn = instancia.getElementById("prev-question");
  prevBtn.addEventListener("click", (e) => {
    if (pregunta > 0) {
      pregunta--;
    }

    const container = document.getElementById("main-container");
    container.innerHTML = "";

    createQuestionCard(
      quiz[pregunta].question,
      quiz[pregunta].answers,
      pregunta + 1,
    );
  });

  const nextBtn = instancia.getElementById("next-question");
  nextBtn.addEventListener("click", () => {
    if (pregunta < 9) {
      pregunta++;
    }

    const container = document.getElementById("main-container");
    container.innerHTML = "";

    createQuestionCard(
      quiz[pregunta].question,
      quiz[pregunta].answers,
      pregunta + 1,
    );
  });

  // Orden de la pregunta.
  // Seleccionamos el orden de la pregunta. Lo coge de la instancia, en el DOM no existe.
  const questionOrder = instancia.getElementById("question-number");
  questionOrder.innerText = `Pregunta ${order} de 10`;

  // Enunciado
  const questionText = instancia.getElementById("question-text");
  questionText.innerText = question;

  //Opciones
  const questionOpcs = instancia.querySelectorAll(".option-label");
  questionOpcs.forEach((opc, index) => {
    opc.innerText = answers[index];
  });

  // Añadir eventos prevQuestion y nextQuest

  const container = document.getElementById("main-container");

  container.appendChild(instancia);
};

starGame();
