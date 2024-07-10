let countryselected = $('#id_default_country').val();
if(!countryselected) {
    $('#id_default_country').css('color', '#aab7c4');
};
$('#id_default_country').change(function() {
countryselected = $(this).val();
    if(!countryselected) {
         $(this).css('color', '#aab7c4');
    } else {
        $(this).css('color', '#000');
    }
});