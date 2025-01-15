const htmlBody = document.querySelector('body');
htmlBody
    
const randomClickFunction = function () {
    const colors = ["#002942", "0Ca7DB", "red", "blue", "green"]

    const randomIndex = Math.floor(Math.random() * colors.length);

    const randomColor = colors[randomIndex];

    htmlBody.style.backgroundColor = randomColor;

    console.log('The user clicked and se the color to' + randomColor);
}
randomClickFunction()
