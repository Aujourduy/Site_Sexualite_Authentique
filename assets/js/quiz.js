/**
 * Quiz "Amant·e Sensible" - JavaScript
 */

(function() {
  'use strict';

  const quiz = {
    currentQuestion: 0,
    score: 0,
    answers: [],

    init: function() {
      this.renderQuestion();
      this.updateProgress();
    },

    renderQuestion: function() {
      const questionData = quizData.questions[this.currentQuestion];
      const questionContainer = document.getElementById('question-container');

      if (!questionData) {
        this.showResults();
        return;
      }

      let html = `
        <div class="question-card">
          <p class="question-number">Question ${this.currentQuestion + 1} / ${quizData.questions.length}</p>
          <h3 class="question-text">${questionData.texte}</h3>
          <div class="answers-list">
      `;

      questionData.reponses.forEach((reponse, index) => {
        html += `
          <button class="answer-btn" data-points="${reponse.points}" data-index="${index}">
            ${reponse.texte}
          </button>
        `;
      });

      html += `
          </div>
        </div>
      `;

      questionContainer.innerHTML = html;

      // Ajouter les event listeners
      const answerBtns = document.querySelectorAll('.answer-btn');
      answerBtns.forEach(btn => {
        btn.addEventListener('click', (e) => this.selectAnswer(e));
      });
    },

    selectAnswer: function(event) {
      const points = parseInt(event.target.dataset.points);
      this.score += points;
      this.answers.push(points);

      // Animation de sélection
      event.target.classList.add('selected');

      // Passer à la question suivante après un court délai
      setTimeout(() => {
        this.currentQuestion++;
        this.renderQuestion();
        this.updateProgress();
      }, 300);
    },

    updateProgress: function() {
      const progressBar = document.getElementById('progress-bar');
      const percentage = (this.currentQuestion / quizData.questions.length) * 100;
      progressBar.style.width = percentage + '%';
    },

    showResults: function() {
      const profile = this.getProfile();
      const resultsContainer = document.getElementById('results-container');
      const questionContainer = document.getElementById('question-container');
      const progressContainer = document.getElementById('progress-container');

      // Masquer le quiz
      questionContainer.style.display = 'none';
      progressContainer.style.display = 'none';

      // Afficher les résultats
      resultsContainer.innerHTML = `
        <div class="results-card">
          <div class="profile-icon">${profile.emoji}</div>
          <h2 class="profile-name">${profile.nom}</h2>
          <p class="profile-resume">${profile.resume}</p>

          <div class="score-display">
            <p>Votre score : <strong>${this.score} / 80</strong></p>
          </div>

          <div class="profile-description">
            ${this.formatDescription(profile.description)}
          </div>

          <div class="results-cta">
            <a href="${profile.cta_url}" class="btn btn-bordeaux btn-large">
              ${profile.cta}
            </a>
          </div>

          <div class="restart-quiz">
            <button onclick="location.reload()" class="btn btn-outline">
              Refaire le test
            </button>
          </div>
        </div>
      `;

      resultsContainer.style.display = 'block';

      // Scroll vers le haut
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    getProfile: function() {
      const profiles = quizData.profils;

      for (let profile of profiles) {
        if (this.score >= profile.score_min && this.score <= profile.score_max) {
          return profile;
        }
      }

      // Fallback (ne devrait jamais arriver)
      return profiles[0];
    },

    formatDescription: function(text) {
      // Convertir le texte en paragraphes
      const paragraphs = text.split('\n\n');
      let html = '';

      paragraphs.forEach(para => {
        if (para.trim().startsWith('**') && para.trim().includes(':**')) {
          // C'est un titre de section
          const title = para.replace(/\*\*/g, '').replace(':', '');
          html += `<h3>${title}</h3>`;
        } else if (para.trim().startsWith('-')) {
          // C'est une liste
          const items = para.split('\n').filter(item => item.trim());
          html += '<ul>';
          items.forEach(item => {
            html += `<li>${item.replace(/^- /, '').replace(/\*\*/g, '<strong>').replace(/\*\*/g, '</strong>')}</li>`;
          });
          html += '</ul>';
        } else {
          // C'est un paragraphe normal
          html += `<p>${para.replace(/\*\*/g, '<strong>').replace(/\*\*/g, '</strong>')}</p>`;
        }
      });

      return html;
    }
  };

  // Initialiser le quiz quand le DOM est prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => quiz.init());
  } else {
    quiz.init();
  }

  // Exposer pour le bouton restart
  window.quizApp = quiz;

})();
