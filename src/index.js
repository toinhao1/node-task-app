const express = require('express');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled');
//   } else {
//     next();
//   }jj
// });

// app.use((req, res, next) => {
//   if (req.method) {
//     res.status(503).send('Site under maintenance');
//   }
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

// const Task = require('./models/task');
// const User = require('./models/user');

// const main = async () => {
//   // const task = await Task.findById('5cc8078472f2370575bb2dff');
//   // await task.populate('owner').execPopulate();
//   // console.log(task.owner);
//   const user = await User.findById('5cc806d55267ee0551b58eab');
//   await user.populate('tasks').execPopulate();
//   console.log(user.tasks);
// };

// main();
