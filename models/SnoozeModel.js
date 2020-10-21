//---------------import packages-------------------------
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//--------------Define collection and schema-----------------
let snoozeEmail = new Schema({
   email: {
      type: String
   },
   time:{
      type:String
   },
   stopsnooze:{
      type:Boolean
   },
   snoozeStatus:{
       type:Boolean
   }
}, {
   collection: 'snoozeEmail'
})

//----------------export modal-------------------
module.exports = mongoose.model('snoozeEmail', snoozeEmail)