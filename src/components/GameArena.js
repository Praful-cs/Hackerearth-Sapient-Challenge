import React from 'react';
import axios from 'axios';
import { MDBDataTable, MDBContainer } from 'mdbreact';

const currentData = {
  columns: [
    {
      label: 'Title',
      field: 'title',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Platform',
      field: 'platform',
      sort: 'asc',
      width: 270
    },
    {
      label: 'Score',
      field: 'score',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Genre',
      field: 'genre',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Editors Choice',
      field: 'editors_choice',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Release Year',
      field: 'release_year',
      sort: 'asc',
      width: 100
    },
  ],
  rows: [],
};

const Spinner = () => {
  return (
    <>
      <div style={{
        marginTop: '30%',
        marginLeft: '50%',
      }} className="spinner-border dark" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
}

class GameArena extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      data: {
        columns: [],
        rows: []
      },
    }
  }

  componentDidMount() {
    axios.get('http://starlord.hackerearth.com/gamesext')
    .then(res => {
      currentData.rows = res.data;
      console.log(res.data);
      this.setState({ data: currentData, loading: false });
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">Sapient Games Arena</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" rel="noopener noreferrer" href="https://prafulnikam.herokuapp.com" target='_blank'>Portfolio</a>
              </li>
            </ul>
          </div>
        </nav>
        <MDBContainer style={{
          marginTop: '3%',
          marginBottom: '5%',
        }}>
          { 
            this.state.loading ?
              <Spinner/>
            :
            <MDBDataTable
              striped
              bordered
              small
              data={this.state.data}
            />
          }
          
        </MDBContainer>
        <footer className="page-footer bottom font-small bg-dark fixed-bottom">
          <div className="footer-copyright text-center py-3">© 2020 Copyright : 
            <a rel="noopener noreferrer" href="https://prafulnikam.herokuapp.com" target='_blank'> Praful Nikam</a>
          </div>
        </footer>
      </div>
    )
  }
}

export default GameArena;