export default function initAnimaNumeros() {
    function animaNumeros() {
        numeros.forEach((numero) => {
            const total = +numero.innerText;
            const incremento = Math.floor(total / 100);
            let start = 0;

            const timer = setInterval(() => {
                numero.innerText = start;
                start += incremento;
                if (start > total) {
                    numero.innerText = total;
                    clearInterval(timer)
                }
            }, 25 * Math.random())
        })
    }
    const numeros = document.querySelectorAll('[data-numero]')



    function handleMutation(mutation) {
        if (mutation[0].target.classList.contains('ativo')) {
            observer.disconnect();
            animaNumeros();
        }
    }

    const observer = new MutationObserver(handleMutation);


    const observerTarget = document.querySelector('.numeros')
    observer.observe(observerTarget, { attributes: true });
}

