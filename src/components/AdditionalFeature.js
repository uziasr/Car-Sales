import React from 'react';
import {connect} from 'react-redux'
import{addFeatures} from '../actions'



const AdditionalFeature = props => {
  console.log('look at this!!',props.addFeatures)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={props.addFeatures} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature
// export default connect(()=>{},{addFeatures})(AdditionalFeature);
