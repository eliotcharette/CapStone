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
          name="summary"
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
      </form>
    );
  }
}

export default reduxForm({
  form: 'TripsNewForm'
})(TripsNew);
