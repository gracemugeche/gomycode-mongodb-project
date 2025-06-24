# 🗂️ MongoDB CRUD Checkpoint – Contact List

## 📚 Overview

This checkpoint demonstrates the use of **MongoDB CRUD operations** by managing a simple contacts database. The task includes creating a database, inserting documents, and performing operations such as querying, updating, and deleting records.

---

## ✅ Instructions & Tasks

### 1. Create a database called `contact`
```js
use contact
````

### 2. Create a collection called `contactlist`

```js
db.createCollection("contactlist")
```

### 3. Insert the following documents into `contactlist`

```js
db.contactlist.insertMany([
  { lastName: "Ben", firstName: "Moris", email: "ben@gmail.com", age: 26 },
  { lastName: "Kefi", firstName: "Seif", email: "kefi@gmail.com", age: 15 },
  { lastName: "Emilie", firstName: "brouge", email: "emilie.b@gmail.com", age: 40 },
  { lastName: "Alex", firstName: "brown", age: 4 },
  { lastName: "Denzel", firstName: "Washington", age: 3 }
])
```

---

## 🔎 CRUD Operations Performed

### ✅ Display all of the contacts

```js
db.contactlist.find().pretty()
```

📷 *\[Insert Screenshot]*

---

### ✅ Display all the information about only one person using their ID

```js
db.contactlist.find({ _id: ObjectId("INSERT_ID_HERE") })
```

📷 *\[Insert Screenshot]*

---

### ✅ Display all the contacts with age > 18

```js
db.contactlist.find({ age: { $gt: 18 } })
```

📷 *\[Insert Screenshot]*

---

### ✅ Display all contacts with age > 18 and name containing "ah"

```js
db.contactlist.find({
  age: { $gt: 18 },
  firstName: { $regex: "ah", $options: "i" }
})
```

📷 *\[Insert Screenshot]*

---

### ✅ Change contact's first name from "Kefi Seif" to "Kefi Anis"

```js
db.contactlist.updateOne(
  { lastName: "Kefi", firstName: "Seif" },
  { $set: { firstName: "Anis" } }
)
```

📷 *\[Insert Screenshot]*

---

### ✅ Delete contacts aged under 5

```js
db.contactlist.deleteMany({ age: { $lt: 5 } })
```

📷 *\[Insert Screenshot]*

---

### ✅ Display all contacts (Final List)

```js
db.contactlist.find().pretty()
```

📷 *\[Insert Screenshot]*

---

## 📌 Notes

* All operations were performed in MongoDB Playground or Shell.
* Each step is accompanied by a screenshot showing successful execution.
* This checkpoint demonstrates mastery of basic MongoDB CRUD operations.

---

## 📝 Author

**Grace Mugeche**
MongoDB Checkpoint – GOMYCODE
June 2025

```

