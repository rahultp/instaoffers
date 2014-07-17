//********************************************** Require Statements
var db = require('mongoose');

//********************************************** Defining the Schema

var schema = db.Schema;

var offer = new schema({	
	Promo		: String,
	Product		: String,
	Discount	: String,
	DiscountType	: String,
	Created		: Date,
	PromoImg		: String,
	StartTime	: Date,
	EndTime		: Date,
	PublishDate	: Date,
	Author	: String
});

var offerHistory = new schema({
	OfferID	: String,
	Comment	: String,
	Edited 	: Date,
	Author	 : String
});

//********************************************** Defining the Models
var Offer				= db.model('offer',offer);
var OfferHistory = db.model('offerHistory',offerHistory);
//********************************************** Connecting to the Database

db.connect('mongodb://localhost/instaoffers');

//********************************************** Exporting the variables
exports.Offer = Offer;
exports.OfferHistory = OfferHistory;
