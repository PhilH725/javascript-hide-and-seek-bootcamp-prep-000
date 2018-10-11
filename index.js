
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
    var temp = parseInt(allNum[i].innerHTML)
    temp += n
    allNum[i] = temp.toString()
  }
}