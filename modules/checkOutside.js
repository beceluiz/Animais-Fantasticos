export default function outsideClick(element,events, callback) {
    const hmtl = document.documentElement;
    const outside = 'data-outside';


if(!element.hasAttribute(outside)) {
    events.forEach(userEvent => { setTimeout(() => {
        hmtl.addEventListener('click', handleOutsideClick);
    })
    })
    element.setAttribute(outside,'')
}
    function handleOutsideClick(event) {
        if (!element.contains(event.target)) {
            element.removeAttribute(outside);
           events.forEach(userEvent => {
            hmtl.removeEventListener('click', handleOutsideClick);
           })
            callback();
        }

    }
}