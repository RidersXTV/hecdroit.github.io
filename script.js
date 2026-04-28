// BASE DE DONNÉES COMPLÈTE DU COURS
const courseData = {
    root: {
        title: "Sommaire Général",
        info: "Sélectionnez une des grandes branches du cours de Droit de l'entreprise pour commencer vos révisions.",
        children: ["notion", "sujets", "regle", "sources", "divisions", "public", "obligations"]
    },
    
    // --- 1. NOTION ET FONCTION DU DROIT ---
    notion: {
        title: "1. Notion et fonction du droit",
        info: "Cette section définit le cadre fondamental du droit et son rôle essentiel au sein de la collectivité humaine.",
        children: ["definition", "fonctions_droit", "sanctions"],
        parent: "root"
    },

    // SOUS-BRANCHE : DÉFINITION
    definition: {
        title: "Définition du droit",
        info: "Le droit est défini comme l’ensemble des règles de conduite, socialement édictées et sanctionnées, qui s'imposent aux membres de la société. <br><br> L'adage latin <strong>'Ubi societas, ibi ius'</strong> signifie que là où il y a une société, il y a forcément du droit.",
        children: ["droit_objectif", "droit_subjectif"],
        parent: "notion"
    },
    droit_objectif: {
        title: "Droit Objectif",
        info: "Désigné par 'le Droit', il s'agit de l'ensemble des règles de conduite, générales et abstraites, qui régissent les rapports des hommes entre eux et dont le respect est assuré, au besoin, par l’autorité publique.",
        children: [],
        parent: "definition"
    },
    droit_subjectif: {
        title: "Droit Subjectif",
        info: "Désigné par 'les droits', il s'agit de la prérogative qu’une personne détient sur une chose (droit réel) ou contre une autre personne (droit de créance) et qui est reconnue et protégée par le droit objectif.",
        children: [],
        parent: "definition"
    },

    // SOUS-BRANCHE : FONCTIONS DU DROIT
    fonctions_droit: {
        title: "Fonctions du droit",
        info: "Le droit remplit plusieurs missions vitales pour la collectivité.",
        children: ["pacifier", "organiser"],
        parent: "notion"
    },
    pacifier: {
        title: "Pacifier la société",
        info: "Le droit vise à instaurer la paix sociale (l'ordre) en remplaçant la force par la règle. Il garantit la <strong>sécurité juridique</strong> en permettant aux individus de prévoir les conséquences de leurs actes.",
        children: [],
        parent: "fonctions_droit"
    },
    organiser: {
        title: "Organiser la vie en commun",
        info: "Le droit définit les cadres dans lesquels s'exerce l'activité humaine. Il organise également le fonctionnement de l'État et de ses institutions.",
        children: [],
        parent: "fonctions_droit"
    },

    // SOUS-BRANCHE : SANCTIONS
    sanctions: {
        title: "Sanctions",
        info: "La règle de droit est coercitive ; sa violation entraîne une sanction de la part de l'État.",
        children: ["sanction_penale", "sanction_civile", "sanction_administrative"],
        parent: "notion"
    },
    sanction_penale: {
        title: "Sanction pénale",
        info: "Elle punit l'auteur d'une infraction à l'ordre public. Les infractions sont classées selon leur gravité : <br><ul><li><strong>Crimes :</strong> Infractions passibles d'une peine privative de liberté de plus de 3 ans.</li><li><strong>Délits :</strong> Infractions passibles d'une peine privative de liberté n'excédant pas 3 ans ou d'une peine pécuniaire.</li><li><strong>Contraventions :</strong> Infractions passibles de l'amende.</li></ul>",
        children: [],
        parent: "sanctions"
    },
    sanction_civile: {
        title: "Sanction civile",
        info: "Elle vise à rétablir l'équilibre rompu entre particuliers ou à réparer un dommage. <br> Exemples : <br><ul><li><strong>Nullité :</strong> L'acte est considéré comme n'ayant jamais existé.</li><li><strong>Dommages-intérêts :</strong> Somme d'argent pour réparer un préjudice.</li><li><strong>Exécution forcée :</strong> Obligation physique ou financière de remplir son engagement.</li></ul>",
        children: [],
        parent: "sanctions"
    },
    sanction_administrative: {
        title: "Sanction administrative",
        info: "Mesure prise par une autorité administrative suite à la violation d'une règle de droit public. <br> Exemples : retrait du permis de conduire, retrait d'une licence, ou amendes administratives.",
        children: [],
        parent: "sanctions"
    },

    // --- 2. LES SUJETS DE DROIT ---
    sujets: {
        title: "2. Les sujets de droit",
        info: "Un sujet de droit est un être ou une entité apte à être titulaire de droits et d'obligations. Le droit reconnaît deux catégories de sujets.",
        children: ["pers_physique", "pers_morale"],
        parent: "root"
    },

    // SOUS-BRANCHE : PERSONNE PHYSIQUE
    pers_physique: {
        title: "La Personne physique",
        info: "Concerne tous les êtres humains. La personnalité juridique commence par la naissance (si l'enfant naît vivant) et finit par la mort.",
        children: ["phys_jouissance", "phys_exercice"],
        parent: "sujets"
    },
    phys_jouissance: {
        title: "Jouissance des droits civils (PP)",
        info: "Tout être humain a la jouissance des droits civils. C'est l'aptitude d'une personne à devenir titulaire de droits et d'obligations (capacité passive). Elle est totale pour tous les êtres humains quel que soit leur âge ou leur santé d'esprit.",
        children: [],
        parent: "pers_physique"
    },
    phys_exercice: {
        title: "Exercice des droits civils (PP)",
        info: "C'est la capacité de produire des effets juridiques par ses propres actes (capacité active). <br><br><strong>Deux conditions cumulatives sont requises :</strong> <br><ul><li><strong>La Majorité :</strong> Avoir 18 ans révolus.</li><li><strong>La Capacité de discernement :</strong> Toute personne qui n'est pas dépourvue de la faculté d'agir raisonnablement (n'étant pas affectée par le bas âge, une déficience mentale, un trouble psychique, l'ivresse ou d'autres causes semblables).</li></ul>",
        children: [],
        parent: "pers_physique"
    },

    // SOUS-BRANCHE : PERSONNE MORALE
    pers_morale: {
        title: "La Personne morale",
        info: "Ce sont des groupements de personnes (ex: SA, association) ou des masses de biens (ex: fondation) auxquels le droit accorde la personnalité juridique. Elles acquièrent la personnalité par l'inscription au registre du commerce (sauf exceptions).",
        children: ["morale_jouissance", "morale_exercice"],
        parent: "sujets"
    },
    morale_jouissance: {
        title: "Jouissance des droits civils (PM)",
        info: "La personne morale jouit de tous les droits qui ne sont pas inséparables de la nature humaine (elle ne peut pas se marier ou tester, par exemple). Elle a son propre nom, son siège et son patrimoine distinct de celui des membres qui la composent.",
        children: [],
        parent: "pers_morale"
    },
    morale_exercice: {
        title: "Exercice des droits civils (PM)",
        info: "La personne morale exerce ses droits par l'intermédiaire de ses <strong>organes</strong> (Conseil d'administration, direction, etc.). Elle possède l'exercice des droits civils dès qu'elle a nommé les organes prescrits par la loi et les statuts.",
        children: [],
        parent: "pers_morale"
    },

    // --- 3. LA RÈGLE DE DROIT ---
    regle: {
        title: "3. La règle de droit",
        info: "La règle de droit est une règle de conduite humaine dont le respect est assuré par l’autorité publique. Elle se distingue des autres règles (morales, religieuses) par son caractère coercitif.",
        children: ["caracteres_regle", "structure_double", "nature_regle"],
        parent: "root"
    },

    // SOUS-BRANCHE : CARACTÈRES
    caracteres_regle: {
        title: "Caractères de la règle de droit",
        info: "Pour remplir sa fonction d'organisation sociale, la règle doit présenter quatre caractéristiques fondamentales.",
        children: ["regle_generale_detail", "regle_abstraite_detail", "regle_obligatoire_detail", "regle_coercitive_detail"],
        parent: "regle"
    },
    regle_generale_detail: {
        title: "Générale",
        info: "La règle est <strong>générale</strong> car elle ne s'adresse pas à un individu nommé, mais à toutes les personnes qui se trouvent ou se trouveront dans la situation qu'elle prévoit. Elle garantit l'égalité de traitement.",
        children: [],
        parent: "caracteres_regle"
    },
    regle_abstraite_detail: {
        title: "Abstraite",
        info: "La règle est <strong>abstraite</strong> car elle s'applique à un nombre indéterminé de situations futures.",
        children: [],
        parent: "caracteres_regle"
    },
    regle_obligatoire_detail: {
        title: "Obligatoire",
        info: "La règle de droit n'est pas un simple conseil ; elle est une <strong>prescription</strong>. Elle ordonne de faire, de ne pas faire ou de permettre quelque chose.",
        children: [],
        parent: "caracteres_regle"
    },
    regle_coercitive_detail: {
        title: "Coercitive",
        info: "Le respect de la règle est garanti par l'État. Si la règle est transgressée, l'autorité publique peut sanctionner son auteur, au besoin par la force.",
        children: [],
        parent: "caracteres_regle"
    },

    // SOUS-BRANCHE : LA STRUCTURE DOUBLE (Nouveau)
    structure_double: {
        title: "La structure double",
        info: "Toute règle de droit obéit à une structure logique à deux éléments fondamentaux.",
        children: ["etat_de_fait", "consequence_juridique"],
        parent: "regle"
    },
    etat_de_fait: {
        title: "L'état de fait (L'hypothèse)",
        info: "C'est la proposition conditionnelle. Il s'agit des conditions qui doivent être remplies (la situation de fait) pour que la règle s'applique. <br><br><em>Exemple (Art. 41 CO) : 'Celui qui cause sans droit un dommage à autrui...'</em>",
        children: [],
        parent: "structure_double"
    },
    consequence_juridique: {
        title: "La conséquence juridique",
        info: "C'est l'effet prévu par la loi lorsque les conditions de l'état de fait sont réalisées. <br><br><em>Exemple (suite Art. 41 CO) : '...est tenu de le réparer.'</em>",
        children: [],
        parent: "structure_double"
    },

    // SOUS-BRANCHE : NATURE (FORCE OBLIGATOIRE)
    nature_regle: {
        title: "Nature des règles",
        info: "Selon l'importance de l'intérêt protégé, la règle s'impose avec plus ou moins de force à la volonté des particuliers.",
        children: ["regle_imperative_complet", "regle_dispositive_complet"],
        parent: "regle"
    },
    regle_imperative_complet: {
        title: "Règle Impérative (Droit impératif)",
        info: "Règle à laquelle on ne peut <span class='highlight'>absolument pas déroger</span> par convention contraire. <br> <strong>Exemple :</strong> L'Art. 129 CO qui interdit de modifier par avance les délais de prescription.",
        children: [],
        parent: "nature_regle"
    },
    regle_dispositive_complet: {
        title: "Règle Dispositive (Droit supplétif)",
        info: "Règle à laquelle les parties <span class='success'>peuvent déroger</span>. <br> Elle ne s'applique que si les parties n'ont rien prévu d'autre. <br> <strong>Exemple :</strong> L'Art. 189 CO (frais de délivrance à la charge du vendeur, sauf accord contraire).",
        children: [],
        parent: "nature_regle"
    },
    // --- 4. LES SOURCES DU DROIT (Structure en Arbre Exhaustive) ---
    sources: {
        title: "4. Les sources du droit",
        info: "Les sources du droit sont les formes sous lesquelles les règles apparaissent et deviennent obligatoires. On distingue les sources formelles (obligatoires) des sources matérielles (interprétatives).",
        children: ["coutume", "loi_large", "jurisprudence", "doctrine", "usages_commerciaux"],
        parent: "root"
    },

    // --- ZOOM : COUTUME ET USAGES ---
    coutume: {
        title: "La Coutume",
        info: "Usage constant et conviction juridique (p. 26). <br><strong>Conditions cumulatives :</strong> <br>1. <strong>Usage constant :</strong> Pratique répétée sur une longue durée. <br>2. <strong>Opinio iuris :</strong> Conviction des individus d'obéir à une règle de droit.",
        children: [], parent: "sources"
    },
    usages_commerciaux: {
        title: "Usages et Autoréglementation",
        info: "Règles spécifiques au commerce (Incoterms, déontologie). <br>Elles permettent au droit de s'adapter vite aux besoins des entreprises sans passer par le Parlement.",
        children: [], parent: "sources"
    },
    
    traites_internationaux: {
        title: "Traités internationaux",
        info: "Accords conclus entre États ou avec des organisations internationales. <br><br><strong>Détails du cours (p. 20) :</strong> <br><ul><li><strong>Primauté :</strong> Ils l'emportent en principe sur le droit national.</li><li><strong>Domaines :</strong> Droits de l'homme (CEDH), économie, environnement, etc.</li><li><strong>Exemple majeur :</strong> La Convention européenne des droits de l'homme (CEDH) garantit des libertés fondamentales que la Suisse doit respecter.</li></ul>",
        children: [],
        parent: "loi_large"
    },

    loi_large: {
        title: "La Loi (au sens large)",
        info: "La source écrite principale, structurée en pyramide.",
        children: ["traites_internationaux", "constitution", "loi_etroit", "ordonnance", "application_loi"],
        parent: "sources"
    },

    // --- ZOOM : CONSTITUTION FÉDÉRALE (Arbre détaillé) ---
    constitution: {
        title: "La Constitution fédérale (Cst)",
        info: "Loi fondamentale au sommet de la hiérarchie (p. 22).",
        children: ["cst_adoption", "cst_droits", "cst_organisation", "cst_separation", "cst_primante"],
        parent: "loi_large"
    },
    cst_adoption: {
        title: "Adoption et Révision",
        info: "<strong>Révision totale ou partielle :</strong> Elle nécessite la <span class='highlight'>double majorité du Peuple et des Cantons</span>. <br><ul><li><strong>Initiative populaire :</strong> 100'000 citoyens peuvent demander une modification (p. 23).</li><li><strong>Référendum obligatoire :</strong> Toute révision décidée par le Parlement est soumise au vote.</li></ul>",
        children: [], parent: "constitution"
    },
    cst_droits: {
        title: "Droits Fondamentaux",
        info: "Articles 7 à 36 Cst. Protègent l'individu contre l'État. <br><ul><li><strong>Art. 7 :</strong> Dignité humaine (fondement).</li><li><strong>Art. 8 :</strong> Égalité devant la loi.</li><li><strong>Art. 27 :</strong> Liberté économique (crucial pour l'entreprise).</li><li><strong>Art. 26 :</strong> Garantie de la propriété.</li></ul>",
        children: [], parent: "constitution"
    },
    cst_organisation: {
        title: "Organisation de l'État",
        info: "La Suisse est un État fédéral à 3 niveaux (Confédération, Cantons, Communes). <br><strong>Art. 3 Cst :</strong> Les Cantons sont souverains en dehors des compétences expressément déléguées à la Confédération (<span class='success'>compétence résiduelle</span>).",
        children: [], parent: "constitution"
    },
    cst_separation: {
        title: "Séparation des pouvoirs",
        info: "Trois pouvoirs indépendants : <br>1. <strong>Législatif :</strong> Assemblée fédérale (fait les lois). <br>2. <strong>Exécutif :</strong> Conseil fédéral (gouverne/administre). <br>3. <strong>Judiciaire :</strong> Tribunal fédéral (tranche les litiges).",
        children: [], parent: "constitution"
    },
    cst_primante: {
        title: "Primauté (Art. 49 Cst)",
        info: "Le droit fédéral l'emporte sur le droit cantonal qui lui est contraire. 'La force dérogatoire du droit fédéral'.",
        children: [], parent: "constitution"
    },

    // --- ZOOM : LOIS ET ORDONNANCES ---
    loi_etroit: {
        title: "Lois fédérale",
        info: "Édictées par le Parlement (p. 24). <br><ul><li><strong>Exemples :</strong> Code Civil, Code des Obligations.</li><li><strong>Référendum facultatif :</strong> 50'000 citoyens ou 8 cantons peuvent demander un vote populaire.</li></ul>",
        children: [], parent: "loi_large"
    },
    ordonnance: {
        title: "Ordonnances",
        info: "Édictées par le Conseil fédéral pour appliquer les lois (p. 25). <br><ul><li><strong>Nature :</strong> Rang inférieur à la loi.</li><li><strong>Sanction :</strong> Jamais de référendum possible contre une ordonnance.</li></ul>",
        children: [], parent: "loi_large"
    },

    doctrine: {
        title: "La Doctrine",
        info: "Opinions des savants (p. 27). <br>Indispensable pour éclairer le juge sur des cas complexes, bien qu'elle n'ait pas de force obligatoire.",
        children: [], parent: "sources"
    },

    // --- NOUVELLE BRANCHE : L'APPLICATION DE LA LOI (Dès page 26) ---
    application_loi: {
        title: "L'application de la loi",
        info: "L'application de la loi consiste à passer de la règle générale et abstraite au cas concret. Ce processus suit des règles strictes de temps, d'espace et d'interprétation.",
        children: ["app_temps", "app_espace", "app_interpretation"],
        parent: "loi_large"
    },
    app_temps: {
        title: "Application dans le temps",
        info: "<strong>Entrée en vigueur :</strong> Une loi ne s'applique qu'après sa publication officielle. <br><ul><li><strong>Non-rétroactivité :</strong> Principe selon lequel la loi ne s'applique pas aux faits nés avant son entrée en vigueur (sécurité juridique).</li><li><strong>Abrogation :</strong> La loi cesse de s'appliquer lorsqu'elle est supprimée par une nouvelle loi ou par un vote.</li></ul>",
        children: [], parent: "application_loi"
    },
    app_espace: {
        title: "Application dans l'espace",
        info: "<strong>Principe de territorialité :</strong> La loi s'applique sur tout le territoire de l'État qui l'a édictée. <br> En Suisse, cela implique de distinguer si une règle relève du droit fédéral (tout le pays) ou du droit cantonal (uniquement le canton concerné).",
        children: [], parent: "application_loi"
    },
    app_interpretation: {
        title: "Interprétation de la loi",
        info: "Le juge doit chercher le sens véritable de la loi. <br><strong>Méthodes d'interprétation :</strong> <br><ul><li><strong>Littérale (grammaticale) :</strong> Sens des mots dans les langues officielles.</li><li><strong>Historique :</strong> Intention du législateur au moment du vote.</li><li><strong>Téléologique :</strong> But et but social recherché par la règle.</li><li><strong>Systématique :</strong> Place de la règle dans l'ensemble de la loi.</li></ul>",
        children: [], parent: "application_loi"
    },

    // --- DÉVELOPPEMENT DE LA JURISPRUDENCE (Dès page 28) ---
    jurisprudence: {
        title: "La Jurisprudence",
        info: "Ensemble des décisions rendues par les tribunaux. Elle est une source matérielle de première importance.",
        children: ["juris_role", "juris_effets", "juris_revirement"],
        parent: "sources"
    },

    juris_role: {
        title: "Rôle de la jurisprudence",
        info: "Le juge ne peut pas refuser de juger sous prétexte que la loi est obscure ou incomplète (déni de justice). <br><br><strong>Ses missions :</strong> <br><ul><li><strong>Appliquer la loi :</strong> Adapter la règle abstraite au cas particulier.</li><li><strong>Préciser la loi :</strong> Définir les notions imprécises ou 'clauses générales' (ex: 'justes motifs', 'bonne foi').</li><li><strong>Combler les lacunes :</strong> Selon l'<strong>Art. 1 al. 2 CC</strong>, si la loi est muette, le juge doit créer la règle qu'il établirait s'il était législateur.</li></ul>",
        children: [], parent: "jurisprudence"
    },

    juris_effets: {
        title: "Effets de la jurisprudence",
        info: "Contrairement à la loi, la jurisprudence n'a pas une portée générale immédiate, mais son influence est réelle. <br><br><ul><li><strong>Autorité relative :</strong> La décision ne lie formellement que les parties au procès (autorité de la chose jugée).</li><li><strong>Unification :</strong> Les décisions du <strong>Tribunal fédéral (TF)</strong> créent des précédents. Les tribunaux inférieurs s'y conforment pour éviter que leurs jugements ne soient annulés en appel.</li><li><strong>Sécurité juridique :</strong> Elle permet une application prévisible et uniforme du droit sur tout le territoire.</li></ul>",
        children: [], parent: "jurisprudence"
    },

    juris_revirement: {
        title: "Le Revirement de jurisprudence",
        info: "Le Tribunal fédéral peut changer d'avis et modifier sa manière d'interpréter une règle. C'est ce qu'on appelle un revirement. <br><br><strong>Conditions et caractéristiques :</strong> <br><ul><li><strong>Raisons :</strong> Changement des mœurs, évolution technique ou prise de conscience d'une erreur passée.</li><li><strong>Stabilité vs Évolution :</strong> Le juge doit trouver un équilibre entre le besoin de stabilité (ne pas changer d'avis sans cesse) et la nécessité d'adapter le droit à la réalité.</li><li><strong>Conséquence :</strong> La nouvelle interprétation s'appliquera désormais à tous les cas futurs similaires.</li></ul>",
        children: [], parent: "jurisprudence"
    },
    
    // --- 5. LES GRANDES DIVISIONS DU DROIT (Dès page 30) ---
    divisions: {
        title: "5. Les grandes divisions du droit",
        info: "Le droit n'est pas un bloc monolithique ; il est divisé en grandes catégories pour mieux organiser les rapports sociaux.",
        children: ["div_general", "div_public_prive", "div_materiel_formel"],
        parent: "root"
    },

    // --- BRANCHE : EN GÉNÉRAL ---
    div_general: {
        title: "En général",
        info: "L'ordre juridique est la somme des règles de droit. Pour s'y retrouver, la doctrine a établi des classifications fondées sur l'objet de la règle ou les personnes qu'elle régit. <br><br><strong>Points clés :</strong> <br><ul><li>La division la plus ancienne et la plus importante est celle qui oppose le <strong>droit public</strong> au <strong>droit privé</strong>.</li><li>Une règle de droit peut appartenir à plusieurs catégories, mais sa nature (impérative ou dispositive) dépendra souvent de sa branche d'origine.</li></ul>",
        children: [],
        parent: "divisions"
    },

    // --- BRANCHE : DROIT PUBLIC ET DROIT PRIVÉ ---
    div_public_prive: {
        title: "Le droit public et le droit privé",
        info: "C'est la <em>'Summa Divisio'</em> (la division suprême). Elle repose sur trois critères principaux soulignés dans le cours.",
        children: ["detail_droit_public", "detail_droit_prive"],
        parent: "divisions"
    },

    detail_droit_public: {
        title: "Le Droit Public",
        info: "Le droit public régit l'organisation de l'État et les rapports entre l'État (agissant comme puissance publique) et les particuliers. <br><br><ul><li><span class='highlight'>Lien de subordination</span> : L'État impose sa volonté au particulier par des décisions unilatérales.</li><li><span class='highlight'>Intérêt général</span> : Le but est la satisfaction des besoins de la collectivité.</li><li><span class='highlight'>Caractère impératif</span> : Les règles de droit public sont presque toujours impératives (on ne peut pas y déroger).</li></ul><br><strong>Comprend :</strong> Droit constitutionnel, administratif, pénal et fiscal.",
        children: [],
        parent: "div_public_prive"
    },

    detail_droit_prive: {
        title: "Le Droit Privé",
        info: "Le droit privé régit les rapports entre les particuliers (personnes physiques ou morales) ou entre l'État et les particuliers quand l'État n'agit pas en puissance publique. <br><br><ul><li><span class='success'>Rapport d'égalité</span> : Les parties traitent d'égal à égal.</li><li><span class='success'>Intérêt particulier</span> : Vise la satisfaction des besoins individuels.</li><li><span class='success'>Autonomie de la volonté</span> : Les règles sont souvent <strong>dispositives</strong> (on peut les modifier par contrat).</li></ul><br><strong>Comprend :</strong> Droit civil (CC) et Droit des obligations (CO).",
        children: [],
        parent: "div_public_prive"
    },

    // --- BRANCHE : DROIT MATÉRIEL ET DROIT FORMEL ---
    div_materiel_formel: {
        title: "Le droit matériel et le droit formel",
        info: "Cette distinction concerne l'objet même de la règle : le fond contre la forme.",
        children: ["detail_droit_materiel", "detail_droit_formel"],
        parent: "divisions"
    },

    detail_droit_materiel: {
        title: "Le Droit Matériel (Droit de fond)",
        info: "Le droit matériel comprend les règles de conduite qui définissent les <strong>droits et les obligations</strong> des personnes. <br><br><strong>Exemple :</strong> L'article 41 CO (celui qui cause un dommage doit le réparer) est une règle de fond car elle définit une obligation.",
        children: [],
        parent: "div_materiel_formel"
    },

    detail_droit_formel: {
        title: "Le Droit Formel (Droit de procédure)",
        info: "Le droit formel (ou procédural) comprend les règles qui fixent la <strong>marche à suivre</strong> pour faire valoir ses droits de fond ou pour les faire appliquer par les autorités. <br><br><strong>Rôles soulignés :</strong> <br><ul><li>Organisation des autorités et des tribunaux.</li><li>Déroulement du procès (délais, preuves).</li><li>Voies de recours.</li></ul><br><strong>Exemples :</strong> Code de procédure civile (CPC), Code de procédure pénale (CPP).",
        children: [],
        parent: "div_materiel_formel"
    },

    // --- 6. DROIT PUBLIC ---
    public: {
        title: "6. Droit de l'entreprise",
        info: "Le droit public est l’ensemble des règles juridiques régissant l’accomplissement de tâches publiques et poursuivant un intérêt public.",
        children: ["droit_constitutionnel", "droit_administratif", "droit_penal"],
        parent: "root"
    },
    // --- 6.1 LE DROIT CONSTITUTIONNEL (Dès page 33 du cours) ---
    droit_constitutionnel: {
        title: "Le droit constitutionnel",
        info: "Cette branche examine l'impact de la Constitution fédérale sur l'activité économique et les droits des entreprises.",
        children: ["portee_cst", "libertes_fondamentales"],
        parent: "public"
    },

    // SOUS-BRANCHE : PORTÉE
    portee_cst: {
        title: "La portée du droit constitutionnel",
        info: "Le droit constitutionnel définit le cadre dans lequel l'entreprise peut agir. <br><br><ul><li>Il garantit la <span class='highlight'>liberté d'action</span> des acteurs économiques face à l'État.</li><li>Il fixe les limites de l'intervention étatique pour protéger l'initiative privée.</li><li>Il assure l'unité de l'espace économique suisse.</li></ul>",
        children: [],
        parent: "droit_constitutionnel"
    },

    // SOUS-BRANCHE : LIBERTÉS FONDAMENTALES
    libertes_fondamentales: {
        title: "Les libertés fondamentales et leur restriction",
        info: "Les libertés ne sont pas absolues ; l'État peut les limiter à des conditions très strictes fixées par la Constitution elle-même.",
        children: ["principes_generaux_lib", "restriction_lib", "liberte_economique", "liberte_association"],
        parent: "droit_constitutionnel"
    },

    principes_generaux_lib: {
        title: "Les principes généraux",
        info: "Les droits fondamentaux s'appliquent à toute personne physique ou morale (entreprise) se trouvant en Suisse. <br><br><ul><li>L'État a l'obligation de respecter, protéger et réaliser les droits fondamentaux.</li><li>Les particuliers doivent également respecter les droits fondamentaux d'autrui dans leurs relations privées (effet horizontal).</li></ul>",
        children: [],
        parent: "libertes_fondamentales"
    },

    restriction_lib: {
        title: "La restriction des libertés fondamentales",
        info: "Selon l'<strong>Article 36 Cst</strong>, toute restriction d'un droit fondamental doit remplir <span class='highlight'>quatre conditions cumulatives</span> soulignées dans le cours : <br><br><ol><li><strong>Base légale :</strong> La restriction doit être prévue par une loi.</li><li><strong>Intérêt public :</strong> Elle doit être justifiée par un intérêt public prépondérant ou par la protection des droits d'autrui.</li><li><strong>Proportionnalité :</strong> La mesure doit être apte, nécessaire et raisonnable pour atteindre le but visé.</li><li><strong>Essence du droit :</strong> L'essence du droit fondamental est inviolable.</li></ol>",
        children: [],
        parent: "libertes_fondamentales"
    },

    liberte_economique: {
        title: "La liberté économique (Art. 27 Cst)",
        info: "C'est la liberté fondamentale pivot pour le droit de l'entreprise. <br><br><ul><li>Elle comprend notamment le <span class='success'>libre choix de la profession</span> ainsi que le <span class='success'>libre accès à une activité économique lucrative privée</span> et son libre exercice.</li><li>Elle protège toute activité économique privée exercée en vue de l'obtention d'un gain.</li></ul><br><strong>Distinction importante :</strong> L'État ne peut prendre des mesures qui dérogent au principe de la liberté économique que si elles sont prévues par la Constitution ou fondées sur des prérogatives cantonales régulières.",
        children: [],
        parent: "libertes_fondamentales"
    },

    liberte_association: {
        title: "Liberté d'association et syndicale",
        info: "Ces libertés garantissent le droit de se regrouper pour défendre des intérêts communs. <br><br><ul><li><strong>Liberté d'association (Art. 23 Cst) :</strong> Toute personne a le droit de former des associations, d'y adhérer ou de ne pas y adhérer.</li><li><strong>Liberté syndicale (Art. 28 Cst) :</strong> Les travailleurs et les employeurs ont le droit de s'unir pour la défense de leurs intérêts, de former des associations professionnelles et d'y adhérer.</li></ul>",
        children: [],
        parent: "libertes_fondamentales"
    },

    // --- 6.2 LE DROIT ADMINISTRATIF (Dès page 35 du cours) ---
    droit_administratif: {
        title: "6.2 Le droit administratif",
        info: "Ensemble des règles de droit public qui régissent l'organisation et l'activité de l'administration, ainsi que les rapports entre l'administration et les administrés.",
        children: ["admin_definition", "admin_organisation", "admin_activite", "admin_procedure"],
        parent: "public"
    },

    // SOUS-BRANCHE : DÉFINITION
    admin_definition: {
        title: "Définition et notion",
        info: "Le droit administratif est le <strong>droit de l'action publique</strong>. <br><br><ul><li>Il s'agit d'un <span class='highlight'>droit interne</span> (propre à chaque État ou canton).</li><li>Il appartient au <span class='highlight'>droit public</span>, impliquant un rapport de subordination (l'intérêt général prime sur l'intérêt particulier).</li><li>Il règle les tâches concrètes de l'État (police, santé, éducation, infrastructures).</li></ul>",
        children: [],
        parent: "droit_administratif"
    },

    // SOUS-BRANCHE : ORGANISATION
    admin_organisation: {
        title: "L'organisation de l'administration",
        info: "L'administration est structurée pour remplir les tâches de l'État à différents échelons. <br><br><strong>Notions clés :</strong> <br><ul><li><strong>Administration centralisée :</strong> Directement rattachée au pouvoir politique (Départements, Offices).</li><li><strong>Administration décentralisée :</strong> Entités autonomes chargées de tâches spécifiques (ex: CFF, La Poste, universités).</li><li><strong>Collectivités publiques :</strong> En Suisse, l'administration est répartie entre la Confédération, les Cantons et les Communes.</li></ul>",
        children: [],
        parent: "droit_administratif"
    },

    // SOUS-BRANCHE : ACTIVITÉ (BRANCHE DÉTAILLÉE)
    admin_activite: {
        title: "L'activité de l'administration",
        info: "L'administration agit par des actes juridiques pour accomplir ses tâches.",
        children: ["decision_vs_contrat", "principe_legalite", "principe_interet_public", "principe_proportionnalite", "principe_bonne_foi", "principe_non_retroactivite", "modalites_decision"],
        parent: "droit_administratif"
    },

    decision_vs_contrat: {
        title: "Décision vs Contrat administratif",
        info: "<strong>1. La Décision administrative (Moyen principal) :</strong> Acte <span class='highlight'>unilatéral</span> et individuel par lequel une autorité règle un cas d'espèce de façon obligatoire et contraignante. <br><br><strong>2. Le Contrat de droit administratif :</strong> Accord entre l'administration et un particulier pour accomplir une tâche d'intérêt public. Il est plus rare car il suppose un pied d'égalité partiel.",
        children: [],
        parent: "admin_activite"
    },

    principe_legalite: {
        title: "Principe de la légalité (Art. 5 al. 1 Cst.)",
        info: "<strong>'Le droit est la base et la limite de l'activité de l'État.'</strong> <br><br><ul><li>L'administration ne peut agir que si une loi l'y autorise expressément.</li><li>Elle doit respecter la hiérarchie des normes et ne peut pas agir arbitrairement.</li></ul>",
        children: [],
        parent: "admin_activite"
    },

    principe_interet_public: {
        title: "Intérêt public (Art. 5 al. 2 Cst.)",
        info: "Toute activité de l'État doit répondre à un <span class='highlight'>intérêt public</span>. <br><br>L'administration ne peut pas agir pour satisfaire des intérêts privés ou purement politiques ; elle doit viser le bien de la collectivité (sécurité, santé publique, ordre public).",
        children: [],
        parent: "admin_activite"
    },

    principe_proportionnalite: {
        title: "Proportionnalité (Art. 5 al. 2 Cst.)",
        info: "La mesure prise par l'État doit être <span class='highlight'>proportionnée au but visé</span>. <br><br><strong>Les 3 conditions :</strong> <br><ol><li><strong>Aptitude :</strong> La mesure doit permettre d'atteindre le but.</li><li><strong>Nécessité :</strong> On doit choisir la mesure la moins incisive possible.</li><li><strong>Proportionnalité au sens étroit :</strong> Il doit y avoir un équilibre raisonnable entre le but visé et la restriction imposée.</li></ol>",
        children: [],
        parent: "admin_activite"
    },

    principe_bonne_foi: {
        title: "Bonne foi (Art. 5 al. 3 Cst.)",
        info: "L'État et les particuliers doivent agir de manière <strong>loyale</strong>. <br><br><strong>Conséquence majeure :</strong> <br><ul><li><strong>Protection de la confiance :</strong> Le citoyen doit pouvoir compter sur les informations ou promesses données par l'administration (si elles sont précises et que le citoyen a pris des dispositions sur cette base).</li><li>Interdiction du comportement contradictoire.</li></ul>",
        children: [],
        parent: "admin_activite"
    },

    principe_non_retroactivite: {
        title: "Principe de non-rétroactivité",
        info: "En principe, une règle nouvelle ne s'applique pas à des faits qui se sont entièrement passés sous l'empire de l'ancienne loi. <br><br>Cela garantit la <span class='highlight'>sécurité juridique</span> : les entreprises doivent savoir à quelle sauce elles seront mangées au moment où elles agissent.",
        children: [],
        parent: "admin_activite"
    },

    modalites_decision: {
        title: "Modalités de la décision",
        info: "Une décision administrative doit respecter certaines formes : <br><ul><li>Elle doit être <strong>notifiée</strong> (communiquée) par écrit.</li><li>Elle doit être <strong>motivée</strong> (expliquer pourquoi elle est prise).</li><li>Elle doit mentionner les <strong>voies de recours</strong> (délai et autorité auprès de laquelle on peut contester).</li></ul>",
        children: [],
        parent: "admin_activite"
    },

    // SOUS-BRANCHE : PROCÉDURE ET RECOURS
    admin_procedure: {
        title: "La procédure et les recours",
        info: "Le citoyen n'est pas sans défense face à l'administration. <br><br><ul><li><strong>Droit d'être entendu :</strong> Avant toute décision, l'administré a le droit de s'exprimer et de consulter le dossier.</li><li><strong>Le Recours :</strong> Moyen de contester une décision devant une autorité supérieure ou un tribunal.</li><li><strong>Tribunaux administratifs :</strong> En Suisse, il existe le Tribunal administratif fédéral (TAF) et des tribunaux cantonaux spécialisés.</li></ul>",
        children: [],
        parent: "droit_administratif"
    },

    // --- 6.3 LE DROIT PÉNAL (Dès page 39 du cours) ---
    droit_penal: {
        title: "Le droit pénal",
        info: "Branche du droit public qui définit les comportements constitutifs d'infractions et les sanctions qui leur sont applicables. Il a pour but de protéger les biens juridiques essentiels de la société.",
        children: ["penal_definition", "penal_comportement", "penal_illiceite", "penal_culpabilite", "penal_responsabilite", "penal_sanction", "penal_infractions", "penal_procedure"],
        parent: "public"
    },

    penal_definition: {
        title: "Définition et notion",
        info: "Le droit pénal détermine quels actes sont punissables et quelles peines ou mesures doivent être prononcées. <br><br><ul><li>Il intervient en <strong>ultime recours</strong> (<em>ultima ratio</em>) lorsque les autres branches du droit sont insuffisantes.</li><li>Il est régi par le <strong>Code pénal suisse (CP)</strong>.</li></ul>",
        children: [],
        parent: "droit_penal"
    },

    penal_comportement: {
        title: "Le comportement humain",
        info: "Pour qu'il y ait infraction, il faut d'abord un comportement humain volontaire. <br><br>Ce comportement peut prendre deux formes :<br><ul><li><strong>L'action (commission) :</strong> Faire ce que la loi interdit (ex: frapper quelqu'un).</li><li><strong>L'omission :</strong> Ne pas faire ce que la loi commande, alors que l'auteur avait une <span class='highlight'>position de garant</span> (obligation juridique d'agir, ex: un médecin qui n'assiste pas son patient).</li></ul>",
        children: [],
        parent: "droit_penal"
    },

    penal_illiceite: {
        title: "L'illicéité",
        info: "Le comportement doit être contraire au droit. <br><br>Un acte n'est <strong>pas</strong> illicite s'il existe un <span class='success'>fait justificatif</span>. Les principaux faits justificatifs sont :<br><ul><li><strong>La légitime défense :</strong> Repousser une attaque actuelle ou imminente de manière proportionnée.</li><li><strong>L'état de nécessité :</strong> Commettre une infraction pour préserver un bien juridique plus important d'un danger imminent.</li><li><strong>Le consentement de la victime :</strong> Valable uniquement pour les biens dont on peut disposer librement.</li></ul>",
        children: [],
        parent: "droit_penal"
    },

    penal_culpabilite: {
        title: "La culpabilité",
        info: "C'est le reproche personnel que l'on peut faire à l'auteur de l'infraction. Il n'y a <strong>pas de peine sans culpabilité</strong>. <br><br>La culpabilité se manifeste sous deux formes :<br><ul><li><strong>L'intention :</strong> L'auteur agit avec conscience et volonté. Cela inclut le <span class='highlight'>dol éventuel</span> (l'auteur s'accommode du résultat même s'il ne le recherche pas directement).</li><li><strong>La négligence :</strong> L'auteur agit par imprudence ou imprévoyance coupable (il ne se rend pas compte des conséquences de son acte, ou pense à tort pouvoir les éviter).</li></ul>",
        children: [],
        parent: "droit_penal"
    },

    penal_responsabilite: {
        title: "La responsabilité pénale",
        info: "C'est la capacité de l'auteur d'apprécier le caractère illicite de son acte et de se déterminer d'après cette appréciation. <br><br><ul><li><strong>Irresponsabilité :</strong> Si l'auteur souffre d'un grave trouble mental au moment des faits, il n'est pas punissable (mais des mesures peuvent être ordonnées).</li><li><strong>Responsabilité de l'entreprise (Art. 102 CP) :</strong> Exceptionnellement, une entreprise peut être punie pénalement si une infraction a été commise en son sein et qu'elle n'a pas pris toutes les <strong>mesures d'organisation raisonnables et nécessaires</strong> pour l'empêcher.</li></ul>",
        children: [],
        parent: "droit_penal"
    },

    // --- SOUS-BRANCHES SANCTIONS ---
    penal_sanction: {
        title: "La sanction",
        info: "La conséquence juridique d'une infraction. Elle se divise en peines et en mesures.",
        children: ["sanction_principes", "sanction_peines", "sanction_mesures"],
        parent: "droit_penal"
    },

    sanction_principes: {
        title: "Les principes généraux",
        info: "Le prononcé d'une sanction obéit à des principes stricts :<br><ul><li><strong>Principe de la légalité :</strong> <em>Nullum crimen, nulla poena sine lege</em> (Pas d'infraction, pas de peine sans loi). L'acte doit être prévu par la loi avant sa commission.</li><li><strong>Proportionnalité :</strong> La sanction doit être adaptée à la faute de l'auteur et à ses antécédents.</li></ul>",
        children: [],
        parent: "penal_sanction"
    },

    sanction_peines: {
        title: "Les peines",
        info: "La peine a une fonction de punition et de prévention. Les principales peines sont :<br><ul><li><strong>La peine pécuniaire :</strong> Calculée en <span class='highlight'>jours-amende</span>. Le nombre de jours dépend de la faute, et le montant du jour dépend de la situation financière de l'auteur.</li><li><strong>Le travail d'intérêt général (TIG) :</strong> Fourniture d'un travail non rémunéré au profit de la collectivité.</li><li><strong>La peine privative de liberté :</strong> Incarcération (prison).</li><li><strong>L'amende :</strong> Somme d'argent forfaitaire, applicable principalement aux contraventions.</li></ul>",
        children: [],
        parent: "penal_sanction"
    },

    sanction_mesures: {
        title: "Les mesures",
        info: "Contrairement aux peines, les mesures ne visent pas à punir mais à <strong>protéger la société</strong> et à <strong>soigner l'auteur</strong>.<br><ul><li><strong>Mesures thérapeutiques :</strong> Traitement des troubles mentaux ou des addictions.</li><li><strong>Internement :</strong> Mesure de sécurité pour les délinquants très dangereux.</li><li><strong>Autres mesures :</strong> Interdiction d'exercer une profession, expulsion du territoire, confiscation d'objets dangereux.</li></ul>",
        children: [],
        parent: "penal_sanction"
    },

    // --- INFRACTIONS ---
    penal_infractions: {
        title: "Les infractions",
        info: "Le Code pénal classe les infractions en trois catégories selon leur gravité (peine maximale prévue) :<br><ol><li><strong>Le Crime :</strong> Infraction passible d'une peine privative de liberté de <span class='highlight'>plus de 3 ans</span>.</li><li><strong>Le Délit :</strong> Infraction passible d'une peine privative de liberté de <span class='highlight'>3 ans au plus</span> ou d'une peine pécuniaire.</li><li><strong>La Contravention :</strong> Infraction passible d'une <span class='highlight'>amende</span>.</li></ol>",
        children: [],
        parent: "droit_penal"
    },

    // --- SOUS-BRANCHES PROCÉDURE ---
    penal_procedure: {
        title: "La procédure pénale",
        info: "L'ensemble des règles fixant le déroulement de la poursuite et du jugement des auteurs d'infractions (Code de procédure pénale - CPP).",
        children: ["procedure_notions", "procedure_deroulement"],
        parent: "droit_penal"
    },

    procedure_notions: {
        title: "Les notions générales",
        info: "Principes directeurs de la procédure :<br><ul><li><strong>Poursuite d'office vs sur plainte :</strong> La plupart des infractions sont poursuivies d'office par l'État. Certaines (plus légères) nécessitent le dépôt d'une plainte par la victime (délai de 3 mois).</li><li><strong>Présomption d'innocence :</strong> Toute personne est présumée innocente tant que sa culpabilité n'est pas légalement établie.</li><li><strong>In dubio pro reo :</strong> Le doute profite à l'accusé.</li></ul>",
        children: [],
        parent: "penal_procedure"
    },

    procedure_deroulement: {
        title: "Le déroulement de la procédure",
        info: "Le processus pénal se divise en plusieurs phases successives :<br><ol><li><strong>La procédure préliminaire :</strong> Investigations de la police et instruction par le <span class='highlight'>Ministère public (Procureur)</span>. Le Procureur décide s'il classe l'affaire ou s'il dresse un acte d'accusation.</li><li><strong>La procédure de première instance :</strong> Le jugement devant le Tribunal compétent. Débats oraux et publics.</li><li><strong>Les voies de recours :</strong> Appel ou recours devant une juridiction supérieure (jusqu'au Tribunal fédéral).</li><li><strong>L'exécution :</strong> Mise en œuvre de la peine ou de la mesure prononcée.</li></ol>",
        children: [],
        parent: "penal_procedure"
    },
    
    // --- 7. LE DROIT DES OBLIGATIONS ---
    obligations: {
        title: "7. Le droit des obligations (CO)",
        info: "Lien juridique entre créancier et débiteur.",
        children: ["sources_ob", "conclusion", "forme", "objet", "vices", "execution", "extinction", "contrats_speciaux"],
        parent: "root"
    },
    sources_ob: {
        title: "Les 3 sources des obligations",
        info: "Contrat, RC, Enrichissement illégitime.",
        children: ["source_contrat", "rc", "enrichissement"],
        parent: "obligations"
    },
    rc: {
        title: "Responsabilité Civile (RC)",
        info: "Obligation de réparer. Art. 41 (extracontractuelle) et Art. 97 (contractuelle).",
        children: ["rc_extracontractuelle", "rc_contractuelle"], parent: "sources_ob"
    },
    rc_extracontractuelle: {
        title: "RC Extracontractuelle (Art. 41 CO)",
        info: "4 conditions : Dommage, Illicéité, Causalité, Faute (à prouver).",
        children: [], parent: "rc"
    },
    rc_contractuelle: {
        title: "RC Contractuelle (Art. 97 CO)",
        info: "4 conditions : Dommage, Violation contrat, Causalité, Faute (présumée).",
        children: [], parent: "rc"
    },
    enrichissement: {
        title: "Enrichissement illégitime (Art. 62 CO)",
        info: "Recevoir sans cause légitime.",
        children: [], parent: "sources_ob"
    },
    vices: {
        title: "Les Vices du consentement",
        info: "Contrat annulable. Erreur, Dol, Crainte, Lésion.",
        children: ["erreur", "dol", "crainte", "lesion"],
        parent: "obligations"
    },
    contrats_speciaux: {
        title: "Les Contrats Spéciaux",
        info: "Vente, Bail, Travail, Entreprise, Mandat.",
        children: ["contrat_entreprise", "mandat"],
        parent: "obligations"
    },
    contrat_entreprise: {
        title: "Contrat d'Entreprise (Art. 363 CO)",
        info: "Obligation de résultat (ouvrage).",
        children: [], parent: "contrats_speciaux"
    },
    mandat: {
        title: "Le Mandat (Art. 394 CO)",
        info: "Obligation de moyens (diligence).",
        children: [], parent: "contrats_speciaux"
    }
};

