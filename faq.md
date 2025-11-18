---
layout: page
title: "Questions Fréquentes (FAQ)"
subtitle: "Réponses à vos questions sur le Parcours, l'approche, et la Séance Diagnostic"
permalink: /faq/
---

{% for categorie in site.data.faq.categories %}

## {{ categorie.nom }}

{% for item in categorie.questions %}

### {{ item.question }}

{{ item.reponse }}

---

{% endfor %}

{% endfor %}

## Vous ne trouvez pas la réponse à votre question ?

N'hésitez pas à [me contacter directement](/contact/). Je réponds personnellement à tous les messages.

Ou réservez directement une [Séance Diagnostic Offerte](/seance-diagnostic/) pour clarifier votre situation en 60 minutes de visio.
