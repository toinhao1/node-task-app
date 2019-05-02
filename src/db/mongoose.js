const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('MongoDB Running');
  })
  .catch(err => {
    console.log(err);
  });
