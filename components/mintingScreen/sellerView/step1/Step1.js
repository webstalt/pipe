import { Formik, Form, Field, ErrorMessage } from 'formik'

import { ConnectWalletButton } from '../../../connectWalletButton/ConnectWalletButton'
import { Button } from '../../../button/Button'

import classes from './step1.module.scss'

export function Step1({ isWalletConnected, forwardToCheckOffers }) {
  return (
    <>
      <h3 className={classes.stepTitle}>Fill NFT information form</h3>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{ name: '', royalty: '', price: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.name) {
            errors.name = 'Required'
          }
          if (!values.royalty) {
            errors.royalty = 'Required'
          }
          if (!values.price) {
            errors.price = 'Required'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          // TODO: here will be a callback that sends data
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form className={classes.form}>
            <label className={classes.label} htmlFor="name">
              Name
              <Field className={classes.inputField} type="name" name="name" />
            </label>
            <ErrorMessage
              className={classes.error}
              name="name"
              component="div"
            />
            <label className={classes.label} htmlFor="price">
              Price
              <Field className={classes.inputField} type="price" name="price" />
            </label>
            <ErrorMessage
              className={classes.error}
              name="price"
              component="div"
            />
            <label className={classes.label} htmlFor="royalty">
              Royalty
              <Field
                className={classes.inputField}
                type="royalty"
                name="royalty"
              />
            </label>
            <ErrorMessage
              className={classes.error}
              name="royalty"
              component="div"
            />

            <div className={classes.buttonWrapper}>
              {isWalletConnected ? (
                <>
                  <Button type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                  <h3 className={classes.checkOffersTitle}>
                    Already listed NFT royalty?
                  </h3>
                  <Button onClick={forwardToCheckOffers}>Check offers</Button>
                </>
              ) : (
                <ConnectWalletButton />
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}