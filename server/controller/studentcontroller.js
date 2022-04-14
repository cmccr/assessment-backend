const students = [
    {
        id: 1,
        name: 'Connor'
    },
    {
        id: 2,
        name: 'Jake'
    },
    {
        id: 3,
        name: 'Seth'
    },
    {
        id: 4,
        name: 'Hannah'
    },
    {
        id: 5,
        name: 'Mikey'
    }
]

let globalId = 6

modeule.exports = {
    getStudents: (req, res) => {
        res.status(200).send(students)
    },
    addStudent: (req, res) => {
        const { studentName } = req.body
        const newUser = {
            id: globalId,
            name: studentName
        }
        students.push(newUser)
        res.status(200).send(students)
    },
    updateStudent: (req, res) => {

    },
    deleteStudent: (req, res) => {
        const { id } = e.target.value
        const 
    }
}