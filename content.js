setTimeout(function() {

	// Get all Products and store in an array
	var allProducts = document.getElementsByClassName('SkuItem-nameDisplay'),
	productValues = [];

	for (var i = 0; i < allProducts.length; i++) {
	   productValues.push(allProducts[i].innerText);
	}

	// Loop through array
	productValues.forEach(function (product) {
	    if (product.indexOf("Foamo") > -1) {
	    	alert('It is time.')
	    } else {
			setInterval(function() {
	          window.location.reload();
	        }, 300000);
	    }
	});

	console.log(productValues)

}, 5000);