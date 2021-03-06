// MongoDB database
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Schema
const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  fbAuth: Boolean,
  firstName: String,
  bio: String,
  photo: String,
  hometown: String,
  interests: String
}, {collection: 'userSchema'})
const favoriteSchema = new Schema({
  userId: String,
  yelpId: String,
  name: String,
  categories: [String],
  address: [String],
  phone: String,
  rating: Number,
  image_url: String,
  businessUrl: String,
  lat: Number,
  long: Number
}, {collection: 'favoriteSchema'})
const commentSchema = new Schema({
  userId: String,
  message: String,
  date: Date,
  yelpId: String
}, {collection: 'commentSchema'})
const hotspotSchema = new Schema({
  name: String,
  address: String,
  lat: Number,
  long: Number,
  description: String,
  rating: Number,
  image: String,
  user: String
}, {collection: 'hotspotSchema'})
const contactSchema = new Schema({
  phone: String,
  name: String,
  firstLocation: String,
  secondLocation: String,
  date: {type: Date, default: Date.now}
})


// Models
let User = mongoose.model('User', userSchema)
let Hotspot = mongoose.model('Hotspot', hotspotSchema)
let Comment = mongoose.model('Review', commentSchema)
let Favorites = mongoose.model('Favorites', favoriteSchema)
let Contact = mongoose.model('Contact', contactSchema)
// Exports here
module.exports = {
  User: User,
  Hotspot: Hotspot,
  Comment: Comment,
  Favorites: Favorites,
  Contact: Contact
}
