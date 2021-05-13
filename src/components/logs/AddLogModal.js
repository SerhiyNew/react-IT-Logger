import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logAction';

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter all fields' });
    } else {
      // create new log obj

      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };

      // call redux function, what we getting becouse of props
      addLog(newLog);

      // some Message
      M.toast({ html: `New Log is added to the list by ${tech}` });

      // clear Fields
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };

  //  id of returned div MUST be equal to href of clicked btn !!!
  return (
    <div className='modal' id='add-log-modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter system Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={e => setTech(e.target.value)}
            >
              <option value='' disabled>
                {' '}
                Select Tech{' '}
              </option>
              <option value='John Doe'>John Doe</option>
              <option value='Sam Smith'>Sam Smith</option>
              <option value='Sara'>Sara</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='waves-effect waves-green btn blue'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

//
// null - becouse we no need to take some thing from state,
// but we need to use some function from state (addLog), thats why we take it by second parametr
export default connect(null, { addLog })(AddLogModal);
