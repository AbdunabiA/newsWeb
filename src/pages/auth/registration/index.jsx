import { Formik, Form, Field } from "formik";
import { Fields } from "../../../components";
import * as Yup from 'yup'

const index = () => {

  const val = Yup.object({
    username: Yup.string()
      .max(10, "Max size 10 characters")
      .min(3, "Min size 3 characters")
      .required("Required"),
    password: Yup.string()
      .max(15, "Max size 15 characters")
      .min(5, "Min size 5 characters")
      .required("Required"),
  })

    return (
      <div className="w-screen h-screen flex items-center justify-center bg-sky-400">
        <div className="w-1/3 shadow-md p-10 rounded-md bg-white">
          <Formik
            initialValues={{
              username: "",
              first_name: "",
              last_name: "",
              phone: "",
              password: "",
              status: 1,
            }}
            onSubmit={(data) => {
              // signIn(data);
            }}
            validationSchema={val}
          >
            {({ values, resetForm }) => {
              return (
                <Form>
                  <Field
                    name="username"
                    label="User name"
                    component={Fields.Input}
                  />
                  <Field
                    name="first_name"
                    label="First name"
                    component={Fields.Input}
                  />
                  <Field
                    name="last_name"
                    label="Last name"
                    component={Fields.Input}
                  />
                  <Field name="phone" label="Phone" component={Fields.Input} />
                  <Field
                    name="password"
                    label="Password"
                    component={Fields.Input}
                  />
                  <button onClick={() => registerHandler(values, resetForm)}>
                    Submit
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    );
}

export default index

// function FormValidation() {
//   return );
// }