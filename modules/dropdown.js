import outsideClick from "./checkOutside.js"

export default function initDropdown() {

    const dropdownMenus = document.querySelectorAll('[data-dropdown]')

    dropdownMenus.forEach((menu) => {
        ['touchstart', 'click'].forEach((userEvent) => {
            menu.addEventListener(userEvent, handleClick)
        })
    })

    function handleClick(event) {
        event.preventDefault();
        this.classList.add('active');
        outsideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('active')
        });
    };

    function outsideClick(element, events, callback) {
        const hmtl = document.documentElement;
        const outside = 'data-outside';


        if (!element.hasAttribute(outside)) {
            events.forEach(userEvent => {
                hmtl.addEventListener(userEvent, handleOutsideClick);
            })
            element.setAttribute(outside, '')
        }
        function handleOutsideClick(event) {
            if (!element.contains(event.target)) {
                element.removeAttribute(outside);
                events.forEach(userEvent => {
                    hmtl.removeEventListener(userEvent, handleOutsideClick);
                })
                callback();
            }

        }
    }
}