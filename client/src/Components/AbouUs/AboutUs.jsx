import React, { useState } from 'react';
import './AboutUs.css'; 
import imagge from "/semaine1.png";
import semaine2 from "/semaine2.png";
import semaine3 from "/semaine3.png";
import semaine4 from "/semaine4.png";
import semaine5 from "/semaine5.png";




const AboutUs = () => {
  const [selectedWeek, setSelectedWeek] = useState(null);

  const handleWeekClick = (week) => {
    setSelectedWeek(week);
  };

  const renderWeekDetails = () => {
    switch (selectedWeek) {
      case 'Week 1to  6':
        return (
          <div className='week-details'>
            <img src={imagge} alt='Semaine 1 à 6' />
            <div className='week-details-content'>
              <h4>1. Javascript</h4>

              <ul>
                <li> Fondements de la programmation</li>
                <li> Les bases de JS (Fonctions, Variables, types de données...)</li>
                <li>Fonctions récursives</li>
                <li>Fonctions d'ordre supérieur</li>
                <li>POO</li>
              </ul>

<br/>
              <h4>2. CSS HTML et jquery</h4>
              <ul>
                <li> Les fondements du développement web</li>
                <li>Construction de site web interactif</li> 
              </ul>

<br/>
              <h4>3.Un processus systématique de résolution de problèmes</h4>
              <ul>
                <li> Exercices d'échauffement quotidiens et résolution de problèmes lors d'entretiens techniques</li>
                <li>Un ensemble de compétences en débogage affinées</li>
              </ul>

<br/>
              <h4>4.L'environnement de travail moderne du développement web</h4>
              
              <ul>
                <li> GitHub</li>
                <li> CMD</li>
              </ul>


            </div>
          </div>
        );
      case 'Week 7':
        return (
          <div className='week-details'>
            <img src={semaine2}  alt='Week 7' />
            <div className='week-details-content'>
              <h1>Les fondamentaux de l'informatique</h1>
              <br/>
              <p>les 12 semaines de l'immersion, vous travaillerez principalement en binômes et en groupes lors de sprints de 2 jours, en passant au minimum 11 heures par jour, 6 jours par semaine. Notre contenu pédagogique vous offre juste assez de soutien pour que vous puissiez vous attaquer 
                au véritable travail de résolution de problèmes de codage dans le contexte d'applications réelles.</p> 
                <br/>
              <p></p>
              <ul>
                <p>Vous serez immergé dans l'apprentissage des concepts fondamentaux et des stratégies considérées comme
                     les meilleures pratiques dans l'industrie du génie logiciel, notamment :</p>
                     <br />
                <li> Structures de données de base et avancées</li>
                <li> Adopter la bonne mentalité (penser comme un ingénieur)</li>
                <li> Utilisation des modèles d'instanciation en JavaScript</li>

              </ul>
            </div>
          </div>
        );
      case 'Week 8 to 12':
        return (
          <div className='week-details'>
            <img src={semaine3} alt='Semaine 8 à 12' />
            <div className='week-details-content'>
              <h3>Full Stack JavaScript</h3>
              <ul>
                <li> Modèle-Vue-Contrôleur</li>
                <li> E6S</li>
                <li> Modèles Asynchrones</li>
                <li> Promesses</li>
                <li> Modularisation</li>
                <li> npm</li>
                <li> React/ React component, Hooks</li>
                <li> Node Js / Express Js</li>
                <li> DBMS (MySQL, MongoDB), ORM’s</li>
                <li> Construire une application Full Stack MERN</li>
                <li> DBMS (MySQL, MongoDB), ORM’s</li>
                <li>Authentification</li>


              </ul>
            </div>
          </div>
        );
      case 'Week 13':
        return (
          <div className='week-details'>
            <img src={semaine4} alt='Week 13' />
            <div className='week-details-content'>
              <h1>Semaine en Solo</h1>
               <br/>
              <ul>
                <li> Il n'y a pas de cours programmés cette semaine. Vous pourrez vous reposer et travailler sur un projet individuel.</li>
                <li> Conception et développement d'applications</li>
            
              </ul>
            </div>
          </div>
        );
      case 'Week 14 to 19':
        return (
          <div className='week-details'>
       
            <img src={semaine5} alt='Week 14 to 19' />
            <div className='week-details-content'>
              <h3>Conception et développement d'applications</h3>
              <br/>

              <p>Travailler en équipe pour
                 développer des applications fonctionnelles, en utilisant de nouvelles technologies, 
                 et mettre à l'épreuve vos compétences en détection de bugs. Vous apprendrez à :</p>
              <ul>
                <br/>
                <h4> Travailler sur plusieurs projets</h4>
                <li> Construire des applications à partir de zéro</li>
                <li>Travailler sur des bases de code héritées</li>
                <li> Utiliser de nouveaux langages (TypeScript, Dart...)</li>


              </ul>
              <br/>
              <ul>
                <h4>Renforcer votre code</h4>
                <li> Utiliser de nouvelles technologies (Angular, Flutter, Redux...)</li>
                <li> Test de logiciel</li>
                <li> Développement Continu</li>

              </ul>

              <br/>
              <ul>
                <h4>Pratiquer les Dynamiques Avancées d'Équipe</h4>
                <li> Flux de travail Agile</li>
                <li> Développement itératif</li>
                <li> Techniques avancées de git</li>

              </ul>
            </div>
          </div>
        );
      default:
        return <p>Consultez le programme de notre formation, semaine par semaine.</p>;
    }
  };

  return (
    <div className='about-us'>
      <h1>Découvrez le programme en détail</h1>
      <h4>Consultez notre formation, semaine par semaine.</h4>
      <br/>
      <ul className='week-list'>
        <li onClick={() => handleWeekClick('Week 1to  6')}>Semaine 1 à 6</li>
        <li onClick={() => handleWeekClick('Week 7')}>Semaine 7</li>
        <li onClick={() => handleWeekClick('Week 8 to 12')}>Semaine 8 à 12</li>
        <li onClick={() => handleWeekClick('Week 13')}>Semaine 13</li>
        <li onClick={() => handleWeekClick('Week 14 to 19')}>Semaine 14 à 19</li>
      </ul>
      <div className='week-details-container'>
        {renderWeekDetails()}
      </div>
    </div>
  );
};

export default AboutUs;
