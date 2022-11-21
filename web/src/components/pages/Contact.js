import React from "react";
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <main className={styles.main_contact}>
      <form className={styles.form_contact}>
        <label className={styles.entry_label} for="name">
          Nome Completo
        </label>
        <input className={styles.entry} type="text" name="" id="name" required />

        <label className={styles.entry_label} for="email">
          Email
        </label>
        <input className={styles.entry} type="email" name="" id="email" required />

        <label className={styles.entry_label} for="phone">
          Número para contato
        </label>
        <input className={styles.entry} type="tel" name="" id="phone" required />

        <label className={styles.entry_label} for="message">
          Deixe aqui sua mensagem
        </label>
        <textarea
          className={styles.entry}
          name=""
          id="message"
          cols="30"
          rows="10"
        ></textarea>

        <div className={styles.div_entry}>
          <p className={styles.entry_label}> Como prefere nosso contato?</p>
          <label className={styles.entry_label} for="email-choice">
            <input type="radio" name="contact-choice" id="email-choice" />
            Email
          </label>

          <label className={styles.entry_label} for="phone-choice">
            <input type="radio" name="contact-choice" id="phone-choice" />
            Telefone
          </label>

          <label className={styles.entry_label} for="whatsapp-choice" lang="en">
            <input type="radio" name="contact-choice" id="whatsapp-choice" />
            Whatsapp
          </label>
        </div>
        <label className={styles.entry_label} for="day-period">
          Em qual horário prefere ser atendido?
        </label>
        <select className={styles.entry} name="day-period" id="">
          <option value="none">---Selecione aqui</option>
          <option value="morning">Manhã</option>
          <option value="afternoon">Tarde</option>
          <option value="evening">Noite</option>
        </select>

        <label for="check-mailing" className={styles.entry_label} id="checkbox">
          Gostaria de receber nossas novidades por email?
          <input type="checkbox" name="" id="check-mailing" />
        </label>

        <input className={styles.entry} type="submit" value="Enviar formulário" />
      </form>
    </main>
  );
};

export default Contact;
