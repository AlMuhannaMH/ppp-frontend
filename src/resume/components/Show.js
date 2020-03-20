import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resume: {}
    };
  }

  componentDidMount() {
    axios.get('/api/resume/' + this.props.match.params.id)
      .then(res => {
        this.setState({ resume: res.data });
        console.log(this.state.resume);
      });
  }

  delete(id) {
    console.log(id);
    axios.delete('/api/resume/' + id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.state.resume.title}
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>Book List</Link></h4>
            <dl>
              <dt>ISBN:</dt>
              <dd>{this.state.resume.isbn}</dd>
              <dt>Author:</dt>
              <dd>{this.state.resume.author}</dd>
              <dt>Description:</dt>
              <dd>{this.state.resume.description}</dd>
              <dt>Publish Date:</dt>
              <dd>{this.state.resume.published_year}</dd>
              <dt>Publisher:</dt>
              <dd>{this.state.resume.publisher}</dd>
            </dl>
            <Link to={`/edit/${this.state.resume._id}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.resume._id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
