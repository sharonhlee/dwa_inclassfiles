var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var URLSlugs=require('mongoose-url-slugs');

var petSchema = new Schema({
    name: {type: String, required: true},
    animal: String,
    breed: String,
    tags: [String],
    price: Number,
    dateCreated: {type: Date, default: Date.now},
    imageFilename: String,
    //comments:[{name:String, content:String}]
    //comments:[Schema.Types.ObjectId] //schema to plug into another schema
});



petSchema.plugin(URLSlugs('name', {field: 'slug'}));

var Pet = mongoose.model('Pet', petSchema);

// when we require this file, we get Pet model
module.exports = Pet;