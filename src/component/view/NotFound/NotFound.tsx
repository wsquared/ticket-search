import React from 'react';
import { Box, Text } from 'ink';

export const NotFound: React.FC<{ item?: string }> = ({ item = 'item' }) => {
  return (
    <Box margin={2}>
      <Text color="yellowBright">No {item} found.</Text>
    </Box>
  );
};
