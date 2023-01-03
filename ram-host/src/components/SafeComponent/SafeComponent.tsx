import React from "react";

type State = {
  hasError: boolean; // like this
};

export default class SafeComponent extends React.Component<{}, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(e: Error) {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <h1>Sommething went wrong</h1>;
    }

    return this.props.children;
  }
}
