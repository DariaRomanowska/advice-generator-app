const adviceId = document.getElementById('number'),
    advice = document.getElementById('advice'),
    btn = document.getElementById('btn');


fetch('\thttps://api.adviceslip.com/advice')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        adviceId.textContent = data.slip.id
        console.log(adviceId)
        advice.textContent = data.slip.advice
        console.log(data);
    });
btn.addEventListener('click', () => {
    fetch('\thttps://api.adviceslip.com/advice')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            adviceId.textContent = data.slip.id
            console.log(adviceId)
            advice.textContent = data.slip.advice
            console.log(data);
        });
})