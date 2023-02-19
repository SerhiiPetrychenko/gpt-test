import Toastify from 'toastify-js'

function errorMessage(text = 'Oops. Something went wrong... Try again later.') {
    Toastify({
        text: text,
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        backgroundColor: "#F24D74",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: function () {
        } // Callback after click
    }).showToast();
}

export {errorMessage};
