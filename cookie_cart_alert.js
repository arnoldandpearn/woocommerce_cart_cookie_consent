//Alert the user to the usage
//of cookies when they first add
//something to the basket
document.addEventListener('DOMContentLoaded', function(){ 

	var byClass = document.getElementsByClassName("add_to_cart_button ajax_add_to_cart");

	for (var i = 0; i < byClass.length; i++) {

		byClass[i].addEventListener("click", function(e){

			if (document.cookie.indexOf("woocommerce_cart_hash") == 0) {
			 // have cookie
			} else {
				// no cookie			
			    var r = confirm("We use cookies to keep items in your cart, is this okay?");
			    if (r == true) {
			        // Continue
			    } else {
			        e.preventDefault();
			    }
			}
		}, false);
	}
    
 

}, false);
