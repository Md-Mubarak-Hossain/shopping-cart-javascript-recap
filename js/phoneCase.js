
// case price

document.getElementById('btn-case-plus').addEventListener('click', function () {

    totalNumber(true, 'input-case-field', 50, 'case-price');
    subTotal();
    Tax();
    Total();

})
document.getElementById('btn-case-minus').addEventListener('click', function () {
    totalNumber(false, 'input-case-field', 50, 'case-price');
    subTotal();
    Tax();
    Total();

})
