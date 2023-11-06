import { useState } from "react";

export default function ControlledForm() {
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [ageValue, setAgeValue] = useState('');

    const usernameChangeHandler = (e) => {
        setUsernameValue(e.target.value);
    };
    const passwordChangeHandler = (e) => {
        setPasswordValue(e.target.value);
    };
    const ageChangeHandler = (e) => {
        setAgeValue(Number(e.target.value));
    };

    const resetFormHandler = (e) => {
        setUsernameValue('');
        setPasswordValue('');
        setAgeValue('');
    };

    const usernameBlurHandler = (e) => {
        console.log('on blur'); // for validation as soon as the user clicks somewhere else
    };

    const submitHandler = () => {
        console.log(usernameValue, passwordValue, ageValue);
        resetFormHandler();
    }

    return (
        <>
            <h1>Controlled Form</h1>

            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                    type="text" 
                    name="username" 
                    id="username"
                    value={usernameValue}
                    onChange={usernameChangeHandler}
                    onBlur={usernameBlurHandler}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                    type="text"
                    name="password"
                    id="password"
                    value={passwordValue}
                    onChange={passwordChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input
                    type="number"
                    name="age"
                    id="age"
                    value={ageValue}
                    onChange={ageChangeHandler}
                    />
                </div>
                <div>
                    <button type="button" onClick={submitHandler}>Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>
            </form>
        </>
    );
}