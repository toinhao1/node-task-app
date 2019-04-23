const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.1:27017/task-app-api', {
  useNewUrlParser: true,
  useCreateIndex: true
});

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Invalid password!');
      }
    }
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invlaid!');
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number');
      }
    }
  }
});

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const task = new Task({
  description: 'Bake cakes'
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch(err => {
    console.log('Error!', err);
  });

// const me = new User({
//   name: '   Frank Papss  ',
//   email: 'MIke@JDJjd.com',
//   password: '    21   '
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch(err => {
//     console.log('Error!', err);
//   });
