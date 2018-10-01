import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class TripsNew extends Component {
  render() {
    return (
      <form>
        <Field
          name="title"
          component={} />
        <Field
          description="summary"
          component={} />
        <Field
          price="price"
          component={} />
        <Field
          length="days"
          component={} />
        <Field
          location="city"
          component={} />
      </form>
    );
  }


export default reduxForm({
  form: 'TripsNewForm'
})(TripsNew);
