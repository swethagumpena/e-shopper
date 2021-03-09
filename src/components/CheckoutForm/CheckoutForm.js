import React, { Component } from 'react';
import {
  Formik, Field, Form,
} from 'formik';
import './CheckoutForm.css';

const validateName = (value) => {
  let errorMessage;
  console.log(value);
  if (!value) {
    errorMessage = 'Required';
  }
  return errorMessage;
};

const validateEmail = (value) => {
  let errorMessage;
  if (!value) {
    errorMessage = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    errorMessage = 'Invalid email address';
  }
  return errorMessage;
};

const validatePhone = (value) => {
  let errorMessage;
  if (!value) {
    errorMessage = 'Required';
  } else if (!/^[6789]\d{9}$/i.test(value)) {
    errorMessage = 'Invalid phone number';
  }
  return errorMessage;
};

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      data: '',
    };
  }

    handleChange = (event) => {
      this.setState((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }), () => {
      });
    };

    handleSubmit = () => {
      const { name, phone, email } = this.state;
      let information = '';
      console.log(phone);
      information += `Name: ${name} \nPhone: ${phone}\nEmail: ${email}`;
      this.setState({ data: information });
    };

    render() {
      const {
        data,
      } = this.state;

      return (
        <>
          <Formik
            initialValues={{ name: '', email: '', phone: '' }}
            // onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  name="name"
                  placeholder="Name"
                  validate={validateName}
                  // value={name}
                  // onChange={this.handleChange}
                />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                <Field
                  name="email"
                  placeholder="Email"
                  // value={email}
                  // onChange={this.handleChange}
                  validate={validateEmail}
                />
                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                <Field
                  name="phone"
                  placeholder="Phone number"
                  // value={phone}
                  // onChange={this.handleChange}
                  validate={validatePhone}
                />
                {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
                <input
                  className="button"
                  onClick={this.handleSubmit}
                  type="button"
                  value="Confirm"
                />
              </Form>
            )}
          </Formik>
          <pre>{data}</pre>
        </>
      );
    }
}

// { /* const CheckoutForm = () => {
//   const [userInfo, setUserInfo] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     data: '',
//   });

//   const handleChange = (event) => {
//     if (event.target.name === 'name') {
//       const newData = { ...userInfo, name: event.target.value };
//       setUserInfo(newData);
//     } else if (event.target.name === 'phone') {
//       const newData = { ...userInfo, phone: event.target.value };
//       setUserInfo(newData);
//     } else if (event.target.name === 'email') {
//       const newData = { ...userInfo, email: event.target.value };
//       setUserInfo(newData);
//     }
//   };

//   const handleSubmit = () => {
//     let information = '';
//     // console.log(phone);
//     information += `Name: ${name} \nPhone: ${phone}\nEmail: ${email}`;
//     this.setState({ data: information });
//   };

//   return (
//     <>
//       <Formik
//         initialValues={{ name: '', email: '', phone: '' }}
//         // onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
//       >
//         {({ errors, touched }) => (
//           <Form>
//             <Field
//               name="name"
//               placeholder="Name"
//               validate={validateName}
//               // value={name}
//               onChange={handleChange}
//             />
//             {errors.name && touched.name ? <div>{errors.name}</div> : null}
//             <Field
//               name="email"
//               placeholder="Email"
//               // value={email}
//               // onChange={this.handleChange}
//               validate={validateEmail}
//             />
//             {errors.email && touched.email ? <div>{errors.email}</div> : null}
//             <Field
//               name="phone"
//               placeholder="Phone number"
//               // value={phone}
//               // onChange={this.handleChange}
//               validate={validatePhone}
//             />
//             {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
//             <input className="button"
// onClick={this.handleSubmit} type="button" value="Confirm" />
//           </Form>
//         )}
//       </Formik>
//       <pre>{data}</pre>
//     </>
//   );
// }; */ }

export default CheckoutForm;
