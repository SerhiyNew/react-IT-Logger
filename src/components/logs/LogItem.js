import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize.min.js';
//
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../actions/logAction';

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);

    //
    M.toast({ html: 'Log was deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          className={`modal-trigger ${log.attention ? 'red' : 'blue'}-text`}
          href='#edit-log-modal'
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last edited by
          <span className='black-text'> {log.tech}</span> on{' '}
          <Moment format='MMMM Do YYYY h:mm:ss a'>{log.date}</Moment>
        </span>
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.prototype = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

//
// null - becouse we no need to take some thing from state,
// but we need to use some function from state (deleteLog), thats why we take it by second parametr
export default connect(null, { deleteLog, setCurrent })(LogItem);
