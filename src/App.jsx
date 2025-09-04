import React from 'react';
import Header from './components/header';  // Make sure this path is correct!

function App() {
  return (
    <div>
      <Header />   {/* This renders your header */}
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to My Creative Site</h1>
        <p>This is your main content area.</p>
      </main>
    </div>
  );
}

export default App;
