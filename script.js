let y = 0
let m1 = 0
let m2 = 0
let x = 0
let b = 0
var p = -1
document.getElementById('calculate').addEventListener('click', calculation)
function calculation () {
  m1 = document.getElementById('m1in').value
  m1 = parseInt(m1)
  if (m1 === 0) {
    document.getElementById('output').innerHTML = 'please input a value greater than 0 for m1'
  } else {
    m2 = document.getElementById('m2in').value
    m2 = parseInt(m2)
    x = document.getElementById('xin').value
    x = parseInt(x)
    b = document.getElementById('bin').value
    b = parseInt(b)
    if (m1 > 0 && (m2 > 0)) {
      m1 = m1 * p
      m2 = m2 * p
      y = (m1 / m2) * x + b
      document.getElementById('output').innerHTML = 'Y = ' + y
    } else {
      y = (m1 / m2) * x + b
      document.getElementById('output').innerHTML = 'Y = ' + y
    }
  }
}
