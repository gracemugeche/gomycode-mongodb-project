use("contact");
// db.contactlist.insertMany([
//   {
//     Lastname: "Ben",
//     Firstname: "Moris",
//     Email: "ben@gmail.com",
//     age: 26,
//   },
//   {
//     Lastname: "Kefi",
//     Firstname: "Seif",
//     Email: "kefi@gmail.com",
//     age: 15,
//   },
//   {
//     Lastname: "Emilie",
//     Firstname: "brouge",
//     Email: "emilie.b@gmail.com",
//     age: 40,
//   },
//   {
//     Lastname: "Alex",
//     Firstname: "brown",
//     age: 4,
//   },
//   {
//     Lastname: "Denzel",
//     Firstname: "Washington",
//     age: 3,
//   },
// ]);
// db.contactlist.find({ _id: ObjectId("685a5b837c56fdc70680882f")
//  });
// db.contactlist.find({age:{$gt:18}})
// db.contactlist.find({
//   $and: [
//     { age: { $gt: 18 } },
//     { firstName: { $regex: "ah" } }
//   ]
// })
// db.contactlist.updateOne(
//     {Lastname:"Kefi" , Firstname:"Seif"},
//     {$set:{Firstname:"Anis"}}
// )

// db.contactlist.deleteMany({age:{$lt:5}})

db.contactlist.find()


