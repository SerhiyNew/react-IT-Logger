import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
//
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techActions';
//
const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter all fields' });
    } else {
      //
      addTech({ firstName, lastName });

      // clear Fields
      setFirstName('');
      setLastName('');
      //
      M.toast({ html: `${firstName} ${lastName} was added as a tech` });
    }
  };

  //  id of returned div MUST be equal to href of clicked btn !!!
  return (
    <div className='modal' id='add-tech-modal'>
      <div className='modal-content'>
        <h4>New Tech</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
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

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
