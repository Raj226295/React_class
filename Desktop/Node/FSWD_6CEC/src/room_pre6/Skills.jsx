import { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);

  const handleSkills = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setSkills([...skills, value]); // add skill
    } else {
      setSkills(skills.filter((skill) => skill !== value)); // remove skill
    }
  };

  return (
    <div className="skills-container">
      <h2>Skills</h2>

      <input
        type="checkbox"
        value="JavaScript"
        onChange={handleSkills}
        checked={skills.includes("JavaScript")}
      />
      <label>JavaScript</label>
      <br /><br />

      <input
        type="checkbox"
        value="React"
        onChange={handleSkills}
        checked={skills.includes("React")}
      />
      <label>React</label>
      <br /><br />

      <input
        type="checkbox"
        value="Node.js"
        onChange={handleSkills}
        checked={skills.includes("Node.js")}
      />
      <label>Node.js</label>
      <br /><br />

      <input
        type="checkbox"
        value="HTML & CSS"
        onChange={handleSkills}
        checked={skills.includes("HTML & CSS")}
      />
      <label>HTML & CSS</label>
      <br /><br />

      <input
        type="checkbox"
        value="Git & GitHub"
        onChange={handleSkills}
        checked={skills.includes("Git & GitHub")}
      />
      <label>Git & GitHub</label>
      <br /><br />

      <h3>Selected Skills:</h3>
      <p>{skills.join(", ")}</p>
    </div>
  );
}

export default Skills;
