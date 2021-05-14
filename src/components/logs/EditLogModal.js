import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
//
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateLog } from '../../actions/logAction';
//
import TechSelectOption from '../../components/techs/TechSelectOption';
//

const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = e => {
    e.preventDefault();
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter all fields' });
    } else {
      const updatedLog = {
        id: current.id,
        message,
        tech,
        attention,
        date: new Date(),
      };

      updateLog(updatedLog);

      M.toast({ html: 'Log updated by  ' + tech });

      // clear Fields
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };

  //  id of returned div MUST be equal to href of clicked btn !!!
  return (
    <div className='modal' id='edit-log-modal' style={modalStyle}>
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
              EDIT Message
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
              <TechSelectOption></TechSelectOption>
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

const modalStyle = {
  width: '75%',
  height: '75%',
};

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
