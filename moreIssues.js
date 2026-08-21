var unusedVar = 42;

function calcTotal(items) {
  let total = 0
  for (var i = 0; i < items.length; i++) {
    total += items[i].price
  }
  if (total == "0") {
    console.log("empty cart");
  }
  return total;
}

const dup = { a: 1, a: 2 };

function noReturn(x) {
  if (x) {
    return 1;
  }
}

eval("console.log('bad')");

calcTotal([{ price: 10 }]);
