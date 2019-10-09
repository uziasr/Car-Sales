import React from 'react';
import {connect} from 'react-redux'

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  // the keys of the returned obj will be props passed into the comp
  console.log(state)
  return(state)
};

export default connect(mapStateToProps,{})(Total);
