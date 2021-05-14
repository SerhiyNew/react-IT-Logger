import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';

const TechSelectOption = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map(t => (
      <option value={`${t.firstName} ${t.lastName}`} key={t.id}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

TechSelectOption.propTypes = {
  getTechs: PropTypes.func.isRequired,

  tech: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  loading: state.loading,
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechSelectOption);
