$("ul").on("click", "li", function(){
	$(this).toggleClass("selected");
})

//remove the li part
$("ul").on("click", "span" ,function(event){
	$(this).parent().fadeOut(function(){
		(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var newTodo = $(this).val();
		$(this).val(" ");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + " " + newTodo + "</li>" );
		$(this).attr("placeholder","Enter a new todo");
	}
});

$(".fa-plus").click(function(){
	console.log("c");
	$("input[type='text']").fadeToggle();
});