var db = require('../database.js');
var fs = require('fs');

exports.home = function(req, res){
	res.render('home');
};
exports.app = function(req, res){
	res.render('app');
};
exports.dashboard = function(req, res){
	res.render('dashboard');
};
exports.dashboard.compose = function(req, res){
	res.render('compose');
};

exports.dashboard.offers = function(req, res){
	db.Offer.find(function(err, offersList){
		if(!err){
			res.render('offers',{data: JSON.stringify(offersList)});
			//res.render('offers',offersList);
			//console.log(offersList);
		}
		else
			return console.log(err);
	});
};

exports.dashboard.offers.read = function(req, res){
	return db.Offer.findById(req.params.id, function(err, oRes){
		if(!err)
			res.send('offer',{
				offer	: oRes,
				title	: 'offer'
			});
	});
};

/*exports.offers.image.read = function(req, res){
	console.log("test read");
	return true;
};
*/

exports.dashboard.offers.add = function(req, res){
	// Parsing the request
	var newOffer = new db.Offer();
	req.busboy.on('field', function(key, value, keyTruncated, valueTruncated) {
		switch(key){
		case "promo"  : newOffer.Promo = value; break;
		case "productName"  : newOffer.Product = value; break;
		case "discount"  : newOffer.Discount = value; break;
		case "discountType"  : newOffer.DiscountType = value; break;
		case "sTime"  : newOffer.StartTime = value; break;
		case "eTime"  : newOffer.EndTime = value; break;
		case "publishDate"  : newOffer.PublishDate = value; break;
		}
	});

	var fstream;
	req.busboy.on('file', function (fieldname, file, filename) {
			console.log("Uploading Image File");
			var charSet = "0ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
			var randomStr = "";
			for (var i =0; i< 8; i++){
				var pos = Math.floor(Math.random()*62);
				randomStr += charSet.charAt(pos,pos+1);
			}
			fstream = fs.createWriteStream(__dirname + '/files/' + randomStr + ".jpg");
			newOffer.PromoImg = randomStr + ".jpg";
			file.pipe(fstream);
			fstream.on('close', function () {
					//res.redirect('back');
			});
	});

	// Parsing Finished and Saving the content to database
	req.busboy.on('finish', function() {
			newOffer.Created = Date.now();
			newOffer.Author = "Virtual Admin";

			newOffer.save(function(err, sRes, r){
				if(!err){
					var h = new db.OfferHistory({
					OfferID		: sRes._id,
					Comment		: "Offer Created",
					Edited   	: sRes.Created,
					Author 		: "Admin",
					});

					h.save();
					console.log("Offer Created");
				}
				else
					console.log(err);
			});
			res.redirect('http://localhost:8080/dashboard/offers');
	});

	req.pipe(req.busboy);
};
