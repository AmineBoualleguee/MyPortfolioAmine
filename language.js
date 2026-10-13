/* Presentation translations. Project names, technology names and credential names
   retain their official spelling. The downloadable PDF remains the original CV. */
(function () {
  'use strict';
  var language = 'en';
  try { language = localStorage.getItem('portfolio-language') === 'fr' ? 'fr' : 'en'; } catch (_) {}
  var dictionary = {
    'Illustrative CloudNative enterprise dashboard with orders, inventory reservations and processing activity; demo data.':'Maquette CloudNative avec commandes, réservations de stock et suivi des traitements ; données de démonstration.',
    'Illustrative multi-agent research assistant with a research brief, agent activity and demo report.':'Maquette d’assistant de recherche multi-agents avec sujet de recherche, activité des agents et rapport de démonstration.',
    'Azure data platform concept interface showing dataset runs, quarantine and watermark state; local demo with planned integrations.':'Maquette de plateforme Azure : exécutions, quarantaine et état des marqueurs de progression ; démonstration locale avec intégrations prévues.',
    'Illustrative CI/CD automation interface with pipeline stages, build logs and deployment environments; simulated run.':'Maquette CI/CD avec étapes du pipeline, journaux et environnements de déploiement ; exécution simulée.',
    'Illustrative real-time project management board with task columns, live collaboration and team activity; demo data.':'Maquette de gestion de projets en temps réel avec tâches et activité de l’équipe ; données de démonstration.',
    'Illustrative Medicollab interface with a patient list, shared medical record and messaging; fictional data.':'Maquette Medicollab avec patients, dossier médical partagé et messagerie ; données fictives.',
    'Illustrative data analytics AI workbench with dataset profiling, a natural-language question and generated SQL results; demo data.':'Maquette d’analyse de données par IA avec profil de données, question en langage naturel et résultats SQL ; données de démonstration.',
    'Illustrative HR management dashboard showing employees, departments, leave requests and recruitment overview.':'Maquette du tableau de bord RH : employ\u00e9s, d\u00e9partements, demandes de cong\u00e9 et suivi du recrutement.',
    'HealthVision AI illustrative interface showing a chest X-ray and demo analysis details.':'Interface illustrative HealthVision AI avec une radiographie thoracique et une analyse de d\u00e9monstration.',
    'Language':'Langue', 'Focus':'Expertises', 'Projects':'Projets', 'Skills':'Compétences', 'Journey':'Parcours',
    'Skip to projects':'Aller aux projets', 'Explore projects':'Explorer les projets', 'Download CV':'Télécharger le CV',
    'Software Engineer':'Ingénieur logiciel', 'AI Engineer · LLM · Agents':'Ingénieur IA · LLM · Agents',
    'building scalable & intelligent systems':'des systèmes évolutifs et intelligents',
    'I build platforms end to end —':'Je développe des plateformes de bout en bout —',
    'containerised microservices':'microservices conteneurisés', 'CI/CD and observability':'CI/CD et observabilité',
    'LLM-powered document pipelines':'pipelines documentaires intégrant des LLM', ', and production':', et des applications',
    'applications. Software Engineer based in Sousse, Tunisia, with three years of delivery behind me.':'en production. Ingénieur logiciel basé à Sousse, en Tunisie, avec trois ans d’expérience dans la réalisation de projets.',
    '3 yrs':'3 ans', 'Shipping software':'Développement logiciel', 'Projects delivered':'Projets réalisés', 'Azure certified':'Certifié Azure',
    'Tunisia':'Tunisie', 'Four layers, one engineer.':'Quatre expertises, un ingénieur.',
    'Most of my work sits where these overlap — infrastructure carrying an AI workload, or a data pipeline feeding a product surface. Pick a layer to filter the project log.':'Mes projets se situent au croisement de ces domaines : infrastructure pour l’IA, pipelines de données au service des applications. Choisissez un domaine pour filtrer les projets.',
    'Things I’ve built.':'Mes réalisations.',
    'projects from internships, client work and my own lab. Open any row for the full breakdown.':'projets réalisés en stage, pour des clients et à titre personnel. Ouvrez un projet pour découvrir les détails.',
    'The stack I reach for.':'Mes outils au quotidien.',
    'Grouped the way I actually use them — from the pipeline that builds the artefact to the dashboard that watches it in production.':'Regroupés selon leur usage, du pipeline de construction au tableau de bord qui surveille les applications en production.',
    'How I got here.':'Mon parcours.', 'Full-Stack Java / Angular Developer':'Développeur Full-Stack Java / Angular',
    'Designed, developed and maintained enterprise web applications on Spring Boot and Angular. Built REST APIs, optimised relational databases, and took part in Agile Scrum ceremonies and code reviews.':'Conception, développement et maintenance d’applications web d’entreprise avec Spring Boot et Angular. Création d’API REST, optimisation de bases relationnelles, participation aux cérémonies Scrum et aux revues de code.',
    'Computer engineering, with coursework and projects concentrated on cloud-native architecture, distributed systems and applied AI.':'Formation en informatique, avec des projets consacrés aux architectures cloud-native, aux systèmes distribués et à l’IA appliquée.',
    'Bachelor’s in software engineering — algorithms, databases, software architecture and web development.':'Licence en génie logiciel : algorithmique, bases de données, architecture logicielle et développement web.',
    'Let’s build something.':'Construisons ensemble.',
    'Available for engineering roles, internships and freelance work — remote or on-site in Tunisia. I usually reply within a day.':'Disponible pour des postes d’ingénieur, des stages et des missions freelance, à distance ou sur site en Tunisie. Je réponds généralement sous un jour.',
    'Email':'E-mail', 'Phone':'Téléphone', 'Based in':'Localisation', 'Your name':'Votre nom', 'Subject':'Objet', 'Message':'Message',
    'Compose message':'Rédiger le message',
    'This form opens your own mail client — nothing is stored or sent from this page.':'Ce formulaire ouvre votre messagerie. Aucune donnée n’est enregistrée ou envoyée depuis cette page.',
    'Backend / DevOps role at…':'Poste Backend / DevOps chez…',
    "A line or two about what you're working on.":'Quelques mots sur votre projet ou votre opportunité.',
    'Please fill in your name, email and message.':'Veuillez renseigner votre nom, votre e-mail et votre message.',
    'That email address doesn’t look right.':'Cette adresse e-mail ne semble pas valide.',
    'Your message is ready.':'Votre message est prêt.',
    'Open it in your mail client, or write to me directly at amin.bouallegue2002@gmail.com':'Ouvrez-le dans votre messagerie ou écrivez-moi directement à amin.bouallegue2002@gmail.com',
    'Open in mail app →':'Ouvrir dans la messagerie →', 'Back to top ↑':'Retour en haut ↑', 'Back to top':'Retour en haut',
    'Built from scratch: no framework, no template.':'Développé sur mesure : sans framework ni modèle.',
    'All work':'Tous les projets', 'Full breakdown':'Voir les détails', 'Flagship':'Projet phare', 'Ongoing':'En cours', 'Stack':'Technologies',
    'Close':'Fermer', 'Switch to dark mode':'Activer le thème sombre', 'Switch to light mode':'Activer le thème clair',
    'Filter projects by specialization':'Filtrer les projets par spécialisation', 'Sections':'Rubriques',
    'Software Engineer — Full-Stack, .NET, DevOps and AI':'Ingénieur logiciel — Full-Stack, .NET, DevOps et IA',
    'Portrait of Amine Bouallegue':'Portrait d’Amine Bouallegue',
    'Invoice with LayoutLMv3 field predictions boxed and labelled — supplier, client, line items, totals.':'Facture avec les champs prédits par LayoutLMv3 : fournisseur, client, lignes et totaux.',
    'Sign-in screen of the enterprise management and invoicing software.':'Écran de connexion du logiciel de gestion d’entreprise et de facturation.',
    'Modern data platform dashboard with pipeline runs, data quality and monitoring.':'Tableau de bord de la plateforme de données : exécutions des pipelines, qualité des données et supervision.',
    'Résumé':'CV', 'Download the PDF, or print this page':'Téléchargez le PDF ou imprimez cette page',
    'Software Engineer · DevOps, AI & Full-Stack Development':'Ingénieur logiciel · DevOps, IA et développement Full-Stack',
    'Experience & education':'Expérience et formation', 'Selected projects':'Sélection de projets', 'Technical skills':'Compétences techniques',
    'Download the PDF':'Télécharger le PDF', 'Print this page':'Imprimer cette page',
    'Enterprise web applications on Spring Boot and Angular; REST APIs, relational database optimisation, Agile Scrum code reviews.':'Applications web d’entreprise avec Spring Boot et Angular ; API REST, optimisation des bases relationnelles et revues de code en équipe Scrum.',
    'DevOps & Cloud':'DevOps et Cloud', 'AI & LLM Engineering':'Ingénierie IA et LLM', 'Data Engineering':'Ingénierie des données',
    'Full-Stack Development':'Développement Full-Stack', 'AI & LLM':'IA et LLM', 'Data':'Données',
    'DevOps & CI/CD':'DevOps et CI/CD', 'Containers & Orchestration':'Conteneurs et orchestration', 'Infrastructure as Code':'Infrastructure en tant que code',
    'Monitoring & Observability':'Supervision et observabilité', 'Databases':'Bases de données', 'ML & Computer Vision':'ML et vision par ordinateur',
    'CI/CD pipelines, Docker and Kubernetes, infrastructure as code, and the monitoring stack that tells you when it breaks.':'Pipelines CI/CD, Docker, Kubernetes, infrastructure en tant que code et supervision pour identifier les incidents.',
    'RAG systems, multi-agent orchestration, OCR and document extraction, plus computer-vision models with explainability.':'Systèmes RAG, orchestration multi-agents, OCR, extraction documentaire et modèles de vision par ordinateur explicables.',
    'Batch and streaming pipelines — Airflow, Spark, Kafka, dbt — landing in warehouses analysts can actually use.':'Pipelines batch et streaming avec Airflow, Spark, Kafka et dbt, alimentant des entrepôts exploitables par les analystes.',
    'Spring Boot, ASP.NET Core and Angular/React — secured REST APIs, real-time features, and interfaces people work in daily.':'Spring Boot, ASP.NET Core et Angular/React : API REST sécurisées, fonctionnalités temps réel et interfaces utilisées au quotidien.'
  };
  /* Same project order as PROJECTS. Each translation covers the original summary
     and every detail paragraph; no project facts or technologies are added. */
  var projectFrench = [
    ['Plateforme de facturation électronique automatisant le cycle complet, avec extraction LLM/OCR et agents IA signalant les anomalies avant validation humaine.',[
      'Plateforme d’entreprise automatisant le cycle complet de facturation électronique : ingestion, extraction par IA, validation, approbation et archivage.',
      'Développement du module d’extraction LLM/OCR en Python et FastAPI, avec des agents IA qui signalent les anomalies avant la revue humaine, et conception d’une API REST sécurisée par JWT et contrôle d’accès par rôles.',
      'Le tableau de bord Angular propose des filtres dynamiques et des indicateurs sur les factures à approuver. La plateforme est conteneurisée avec Docker Compose, automatisée par GitHub Actions et supervisée en continu, avec une sortie XML conforme aux exigences.'
    ]],
    ['Architecture de sept microservices, messagerie événementielle, déploiement Kubernetes avec Helm et observabilité complète.',[
      'Architecture distribuée couvrant l’authentification, les utilisateurs, le catalogue, les commandes, les stocks, les notifications et une passerelle API. Les services échangent des événements RabbitMQ et disposent chacun de leur base de données.',
      'Authentification JWT et gestion fine des rôles et permissions. Le pipeline CI/CD exécute les tests JUnit 5 et Testcontainers, puis déploie sur Kubernetes avec Helm.',
      'Prometheus et Grafana pour les métriques, OpenTelemetry et Tempo pour les traces distribuées, Loki pour les journaux centralisés.'
    ]],
    ['Agents spécialisés en planification, recherche, synthèse et validation, orchestrés avec LangGraph sur des LLM locaux pour conserver les documents sur le réseau.',[
      'Système multi-agents automatisant la recherche documentaire grâce à des agents spécialisés en planification, recherche, synthèse et validation.',
      'Orchestration avec LangGraph et LLM locaux servis par Ollama afin de conserver les documents sensibles sur site. Un service FastAPI expose le système et une interface Streamlit permet d’explorer les résultats.'
    ]],
    ['Détection de fractures sur radiographies avec YOLOv8 et cartes Grad-CAM pour visualiser les zones analysées par le modèle.',[
      'Plateforme d’aide au diagnostic détectant automatiquement les fractures osseuses sur radiographies avec YOLOv8.',
      'Grad-CAM produit des cartes d’explicabilité montrant les zones sur lesquelles le modèle s’appuie, un élément essentiel pour comprendre les prédictions médicales.',
      'L’inférence est exposée par FastAPI, optimisée pour le temps de réponse, avec une interface React pour visualiser les détections et les cartes d’explicabilité.'
    ]],
    ['Batch et streaming : Airflow orchestre Spark et dbt vers un entrepôt ; Kafka et Spark Streaming assurent les traitements temps réel.',[
      'Plateforme de données de bout en bout combinant des pipelines batch et streaming.',
      'En batch, Airflow orchestre les DAG, Spark assure le traitement distribué et dbt modélise les transformations. La validation automatique de la qualité protège les données chargées dans l’entrepôt PostgreSQL qui alimente Power BI.',
      'En streaming, les topics Kafka découplent producteurs et consommateurs, Spark Streaming transforme les événements en temps réel et Grafana suit la latence, le débit et les taux d’erreur.'
    ]],
    ['Plateforme Azure : orchestration Data Factory, transformations Databricks, entrepôt Synapse et tableaux de bord Power BI.',[
      'Plateforme cloud-native sur Azure, avec orchestration ETL automatisée par Azure Data Factory et transformations à grande échelle dans des notebooks Spark Azure Databricks.',
      'Les données brutes et traitées sont stockées dans Azure Blob Storage ; Azure Synapse Analytics centralise l’entrepôt. Les tableaux de bord Power BI servent directement les équipes métier.',
      'La maîtrise des coûts et la sécurité des accès font partie des exigences de conception.'
    ]],
    ['Analyse de l’activité de développement via l’API GitHub : fréquence des commits, délais des pull requests et contributions par projet.',[
      'Outil d’analyse récupérant les dépôts, commits, pull requests et contributions de plusieurs projets via l’API GitHub.',
      'Un pipeline Python/Pandas nettoie et structure les données dans PostgreSQL. FastAPI les expose et Power BI visualise la fréquence des commits, les délais des pull requests et l’activité des contributeurs.'
    ]],
    ['Pipeline de livraison du commit au déploiement conteneurisé : compilation, tests, contrôle SonarQube, image et déploiement.',[
      'Plateforme CI/CD automatisant le cycle complet de livraison, de la compilation au déploiement conteneurisé.',
      'Les pipelines automatisent la compilation, les tests unitaires et d’intégration, l’analyse de qualité SonarQube, la création des images Docker et le déploiement des artefacts.'
    ]],
    ['Environnement Kubernetes proche de la production : Deployments, Services, ConfigMaps, Secrets, mise à l’échelle et releases Helm.',[
      'Environnement Kubernetes proche de la production pour déployer et gérer des applications conteneurisées.',
      'Configuration des Deployments, Services, ConfigMaps et Secrets, gestion de la mise à l’échelle et automatisation des releases avec Helm.',
      'Intégration d’une solution de supervision pour suivre l’état des services.'
    ]],
    ['Métriques, traces distribuées et agrégation des journaux dans une même solution, avec tableaux de bord et alertes.',[
      'Solution complète d’observabilité pour les applications distribuées et les infrastructures conteneurisées.',
      'Collecte des métriques, traces distribuées et agrégation des journaux pour identifier les problèmes de performance et améliorer la disponibilité, avec tableaux de bord personnalisés et alertes.'
    ]],
    ['Gestion collaborative des projets et tâches avec synchronisation SignalR, gestion des rôles et tableaux de bord de productivité.',[
      'Plateforme collaborative de gestion des projets, tâches et workflows avec synchronisation en temps réel via SignalR.',
      'Gestion des rôles et permissions, notifications instantanées, suivi des tâches et tableaux de bord, sur une API REST ASP.NET Core sécurisée et une interface Angular.'
    ]],
    ['Gestion des dossiers médicaux avec architecture REST, contrôle d’accès par rôles et authentification Spring Security/JWT.',[
      'Plateforme sécurisée de gestion des dossiers médicaux électroniques.',
      'Architecture REST avec contrôle d’accès par rôles et authentification Spring Security/JWT, déployée sous forme de conteneurs.'
    ]],
    ['Application RH couvrant les employés, services, contrats, congés, recrutements et évaluations.',[
      'Application RH complète pour la gestion des employés, services, contrats, congés, recrutements et évaluations de performance.',
      'Authentification par rôles avec ASP.NET Identity et JWT, et tableaux de bord RH sur l’ensemble des données.'
    ]],
    ['ERP multi-module : utilisateurs, clients, fournisseurs, produits, stocks, achats, ventes et rapports, avec SignalR et Redis.',[
      'Plateforme ERP couvrant les utilisateurs, clients, fournisseurs, produits, stocks, achats, ventes et rapports.',
      'Opérations CRUD complexes entre les modules, notifications en temps réel avec SignalR et cache Redis pour les données fréquemment consultées.'
    ]],
    ['Analyse de jeux de données en langage naturel : un LLM génère des statistiques, visualisations et rapports.',[
      'Plateforme conversationnelle permettant aux utilisateurs métier d’interroger leurs jeux de données en langage naturel via un LLM.',
      'Génération automatique d’analyses statistiques, de visualisations interactives et de rapports personnalisés à partir de données structurées, orchestrée par un backend FastAPI.'
    ]],
    ['Application d’entreprise de gestion des employés, services, congés et évaluations, avec API REST sécurisées et Spring Security JWT/RBAC.',[
      'Application web d’entreprise pour la gestion des employés, services, demandes de congés et évaluations.',
      'API REST sécurisées avec authentification JWT et contrôle d’accès par rôles Spring Security, et interfaces Angular adaptées à chaque rôle.'
    ]]
  ];
  function normalise(text) { return text.replace(/\s+/g,' ').trim(); }
  PROJECTS.forEach(function (project, index) {
    dictionary[normalise(project.sum)] = projectFrench[index][0];
    project.desc.forEach(function (paragraph, part) { dictionary[normalise(paragraph)] = projectFrench[index][1][part]; });
  });
  var fragments = {
    'Personal project':'Projet personnel', 'Academic project':'Projet académique', 'Internship':'Stage',
    'PFE —':'PFE —', 'Sousse, Tunisia':'Sousse, Tunisie', 'Full-Stack Development':'Développement Full-Stack',
    'AI & LLM':'IA et LLM', 'DevOps & Cloud':'DevOps et Cloud', 'Filter projects:':'Filtrer les projets :',
    'DevOps & CI/CD':'DevOps et CI/CD', 'Full breakdown':'Voir les détails',
    'Jan ':'Janv. ', 'Apr ':'Avr. ', 'May ':'Mai ', 'Jun ':'Juin ', 'Jul ':'Juil. ', 'Aug ':'Août ', 'Sep ':'Sept. ', 'Dec ':'Déc. '
  };
  function translate(text) {
    if (language !== 'fr') return text;
    var key = normalise(text), translated = dictionary[key];
    if (!translated) {
      translated = key;
      Object.keys(fragments).forEach(function (part) { translated = translated.split(part).join(fragments[part]); });
      translated = translated.replace(/\b(\d+) projects\b/g,'$1 projets').replace(/\b(\d+) project\b/g,'$1 projet');
    }
    return text.replace(/\S[\s\S]*\S|\S/, translated);
  }
  window.portfolioTranslate = translate;
  var originals = new WeakMap(), attributes = new WeakMap();
  function updateText(node) {
    if (!node.parentElement || node.parentElement.closest('script,style,option,#languagePicker,#tline,.head h2')) return;
    var record = originals.get(node);
    if (!record || node.nodeValue !== record.rendered) record = {source:node.nodeValue};
    record.rendered = translate(record.source);
    if (node.nodeValue !== record.rendered) node.nodeValue = record.rendered;
    originals.set(node,record);
  }
  function updateAttributes(element) {
    if (element.matches('script,style,option')) return;
    var records = attributes.get(element) || {};
    ['aria-label','placeholder','alt','title'].forEach(function (name) {
      if (!element.hasAttribute(name)) return;
      var value = element.getAttribute(name), record = records[name];
      if (!record || value !== record.rendered) record = {source:value};
      record.rendered = translate(record.source);
      if (value !== record.rendered) element.setAttribute(name,record.rendered);
      records[name] = record;
    });
    attributes.set(element,records);
  }
  function apply(root) {
    if (root.nodeType === 3) { updateText(root); return; }
    if (root.nodeType !== 1 || root.matches('script,style,option,#tline')) return;
    updateAttributes(root);
    var walker = document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) updateText(walker.currentNode);
    root.querySelectorAll('[aria-label],[placeholder],[alt],[title]').forEach(updateAttributes);
  }
  var observer = new MutationObserver(function (changes) {
    observer.disconnect();
    changes.forEach(function (change) {
      if (change.type === 'childList') change.addedNodes.forEach(apply);
      else if (change.type === 'characterData') updateText(change.target);
      else updateAttributes(change.target);
    });
    observe();
  });
  function observe() { observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','placeholder','alt','title']}); }
  var picker = document.getElementById('languagePicker');
  var languageGroup = document.createElement('div');
  languageGroup.className = 'language-switcher';
  languageGroup.setAttribute('role','group');
  languageGroup.setAttribute('aria-label','Language');
  var languageButtons = ['en','fr'].map(function (code) {
    var button = document.createElement('button');
    button.type = 'button'; button.className = 'lang-button';
    button.lang = code; button.textContent = code.toUpperCase();
    button.setAttribute('aria-label',code === 'en' ? 'English' : 'Fran\u00e7ais');
    button.addEventListener('click',function () { setLanguage(code); });
    languageGroup.appendChild(button);
    return button;
  });
  picker.closest('.language-picker').hidden = true;
  picker.closest('.language-picker').after(languageGroup);
  var headings = Array.from(document.querySelectorAll('.head h2')).map(function (element) {
    return {element:element,source:element.textContent,animated:!!element.querySelector('.w')};
  });
  function setLanguage(value) {
    observer.disconnect(); language = value === 'fr' ? 'fr' : 'en';
    document.documentElement.lang = language; picker.value = language;
    languageButtons.forEach(function (button) {
      var selected = button.lang === language;
      button.classList.toggle('is-active',selected);
      button.setAttribute('aria-pressed',String(selected));
    });
    headings.forEach(function (heading) {
      var text = translate(heading.source);
      if (!heading.animated) { heading.element.textContent = text; return; }
      heading.element.replaceChildren();
      text.split(/\s+/).forEach(function (word,index) {
        if (index) heading.element.appendChild(document.createTextNode(' '));
        var mask = document.createElement('span'), inner = document.createElement('i');
        mask.className = 'w'; inner.textContent = word; mask.appendChild(inner); heading.element.appendChild(mask);
      });
    });
    apply(document.body);
    if (REDUCED) document.getElementById('tline').textContent = translate('Software Engineer');
    try { localStorage.setItem('portfolio-language',language); } catch (_) {}
    observe();
  }
  picker.addEventListener('change',function () { setLanguage(picker.value); });
  setLanguage(language);
})();
