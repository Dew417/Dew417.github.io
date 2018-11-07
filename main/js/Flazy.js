$(function() 
{
    $("button[id=activBtn]").click(function() 
    {
		$.ajax({ type: "POST", url: "/controllers/activation.php", data: $("form[id=form_activ]").serialize()}).done(function(msg) 
        {
            msg = JSON.parse(msg);
			
            if (msg.status == "success") 
            {
				alertify.success(msg.message);
	       } 
            else 
            {
				alertify.error(msg.message);
			}
		});
	});
});