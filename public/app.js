
$(document).ready(function() {
	$("article, header, title").hide();
	var show_resume = $("#showResume");
	show_resume.text("Show Resume");
	show_resume.addClass("button");
	show_resume.show();
	show_resume.on("mouseenter", function() {
		$(this).addClass("button_hover");
	});
	show_resume.on("mouseleave", function() {
		$(this).removeClass();
		$(this).addClass("button");
	});
	show_resume.on("click", function() {
		$("article, header, title").toggle();
		console.log(show_resume.val());
		if(show_resume.text() == "Show Resume"){
			show_resume.text("Hide Resume");
		}
		else{
			show_resume.text("Show Resume");
		}
		
	});
});




