const mongoose = require('mongoose');

const VenueListingSchema = new mongoose.Schema({
  venueName: { type: String, require: true },
  venueType: { type: String, require: true },
  priceRating: { type: Number, require: true },
  address: { type: String, require: true },
  contactWebsite: { type: String, require: true },
});

const VenueListingModel = mongoose.model('VenueListing', VenueListingSchema);

module.exports = VenueListingModel;