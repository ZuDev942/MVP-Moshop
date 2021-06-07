var modal = document.getElementById('myModal');
var btnOption = document.querySelector('.btn--option');
let startDate = document.getElementById('dateStart');
let endDate = document.getElementById('dateEnd');
let hasChanged = false;
let accept;

startDate.onchange = () => {
    hasChanged = true;
}
endDate.onchange = () => {
    if (hasChanged) {
        accept = document.querySelector('.modal__btn--accept');
        accept.style.backgroundColor = 'var(--primary-color)'
        accept.disabled = false;
        accept.addEventListener('click', () => {
            modal.style.display = 'none';
        })
    }
}
function showDialog() {
    modal.style.display = 'inline';
}
function exit() {
    clear()
    modal.style.display = 'none';
}
function clear() {
    accept.disabled = true;
    accept.style.backgroundColor = 'var(--blur)'
    startDate.value = ""
    endDate.value = ""
}
