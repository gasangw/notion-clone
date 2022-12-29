import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';
import { RxText } from 'react-icons/rx';
import Options from './options';
import './style.css';

const ChooseOption = () => {
  const [query, setQuery] = useState('');
  return (
    <div className="container">
      <input
        type="search"
        className="input--section"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type / for blocks, @ to link docs or people"
      />
      <div className="option-card">
        <div className="card-container">
          <div className="card-details">
            <p className="h4">Add blocks</p>
            <small className="text-muted mt-0">
              Keep typing to filter, or escape to exit
            </small>
            <p>
              Filtering keyword
              <Badge bg="primary">{query}</Badge>
            </p>
          </div>
          <div className="eachOption">
            {Options.filter((p) => p.title.toLowerCase().includes(query)).map((p) => (
              <dl className="row" key={p.id}>
                <dt className="col-sm-2 fs-1 text-muted">
                  <RxText />
                </dt>
                <dd className="col-sm-9 mt-2">
                  <p className="title m-0 p-0 fw-bold">{p.title}</p>
                  <p className="text-muted mt-0 fs-10">{p.Shortcut}</p>
                </dd>
              </dl>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChooseOption;
