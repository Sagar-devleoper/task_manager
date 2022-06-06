const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String,
  },
  salary: {
    type: Number,
  },
  //chnage according to cludniary
  designation: {
    public_id: {
      type: String
    },
    url: {
      type: String
    }
  },
  //
  joiningDate: {
    type: Date,
    default: new Date(),
  },
  lastDate: {
    type: Date,
  },
  documents: {
    type: String,
  },
  //lisit of holidays
<<<<<<< HEAD
  // hoildays: {
  //   paidLeaves: {
  //     type: Number,
      
  //   },
  //   unPaidLeaves: {
  //     type: Number,
      
  //   },
  //   sickleave: {
  //     type : Number
  //   },
  // },
  ClientLocation : {
    type : String
=======
  hoildays: {
    paidLeaves: {
      type: Number,

    },
    unPaidLeaves: {
      type: Number,

    },
    sickleave: {
      type: Number
    },
  },
  ClientLocation: {
    type: String
>>>>>>> c086d04e6e83246c6404bbf04ca32064f114f56b
  },
  role: {
    type: String,
    default: 'Employee'
  },
  Permissions: {
    type: String,
    default: 'read'
  }
  // token: { type: String },
});

module.exports = mongoose.model("User", userSchema)