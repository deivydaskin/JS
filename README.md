# JS
Javascript exercises


Simple exercises:

1. 
    function reverseString(str) {
    var Array = str.split("");
    Array.reverse();
    return Array.join("");
    }
    reverseString("exercise");

2.
    function String(str){
    var buff = [];
    var res = [];
    for (i = 0; i < str.length; i++){
        buff = [str[i]];
        var index = 0;
        while(res[index]){
            buff.push('' + res[index] + str[i]);
            index++;
        }
        res = res.concat(buff);
    }
    return res;
    }
    String('cat');

3.
    function UniqueChar(str) {
    for (var i = 0; i < str.length; i++) {
    var c = str.charAt(i);
    if (str.indexOf(c) == i && str.indexOf(c, i + 1) == -1) {
      return c;
    }
    }
    return null;
    }
    UniqueChar("asdasfafghj");

4.
        function timeDisplay() {
    var date = new Date();
    console.log(date.toLocaleTimeString());
}
  
setInterval(timeDisplay, 1000);

5.

    function intSum(total, int){
     return total + int;
    }
    var numbers = [1,2,3,4,5,6,7];
    numbers.reduce(intSum);



Advanced exercises:

1.

    var name = function(name){

  var self = {};
  self.res = '';
  self.res += name + ' goes'; 

  function go(go) {
      self.res += ' to ' + go;
      return self.res;
  }

  function buy(buy) {
      self.res += ' to buy ' + buy;
      return self.res;
  }

  self.go = go;
  self.buy = buy;
  
  return self;
}

var test =  name("John").go('Shop'); //Neveikia su buy.

console.log(test);


2.

    var arr = [
    {id: 1, name: "dog", parentId: null},
    {id: 2, name: "Buddy", parentId: 1},
    {id: 3, name: "Daisy", parentId: 1},
    {id: 4, name: "cat", parentId: null},
    {id: 5, name: "Smokey", parentId: 4},
    {id: 6, name: "Oscar", parentId: 4}
]

var Obj = {};

for (var i = 0; i < arr.length; i++) {
    if (arr[i].parentId === null) {
        Obj[arr[i].name] = [];
    }
    for (var j = 0; j < arr.length; j++){
    if (arr[i].parentId === arr[j].id){
      Obj[arr[j].name].push({name: arr[i].name});
    }
  }
}

console.log(Obj);