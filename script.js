"use strict";
(() => {
  const main = document.querySelector("#main");
  const topics = window.LERNBEREICHE;
  let session = null;
  const sessions = new Map();
  const escape = text => String(text).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const notice = '<aside class="note"><strong>Beispielinhalte für den Unterricht</strong>Diese Aufgaben basieren auf den bereitgestellten Unterlagen. Vor dem Einsatz bitte durch die Lehrkraft fachlich prüfen.</aside>';
  function focusHeading() {
    main.querySelector("h1").focus();
    window.scrollTo(0, 0);
  }
  function home() {
    main.innerHTML = `<section class="intro"><p class="eyebrow">Verstehen. Anwenden. Weiterbauen.</p><h1 tabindex="-1">Beton – ganz einfach</h1><p>Deine Lernwerkstatt für Betonbau. Wähle ein Thema und wende dein Wissen an – eine Aufgabe nach der anderen.</p></section><section aria-labelledby="topics-title"><div class="section-title"><h2 id="topics-title">Deine Lernbereiche</h2><span>${topics.filter(topic => topic.aufgaben.length).length} von ${topics.length} Bereichen verfügbar</span></div><div class="grid">${topics.map((topic,i) => `<article class="topic ${topic.aufgaben.length ? 'active' : ''}"><div class="topic-top"><span class="number">${String(i+1).padStart(2,'0')}</span><span class="badge">${topic.aufgaben.length ? `${topic.aufgaben.length} Aufgaben · Mittel` : 'In Vorbereitung'}</span></div><h3>${escape(topic.titel)}</h3><p>${escape(topic.beschreibung || topic.kurz)}</p>${topic.aufgaben.length ? `<a class="button" href="#lernen/${escape(topic.id)}">${sessions.has(topic.id) ? (sessions.get(topic.id).complete ? 'Ergebnis ansehen' : 'Lernbereich fortsetzen') : 'Lernbereich starten'} <span aria-hidden="true">→</span></a>` : ''}</article>`).join('')}</div></section>${notice}`;
    focusHeading();
  }
  function renderQuestion() {
    const {topic, index, answers} = session;
    const q = topic.aufgaben[index];
    const answered = answers[index] !== undefined;
    const score = answers.filter((answer,i) => answer === topic.aufgaben[i].loesung).length;
    main.innerHTML = `<section class="study"><a class="back" href="#start">← Alle Lernbereiche</a><div class="study-head"><p>${escape(topic.titel)}</p><strong>Aufgabe ${index+1} / ${topic.aufgaben.length}</strong></div><progress value="${answers.length}" max="${topic.aufgaben.length}" aria-label="Beantwortete Aufgaben"></progress><article class="question"><p class="eyebrow">${escape(q.typ)}</p><h1 tabindex="-1">${escape(q.frage)}</h1><p class="context">${escape(q.kontext)}</p><div class="answers" role="group" aria-label="Antwortmöglichkeiten">${q.auswahl.map((answer,i) => `<button class="answer" data-answer="${i}"><span class="letter" aria-hidden="true">${String.fromCharCode(65+i)}</span><span>${escape(answer)}</span></button>`).join('')}</div><div id="feedback" role="status" aria-live="polite" aria-atomic="true"></div><div id="next"></div><p class="helper">Eine Antwort auswählen · 1 Punkt pro richtiger Antwort</p></article><p class="helper" id="score">${score} von ${topic.aufgaben.length} Punkten · Fortschritt nur während dieser Nutzung</p>${topic.beispiel ? notice : ''}</section>`;
    main.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => {
      if (session.answers[index] !== undefined) return;
      session.answers[index] = q.auswahl[Number(button.dataset.answer)];
      showFeedback();
      document.querySelector("#feedback").scrollIntoView({block: "nearest"});
    }));
    if (answered) showFeedback();
    focusHeading();
  }
  function showFeedback() {
    const {topic,index,answers} = session;
    const q = topic.aufgaben[index];
    const correct = answers[index] === q.loesung;
    main.querySelectorAll('[data-answer]').forEach(button => {
      const answer = q.auswahl[Number(button.dataset.answer)];
      button.disabled = true;
      if (answer === q.loesung) button.classList.add('correct');
      else if (answer === answers[index]) button.classList.add('wrong');
    });
    document.querySelector('#feedback').innerHTML = `<div class="feedback ${correct ? '' : 'error'}"><h2>${correct ? '✓ Richtig! +1 Punkt' : 'Noch nicht richtig. 0 Punkte'}</h2>${correct ? '' : `<p><strong>Richtige Lösung:</strong> ${escape(q.loesung)}</p>`}<p>${escape(q.erklaerung)}</p></div>`;
    const last = index === topic.aufgaben.length-1;
    document.querySelector('#next').innerHTML = `<button class="button next">${last ? 'Ergebnis ansehen' : 'Nächste Aufgabe'} <span aria-hidden="true">→</span></button>`;
    document.querySelector('.next').addEventListener('click', () => { if (last) result(); else {session.index++; renderQuestion();} });
    main.querySelector('progress').value = answers.length;
    document.querySelector('#score').textContent = `${answers.filter((answer,i) => answer === topic.aufgaben[i].loesung).length} von ${topic.aufgaben.length} Punkten · Fortschritt nur während dieser Nutzung`;
  }
  function result() {
    const {topic,answers} = session;
    session.complete = true;
    const score = answers.filter((answer,i) => answer === topic.aufgaben[i].loesung).length;
    main.innerHTML = `<section class="study"><a class="back" href="#start">← Alle Lernbereiche</a><article class="question"><p class="eyebrow">${escape(topic.titel)} · Abgeschlossen</p><h1 tabindex="-1">Dein Ergebnis</h1><div class="result-score">${score} / ${topic.aufgaben.length}<span class="helper"> Punkte</span></div><p>${score === topic.aufgaben.length ? 'Alle Aufgaben richtig gelöst. Gut gemacht!' : 'Lies dir die Lösungen noch einmal durch. Danach kannst du den Lernbereich erneut üben.'}</p><div class="result-actions"><button id="retry" class="button">Noch einmal üben ↻</button><a class="button secondary" href="#start">Zur Themenübersicht</a></div><details><summary>Alle Lösungen und Erklärungen ansehen</summary><ol>${topic.aufgaben.map((q,i) => `<li><strong>${escape(q.frage)}</strong><br>Deine Antwort: ${escape(answers[i])} (${answers[i] === q.loesung ? 'richtig' : 'falsch'})<br><strong>Lösung: ${escape(q.loesung)}</strong><br>${escape(q.erklaerung)}</li>`).join('')}</ol></details><p class="helper">Beim Wiederholen beginnt deine Punktzahl bei 0. Beim Neuladen der Seite werden alle Ergebnisse gelöscht.</p></article>${topic.beispiel ? notice : ''}</section>`;
    document.querySelector('#retry').addEventListener('click', () => {session = {topic,index:0,answers:[]}; sessions.set(topic.id, session); renderQuestion();});
    focusHeading();
  }
  function route() {
    const id = location.hash.startsWith('#lernen/') ? location.hash.slice(8) : null;
    const topic = topics.find(item => item.id === id && item.aufgaben.length);
    if (!topic) {home(); return;}
    if (!sessions.has(id)) sessions.set(id, {topic,index:0,answers:[]});
    session = sessions.get(id);
    if (session.complete) result(); else renderQuestion();
  }
  window.addEventListener('hashchange', route);
  route();
})();


