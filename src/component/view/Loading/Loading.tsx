import React from 'react';
import { Box, Text } from 'ink';
import { Spinner } from '../../';

export const Loading: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <Box margin={1}>
      <Spinner />
      <Text color="yellow">Loading...</Text>
    </Box>
  );
};
