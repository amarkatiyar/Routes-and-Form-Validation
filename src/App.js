// import React from "react";
// import "./App.css"
// import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
// import * as Yup from "yup";

// const App = () => (

//   <Formik
//     initialValues={{ email: "", password: "" }}
//     onSubmit={(values, { setSubmitting }) => {
//       console.log("Logging in", values);
//       setTimeout(() => {
//         console.log("Logging in", values);
//         setSubmitting(false);
//       }, 500);
//     }}

//     validate={values => {
//       let errors = {};
//       if (!values.email) {
//         errors.email = "Required";
//       } else if (!EmailValidator.validate(values.email)) {
//         errors.email = "Invalid email address.";
//       }

//       const passwordRegex = /(?=.*[0-9])/;
//       if (!values.password) {
//         errors.password = "Required";
//       } else if (values.password.length < 8) {
//         errors.password = "Password must be 8 characters long.";
//       } else if (!passwordRegex.test(values.password)) {
//         errors.password = "Invalid password. Must contain one number.";
//       }

//       return errors;
//     }}
//     validationSchema={Yup.object().shape({
//       email: Yup.string()
//         .email()
//         .required("Required"),
//       password: Yup.string()
//         .required("No password provided.")
//         .min(8, "Password is too short - should be 8 chars minimum.")
//         .matches(/(?=.*[0-9])/, "Password must contain a number.")
//     })}

//   >



//     {props => {
//       const {
//         values,
//         touched,
//         errors,
//         isSubmitting,
//         handleChange,
//         handleBlur,
//         handleSubmit
//       } = props;


//       return (
//         <form onSubmit={handleSubmit}>

//           <label htmlFor="email">Email</label>
//           {/* <input
//             id="email"
//             name="email"
//             type="text"
//             placeholder="Enter your email"
//           /> */}
//           <input
//             id="email"
//             name="email"
//             type="text"
//             placeholder="Enter your email"
//             value={values.email}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className={errors.email && touched.email && "error"}
//           />
//           {errors.email && touched.email && (
//             <div className="input-feedback">{errors.email}</div>
//           )}

//           <label htmlFor="password">Password</label>
//           {/* <input
//             id="password"
//             name="password"
//             type="password"
//             placeholder="Enter your password"
//           /> */}

//           <input
//             id="password"
//             name="password"
//             type="password"
//             placeholder="Enter your password"
//             value={values.password}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className={errors.password && touched.password && "error"}
//           />
//           {errors.password && touched.password && (
//             <div className="input-feedback">{errors.password}</div>
//           )}
//           <button type="submit" disabled={isSubmitting}>
//             Login
//           </button>

//         </form>
//       );
//     }}
//   </Formik>
// );

// export default App;
import React, { useState } from "react";
import "./App.css"
import ButtonDemo from "./components/Button";
import Child2 from "./components/child2";
import{Routes,Route} from 'react-router-dom';
import Child3 from "./components/child3";
import Nomatch from "./components/Nomatch";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import FeaturedProduct from "./components/Products/FeaturedProduct";
import NewProduct from "./components/Products/NewProduct";
import CombineComponent from "./components/Context/CombineComponent";



function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Child2 />}></Route>
      <Route path="/buttondemo" element={<ButtonDemo />}></Route>
      <Route path="/child3" element={<Child3 />}></Route>
      <Route path="*" element={<Nomatch />}></Route>
      <Route path='/products' element={<Products />}>
        <Route index element={<FeaturedProduct />}></Route>
        <Route path='featured' element={<FeaturedProduct />}></Route>
        <Route path='new' element={<NewProduct />}></Route>
      </Route>
      <Route path='/combinecomponent' element={<CombineComponent />}></Route>
    </Routes>
    
    </>
  );

}

export default App;