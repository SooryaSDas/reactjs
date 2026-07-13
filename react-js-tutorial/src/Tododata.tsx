import { useState } from "react";

function Tododata() {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [course, setCourse] = useState("");

  const [submitdata, setSubmitdata] = useState([]);

  const submitdatafn = (e) => {
    e.preventDefault();
    const newdata = {
      name,
      place,
      course,
    };
    setSubmitdata([...submitdata, newdata]);
  };

  return (
    <div>
      <form onSubmit={submitdatafn}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          name="place"
          placeholder="place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          name="course"
          placeholder="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>

      <table>
        <tr>
          <td>Name</td>
          <td>Place</td>
          <td>Course</td>
        </tr>

        {submitdata.map((data) => (
          <tr>
            <td>{data.name}</td>
            <td>{data.place}</td>
            <td>{data.course}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Tododata;
