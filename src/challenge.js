const { Deque } = require ('./deque.js')

function palindromeChecker(text) {
  if (!text) return false
  const deque = new Deque()
  const upcTextWithoutSpaces = text.toUpperCase().replace(/\s/g, '').split('')

  upcTextWithoutSpaces.forEach((elem) => deque.addFront(elem))

  if (deque.size() === 1) {
    console.log(`deque.size() === 1 | text: ${upcTextWithoutSpaces[0]}`)
    return true
  }
  for (const value of upcTextWithoutSpaces) {
    if (!deque.peekFront() && !deque.peekBack()) {
      return true
    }
    if (deque.peekFront() === deque.peekBack()) {
      deque.removeFront()
      deque.removeBack()
      continue
    }
    return false
  }
}

module.exports = { palindromeChecker }