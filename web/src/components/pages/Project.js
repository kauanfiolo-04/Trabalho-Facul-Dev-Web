import React from 'react';
import Container from '../layout/Container'

import styles from './Project.module.css';



const Project = () => {
  return (
    <>
       
      
        <div className={styles.project_details}>
          <Container customClass="column">
            
            <div className={styles.details_container}>
              <h1>Projeto: Criação de aplicativo</h1>
              <button className={styles.btn}>
                Editar projeto
              </button>
              
                <div className={styles.form}>
                  <p>
                    <span>Categoria: Desenvolvimento</span>
                  </p>
                  <p>
                    <span>Total do orçamento: R$ 10.000</span> 
                  </p>
                  <p>
                    <span>Total utilizado: R$ 6000</span> 
                  </p>
                </div>
              
                
              
            </div>
            <div className={styles.service_form_container}>
              <h2>Adicione um serviço:</h2>
              <button className={styles.btn} >
                Adicionar Serviço
              </button>
              
            </div>
            <h2>Serviços:</h2>
            <p>Desenvolvedor Back-end</p>
            <p>Desenvolvedor Frontend</p>
            <p>Desenvolvedor Mobile</p>
          </Container>
        </div>
      
    
    </>
    
  )
}

export default Project
