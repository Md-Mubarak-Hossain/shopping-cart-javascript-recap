
document.getElementById('btn-phone-plus').addEventListener('click', function () {

    totalNumber(true, 'input-phone-field', 1259, 'mobile-price');
    subTotal();
    Tax();
    Total();


})
document.getElementById('btn-phone-minus').addEventListener('click', function () {

    totalNumber(false, 'input-phone-field', 1259, 'mobile-price');
    subTotal();
    Tax();
    Total();

})