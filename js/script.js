document.addEventListener('DOMContentLoaded', () => {
    // Update the total price
    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.card-body').forEach(item => {
            const price = parseFloat(item.querySelector('.unit-price').innerText.replace('$', ''));
            const quantity = parseInt(item.querySelector('.quantity').innerText);
            total += price * quantity;
        });
        document.querySelector('.total').innerText = `${total} $`;
    }

    // Adjust quantity
    document.querySelectorAll('.fa-plus-circle, .fa-minus-circle').forEach(button => {
        button.addEventListener('click', (event) => {
            const quantityElement = event.target.parentElement.querySelector('.quantity');
            let quantity = parseInt(quantityElement.innerText);

            if (event.target.classList.contains('fa-plus-circle')) {
                quantity++;
            } else if (event.target.classList.contains('fa-minus-circle') && quantity > 0) {
                quantity--;
            }

            quantityElement.innerText = quantity;
            updateTotal();
        });
    });

    // Delete item
    document.querySelectorAll('.fa-trash-alt').forEach(button => {
        button.addEventListener('click', (event) => {
            event.target.closest('.card-body').remove();
            updateTotal();
        });
    });

    // Like item
    document.querySelectorAll('.fa-heart').forEach(button => {
        button.addEventListener('click', (event) => {
            event.target.classList.toggle('liked');
        });
    });

    // Initial total update
    updateTotal();
});
