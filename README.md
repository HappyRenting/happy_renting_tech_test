# Test Technique — Ruby on Rails / React

## 🎯 Objectif du test

Ce test a pour but d’évaluer votre capacité à :

- Lire et comprendre une codebase existante
- Vous adapter à une stack mêlant **Ruby on Rails**, **React**, **Vite.js**, **Formik**, **Yup**, **serializers**, **decorators**
- Respecter les conventions et patterns déjà présents
- Écrire un code propre, structuré et cohérent
- Utiliser les composants existants plutôt que de réinventer la roue

L’objectif principal est volontairement simple afin d’observer **comment vous vous débrouillez dans un environnement réel**, et non la quantité de code produite.

---

# 🧪 Mission A (Obligatoire) — Ajouter un modèle “Project” avec son CRUD complet

## 🎯 Description fonctionnelle

Vous devez ajouter un modèle **Project**, avec les contraintes suivantes :

- Un Project appartient à un User (`belongs_to :user`)
- Un Project possède au minimum ces attributs :
  - `title` (string)
  - `description` (text)
  - `user_id` (integer)
- Le CRUD doit être accessible depuis l’interface front (React) :
  - Liste des projects
  - Détail d’un project
  - Création / édition avec un formulaire Formik + validation Yup
  - Suppression
- L’API doit suivre la structure déjà présente pour les Users :
  - Controllers simples et cohérents
  - Serializers pour le JSON
  - Patterns déjà utilisés dans l’app (ex. decorators si pertinent)
- Le front doit réutiliser :
  - Les composants existants (inputs, buttons, drawer...)
  - Les hooks et helpers déjà présents
  - La logique de routing existante (si applicable)

### 🔍 Points particulièrement évalués

- Cohérence du code avec l’existant
- Qualité du code Ruby & React
- Structure des fichiers
- Bonne utilisation de Formik & Yup
- Compréhension du fonctionnement de Vite + React + Rails
- Clarté du JSON rendu via les serializers

---

# ⭐ Mission B (Bonus) — Ajouter un filtre de recherche sur les Users

Ce bonus n’est **pas obligatoire**, mais permet d’évaluer votre capacité à aller plus loin.

## 🎯 Objectif du bonus

Ajouter un champ de recherche par email dans la liste des Users.

### Côté backend :

- Ajouter un paramètre `q` dans le controller pour filtrer les users par email (recherche partielle)
- Maintenir un rendu JSON propre et cohérent via le serializer

### Côté frontend :

- Ajouter un champ de recherche réutilisant les composants existants
- Validation simple avec Yup
- Afficher les résultats filtrés à chaque modification
- Bonus du bonus : implémenter un *debounce*
- Utiliser la logique d’appel API déjà présente

### 🔍 Points évalués dans le bonus

- Lecture approfondie de la stack
- Gestion propre de l’état et des effets
- Capacité à améliorer sans casser l’existant
- Chaîne backend → frontend maîtrisée

---

# 🛠️ Conseils (non obligatoires)

- Prenez le temps de lire le code existant avant de coder.
- Inspirez-vous du CRUD User pour structurer celui des Projects.
- Utilisez les composants front déjà présents plutôt que d’en recréer de nouveaux.
- **Ajoutez des tests RSpec si vous êtes à l’aise** :
  - Tests de modèle (validations, associations)
  - Tests de controller (statuts HTTP, réponses JSON, structure renvoyée par le serializer)
  - Tests d’intégration simples (création, mise à jour, suppression d’un Project)
  Les tests ne sont pas obligatoires, mais ils montrent votre rigueur et votre capacité à travailler comme en production.
- N’ajoutez de nouveaux services / decorators que si cela reste cohérent avec l'existant.

---

# 📦 Rendu attendu

- Un lien vers un repository contenant votre solution
- Quelques lignes expliquant vos choix techniques et votre organisation
- Optionnel : les points que vous auriez améliorés avec plus de temps

---

Bonne chance et bon code !