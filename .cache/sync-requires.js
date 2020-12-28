const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-jsx": hot(preferDefault(require("/home/bhavya/Documents/Projects/Modern Godaam/frontend/src/pages/index.jsx")))
}

