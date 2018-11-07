$('#select').on('input', function(){

  var val = $(this).val();

  var price, days;

  	switch(val){

        case "0":
        	price = '49 Руб';
          days = '1 День';
          break;

        case "1":
        price = '99 Руб';
        days = '7 Дней';
          break;

        case "2":
        	price = '129 Руб';
          days = '15 Дней';
          break;

        case "3":
        	price = '199 Руб';
          days = '30 Дней';
          break;

        case "4":
        	price = '349 Руб';
          days = '60 Дней';
          break;

        case "5":
        	price = '499 Руб';
          days = '180 Дней';
          break;

        case "6":
        	price = '599 Руб';
          days = '360 Дней';
          break;

        case "7":
        	price = '799 Руб';
          days = 'LifeTime';
          break;

      	default:
        	price = '199 Руб';
          days = '30 Дней';
          break;
    }


  var link = $('#value');
  var link = $('#valuebtn');

  link.attr('href', '/buy/' + val + '.php');

  $('.value').html(val);
  $('.valuebtn').html(val);
  $('.href').html(link.attr('href'));
  $('.price').html(price);
  $('.days').html(days);

});
