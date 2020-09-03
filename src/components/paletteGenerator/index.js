import React from "react";
import "./style.css";

class PaletteGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: [
        ["#222831"],
        ["#393E46"],
        ["#00ADB5"],
        ["#EEEEEE"],
        ["#E82D17"],
      ],
      showPopUp: false,
      colorPicked: "",
    };
    this.generateColor = this.generateColor.bind(this);
    this.showPopUp = this.showPopUp.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
  }

  generateColor() {
    var url = "http://colormind.io/api/";
    var data = {
      model: "default",
      input: ["N", "N", "N", "N", "N"],
    };

    var http = new XMLHttpRequest();

    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        let paletteRGB = JSON.parse(http.responseText).result;
        let paletteHEX = paletteRGB.map((key) =>
          this.fullColorHex(key[0], key[1], key[2])
        );
        this.setState({ palette: paletteHEX });
      }
    };

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
  }

  rgbToHex(rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  }

  fullColorHex(r, g, b) {
    var red = this.rgbToHex(r).toUpperCase();
    var green = this.rgbToHex(g).toUpperCase();
    var blue = this.rgbToHex(b).toUpperCase();
    return "#" + red + green + blue;
  }

  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 32) {
        this.generateColor();
      } else if (e.keyCode === 67) {
        navigator.clipboard.writeText(this.state.palette);
        this.setState({ colorPicked: "palette" });
        this.setState({ showPopUp: true });
        setTimeout(() => {
          this.setState({ showPopUp: false });
        }, 1500);
      }
    });
  }

  showPopUp() {
    this.setState({ showPopUp: true });
    setTimeout(() => {
      this.setState({ showPopUp: false });
    }, 1500);
  }

  handleColor(selection) {
    this.setState({ colorPicked: selection });
  }

  handleCopy(color) {
    navigator.clipboard.writeText(color);
  }

  render() {
    return (
      <div className="col container space-evenly vh-100 b">
        {this.state.showPopUp && <PopUp colorCopied={this.state.colorPicked} />}
        <div>
          <h2 className="mt-30"> Color palette generator </h2>
        </div>
        <div className="row">
          {this.state.palette.map((key) => (
            <div
              className="card col space-between"
              id={key}
              onClick={() => {
                this.showPopUp();
                this.handleColor(`${key}`);
                this.handleCopy(`${key}`);
              }}
            >
              <div
                className="color-container"
                style={{ backgroundColor: `${key}` }}
              ></div>
              <div className="">
                <h4 className="capitalize mb-20"> {key} </h4>
              </div>
            </div>
          ))}{" "}
        </div>
        <button className="primary-button " onClick={this.generateColor}>
          <h5>Generate palette</h5>
        </button>
        <div className="">
          <h6> Or just press the “Spacebar” to generate new palettes. </h6>
        </div>
        <button className="secondary-button">
          <h6>Click to copy individual color • Press “C” to copy palette</h6>
        </button>
      </div>
    );
  }
}

export default PaletteGenerator;

class PopUp extends React.Component {
  render() {
    return (
      <button className="pop-up">
        Color {this.props.colorCopied} copied to your clipboard{" "}
      </button>
    );
  }
}
