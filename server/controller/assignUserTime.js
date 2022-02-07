// const User = require('../models/user.model');

// exports.assignUserTime = (req, res) => {
//   const id = req.params.id;
//   User.findOneAndUpdate({ id: id }, { time: new Date('2021-11-21') }).exec(
//     (error, data) => {
//       if (error) {
//         return res.status(400).json({ message: error });
//       }
//       if (data) {
//         console.log(data.time);
//         console.log(data);
//         return res.status(200).json({ message: data });
//       }
//     }
//   );
// };
