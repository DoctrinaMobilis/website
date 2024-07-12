import React from 'react';
import './EinführungEchokardiographie.css';
import bild1 from './assets/echokardiographie1.jpg';
import bild2 from './assets/echokardiographie2.jpg';

const EinführungEchokardiographie = () => {
  return (
    <div className="article">
      <h1>Einführung in die Echokardiographie</h1>
      
      <p>
        Die Echokardiographie ist ein bildgebendes Verfahren, das zur Beurteilung der Struktur und Funktion des Herzens verwendet wird.
        Sie basiert auf Ultraschalltechnologie und ermöglicht eine detaillierte Darstellung der Herzmuskulatur, der Herzklappen und
        der Blutflüsse im Herzen. Die Echokardiographie ist eine nicht-invasive Methode, die in der Kardiologie weit verbreitet ist.
      </p>
      
      <img src={bild1} alt="Echokardiographie Bild 1" className="article-image" />
      
      <p>
        Die Geschichte der Echokardiographie reicht bis in die 1950er Jahre zurück, als der schwedische Kardiologe Inge Edler und der
        Physiker Hellmuth Hertz die ersten klinischen Anwendungen von Ultraschall zur Untersuchung des Herzens entwickelten. Seitdem
        hat sich die Technologie erheblich weiterentwickelt und umfasst heute verschiedene Techniken wie die transthorakale
        Echokardiographie (TTE), die transösophageale Echokardiographie (TEE) und die Stress-Echokardiographie.
      </p>

      <h2>Grundlagen der Echokardiographie</h2>
      
      <p>
        Bei der Echokardiographie wird ein Schallkopf verwendet, der Ultraschallwellen aussendet und die reflektierten Wellen empfängt.
        Diese reflektierten Wellen werden in Echtzeit in bewegte Bilder umgewandelt, die auf einem Bildschirm angezeigt werden. Durch
        die Analyse dieser Bilder kann der Arzt Informationen über die Größe und Form des Herzens, die Dicke der Herzmuskulatur, die
        Funktion der Herzklappen und die Flussrichtung des Blutes im Herzen gewinnen.
      </p>
      
      <img src={bild2} alt="Echokardiographie Bild 2" className="article-image" />
      
      <p>
        Es gibt verschiedene Arten der Echokardiographie, die je nach klinischer Fragestellung eingesetzt werden:
      </p>
      <ul>
        <li>
          <strong>Transthorakale Echokardiographie (TTE):</strong> Dies ist die häufigste Form der Echokardiographie, bei der der
          Schallkopf auf die Brustwand des Patienten aufgesetzt wird. Diese Methode liefert detaillierte Bilder des Herzens und ist
          schmerzfrei und nicht-invasiv.
        </li>
        <li>
          <strong>Transösophageale Echokardiographie (TEE):</strong> Bei dieser Methode wird der Schallkopf in die Speiseröhre des
          Patienten eingeführt, um detailliertere Bilder der Herzstrukturen zu erhalten. Diese Methode wird häufig verwendet, wenn
          eine genauere Darstellung der Herzklappen oder der Aorta erforderlich ist.
        </li>
        <li>
          <strong>Stress-Echokardiographie:</strong> Diese Methode wird verwendet, um die Herzfunktion unter Belastung zu beurteilen.
          Der Patient führt körperliche Übungen durch oder erhält ein Medikament, das die Herzaktivität erhöht, während die
          Echokardiographie durchgeführt wird. Diese Methode hilft bei der Diagnose von Koronararterienerkrankungen.
        </li>
      </ul>
      
      <h2>Indikationen für die Echokardiographie</h2>
      
      <p>
        Die Echokardiographie wird bei einer Vielzahl von klinischen Fragestellungen eingesetzt, darunter:
      </p>
      <ul>
        <li>Bewertung der Herzfunktion bei Patienten mit Symptomen wie Kurzatmigkeit, Brustschmerzen oder Schwindel.</li>
        <li>Diagnose und Überwachung von Herzklappenerkrankungen.</li>
        <li>Beurteilung von Herzfehlern bei Neugeborenen und Kindern.</li>
        <li>Überwachung der Herzfunktion bei Patienten mit chronischen Herzkrankheiten wie Herzinsuffizienz oder Kardiomyopathie.</li>
        <li>Erkennung von Blutgerinnseln oder Tumoren im Herzen.</li>
      </ul>
      
      <p>
        Weitere Informationen zur Echokardiographie finden Sie auf den folgenden Websites:
      </p>
      <ul>
        <li><a href="https://www.herzstiftung.de" target="_blank" rel="noopener noreferrer">Deutsche Herzstiftung</a></li>
        <li><a href="https://www.kardiologie.org" target="_blank" rel="noopener noreferrer">Deutsche Gesellschaft für Kardiologie</a></li>
        <li><a href="https://www.escardio.org" target="_blank" rel="noopener noreferrer">European Society of Cardiology</a></li>
      </ul>
    </div>
  );
};

export default EinführungEchokardiographie;
