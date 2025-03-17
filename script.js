// Function to format price as 0,00.00
function formatPrice(price) {
    return parseFloat(price).toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Update all prices on the page
document.querySelectorAll('.price').forEach(priceElement => {
    const originalPrice = priceElement.textContent.replace('Price: MK/- ', '').trim();
    const formattedPrice = formatPrice(originalPrice);
    priceElement.textContent = `Price: MK/- ${formattedPrice}`;
});