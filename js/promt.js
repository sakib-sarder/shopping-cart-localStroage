const showAlert = () => {
    alert('dosto, dhar de 5000');
} 
const lendMoney = () => {
    const result = confirm('Will You Lend Me 5000 tk');
    console.log(result);
    if (result === true) {
        alert('tui amar dost')
    }
    else {
        alert('dure jaiya mor');
    }
}

const getInfo = () => {
    const name = prompt('tell me your name');
    console.log(name);
    if (name === null) {
        alert('nam na dile kam nai')
    }
    else {
        alert('welcome to thiis world!')
    }
}