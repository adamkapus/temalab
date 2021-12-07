import React from "react";
import Category from "./Category";
import { CATEGORIES_MAP } from "../utils/CategoryHandle.js";

function CategoryManager(props) {
  const fuggobenLevoTaskok = props.tasks
    .filter(CATEGORIES_MAP["Függőben"])
    .sort((firstEl, secondEl) => firstEl.categoryPos - secondEl.categoryPos);
  const folyamatbanLevoTaskok = props.tasks
    .filter(CATEGORIES_MAP["Folyamatban"])
    .sort((firstEl, secondEl) => firstEl.categoryPos - secondEl.categoryPos);
  const keszLevoTaskok = props.tasks
    .filter(CATEGORIES_MAP["Kész"])
    .sort((firstEl, secondEl) => firstEl.categoryPos - secondEl.categoryPos);
  const elhalasztvaLevoTaskok = props.tasks
    .filter(CATEGORIES_MAP["Elhalasztva"])
    .sort((firstEl, secondEl) => firstEl.categoryPos - secondEl.categoryPos);

  return (
    <div className="row">
      <div className="col">
        <Category
          name="Függőben"
          tasks={fuggobenLevoTaskok}
          editTask={props.editTask}
          deleteTask={props.deleteTask}
          moveTask={props.moveTask}
        />
      </div>
      <div className="col">
        <Category
          name="Folyamatban"
          tasks={folyamatbanLevoTaskok}
          editTask={props.editTask}
          deleteTask={props.deleteTask}
          moveTask={props.moveTask}
        />
      </div>
      <div className="col">
        <Category
          name="Kész"
          tasks={keszLevoTaskok}
          editTask={props.editTask}
          deleteTask={props.deleteTask}
          moveTask={props.moveTask}
        />
      </div>
      <div className="col">
        <Category
          name="Elhalasztva"
          tasks={elhalasztvaLevoTaskok}
          editTask={props.editTask}
          deleteTask={props.deleteTask}
          moveTask={props.moveTask}
        />
      </div>
    </div>
  );
}

export default CategoryManager;
