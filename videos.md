---
layout: page
title: "Bibliothèque Vidéos"
subtitle: "Vidéos courtes pour explorer la sexualité authentique"
permalink: /videos/
---

## Vidéos par rubrique

{% for rubrique in site.data.videos.rubriques %}

### {{ rubrique.nom }}

*{{ rubrique.description }}*

{% for video in rubrique.videos %}
<div class="video-item" style="margin-bottom: 2rem; padding: 1.5rem; background-color: var(--blanc-casse); border-radius: var(--radius-md);">
  <h4>{{ video.titre }}</h4>
  <p><em>Durée : {{ video.duree }}</em></p>
  <p>{{ video.description }}</p>
  {% if video.url != "" %}
  <a href="{{ video.url }}" class="btn btn-bordeaux" target="_blank">Voir la vidéo →</a>
  {% else %}
  <p style="color: var(--gris-moyen); font-style: italic;">Vidéo à venir prochainement</p>
  {% endif %}
</div>
{% endfor %}

---

{% endfor %}

## Vous voulez aller plus loin ?

### Ressources gratuites

Accédez au **Mémo PDF** et à la **Formation Vidéo "Enlever la Peur"** (9 vidéos).

**[Voir les ressources gratuites →]({{ '/ressources/' | relative_url }})**

### Séance Diagnostic Offerte

Pour clarifier où vous en êtes et voir si le passage à 100% est fait pour vous.

**[Réserver ma séance offerte →]({{ '/seance-diagnostic/' | relative_url }})**

### Le Parcours 12 Semaines

L'accompagnement complet pour vivre à 100% d'authenticité.

**[Découvrir le parcours →]({{ '/parcours-12-semaines/' | relative_url }})**

---

**Note :** Cette bibliothèque vidéo sera enrichie régulièrement. Revenez souvent pour découvrir de nouvelles vidéos.
