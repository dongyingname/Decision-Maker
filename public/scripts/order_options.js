// grab all results corrrelating to current poll_id
// ex:
 // let values = [
 //    { name: "a", value: 9 },
 //    { name: "b", value: 2 },
 //    { name: "c", value: 10 }
 //  ];

// run function returnSorted(sort, values) to sort

let sort = function compare(a,b) {
  const valueA = a.value
  const valueB = b.value
  let comparison = 0;
  if (valueA < valueB) {
    comparison = 1;
  } else if (valueA > valueB) {
    comparison = -1;
  }
  return comparison;
}

function returnSorted(cb, values) {
  return values.sort(cb)
}
console.log(returnSorted(sort, values))








