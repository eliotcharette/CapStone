import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';

class TripsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      {field.meta.error}
      </div>
    );
  }
  render() {
    return (
      <form>
        <Field
          label="Title for Experience"
          name="title"
          component={this.renderField} />
        <Field
          label="Description for Experience"
          name="description"
          component={this.renderField} />
        <Field
          label="Price"
          name="price"
          component={this.renderField} />
        <Field
          label="Length in Days"
          name="days"
          component={this.renderField} />
        <Field
          label="City or Town Name"
          name="location"
          component={this.renderField} />
        <button type="submit" className="btn btn-info">Save</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Please Enter a Title";
  }
  if (!values.description) {
    errors.description = "Please add a Description";
  }
  if (!values.price) {
    errors.price = "Please List a Price";
  }
  if (!values.days) {
    errors.days = "Please Enter Amount of Days";
  }
  if (!values.location) {
    errors.location = "Please Enter a Location";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'TripsNewForm'
})(TripsNew);
