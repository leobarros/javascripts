const values = [7.66, 6.44, 8.98, 9.5]
console.log('Some values in variable values. values[0] and values[3]: ' + `${values[0]}, ${values[3]}`);
console.log('This index not exist: values[4]: ' + `${values[4]}`);
console.log('Total of index array: ' + `${values.length}`);

// new values
values.push(4.5, 6.8, 10, 8.9);
console.log('New values in array: ' + `${values}`)
console.log('Total of index array: ' + `${values.length}`);

//delete values
values.pop();
console.log('Remove the last index: ' + `${values}`);
console.log('Total of index array: ' + `${values.length}`);
console.log("What's a array?: " + typeof values);
