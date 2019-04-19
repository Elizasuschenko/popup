import './main.css';
const darkLayer = document.getElementById('shadow');
const uninstal = document.getElementById('uninstal');
const openWin = document.getElementById('button');
const modalWin = document.getElementById('popup');
openWin.addEventListener('click', showModalWin);
document.body.addEventListener('click', closeModalWin);
uninstal.addEventListener('click', ()=>{
    darkLayer.classList.remove('active');
    modalWin.classList.remove('show');
    alert('DONE')
});
function closeModalWin(event) {
    if(event.target.getAttribute('data-close') === 'true'){
        darkLayer.classList.remove('active');
        modalWin.classList.remove('show');
    }
}
function showModalWin() {
    darkLayer.classList.add('active');
    modalWin.classList.add('show');

}
