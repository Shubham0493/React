import { useState } from "react";
// We can create a Usestate whith help of this.
const UserForm = () => {
  const [formData, setformData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Weight, setWeight] = useState(0);
  const [Age, setAge] = useState(0);
  // This function will handle the form submission
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function handlelastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleAgeChange(event) {
    setAge(Number(event.target.value));
  }
  function handleWeightChange(event){
    setWeight(Number(event.target.value))
  }
  //Function is for hadle the  submit event when user submit data in the form
  const handleSubmit = (e) => {
    e.preventDefault();
    //We are creating an object and pushing it to our array named as formdata
    const newformData = [...formData, { firstName, lastName, Age, Weight}];
    console.log(newformData);
    setformData(newformData);
    setFirstName("");
    setLastName("");
    setAge(0);
    setWeight(0);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <br></br>
            <label htmlFor="Lastname">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handlelastNameChange}
            />
            <br></br>
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              id="Age"
              value={Age}
              onChange={handleAgeChange}
            />
            <br></br>
            <label htmlFor="Weight">Weight:</label>
            <input
              type="number"
              id="Weight"
              value={Weight}
              onChange={handleWeightChange}
            />
          </div>
          <button type="submit">Submit</button>
          </fieldset>
        </form>
        <hr />
        <div id="output">
        <fieldset>
        <h2>Submitted Data</h2>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => (
              <tr key={index}>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.Age}</td>
                <td>{data.Weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </fieldset>
        </div>
      </div>
    </>
  );
};

export default UserForm;
