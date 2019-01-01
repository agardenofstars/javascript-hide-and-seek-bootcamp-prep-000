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
  
  for (let i = 0, l = rankedLists.length; i < l; i++) {
    
    let children = rankedLists[i].children;
    
    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  
  }
  
  for (let i = 0; i < rankedLists.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }

}


function deepestChild() {
  
  const deeplyNested = document.querySelectorAll('div#grand-node');
  
  
}