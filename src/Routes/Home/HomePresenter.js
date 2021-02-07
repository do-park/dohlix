import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Section from 'Components/Section'
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
  padding: 20px;

`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
      <Container >
        <Helmet>
          <title>Movies | Dohlix</title>
        </Helmet>
        {nowPlaying && nowPlaying.length > 0 &&
          <Section title="Now Playing">
            {nowPlaying.map(movie => (
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
        }
        {upcoming && upcoming.length > 0 &&
          <Section title="Upcoming Movie">
            {upcoming.map(movie => (
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
        }
        {popular && popular.length > 0 &&
          <Section title="Popular Movie">
            {popular.map(movie => (
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
        }
        {error && <Message color='#ff4d4d' text={error} />}
      </Container >
    )

HomePresenter.propTypes = {
  nowPlaying: propTypes.array,
  popular: propTypes.array,
  upcoming: propTypes.array,
  loading: propTypes.bool.isRequired,
  error: propTypes.string
};

export default HomePresenter;