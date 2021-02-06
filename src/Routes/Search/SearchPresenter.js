import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  loading,
  error,
  searchTerm,
  handleSubmit,
  updateTerm,
}) => <Container>
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Search Movie or TV Show" value={searchTerm} onChange={updateTerm} />
    </Form>
    {loading ? (
      <Loader />
    ) : (
        <>
          {movieResults && movieResults.length > 0 && (
            <Section title="Movie Results">
              {movieResults.map(movie => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date && movie.release_date.substring(0, 4)}
                  isMovie={true}
                />
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Show Results">
              {tvResults.map(show => (
                <Poster
                  key={show.id}
                  id={show.id}
                  imageUrl={show.poster_path}
                  title={show.original_name}
                  rating={show.vote_average}
                  year={show.first_air_date && show.first_air_date.substring(0, 4)}
                  isMovie={false}
                />
              ))}
            </Section>
          )}
        </>)}
    {error && <Message color='#ff4d4d' text={error} />}
    {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && <Message text='Nothing Found' color='#fffa65' />}
  </Container >;

SearchPresenter.propTypes = {
  movieResults: propTypes.array,
  tvResults: propTypes.array,
  loading: propTypes.bool.isRequired,
  error: propTypes.string,
  searchTerm: propTypes.string,
  handleSubmit: propTypes.func.isRequired,
  updateTerm: propTypes.func.isRequired,
};

export default SearchPresenter;