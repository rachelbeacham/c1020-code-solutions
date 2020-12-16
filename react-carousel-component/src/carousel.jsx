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
        position = this.props.images.length;
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

  getIndicators() {
    const images = this.props.images;
    const indicators = images.map(image => {
      let indicatorClass;
      if (this.state.image === image.id) {
        indicatorClass = 'far fa-circle circle selected';
      } else {
        indicatorClass = 'far fa-circle circle';
      }
      return <i key={image.id} id={image.id} className={indicatorClass} onClick={this.handleIndicatorClick}></i>;
    });
    return (
      <div className="row">{indicators}</div>
    );
  }

  componentDidMount() {
    this.interval = setInterval(this.rotate, 3000);
  }

  render() {
    const images = this.props.images;
    let currentPhoto;
    images.forEach(image => {
      if (this.state.image === image.id) {
        currentPhoto = image.url;
        return currentPhoto;
      }
    });
    return (
      <div className="row">
        <i className="fas fa-chevron-left arrow" id ='left' onClick={this.handleArrowClick}></i>
        <div className="column">
          <div className="image">
            <img src={currentPhoto} alt='picture of a dog' />
          </div>
          {this.getIndicators()};
        </div>
        <i className="fas fa-chevron-right arrow" id='right' onClick={this.handleArrowClick}></i>
      </div>
    );
  }
}
export default Carousel;
