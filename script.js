const questions = [
    {
        'que': 'Which of the following is a markup language ?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'Which year was JavaScript launched ?',
        'a': '1996',
        'b': '1995',
        'c': '1985',
        'd': 'none of the above',
        'correct': 'b'
    },
    {
        'que': 'what does CSS stands for ?',
        'a': 'Hypertext markup language',
        'b': 'Cascading Style Sheet',
        'c': 'Jason Object Notaion',
        'd': 'Helicopters Terminals Moterboat Lamborginis',
        'correct': 'b'
    }

];
let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');

const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }
    reset();
    // Ensure 'questions' is defined and has the necessary data

    const data = questions[index];
    console.log(data);
    quesBox.innerText = ` ${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}
const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans == data.correct) {
        right++;
    } else {
        wrong++
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
 return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3> Thankyou for playing Quiz </h3>
    <h2> ${right} / ${total} are correct</h2>
   </div>
    `
}


loadQuestion();
