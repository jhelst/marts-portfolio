export const GlobalStyles = () => (<style jsx global>{`
html,
body {
  background-color: #f4f4f4;
  padding: 0;
  margin: 0;
  font-family: 'Limelight', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
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
a, a:hover, a:active, a:visited {
  color: #111;
}
a:hover {
  text-decoration: underline;
}
`}</style>)