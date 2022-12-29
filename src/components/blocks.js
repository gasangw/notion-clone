import React from 'react';
import { Badge } from 'react-bootstrap';
import { RxText } from 'react-icons/rx';
import './block.css';

const Blocks = () => (
  <div className="card-container">
    <div className="card-details">
      <p className="h4">Add blocks</p>
      <small className="text-muted mt-0">Keep typing to filter, or escape to exit</small>
      <p>
        Filtering keyword
        <Badge bg="primary">1</Badge>
      </p>
    </div>
    <div className="eachOption text--selected">
      <dl className="row">
        <dt className="col-sm-2 fs-1 text-muted"><RxText /></dt>
        <dd className="col-sm-9 mt-3">
          <p className="title m-0 p-0 fw-bold">Heading 1</p>
          <p className="text-muted mt-0 fs-10">Shortcut: type # + space </p>
        </dd>
      </dl>
    </div>
    <div className="eachOption">
      <dl className="row">
        <dt className="col-sm-2 fs-1 text-muted"><RxText /></dt>
        <dd className="col-sm-9 mt-3">
          <p className="title m-0 p-0 fw-bold">Expandable Heading 1</p>
          <p className="text-muted mt-0 fs-10">Shortcut: type # + space </p>
        </dd>
      </dl>
    </div>
  </div>
);

export default Blocks;
