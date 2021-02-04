import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const SearchPresenter = ({ movieResults, tvResults, loading, error, searchTerm, handleSubmit }) => null;

SearchPresenter.propTypes = {
  movieResults: propTypes.array,
  tvResults: propTypes.array,
  loading: propTypes.bool.isRequired,
  error: propTypes.string,
  searchTerm: propTypes.string,
  handleSubmit: propTypes.func.isRequired
};

export default SearchPresenter;