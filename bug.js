```javascript
// Incorrect usage of $in operator with an array of null values
db.collection.find({ field: { $in: [ null, null, null ] } });
```