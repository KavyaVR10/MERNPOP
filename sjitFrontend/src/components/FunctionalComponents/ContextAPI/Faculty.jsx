import CoE from "../ContextAPI/CoE";
const Faculty = () => {
  return (
    <div>
      <Exam />
      <h1>Faculty Correcting Papers</h1>
      <CoE sgpa="10" cgpa="10" />
    </div>
  );
};
export default Faculty;