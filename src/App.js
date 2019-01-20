import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBCuGqbj2yxUkoNnOQBLLNGlhnz6ly3aFk",
      authDomain: "authentication-e62e0.firebaseapp.com",
      databaseURL: "https://authentication-e62e0.firebaseio.com",
      projectId: "authentication-e62e0",
      storageBucket: "authentication-e62e0.appspot.com",
      messagingSenderId: "201209241618"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ flexDirection: "row" }}>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </View>
        );
        break;
      case false:
        return <LoginForm />;
        break;
      default:
        return (
          <View style={styles.spinnerStyle}>
            <Spinner />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <View>
          <Header headerText="Authentication" />
        </View>
        <View>{this.renderContent()}</View>
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    alignSelf: "center",
    flexDirection: "column"
  },
  viewStyle: {}
};

export default App;
