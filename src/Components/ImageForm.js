import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import CardActionArea from "@material-ui/core/CardActionArea";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Typography } from "@material-ui/core";

const mobilenet = require("@tensorflow-models/mobilenet");
require("@tensorflow/tfjs-backend-webgl");
require("@tensorflow/tfjs-backend-cpu");

var model = null;

class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: false, ready: false, breed: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  async getModel() {
    model = await mobilenet.load();
    this.setState({ ready: true });
  }

  handleChange(e) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(e.target.files[0]);
    this.setState({file: true})
  }

  async handleSubmit(e) {
    const img = document.getElementById("output");
    const predictions = await model.classify(img);
    console.log(predictions[0].className)
    this.setState({breed: predictions[0].className})
  }

  async componentDidMount() {
    this.getModel();
    console.log("Ready");
  }

  render() {
    return (
      <div>
        {this.state.ready ? (
          <Card className="Card">
            <CardActionArea>
              <div className="output">
                <img
                  id="output"
                  alt=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbYNS2djNPIlH5ASkEdBRqOMSw0xOHqluFXQ&usqp=CAU"
                />
              </div>
              <CardContent>
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload Picture
                  <input type="file" hidden onChange={this.handleChange} />
                </Button>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <div className="SubmitButton">
                <Button variant="outlined" onClick={this.handleSubmit} disabled={!this.state.file}>
                  Go!
                </Button>
              </div>
            </CardActions>
            <div class ="Result"><Typography variant="h5">{this.state.breed}</Typography></div>
          </Card>
        ) : (
          <div className="Loading">
          <CircularProgress />
          </div>
        )}
      </div>
    );
  }
}

export default ImageForm;
