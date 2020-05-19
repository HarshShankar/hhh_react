import React from "react";
import axios from "axios";
const { Provider, Consumer } = React.createContext();
class ContextProvider extends React.Component {
  state = {
    signed_in: false,
    cart: [],
    tourPassToBuy: "",
  };

  // ! As cookies are implemented, the user won't need to log in again if he opens a new tab

  // initialCheck = () => {
  //   // console.log("signed_in", localStorage.getItem("signed_in"));
  //   if (localStorage.getItem("signed_in")) {
  //     this.setState({
  //       user: localStorage.getItem("user"),
  //       signed_in: localStorage.getItem("signed_in"),
  //     });
  //   }
  // };
  // componentDidMount() {
  //   this.initialCheck();
  // }

  SignIn = (email) => {
    console.log("called sign in");
    if (!this.state.signed_in) {
      // localStorage.setItem("signed_in", true);
      // localStorage.setItem("user", email);
      this.setState(() => {
        console.log("called toggle sign in");
        return {
          signed_in: true,
          user: email,
        };
      });
    }
  };
  SignOut = () => {
    console.log("called sign out");
    if (this.state.signed_in) {
      this.setState(() => {
        // localStorage.removeItem("signed_in");
        // localStorage.removeItem("user");
        console.log("called toggle sign out");
        return {
          signed_in: false,
        };
      });
    }
  };
  addToCart = (item) => {
    axios
      .post("http://localhost:5000/cart", {
        message: "insert",
        details: {
          user_id: this.state.user,
          merch_id: item.merch_id,
          quantity: item.quantity,
          merch_limit: item.merch_limit,
        },
      })
      .then((res) => {
        // console.log(res);
        console.log(res.data);
      });
  };
  choseTicketToBuy = (tour_id) => {
    if (this.state.signed_in) {
      this.setState({ tourPassToBuy: tour_id });
      console.log("added tour_id to context state");
    }
  };
  render() {
    return (
      <Provider
        value={{
          state: this.state,
          user: this.state.user,
          signed_in: this.state.signed_in,
          addToCart: this.addToCart,
          SignIn: this.SignIn,
          SignOut: this.SignOut,
          choseTicketToBuy: this.choseTicketToBuy,
          ticket_id: this.state.tourPassToBuy,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer as ContextConsumer, ContextProvider };
