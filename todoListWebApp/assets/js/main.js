$("ul").on("click", "li", function()
{
    $(this).toggleClass("completed")
});

//click on X to delete todo
$("ul").on("click", "span", function(event)
{
     $(this).parent().fadeOut(1000, function()
     {
         $(this).remove();
     });

    event.stopPropagation(); 
});

$("input[type = 'text'").keypress(function(e)
    {
        if(e.which === 13)
        {
            //grabbing todo text
           var todoText = $(this).val();
           $(this).val("");
           //creat a new li to at to out todo
           $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        }
});
$(".fa-pencil").click(function()
{
    $("input[type = 'text'").fadeToggle(100);
});
