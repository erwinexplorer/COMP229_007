import "./styles.scss";
import Button from "../../components/button";
import { Control } from "../../components/form";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <nav>
        <a>Logout</a>
      </nav>

      <div className="search-container">
        <Control />
        <Button style={{ width: "100px" }}>Search</Button>
      </div>

      <div className="button-container">
        <Button style={{ width: "100px" }}>New</Button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Recipe Name</th>
              <th>Rating</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>sample name</td>
              <td>5 star</td>
              <td>
                <Button style={{ width: "100px" }}>Edit</Button>
              </td>
              <td>
                <Button style={{ width: "100px" }}>Delete</Button>
              </td>
            </tr>
            <tr>
              <td>sample name</td>
              <td>5 star</td>
              <td>
                <Button style={{ width: "100px" }}>Edit</Button>
              </td>
              <td>
                <Button style={{ width: "100px" }}>Delete</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer>Erwin Julian Alapide - 301348828</footer>
    </div>
  );
};

export default Dashboard;
