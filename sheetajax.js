var $form = $('form#calc-form'),
    url = 'https://script.google.com/macros/s/AKfycbzn9KH_m8x0w0V0Bj85g7ZxPWAtLGV8o8nwWy0AeWzPDHbBE1j8/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
