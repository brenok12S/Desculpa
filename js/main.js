const questions = [
    {question : "Você me perdoa", image: "src/DALL·E-2024-11-16-04.29.png"},
    {question : "Pode desculpar esse pobre pretinho?", image: "src/question1.png" },
];

let current = 0;

const questionElement = document.getElementById("question");
        const imageElement = document.getElementById("image");
        const yesButton = document.getElementById("yes");
        const noButton = document.getElementById("no");

        // Salva o tamanho original do botão "Sim"
        const originalYesSize = {
            width: yesButton.offsetWidth,
            height: yesButton.offsetHeight
        };

        noButton.addEventListener("click", () => {
            yesButton.style.width = (yesButton.offsetWidth + 10) + "px";
            yesButton.style.height = (yesButton.offsetHeight + 10) + "px";
        });

        yesButton.addEventListener("click", () => {
            if (current === questions.length - 1) {
                questionElement.textContent = "Te amo!";
                imageElement.src = "src/96c4d272-f928-4962-999e-51b1c42a8daa.png";
                yesButton.style.display = "none";
                noButton.style.display = "none";
            } else {
                current++;
                questionElement.textContent = questions[current].question;
                imageElement.src = questions[current].image;

                // Restaura o tamanho original do botão "Sim"
                yesButton.style.width = originalYesSize.width + "px";
                yesButton.style.height = originalYesSize.height + "px";
            }
        });