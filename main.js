$(function(){
	var up = $(".up");
	var doc = $(document);
	
	doc.scroll(function(){
		if(doc.scrollTop() > 600)
		{
			up.addClass("upVis");
		}
		else
		{
			up.removeClass("upVis");
		}
	})
	
	
	
})//$