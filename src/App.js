import React from "react";
import Bacon from "./Bacon";
import "./App.css";
//eslint-disable-next-line
import Joke from "./Joke";
import Movies from "./movies";
import Comment from "./Comment";
import Header from "./Header";
import Footer from "./Footer";
import Board from "./Board";

function App() {
  return (
    <div className="board">
      <Header />
      <Board />
      <Footer />
    </div>
  );
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       firstname: "",
//       lastname: "",
//       description: "",
//       isfriendly: true,
//       gender: "",
//       country: "India"
//     };
//     this.handlechange = this.handlechange.bind(this);
//   }
//   handlechange(event) {
//     const { name, value, type, checked } = event.target;
//     type === "checkbox"
//       ? this.setState({ [event.target.name]: event.target.checked })
//       : this.setState({
//           [event.target.name]: event.target.value
//         });
//   }

//   handleclick(event) {
//     window.confirm("form submitted");
//   }
//   render() {
//     return (
//       <form>
//         <input
//           name="firstname"
//           type="text"
//           placeholder="First name"
//           onChange={this.handlechange}
//         />
//         <br />
//         <input
//           name="lastname"
//           type="text"
//           placeholder="Last name"
//           onChange={this.handlechange}
//         />
//         <h1>
//           <textarea
//             name="description"
//             type="text"
//             onChange={this.handlechange}
//           />
//           {this.state.firstname} {this.state.lastname}
//         </h1>
//         <p> {this.state.description}</p>
//         <label>
//           <input
//             type="checkbox"
//             checked={this.state.isfriendly}
//             name="isfriendly"
//             onChange={this.handlechange}
//           />
//           isfriendly?
//         </label>
//         <p>{this.state.isfriendly} </p>
//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="male"
//             checked={this.state.gender === "male"}
//             onChange={this.handlechange}
//           />
//           Male
//         </label>{" "}
//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="female"
//             onChange={this.handlechange}
//             checked={this.state.gender === "female"}
//           />
//           Female
//         </label>
//         <br />
//         you are a {this.state.gender}
//         <br />
//         <select
//           name="country"
//           onChange={this.handlechange}
//           value={this.state.country}
//         >
//           <option value="India"> India</option>
//           <option value="Australia">Australia</option>
//           <option value="India">India</option>
//           <option value="Australia">Australia</option>
//         </select>
//         <br />
//         <p>your country is "{this.state.country}"</p>
//         <button onClick={this.handleclick}>Submit</button>
//       </form>
//     );
//   }
// }

export default App;