const mainContent = document.getElementById('main-content');
const breadcrumb = document.getElementById('breadcrumb');
const searchBar = document.getElementById('searchBar');

function renderTopic(id) {
    const topic = courseData[id];
    if (!topic) return;

    // Mise à jour du fil d'Ariane
    let path = [];
    let currentId = id;
    while (currentId && currentId !== 'root') {
        path.unshift({id: currentId, title: courseData[currentId].title});
        currentId = courseData[currentId].parent;
    }
    
    let bcHtml = `<span onclick="renderTopic('root')">🏠 Accueil</span>`;
    path.forEach(p => {
        bcHtml += ` / <span onclick="renderTopic('${p.id}')">${p.title}</span>`;
    });
    breadcrumb.innerHTML = bcHtml;

    // Génération du HTML
    let html = `
        <div class="info-box">
            <h2>${topic.title}</h2>
            <p>${topic.info}</p>
        </div>
    `;

    if (topic.children.length > 0) {
        html += `<h3 style="color: var(--primary);">Sous-thèmes :</h3><div class="sub-branches-grid">`;
        topic.children.forEach(childId => {
            const child = courseData[childId];
            if (child) {
                html += `
                    <div class="branch-button" onclick="renderTopic('${childId}')">
                        ${child.title}
                    </div>
                `;
            }
        });
        html += `</div>`;
    }

    mainContent.innerHTML = html;
}

searchBar.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    if (val.length < 2) return;
    
    let resultsHTML = `<div class="info-box"><h2>Recherche : "${val}"</h2></div><div class="sub-branches-grid">`;
    let count = 0;

    for (let key in courseData) {
        if (key === 'root') continue;
        if (courseData[key].title.toLowerCase().includes(val) || courseData[key].info.toLowerCase().includes(val)) {
            resultsHTML += `<div class="branch-button" onclick="renderTopic('${key}')">${courseData[key].title}</div>`;
            count++;
        }
    }
    mainContent.innerHTML = count > 0 ? resultsHTML + `</div>` : `<p>Aucun résultat.</p>`;
});

// Lancement initial
renderTopic('root');
