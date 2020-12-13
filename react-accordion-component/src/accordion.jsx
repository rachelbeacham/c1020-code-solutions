import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'none'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const id = e.target.getAttribute('id');
    if (this.state.view === id) {
      this.setState({
        view: 'none'
      });
    } else {
      this.setState({
        view: id
      });
    }
  }

  showView() {
    let description;
    const topics = this.props.topics;
    const items = topics.map(topic => {
      if (this.state.view === topic.id) {
        description = 'description';
      } else {
        description = 'description hidden';
      }
      return (
        <div className="container" key={topic.id}>
          <div className="border">
            <h2 className="name" id={topic.id} onClick={this.handleClick}>{topic.name}</h2>
          </div>
          <div className="border">
            <p className={description}>{topic.description}</p>
          </div>
        </div>
      );
    });
    return items;
  }

  render() {
    return (
      this.showView()
    );
  }
}

export default Accordion;
