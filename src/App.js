import React from 'react';
import Header from './component/header/header';
import Headline from './component/headline';


function App() {
  return (
    <div >
      <Header/>
      <section className="main">
        <Headline header="Posts" desc="first posts"/>
      </section>
    </div>
  );
}

export default App;
