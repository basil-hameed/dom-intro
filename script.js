document.addEventListener('DOMContentLoaded', () => {
    const myDiv = document.getElementById('myDiv');
    const button = document.getElementById('changeText');
    button.addEventListener('click', () =>  {
        myDiv.textContent = 'Updated Text';
    });
});