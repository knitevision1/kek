/**
*
* Pasha
*
*/

import React from 'react';
import styled from 'styled-components';

import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const MessageStyles = styled.div`
  color: red;
`;

export default class Pasha extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Pasha Page</title>
          <meta name="description" content="KEK" />
        </Helmet>
        <MessageStyles>
          <FormattedMessage {...messages.header} />
        </MessageStyles>
      </div>
    );
  }
}

Pasha.propTypes = {

};
