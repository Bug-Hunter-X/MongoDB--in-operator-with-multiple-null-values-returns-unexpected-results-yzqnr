```javascript
// Correct usage using $eq operator to match null values
db.collection.find({ field: { $eq: null } });
```