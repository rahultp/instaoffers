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
	return db.Offer.find( function(err, offersList){
		if(!err){
			res.send('offers_list',{
				offersList	: offersList,
				title		: 'Offers'
			});
		}
		else
			return console.log(err);
	});
	res.render('offers');
};
exports.dashboard.offers.add = function(req, res){

	var newOffer = new db.Offer();
	req.busboy.on('field', function(key, value, keyTruncated, valueTruncated) {
		switch(key){
			case "promo"  : newOffer.Promo = value; break;
			case "productName"  : newOffer.Product = value; break;
			case "discount"  : newOffer.Promo = value; break;
			case "discountType"  : newOffer.Promo = value; break;
			case "publishDate"  : newOffer.Promo = value; break;
			case "sTime"  : newOffer.Promo = value; break;
			case "eTime"  : newOffer.Promo = value; break;
			case "promo"  : newOffer.Promo = value; break;
		}
		console.log("printing the field values");
		console.log('Field [' + key + ']: value: ' + value + " " + keyTruncated + " " + valueTruncated);
	});
	console.log(newOffer.Promo);

	var fstream;
	console.log("starting file upload");
	req.pipe(req.busboy);
	req.busboy.on('file', function (fieldname, file, filename) {
			console.log("Uploading: " + filename + "to " + __dirname + '/files/' + filename);
			fstream = fs.createWriteStream(__dirname + '/files/' + filename);
			file.pipe(fstream);
			fstream.on('close', function () {
					//res.redirect('back');
			});
	});

//	req.pipe(req.busboy);
//	var newOffer = new db.Offer();


		/*var newOffer = new db.Offer({
			//PromoImg			 : String,
			Author				 : String,
			Created				: Date.now()
		});*/


	//res.send({ status: 'SUCCESS' });
	//res.redirect('/dashboard/offers');

	/*var charSet = "0ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
	var randomStr;
	for (var i =0; i< 9; i++){
		var pos = Math.floor(Math.random()*62);
		randomStr += charSet.charAt(pos,pos+1);
	}
	*/


/*
var newOffer = new db.Offer({
	Promo					: req.body.promo,
	Product				: req.body.productName,
	Discount			 : req.body.discount,
	DiscountType	 : req.body.discountType,
	//PromoImg			 : String,
	StartTime			: req.body.sTime,
	EndTime				: req.body.eTime,
	PublishDate		: req.body.publishDate,
	Author				 : String,
	Created				: Date.now()
});

	newOffer.save(function(err, sRes, r){
		if(!err){
			var h = new db.OfferHistory({
			 OfferID		: sRes._id,
			 Edited   	: sRes.Created,
			 Author 		: "Admin",
			});

			h.save();
			console.log("Offer Added");
		}
		else
			console.log(err);
	});

	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.write(JSON.stringify({ "status" :  "OK" }));
	//res.write(JSON.stringify(tt));
	res.end();
*/
};
