import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { headingFormats, initialPlaceholder } from '../static/formats';

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
    if (/^\/\+\d$/.test(value)) applyFormat(14 * parseInt(value[2], 10));
    else if (/^\/\d$/.test(value)) {
      const formats = headingFormats.filter(({ title }) => title.includes(value[1]));
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

  return (
    <div className="wrapper">
      <div>
        <input
          type="text"
          value={data}
          ref={fieldRef}
          onChange={handleChange}
          onKeyDown={(e) => handler(e)}
          className="type-field"
          placeholder={placeholder}
          style={{ fontSize: '14px' }}
        />
        <div style={{ display: headingsVisibility ? 'block' : 'none' }}>
          <ul>
            <li>
              {
                filteredFormats.map(({ title, size }) => (
                  <button type="button" key={title} onClick={() => applyHeadingFormat(title, size)}>
                    {title}
                  </button>
                ))
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

InputProcessor.propTypes = { addBlock: PropTypes.func.isRequired };

export default InputProcessor;
