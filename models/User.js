const mongoose = require('mongoose');

const { Schema } = mongoose;

// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  created_at: {
    type: Date,
    default: Date.now,
  },
  first_name: {
    type: String,
    trim: true,
    required: 'Enter your first name',
  },
  last_name: {
    type: String,
    trim: true,
    required: 'Enter your last name',
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
    unique: true,
    required: 'Enter your email',
  },
  password: {
    type: String,
    trim: true,
    required: 'Enter your password',
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
  modified_by: {
    type: String,
  },
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Golfclub',
    },
  ],
});

// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

// Before a User is created, we will automatically hash their password
UserSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(
    this.password,
    bcrypt.genSaltSync(10),
    null,
  );
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
