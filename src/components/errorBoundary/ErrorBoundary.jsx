import React, { Component } from "react";
import Layout from "../../Layout/Layout";

export class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return (
        <Layout>
          <h1>Что то пошло не так, пожалуйсто попробуйте снова </h1>
        </Layout>
      );
    }

    return this.props.children;
  }
}
