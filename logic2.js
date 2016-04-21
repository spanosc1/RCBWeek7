// Link to Firebase
var bidderData = new Firebase("https://rcb-codersbay.firebaseio.com/");

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-("

var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// 
// At the initial load, get a snapshot of the current data.
bidderData.on("value", function(snapshot) {

	// If Firebase has a highPrice and highBidder stored (first case)
	if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

		// Set the initial variables for highBidder equal to the stored values.
		highPrice = snapshot.val().highPrice;
		highBidder = snapshot.val().highBidder;


		// Change the HTML to reflect the initial value
		$("#highestBidder").html(snapshot.val().highBidder);
		$("#highestPrice").html("$" + snapshot.val().highPrice);



		// Print the initial data to the console.
		console.log(highBidder);
		console.log(highPrice);

	}

	// Keep the initial variables for highBidder equal to the initial values
	else{

		// Change the HTML to reflect the initial value
		$("#highestBidder").html(initialBidder);
		$("#highestPrice").html(initialBid);


		// Print the initial data to the console.
		console.log(initialBidder);
		console.log(initialBid);


	}



// If any errors are experienced, log them to console. 
}, function (errorObject) {

  	console.log("The read failed: " + errorObject.code);

});

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#submitBid").on("click", function() {

	// Get the input values
	var myName = $("#bidderName").val();
	var myPrice = $("#bidderPrice").val();



	// Log the Bidder and Price (Even if not the highest)
	console.log(myBid);
	console.log(myPrice);


	if(myPrice > highPrice) {

		// Alert 
		alert("You are now the highest bidder.");

		// Save the new price in Firebase
		bidderData.set({
			highBidder: myName,
			highPrice: myPrice
		});


		// Log the new High Price


		// Store the new high price and bidder name as a local variable (could have also used the firebase variable)




		// Change the HTML to reflect the new high price and bidder
		$("#highestBidder").html(myName);
		$("#highestPrice").html(myPrice);


	}

	else{

		// Alert
		alert("Sorry that bid is too low. Try again.");	
	}

	// Return False to allow "enter"
	return false;
});
