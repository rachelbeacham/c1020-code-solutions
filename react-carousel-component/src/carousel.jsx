import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 1
    };
    this.handleIndicatorClick = this.handleIndicatorClick.bind(this);
    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.rotate = this.rotate.bind(this);
    this.interval = setInterval(this.rotate, 3000);
  }

  handleIndicatorClick(e) {
    let id = e.target.getAttribute('id');
    id = parseInt(id, 10);
    this.setState({
      image: id
    });
  }

  handleArrowClick(e) {
    const id = e.target.getAttribute('id');
    let position = this.state.image;
    if (id === 'right') {
      this.rotate();
    } else if (id === 'left') {
      if (position === 1) {
        position = 5;
      } else {
        position--;
      }
      this.setState({
        image: position
      });
    }
  }

  rotate() {
    let position = this.state.image;
    if (position === this.props.images.length) {
      position = 1;
    } else {
      position++;
    }
    this.setState({
      image: position
    });
  }

  render() {
    const images = this.props.images;
    let currentPhoto;
    const photos = images.map(image => {
      if (this.state.image === image.id) {
        currentPhoto = image.url;
      }
      return currentPhoto;
    });
    return (
      <div className="row">
        <i className="fas fa-chevron-left arrow" id='left' onClick={this.handleArrowClick}></i>
        <div className="column">
          <div className="image">
            <img src={currentPhoto} alt="picure of a dog" />
          </div>
          <div className="row">
            <i className="far fa-circle circle selected" id='1' onClick={this.handleIndicatorClick}></i>
            <i className="far fa-circle circle" id='2' onClick={this.handleIndicatorClick}></i>
            <i className="far fa-circle circle" id='3' onClick={this.handleIndicatorClick}></i>
            <i className="far fa-circle circle" id='4' onClick={this.handleIndicatorClick}></i>
            <i className="far fa-circle circle" id='5' onClick={this.handleIndicatorClick}></i>
          </div>
        </div>
        <i className="fas fa-chevron-right arrow" id='right' onClick={this.handleArrowClick}></i>
      </div>
    );
  }

}

export default Carousel;
