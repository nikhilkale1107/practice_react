import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState("");

  function addUserHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = nameInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
        setError({
            title: "Invalid input",
            message: "Please enter a valid name and age (non-empty values)."
        })
      return;
    }
    if (+enteredUserAge < 1) {
        setError({
            title: "Invalid age",
            message: "Please enter a valid age (> 0)."
        })
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }

  function errorHandler () {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="userName">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
