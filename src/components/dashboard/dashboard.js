import React from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';

// For today, this will just be a simple component that we will use to determine that we got past authentication/authorization

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <h1>Hello from Dashboard</h1>
      </div>
    );
  }
}