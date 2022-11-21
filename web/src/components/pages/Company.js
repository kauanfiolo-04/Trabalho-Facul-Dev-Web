import React from "react";
import styles from "./Company.module.css";
import tech from "../../img/tech.svg";

const Company = () => {
  return (
    <main className={styles.main_content}>
      <h1>Quem Somos?</h1>
      <img src={tech} alt="Empresa-IMG" />
      <p>
        Somos uma empresa de gerenciamento de projetos de Desenvolvimento de
        Software, formada por um time experiente de especialistas em tecnologia a
        empresa busca a cada dia trazer as soluções mais inovadoras do mercado
        mobile para os seus clientes. Todos os meses são novos aplicativos
        publicados nas lojas Play Store e Apple Store e um número maior de
        pessoas que utilizam nossas soluções para melhorar seu dia a dia.
      </p>
    </main>
  );
};

export default Company;
