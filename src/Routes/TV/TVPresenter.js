import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from 'Components/Message';

const Container = styled.div`
  padding: 0px 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
      <Container>
        {topRated && topRated.length > 0 &&
          (<Section title='Top Rated Shows'>
            {topRated.map(show => show.name)}
          </Section>
          )}
        {popular && popular.length > 0 &&
          (<Section title='Popular Shows'>
            {popular.map(show => show.name)}
          </Section>
          )}
        {airingToday && airingToday.length > 0 &&
          (<Section title='Airing Today'>
            {airingToday.map(show => show.name)}
          </Section>
          )}
        {error && <Message color='#ff4d4d' text={error} />}
      </Container>
    );


TVPresenter.propTypes = {
  topRated: propTypes.array,
  popular: propTypes.array,
  airingToday: propTypes.array,
  loading: propTypes.bool.isRequired,
  error: propTypes.string
};

export default TVPresenter;