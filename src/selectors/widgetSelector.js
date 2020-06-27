
const getData = (data) => {
  if(data['script test'] != null){
    return {
      labels: data['script test'].labels,
      images: data['script test'].feature_img,
      phone_number: data['script test'].phone_number
    }
  }
}

const widgetSelector = ({ widget }) => {
    return {
      data: getData(widget.data)
    }
};



export default widgetSelector;
