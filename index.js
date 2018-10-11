
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  const start = document.getElementById('nested')
  return start.getElementsByTagName('div')[3]
}

function increaseRankBy(n) {
  const allNum = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < allNum.length; i++) {
    allNum[i].innerHTML = parseInt(allNum[i].innerHTML) + n
  }
}

function deepestChild() {
  
}