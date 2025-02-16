import { Component, ReactNode } from 'react'; 

class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h4>Something went wrong with the Notes Editor.</h4>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
