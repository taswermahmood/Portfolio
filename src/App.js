import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title :'Taswer Mahmood',
      headerLinks:[
        {title:'Home',path:'/'},
        {title:'Experience',path:'/experience'},
        {title:'Projects',path:'/projects'},
        {title:'Contact',path:'/contact'}
      ],
      home:{
        title: 'Welcome!',
        subTitle: 'Hi, My Name is Taswer Mahmood.',
        text: 'I am a senior at New Jersey Institute of Technology majoring in Information Technology with a specialization on Web Application Development. I am also a Business Minor. I am open to any organization that would allow me to develop my web and software development skills as well as my management skills.'
      },
      experience:{
        title: 'Experience',
      },
      projects:{
        title: 'Projects',
      },
      contact:{
        subTitle: 'Contact Me.',
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Taswer Mahmood</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/experience">Experience</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/experience" render={() => <ExperiencePage title={this.state.experience.subtitle} />} />
          <Route path="/projects" render={() => <ProjectsPage title={this.state.projects.subtitle} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;