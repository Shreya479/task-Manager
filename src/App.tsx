import React, {useEffect} from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { setTasks } from "./redux/tasksSlice";
import { fetchTasks } from "./services/api";
import AddTask from './components/AddTask';
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect (() =>{
    fetchTasks().then(response => {
      dispatch(setTasks(response.data));
    });
  },[dispatch]);

  return (
    <div>
      <h1>task manager</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
