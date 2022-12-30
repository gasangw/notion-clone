import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';
import { RxText } from 'react-icons/rx';
import { headingFormats, initialPlaceholder } from '../static/formats';
import './style.css';

const InputProcessor = ({ addBlock }) => {
  const fieldRef = useRef();
  const [data, setData] = useState('');
  const [placeholder, setPlaceholder] = useState(initialPlaceholder);
  const [headingsVisibility, setHeadingsVisibility] = useState(null);
  const [filteredFormats, setFormats] = useState([]);

  const applyFormat = (size, placeholder = initialPlaceholder) => {
    fieldRef.current.style.fontSize = `${size}px`;
    setPlaceholder(placeholder);
    setData('');
  };

  const propertyProcessing = (value) => {
    setHeadingsVisibility(false);

    if (!value.startsWith('/')) return;
    if (/^\/\+\d$/.test(value)) {
      applyFormat(14 * parseInt(value[2], 10));
    } else if (/^\/\d$/.test(value)) {
      const formats = headingFormats.filter((e) => e.title.includes(value[1]));
      setFormats(formats);
      setHeadingsVisibility(true);
    }
  };

  const applyHeadingFormat = (title, size) => {
    setHeadingsVisibility(false);
    setFormats([]);
    applyFormat(size, title);
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setData(value);
    propertyProcessing(value);
  };

  const handler = (e) => {
    if (e.key === 'Enter' && data) {
      addBlock(data);
    }
  };

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      applyHeadingFormat();
    }
  }

  const changeBackground = (e) => {
    e.target.style.background = '#eee';
  };

  const handleUsernameFocus = (e) => {
    e.target.style.background = '#eee';
  };

  return (
    <div className="container">
      <input
        type="text"
        value={data}
        ref={fieldRef}
        onChange={handleChange}
        onKeyDown={(e) => handler(e)}
        className="input--section"
        placeholder={placeholder}
        style={{ fontSize: '14px' }}
      />
      <div style={{ display: headingsVisibility ? 'block' : 'none' }}>
        <div className="card-container">
          <div className="card-details">
            <p className="h4">Add blocks</p>
            <small className="text-muted mt-0">
              Keep typing to filter, or escape to exit
            </small>
            <p>
              Filtering keyword
              <Badge bg="primary">{data}</Badge>
            </p>
          </div>
          <div className="eachOption">
            {
                filteredFormats.map(({ title, Shortcut, size }) => (
                  <span className="row mt-1" onMouseOver={changeBackground} onFocus={handleUsernameFocus} role="button" key={title} onKeyDown={handleKeyDown} onClick={() => applyHeadingFormat(title, size)} tabIndex="0">
                    <dt className="col-sm-2 fs-1 text-muted">
                      <RxText />
                    </dt>
                    <dd className="col-sm-9 mt-2">
                      <p className="title m-0 p-0 fw-bold">{title}</p>
                      <p className="text-muted mt-0 fs-10">{Shortcut}</p>
                    </dd>

                  </span>
                ))
              }
          </div>
        </div>
      </div>
    </div>
  );
};

InputProcessor.propTypes = { addBlock: PropTypes.func.isRequired };

export default InputProcessor;
