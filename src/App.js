import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { ADD_FEATURE, REMOVE_FEATURE } from "../src/actions";


const App = () => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    return {
      type:REMOVE_FEATURE,
      payload:item

  }
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    return {
      type:ADD_FEATURE,
      payload:item
  }
    
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total  />
      </div>
    </div>
  );
};

export default App;

{/* <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div> */}