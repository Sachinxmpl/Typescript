const myMap = new Map<string , number>()
myMap.set("banana" , 1233)

// console.log(myMap)
// console.log(myMap.has("grape"))
// console.log(myMap.size)


const myMap2 = new Map <string , Map<string , number>>()


myMap2.set("apple", new Map<string, number>());

myMap2.get("apple")?.set("red delicious", 5);
myMap2.get("apple")?.set("granny smith", 3);


console.log(myMap2.get("apple")?.get("red delicious"));