import actionTypes from '../consts/actionTypes';
import urls from '../consts/urls';

const widgetActions = dispatch => ({
  get: () => {
    let url = urls.get_data;
    // This is the API from where we are are going to fetch data.
    console.log(url);

    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data) // Prints result from `response.json()` in getRequest
      dispatch({
        type: actionTypes.data.GET_DATA,
        payload: { data },
      });
    })
    .catch(error => console.error(error))
    // Handle request errors
  }
});

export default widgetActions;
 