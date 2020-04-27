import React from "react";
import LoaderIcon from "react-loader-icon";
import styles from './Loader.module.css'
 
class App extends React.Component {
  render() {
    return (
      <div className={styles.Loader}>
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