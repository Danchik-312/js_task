const users = [
    {
        first_name: 'Ulan',
        last_name: 'Jumabaev',
        isProgrammer: false
    },
    {
        first_name: 'Rufat',
        last_name: 'Ashimov',
        isProgrammer: true
    },
    {
        first_name: 'Imran',
        last_name: 'Ashimov',
        isProgrammer: true
    },
]

const found = users.find(elem => elem.isProgrammer = true);
console.log(found);