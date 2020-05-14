import React from "react";
import LoaderIcon from "react-loader-icon";
 
class App extends React.Component {
  render() {
    return (
      <div>
        <LoaderIcon
            color={'#10AC84'}
            size={400}
            type={"spin"}
        />
        
      </div>
    );
  }
}
 
export default App;