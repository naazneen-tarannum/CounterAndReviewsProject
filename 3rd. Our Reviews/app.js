const reviews = [
    {
        id: 1,
        name: 'Susan smith',
        job: 'web developer',
        image:'./11.jfif',
        text:'As a dedicated professional with over [Number] years of experience in the [Your Industry/Field] sector, I have a proven track record of [mention a key achievement or skill, e.g., leading successful projects, developing innovative solutions, or optimizing operational efficiency]. ',

    },
    {
        id: 2,
        name: 'smith susasn',
        job: 'data scintist',
        image:'./9.jfif',
        text:'My expertise lies in [mention 2-3 specific skills, e.g., data analysis, project management, or software development], and I am passionate about leveraging these skills to drive growth and achieve strategic objectives. ',

    },
    {
        id: 3,
        name: 'anna johnson',
        job: 'data analyst',
        image:'./12.jfif',
        text:'I am a col12laborative team player and a critical thinker, always seeking opportunities for continuous learning and professional development.',

    },
    {
        id: 4,
        name: 'johnson anna',
        job: 'ml engineer',
        image:'./14.jfif',
        text:'Im a software engineer by day and an avid hiker by night. Im endlessly curious about the world around me and believe that the best moments are found in the connections we make. ',

    },
    {
        id: 5,
        name: 'sara jones',
        job: 'ai engineer',
        image:'./13.jfif',
        text:'When Im not coding, you can find me hiking with my dog, experimenting with new recipes, or getting lost in a good book. Im a firm believer in the power of a positive attitude and a good cup of coffee. Lets connect and share stories!',

    },
    {
        id: 6,
        name: 'jones sara',
        job: 'ceo',
        image:'./10.jfif',
        text:'m a creative mind on a mission to bring ideas to life. My journey has taken me through the worlds of design, technology, and storytelling, and m constantly inspired by the intersection of these fields. Im passionate about building things that not only solve problems but also spark joy and imagination. Whether its through writing code, designing user experiences, or crafting narratives,',

    },
]

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem)
})

nextBtn.addEventListener('click', ()=> {
    currentItem++
    if(currentItem > reviews.length -1){
        currentItem = 0
    }
    showPerson(currentItem)
})

prevBtn.addEventListener('click', ()=> {
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length -1
    }
    showPerson(currentItem)
})

randomBtn.addEventListener('click', ()=>{
    currentItem = Math.floor(Math.random() * reviews.length)
    console.log(currentItem)
    showPerson(currentItem)
})

function showPerson(person) {
    const item = reviews[person]
    img.src = item.image;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text
}