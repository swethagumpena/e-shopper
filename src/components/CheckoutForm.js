// import React, { Component } from 'react';

// class CheckoutForm extends Component {
//   constructor() {
//     super();
//     this.state = {
//       userName: '', email: '', phoneNumber: 0, address: '', errorMsg: '',
//     };
//   }

//   handleChange = (event) => {
//     this.setState((prevState) => ({
//       ...prevState,
//       [event.target.name]: event.target.value,
//     }), () => {
//       console.log(this.state);
//     });
//   }

//   // handleChange = (event) => {
//   //   if (event.target.name === 'userName' && event.target.value.length < 5) {
//   //     this.setState((prevState) => ({ data: { ...prevState }, errorMsg: 'Invalid input' }));
//   //   }
//   //   this.setState((prevState) => ({ ...prevState, data: { ...prevState.data } }));
//   //   const {
//   //     userName,
//   //   } = this.state;

//   //   // if (event.target.name === 'userName' && event.target.value.length < 5) {
//   //   //   this.setState({ userName: event.target.value, errorMsg: '' });
//   //   // } else {
//   this.setState({ userName: '', errorMsg: 'Name should be atleast 5 characters long' });
//   //   // }

//   //   // this.setState({
//   //   //   [event.target.name]: event.target.value,
//   //   // });
//   // }

//   render() {
//     const {
//       userName, email, phoneNumber,
//     } = this.state;
//     return (
//       // <form onSubmit={this.handleSubmit}>
//       //   Name:
//       //   <input type="text" name="userName" onChange={this.handleChange} value={userName} />
//       //   <p>{errorMsg}</p>
//       //   Email:
//       //   <input type="email" name="email" onChange={this.handleChange} value={email} />
//       //   Phone Number:
//       //   <input type="text" name="userName" onChange={this.handleChange} value={phoneNumber} />
//       //   Address:
//       //   <input type="text" name="userName" onChange={this.handleChange} value={address} />
//       //   <input type="submit" value="Submit" onClick={() => {}} />
//       // </form>
//       <form action="">
//         <div>
//           <p>Name: </p>
//           <input type="text" value={userName} name="name"
// onChange={this.handleChange} required />
//           <p>Phone Number:</p>
//           <input type="text" value={phoneNumber} maxLength={10} name="phone"
// onChange={this.handleChange} pattern="[0-9]{10}" required />
//           <p>E-Mail:</p>
//           <input type="email" value={email} name="email" onChange={this.handleChange} required />
//           <br />
//           <input onClick={this.handleSubmit} type="button" value="CONFIRM DETAILS" />
//         </div>
//       </form>

//     );
//   }
// }

// export default CheckoutForm;

import React, { Component } from 'react';
import './CheckoutForm.css';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', phone: '', email: '', data: '',
    };
  }

  handleChange = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }), () => {
    });

    const { name, phone } = this.state;
    console.log(name, phone);
  }
  // setState has 2 callbacks
  // first callback returns newstate
  // second callback called after setstate - no args

  handleSubmit = () => {
    const { phone, name, email } = this.state;
    let information = '';
    information += `Phone: ${phone}\nName: ${name} \nEmail: ${email}`;
    this.setState({ data: information });
  }

  render() {
    const {
      name, phone, email, data,
    } = this.state;
    return (
      <div>
        <div className="formColumn">
          <form action="">
            <div className="formelement">
              {/* <p>Name: </p> */}
              <input type="text" placeholder="Name" value={name} name="name" onChange={this.handleChange} required />
              {/* <p>Phone Number:</p> */}
              <input type="text" placeholder="Phone Number" value={phone} maxLength={10} name="phone" onChange={this.handleChange} pattern="[0-9]{10}" required />
              {/* <p>E-Mail:</p> */}
              <input type="email" placeholder="e-mail" value={email} name="email" onChange={this.handleChange} required />
              <br />
              <input className="button" onClick={this.handleSubmit} type="button" value="CONFIRM DETAILS" />
            </div>
          </form>
          <pre>{data}</pre>
        </div>
        <h1>Thank you for shopping with us</h1>
      </div>
    );
  }
}
export default Checkout;
