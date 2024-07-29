import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center">
        <h1 className="display-4">Welcome to CS5610 Web Development</h1>
        <h1 className="display-4">Bienvenue dans le Développement Web CS5610</h1>
        <p className="display-4">Bienvenido al Desarrollo Web CS5610</p>
        <p className="lead"><strong>Name:</strong> Yixiang Zhou/Raul</p>
        <p><strong>Section:</strong> CS5610 Summer II</p>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h2 className="text-primary">Labs</h2>
          <ul className="list-group">
            <li className="list-group-item"><Link to="/Labs/Lab1">Lab 1</Link></li>
            <li className="list-group-item"><Link to="/Labs/Lab2">Lab 2</Link></li>
            <li className="list-group-item"><Link to="/Labs/Lab3">Lab 3</Link></li>
            <li className="list-group-item"><Link to="/Labs/Lab4">Lab 4</Link></li>
          </ul>
        </div>

        <div className="col-md-6">
          <h2 className="text-primary">Kanbas</h2>
          <ul className="list-group">
            <li className="list-group-item"><Link to="/Kanbas">Kanbas</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-primary">Links to code repositories</h2>
        <p><a href="https://github.com/Raulitoflying/kanbas-react-web-app/tree/a1/" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Github Repository</a></p>
      </div>
    </div>
  );
}

export default LandingPage;
