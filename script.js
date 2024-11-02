// const colors = ["#660BAB", "#592680", "#41046F", "#9440D5", "#A668D5"];
// const blocks = document.querySelectorAll(".block");
// for (let j = 0; j < 5; j++) {
//     blocks[j].style.background = colors[j];
// }
// let colIndex = 0;
// function timer() {
//     for (let j = 0; j < 5; j++) {
//         if ((colIndex + 1) > 4) {
//             colIndex = 0;
//         }
//         blocks[j].style.background = colors[colIndex+1];
//         colIndex++;
//     }
// }
// setInterval(timer, 1000);




const element = document.querySelector('.round');  
const duration = 2000; // длительность анимации в миллисекундах  
let startTime;  

function getRandomPosition() {  
    const x = Math.random() * (window.innerWidth - 100); 
    const y = Math.random() * (window.innerHeight - 100);  
    return { x, y };  
}  

function animateMovement(startX, startY, endX, endY) {  
    startTime = null;  
    const animate = (timestamp) => {  
        if (!startTime) startTime = timestamp;  
        const runtime = timestamp - startTime;  
        const progress = Math.min(runtime / duration, 1);  
        const currentX = startX + (endX - startX) * progress;  
        const currentY = startY + (endY - startY) * progress;  
        element.style.transform = `translate(${currentX}px, ${currentY}px)`;  
        if (progress < 1) {  
            requestAnimationFrame(animate);  
        } else {  
            const newPosition = getRandomPosition();  
            animateMovement(currentX, currentY, newPosition.x, newPosition.y);  
        }  
    };  
    requestAnimationFrame(animate);  
}  
const initialPosition = getRandomPosition();  
element.style.transform = `translate(${initialPosition.x}px, ${initialPosition.y}px)`;  
const targetPosition = getRandomPosition();  
animateMovement(initialPosition.x, initialPosition.y, targetPosition.x, targetPosition.y); 




function createHtmlList(items) {  
    const ul = document.createElement('ul');  
    items.forEach(item => {  
        const li = document.createElement('li');  
        li.textContent = item;
        ul.appendChild(li);
    });  
    return ul; 
}  

function collectDataAndCreateList() {  
    const items = [];  
    let input;  
    while (true) {  
        input = prompt("Введите элемент списка (или нажмите 'OK' для завершения):");  
        if (input === "") break;
        items.push(input);
    }  
    const list = createHtmlList(items);  
    document.body.appendChild(list);  
}  

collectDataAndCreateList();  


const postCount = prompt("Введите количество постов");
const animCount = prompt("Введите количество животных");
const imgLinks = ["https://i.pinimg.com/564x/7c/32/94/7c329494d4b94aac3d860f7b6635f96e.jpg", 
    "https://i.pinimg.com/736x/21/0b/87/210b874f8483b7a8983012247d1b29fc.jpg",
    "https://i.pinimg.com/564x/5d/4e/39/5d4e39816cea683c49cad6a00d4362e2.jpg",
    "https://i.pinimg.com/474x/9f/54/8c/9f548cc10fcb9ff94e67abf0046decbe.jpg",
    "https://i.pinimg.com/564x/91/99/fa/9199fa9cf90530b19daed7047fbb8a55.jpg",
    "https://i.pinimg.com/564x/a9/e1/e8/a9e1e835f4059f7f0a716fdcd69de0af.jpg",
    "https://i.pinimg.com/236x/9b/6f/e0/9b6fe0d4c368b83e5443a0e84b069446.jpg"
];
const animals = ["Обезьяна", "Альпака", "Тюлень", "Муровьед", "Килька", "Жорик", "Олень", "Рак"];
const colors = ["#E2F1E7", "#F4F6FF", "#FEF9F2", "#FBFBFB", "#FFF6E3", "#D6EFD8", "#E1AFD1"];
const bgColors = ["#508D4E", "#FC819E", "#BB9CC0", "#135D66", "#435585", "#7469B6", "#80BCBD"];

function createAnimals(animCount) {
    let animalsText = [];
    for (let i = 0; i < animCount; i++) {
        let p = document.createElement('p');
        p.innerHTML = animals[Math.floor(Math.random() * animals.length)];
        p.style.color = colors[Math.floor(Math.random() * colors.length)];
        animalsText.push(p);
    }
    return animalsText;
}
let posts = [];

for (let i = 0; i < postCount; i++) {
    let post = document.createElement('div');
    post.style.background = bgColors[Math.floor(Math.random() * bgColors.length)];
    post.style.width = "25%";
    post.style.height = "450px";
    post.style.margin= "15px";
    let img = document.createElement('img');
    img.src = imgLinks[Math.floor(Math.random() * imgLinks.length)];
    post.appendChild(img);
    let postText = createAnimals(animCount);
    for (let j = 0; j < postText.length; j++) {
        post.appendChild(postText[j]);
    }
    document.body.appendChild(post);  
}