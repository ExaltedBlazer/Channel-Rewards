console.log(`=============== sanity check for index.js ===============`)
const divContainer = document.getElementById('testDiv');
const indexButton = document.querySelectorAll('.div-index-button');
console.log(divContainer);
[...indexButton].forEach(function (row, i) {
    if (i % 2 === 0) { row.style.backgroundColor = 'blue'; }
});


divContainer.addEventListener('click', clickIndexButton);

function clickIndexButton(e) {
    alert('place Script tag at the bottom of the page')
}
