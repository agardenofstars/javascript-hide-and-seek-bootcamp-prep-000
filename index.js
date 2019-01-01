function getFirstSelector(selector) {
  
  return document.querySelectorAll(':first-child');
  
}

function nestedTarget() {
  
  return document.getElementById('nested').querySelector('.target');
  
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