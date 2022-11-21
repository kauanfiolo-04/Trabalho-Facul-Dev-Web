import React from 'react';

import styles from './Home.module.css';
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton';

const Home = () => {
  return (
    <section className={styles.home_container}>
      <h1>Bem-vindo ao <span>costs</span></h1>
      <p>Faça seu gerenciamento de projetos de desenvolvimento de software</p>
      <LinkButton to="/newproject" text="Criar projeto" />
      <img src={savings} alt='img' />
    </section>
  )
}

export default Home
