import './index.css'

const Header = () => (
  <div className="mainContainer">
    <h1 className="name">Gupta Projects</h1>
    <h1>HTML Projects</h1>
    <h1>ReactJS Projects</h1>
    <ul>
      <li className="listContainer">
        <img
          className="listlogo"
          src="https://assets.ccbp.in/frontend/content/react-js/simple-todos-output.gif"
          alt="ii"
        />
        <h1 className="nameProject">Delete List </h1>
        <div>
          {' '}
          <p>Live Link:</p>{' '}
          <a
            href="https://deletelistvlng.ccbp.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>https://deletelistvlng.ccbp.tech/</p>
          </a>
        </div>
      </li>
      <li className="listContainer">
        <img
          className="listlogo"
          src="https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-output.gif"
          alt="ii"
        />
        <p className="nameProject">Goggle suggestion</p>
        <a
          href="https://suggestionsvlng.ccbp.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Live Link: https://suggestionsvlng.ccbp.tech/</p>
        </a>
      </li>
    </ul>
  </div>
)

export default Header
