import useInput from '../hooks/use-input';
const SimpleInput = (props) => {
 const {value:enteredName,
  isValid:enteredNameIsValid,
  hasError:nameInputHasError,
  reset:resetNameInput,
  valueChangeHandler:nameChangedHandler,
  inputBlurHandler:nameBlurHandler,}
   = useInput(value => value.trim() !=='');

   const{value:enteredEmail, 
    isValid:enteredEmailIsValid,
     hasError :emailInputHasError,
     reset:resetEmailInput,
     valueChangeHandler:emailChangedHandler,
     inputBlurHandler:emailBlurHandler,
    }= useInput(value=>value.includes('@'));


let formIsValid = false;
if(enteredNameIsValid  && enteredEmailIsValid){
  formIsValid=true;
}

  const formSubmissionHandler =(event) =>{
 event.preventDefault();

if(!enteredNameIsValid){
  return;
}
 console.log(enteredName);

resetNameInput();

resetEmailInput();
  };
 const nameInputClasses = nameInputHasError? 'form-control invalid' : 'form-control ';
 const emailInputClasses = emailInputHasError ?  'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input  type='text' id='name' onChange={nameChangedHandler} onBlur={nameBlurHandler} value={enteredName}/>
        {nameInputHasError && <p className="error-text">Name must not be an empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input  type='email' id='email' onChange={emailChangedHandler} onBlur={emailBlurHandler} value={enteredEmail}/>
        {emailInputHasError && <p className="error-text">Please enter a valid email</p>}
        </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
