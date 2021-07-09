export const GlobalStyles = () => (<style jsx global>{`
html,
body {
  background-color: #f4f4f4;
  padding: 0;
  margin: 0;
  font-family: 'Roboto Mono', monospace;
  font-weight: 300;
  width: 100%;
  height: 100%;
}
#__next {
  width: 100%;
  height: 100%;
}

* {
  box-sizing: border-box;
  letterSpacing: -0.1px;
}
a {
  color: #111 !important;
  text-decoration: underline;
}

nav a {
  color: #cdcdcd !important;
  text-decoration: underline;
}

nav.down a {
  color: #111 !important;
}
p {
  font-family: 'Roboto Mono', monospace;
  font-style: italic;
  letter-spacing: 0.25px;
  font-size: 16px;
  line-height: 24px;
}

`}</style>)