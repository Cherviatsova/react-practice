import { Component } from "react";
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';


const ErrorText = styled.p`
  color: red;
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const products = ['Sweater', 'Keyboard', 'Sofa', 'Freezer'];

const validationSchema = Yup.object({
  product: Yup.string().required('Please select a product').oneOf(products),
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  title: Yup.string().required(),
  review: Yup.string().required(),
  rating: Yup.number().min(1).max(10).required(),
  date: Yup.date().default(() => new Date()),
  wouldRecommend: Yup.boolean().default(false),
});

const initialValues = {
  name: '',
  email: '',
  title: '',
  review: '',
  rating: '',
  date: new Date(),
  wouldRecommend: false,
  product: '',
};
    
export class ProductReviewForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
      >
        <Form autoComplete="off">
          <div>
            <label htmlFor="name">Full name</label>
            <div>
              <Field name="name" type="text" placeholder="Full name" />
              <FormError name="name" />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <div>
              <Field name="email" type="text" placeholder="Email address" />
              <FormError name="email" />
            </div>
          </div>
          <div>
            <label htmlFor="product">Product</label>
            <div>
              <Field name="product" as="select">
                <option value="">Select a product</option>
                {products.map((product, idx) => (
                  <option value={product} key={idx}>
                    {product}
                  </option>
                ))}
              </Field>
              <FormError name="product" />
            </div>
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <div>
              <Field name="title" type="text" placeholder="Title" />
              <FormError name="title" />
            </div>
          </div>
          <div>
            <label htmlFor="review">Review</label>
            <div>
              <Field name="review" as="textarea" placeholder="Review" />
              <FormError name="review" />
            </div>
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <div>
              <Field name="rating" type="number" placeholder="Rating" />
              <FormError name="rating" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="wouldRecommend">
                <Field name="wouldRecommend" type="checkbox" />
                Would recommend
              </label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
  }
}



// const schema = yup.object().shape({
//   name: yup.string().required(),
//   age: yup.number().required().positive().integer(),
//   email: yup.string().email(),
// });

// const ErrorText = styled.p`
//     color: red;
// `

// const FormError = ({ name }) => {
//     return (
//    <ErrorMessage name={name} render={message => <ErrorText>{ message}</ErrorText>} /> 
//     )}

// export class ProductReviewForm extends Component {
//     handleSubmit=((values, actions) => {
//          setTimeout(() => {
//            alert(JSON.stringify(values, null, 2));
//            actions.setSubmitting(false);
//          }, 1000);
//        })
//     render() {
//         schema.validate({ name: 'Mango' }, { abortEarly: false }).then().catch(err => {
//             console.log(err.errors)
//         })
//         return (
//             <Formik
//                 initialValues={{ email: '', name: "", age: ''}}
//                 validationSchema={schema}
//                 onSubmit={this.handleSubmit}>
               
//                     <Form autoComplete="off">
//                     <div>
//                         <label htmlFor="name">Name</label>
//                         <Field name="name" type="text" placeholder="Fullname"></Field>
//                         <FormError name="name"  />
//                     </div>
//                     <div>
//                         <label htmlFor="age">Age</label>
//                         <Field name="age" type="text" placeholder="Age"></Field>
//                     <FormError name="age"  />
//                     </div>
//                     <div>
//                         <label htmlFor="email">Email</label>
//                         <Field name="email" type="email" placeholder="Email"></Field>
//                     <FormError name="email"  />
//                     </div>
//                     <button type="submit">Submit</button>
//                     </Form>
//             </Formik>
//         )
//     }
// }