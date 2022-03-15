import React from 'react'
import * as Yup from 'yup'
import {Formik, Form, Field, useField} from 'formik'
import {Input, Label, Error, Submit} from './styles'

const InputComponent = ({label, ...props}) => {
  const [field, meta] = useField(props)

  return (
    <Label>
      {label}: {meta.touched && meta.error && <Error>{meta.error}</Error>}
      <Input {...field} {...props} />
    </Label>
  )
}

const FormComponent = ({handleSuccess}) => {
  const schema = Yup.object().shape({
    name: Yup.string().required('Required field'),
    email: Yup.string()
      .email('Must be a valid email address')
      .required('Require field')
  })

  return (
    <Formik
      initialValues={{
        name: '',
        email: ''
      }}
      onSubmit={handleSuccess}
      validationSchema={schema}
    >
      {() => (
        <Form>
          <InputComponent name="name" type="text" label="Name" />
          <InputComponent name="email" type="email" label="Email" />

          <Submit type="submit"> Submit</Submit>
        </Form>
      )}
    </Formik>
  )
}

export default FormComponent
