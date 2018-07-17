$(document).ready(function(){
	
	$("#goToSignUp").click(function(){

		$(".login").removeClass("fadeIn")
		$(".login").addClass("fadeOut")
		$(".login").hide()
		
		$(".signup").show()
		$(".signup").removeClass("fadeOut")
		$(".signup").addClass("fadeIn")
		
	})


	$("#goToSignIn").click(function(){
		$(".signup").removeClass("fadeIn")
		$(".signup").addClass("fadeOut")

		$(".signup").hide()
		$(".login").show()

		$(".login").removeClass("fadeOut")
		$(".login").addClass("fadeIn")
		
		
		
		
	})

	
})