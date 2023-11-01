const form = document.querySelector(".quiz-form");
const correctAnswers = ["D","B","C","B","D"];
const  result = document.querySelector(".result");
const question=form.querySelectorAll(".question");
console.log(form);
form.addEventListener("submit",event => {
    event.preventDefault();
    console.log("event listener submitted");
    console.log(event);
    console.log(form.answer1.value);
    const userAnswers = [form.answer1.value,form.answer2.value,form.answer3.value,form.answer4.value,form.answer5.value];
    console.log(userAnswers);
    let score = 0;
    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index])
        {
            score++;
            console.log(question);
            question[index].classList.add("correct");

        }
        else
        {
            question[index].classList.add("wrong");
        }
    });
    console.log(score);
    console.log(result.classList);
    scrollTo(0,0);
    result.classList.remove("hide");
    const updatedScore = result.querySelector("p");
    console.log(updatedScore);
    updatedScore.textContent = `You scored ${score}/5!`;
})  