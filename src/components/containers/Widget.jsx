import React from 'react';
import {connect} from 'react-redux';

import widgetSelector from '../../selectors/widgetSelector';
import widgetActions from '../../actions/widgetActions';


class Widget extends React.Component {

  componentDidMount(){
    // Call the API while rendering the DOM.
    if(this.props.get() == null){
      this.props.get();
    }
  }

  render() {
    // Taking the data from store.
    console.log(this.props.data)
    return(
      <div>  
       { 
          this.props.data ?  
          <div className="card customizable" onClick={() => {console.log("here")}}>
            <div className="card-body">
              <h5 className="card-title">{this.props.data.labels}</h5>
              <h6 className="card-subtitle mb-2" >
                  <span className="box-green">
                    <img src="./src/assets/images/call-icon.png" className="call-image" />
                    {this.props.data.phone_number}
                  </span>
              </h6>
            </div>
          </div> : 
          <div className="d-flex justify-content-center ">
            <div className="spinner-border fast" style={{width: '3rem', height: '3rem'}} role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div> 
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => (widgetSelector(state));

const mapDispatchToProps = (dispatch) => (widgetActions(dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Widget);