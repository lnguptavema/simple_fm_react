import './index.css'

const Header = () => (
  <div className="mainContainer">
    <h1 className="name">Gupta Radios</h1>

    <div className="divContainer">
      <a
        href="https://onlineradiofm.in/andhra-pradesh/vijayawada/fm-rainbow"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="img"
          src="https://onlineradiofm.in/assets/image/radio/180/fmrainvijayawada1.jpg"
        />
        <p>102.2 Rainbow</p>
      </a>
      <a
        href="https://onlineradiofm.in/andhra-pradesh/vijayawada/red"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="  https://onlineradiofm.in/assets/image/radio/180/red-fm15.webp" />

        <p> 93.5 Redfm</p>
      </a>{' '}
      <a
        href="https://www.radioindia.in/kushi-fm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://static.mytuner.mobi/media/tvos_radios/485/kushi-fm.da9042f7.png" />
        <p>Kushi FM</p>
      </a>{' '}
      <a
        href="https://onlineradiofm.in/andhra-pradesh/vijayawada/vividh-bharati"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://onlineradiofm.in/assets/image/radio/180/vbstelugu.jpg" />
        <p>Vivid Bharathi FM</p>
      </a>
      <a
        href="https://onlineradiofm.in/andhra-pradesh/vijayawada/mirchi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://onlineradiofm.in/assets/image/radio/180/radio-mirchi.webp" />
        <p>98.3 Mirchi</p>
      </a>
    </div>
    <h1>HTML Projects</h1>
    <h1>ReactJS Projects</h1>
  </div>
)

export default Header
