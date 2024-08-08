'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [ status, setStatus ] = useState(false);
  const [ cordoFundo, setCordoFundo ] =  useState(styles.bg_vermelho);

  function alterarEstilo() {
    setCordoFundo(styles.bg_azul);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>Alterando estilo do elemento</h2>
        <div className={cordoFundo}></div>
        <p>Clique no botão para alterar o estilo do elemento acima.</p>
        <button onClick={alterarEstilo}>Alterar</button>
      </div>
    </main>
  );
}
