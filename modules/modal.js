export default function initModal() {

}

const botaoAbrir = document.querySelector('[data-modal="abrir"]')
const botaoFechar = document.querySelector('[data-modal="fechar"]')
const containerModal = document.querySelector('[data-modal="container"]')

function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
}


function cliqueForadoModal() {
    if (event.target === this/* ou containerModal */)
        toggleModal(event)
}

botaoAbrir.addEventListener('click', toggleModal)
botaoFechar.addEventListener('click', toggleModal)
containerModal.addEventListener('click', cliqueForadoModal
)