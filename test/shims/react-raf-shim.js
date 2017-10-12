
// Required because jsdom doesn't ship with requestAnimationFrame (https://github.com/facebook/jest/issues/1644)
const raf = global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0)
}

export default raf;