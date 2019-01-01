function getFirstSelector(selector) {
  
  var firstElement = document.querySelectorAll(':first-child');
  
  return firstElement;
  
}

function nestedTarget() {
  
  var nestedElement = document.querySelectorAll('#nested .target');
  
  return nestedElement;
  
}

function increaseRankBy(n){
  
  const rankedLists = document.querySelectorAll('.ranked-list');
  
  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n;
  }

}


function deepestChild() {
  let deeplyNested = document.querySelectorAll('#grand-node div');
  return deeplyNested[deeplyNested.length - 1];
}