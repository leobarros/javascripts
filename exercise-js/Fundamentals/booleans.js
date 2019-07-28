let isActive = false;
console.log(`Variable Active now is: ${isActive}`);
isActive = true;
console.log(`Variable Active now is: ${isActive}`);

isActive = !!1;
console.log(`Variable Active now is: ${isActive}`);

isActive = !1;
console.log(`Variable Active now is: ${isActive}`);

console.log('\n This is true:');
console.log('!!3: ' + !!3);
console.log('!!-1: ' + !!-1);
console.log("!!' ': " + !!' ');
console.log('!![]: ' + !![]);
console.log('!!{}: ' + !!{});
console.log('!!Infinity: ' + !!Infinity);
console.log('!!(isActive = true): ' + !!(isActive = true));
console.log("!!'text': " + !!'text');

console.log('\nThis is false:');
console.log('!!0: ' + !!0);
console.log("!!'': " + !!'');
console.log('!!null: ' + !!null);
console.log('!!NaN: ' + !!NaN);
console.log('!!undefined: ' + !!undefined);
console.log("!!(Active = false): "  + !!(Active = false));
