import React, { useState } from "react";

const Signup = (props) => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("M");

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`이름 : ${name}` + `성별 : ${gender}`);
        event.preventDefault();
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                이름 : <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <label>
                <select value={gender} onChange={handleChangeGender}>
                    <option value="M">M</option>
                    <option value="F">F</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default Signup;