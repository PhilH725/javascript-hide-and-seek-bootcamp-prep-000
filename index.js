
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  const start = document.getElementById('nested')
  start.getElementsByTagName('target')

}

