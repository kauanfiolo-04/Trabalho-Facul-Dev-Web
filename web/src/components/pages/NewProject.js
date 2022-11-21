import React from "react";

import ProjectForm from "../project/ProjectForm";

import styles from "./NewProjects.module.css";

const NewProject = () => {
  return (
    <div className={styles.newproject_container}>
      <h1>Criar projeto</h1>
      <p> Crie o seu projeto e insira os serviços utilizados</p>
      <ProjectForm  />
    </div>
  );
};

export default NewProject;
