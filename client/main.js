const fortuneButton = document.querySelector('#fortuneButton');

const studentContainer = document.querySelector('#student-container')

const renderStudents = (data) => {
    res.data.forEach(s => {
        let nameHeading = document.createElement('h3');
        let xbtn = document.createElement('p')
        xbtn.textContent = "X";
        xbtn.addEventListener('click', handleDelete);
        nameHeading.textContent = s.name;
        nameHeading.textContent = s.id;
        nameHeading.appendChild(xbtn);
        nameHeading.textContent = s.name
        document.querySelector('body').appendChild(nameHeading)
    });
}

const getFortune = () => {
    axios.get('https://localhost:4000/api/fortune')
    .then((res) => alert(res.data))
    .catch((err) => console.log(err));
};

fortuneButton.addEventListener('click', getFortune);

const allStudents = () => {
    axios.get('https://localhost:4000/api/student')
    .then((res) => {
        res.data.forEach(s => {
            let nameHeading = document.createElement('h3')
            nameHeading.textContent = s.name
            document.querySelector('body').appendChild(nameHeading)
        })
    })
    .catch((err) => console.log(err));
};

window.addEventListener('DOMContentLoaded', allStudents)

let userInput = document.querySelector('#std-input')
let submitBtn = document.querySelector('#submit-btn')

const addNewStudent = () => {
    let studentName = userInput.value
    axios.post('https://localhost:4000/api/student', { studentName })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
}

const handleDelete = (e) => {
    const id = e.target.value
    axios.delete(`https://localhost:4000/api/student/${id}`)
    .then((res) => {
        console.log(res.data)
        renderStudents(res.data)
    });
};


submitBtn.addEventListener('click', addNewStudent)

document.querySelector('p').addEventListener('click', handleDelete)
