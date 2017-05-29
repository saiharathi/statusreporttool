$(document).ready(function(){
	  setBindings();	
});
function setBindings(){
	$("nav a").click(function(e){
		e.preventDefault();
		var sectionID = e.currentTarget.id + "Section";
		
		
		 $("html body").animate({
			 
			scrollTop:$("#" +SectionID).offset()
          .top
			 
		 },1000)
		 
	})
}
