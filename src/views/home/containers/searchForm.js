import React from "react";
import { Field, reduxForm, submit } from "redux-form";
import { connect } from "react-redux";
import Form from "../components/form/form";
import Input from "../components/form/field";
import Button from "../components/form/button";

const handleKeyPress = async (e, dispatch) => {
  if (e.keyCode == 13 && e.shiftKey == false) {
    e.preventDefault();
    return await dispatch(submit("searchForm"));
  }
};

const SearchForm = props => {
  const { handleSubmit, submitting, auth, dispatch } = props;
  return (
    <Form onKeyDown={e => handleKeyPress(e, dispatch)}>
      <Field
        name="term"
        component={Input}
        returnKeyType="next"
        type="text"
        placeholder="Search"
      />
      <Button onClick={handleSubmit}>Buscar</Button>
    </Form>
  );
};

export default reduxForm({
  form: "searchForm"
})(SearchForm);
