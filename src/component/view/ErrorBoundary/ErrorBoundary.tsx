import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Newline, Text } from 'ink';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box margin={2} flexDirection="column">
          <Box>
            <Text color="red">Something went wrong...</Text>
          </Box>
          <Newline />
          <Box>
            <Text color="yellowBright">
              {this.state.error && this.state.error.toString()}
            </Text>
          </Box>
          <Box>
            <Text color="gray">
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </Text>
          </Box>
        </Box>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary as default, ErrorBoundary };
