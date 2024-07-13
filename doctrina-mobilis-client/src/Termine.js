import React, { useState, useEffect } from 'react';
import './Termine.css';
import axios from 'axios';
import dayjs from 'dayjs';
import 'dayjs/locale/de'; // Für deutsche Wochentage

dayjs.locale('de'); // Setze die Locale auf Deutsch

const Termine = () => {
  const [termine, setTermine] = useState([]);

  useEffect(() => {
    axios.get('/api/termine')
      .then(response => {
        // Überprüfen, ob die API-Antwort ein Array ist
        if (Array.isArray(response.data)) {
          setTermine(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
          setTermine([]); // Setze den Zustand auf ein leeres Array, wenn die Antwort kein Array ist
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setTermine([]); // Setze den Zustand auf ein leeres Array im Fehlerfall
      });
  }, []);

  return (
    <aside id="termine" className="termine">
      {Array.isArray(termine) && termine.length > 0 ? (
        termine.map((termin) => {
          const datum = dayjs(termin.datum);
          return (
            <div key={termin.id} className="termin-kachel">
              <div className="datum-bereich">
                <div className="wochentag">{datum.format('dd').toUpperCase()}</div>
                <div className="datum">{datum.format('DD.MM.YYYY')}</div>
                <div className="uhrzeit">{termin.uhrzeit}</div>
              </div>
              <div className="kurs-bereich">
                <div className="kursname">{termin.Kurs.kursname}</div>
                <div className="ort">{termin.ort}</div>
              </div>
            </div>
          );
        })
      ) : (
        <p>Keine Termine gefunden.</p>
      )}
    </aside>
  );
};

export default Termine;
