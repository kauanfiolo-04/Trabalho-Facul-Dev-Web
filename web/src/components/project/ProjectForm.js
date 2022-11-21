import React from "react";
import { useState, useEffect } from "react";

import Input from "../forms/Input";
import Select from "../forms/Select";
//import Submitbuttom from "../forms/Submitbuttom";
import LinkButton from "../layout/LinkButton";

import styles from "./ProjectForm.module.css";

const ProjectForm = ({  projectData }) => {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submitData = (e) => {
    e.preventDefault();
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
    console.log(project);
  }

  function handleSelect(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submitData} className={styles.form}>
      <Input
        type="text"
        name="name"
        text="Nome do projeto"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ""}
      />
      <Input
        type="number"
        name="budget"
        text="Orçamento"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ""}
      />
      <Input
        type="email"
        name="email"
        text="Nome da empresa"
        placeholder="Insira o nome da empresa"
        handleOnChange={handleChange}
        
      />
      <Input
        type="number"
        name="cnpj"
        text="CNPJ"
        placeholder="CNPJ"
        handleOnChange={handleChange}
        
      />
      <Input
      type='date'
      name='date'
      text='Data para conclusão do projeto'
      />
      <textarea rows='4' cols='50' placeholder="Insira as observações do projeto"></textarea>
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleSelect}
        value={project.category ? project.category.id : ""}
      />
      <LinkButton to='/projects' text='Criar projeto'/>
    </form>
  );
};

export default ProjectForm;
