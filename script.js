// BASE DE DONNÉES COMPLÈTE DU COURS
const courseData = {
    root: {
        title: "Sommaire Général",
        info: "Sélectionnez une des grandes branches du cours de Droit de l'entreprise pour commencer vos révisions.",
        children: ["notion", "sujets", "regle", "sources", "divisions", "public", "droit_prive_pt7", "droit_obligations", "sources_obligations_titre9"]
    },
    
    // --- 1. NOTION ET FONCTIONS DU DROIT ---
    notion: {
        title: "1. Notion et fonctions du droit",
        info: "Cette section définit le cadre fondamental du droit, ses fonctions essentielles au sein de la société et les différents sens que peut prendre ce terme.",
        children: ["fondements_droit", "sens_droit"],
        parent: "root"
    },

    // --- BRANCHE PRINCIPALE 1.1 : LES FONDEMENTS DU DROIT ---
    fondements_droit: {
        title: "Section 1 : Les fondements du droit",
        info: "Pour pouvoir exercer ses fonctions, à savoir assurer un équilibre entre des intérêts opposés et organiser la vie en communauté, le droit doit remplir trois sortes de conditions : il doit être sûr, émaner d'un pouvoir social et correspondre à une idée de justice.",
        children: ["def_fonctions", "securite_droit", "pouvoir_social", "idee_justice"],
        parent: "notion"
    },

    // SOUS-BRANCHE 1.1.1
    def_fonctions: {
        title: "Chapitre 1 : Définition et fonctions",
        info: "Le droit est le système normatif englobant toutes les règles de droit obligatoires, soit l'ensemble des règles de conduite imposées aux personnes physiques et morales par un pouvoir que personnifie l'État. <br><br>Le droit a deux fonctions principales :<br><ul><li><strong>Une fonction pacificatrice :</strong> freiner les appétits égoïstes et assurer la coexistence pacifique entre les individus.</li><li><strong>Une fonction organisatrice :</strong> établir un ordre social fondé sur l'équilibre des divers intérêts.</li></ul>",
        children: [],
        parent: "fondements_droit"
    },

    // SOUS-BRANCHE 1.1.2
    securite_droit: {
        title: "Chapitre 2 : La sécurité du droit",
        info: "Les personnes soumises au droit doivent toujours avoir la possibilité de le connaître pour pouvoir se conformer à ses normes ; il s'agit de la sécurité du droit. En règle générale, le droit écrit correspond le mieux à cette idée de clarté et de prévisibilité.<br><br>La sécurité du droit implique plusieurs exigences :<br><ul><li>Le principe de la <strong>non-rétroactivité des lois</strong> et l'existence de règles transitoires.</li><li>L'institution de la <strong>prescription</strong>, c'est-à-dire l'extinction d'un droit, d'une obligation ou d'une action par l'effet de l'écoulement du temps.</li></ul><br>Ces éléments garantissent l'équilibre entre les intérêts opposés (c'est l'effet préventif).",
        children: [],
        parent: "fondements_droit"
    },

    // SOUS-BRANCHE 1.1.3
    pouvoir_social: {
        title: "Chapitre 3 : L'émanation d'un pouvoir social",
        info: "Le droit doit émaner d'un pouvoir social. L'ordre social suppose l'existence d'une autorité habilitée et apte à imposer les normes établies, à les faire exécuter et à infliger des sanctions. <br><br>Dans une société correspondant à un État de droit, c'est l'État qui, à lui seul, assure le fonctionnement de la justice.",
        children: [],
        parent: "fondements_droit"
    },

    // SOUS-BRANCHE 1.1.4
    idee_justice: {
        title: "Chapitre 4 : La conformité à l'idée de justice",
        info: "Le droit doit correspondre à une idée de justice. On distingue deux approches :<br><ul><li><strong>La justice commutative :</strong> se rapporte aux droits fondamentaux qui appartiennent à chaque être humain de façon égale sans que l'on tienne compte de l'origine, de la race ou de la religion (ex: liberté de conscience).</li><li><strong>La justice distributive :</strong> implique que l'on tienne compte de certaines différences qui existent entre les individus dans leur rapport avec la société (ex: impôts proportionnels aux revenus).</li></ul><br>Il est à noter que l'ordre juridique est le fruit de la pensée humaine et qu'il ne doit pas être immuable, mais doit s'adapter continuellement aux conditions changeantes de la vie.",
        children: [],
        parent: "fondements_droit"
    },

    // --- BRANCHE PRINCIPALE 1.2 : LES DIFFÉRENTS SENS DU MOT DROIT ---
    sens_droit: {
        title: "Section 2 : Les différents sens du mot droit",
        info: "Le terme de « droit » recouvre deux notions fondamentales : le droit au sens objectif et le droit au sens subjectif.",
        children: ["droit_objectif", "droit_subjectif"],
        parent: "notion"
    },

    // SOUS-BRANCHE 1.2.1
    droit_objectif: {
        title: "Chapitre 1 : Le droit au sens objectif",
        info: "Le droit au sens objectif est un ensemble de règles obligatoires (ou de normes), générales et abstraites, indiquant ce qui doit être fait dans un cas donné, édictées ou reconnues par un organe officiel, régissant l'organisation et le déroulement des relations sociales et dont le respect est assuré par des moyens de contrainte organisés par l'État.<br><br>Dans ce cadre, on distingue :<br><ul><li>Le <strong>droit naturel</strong> : règles universelles et immuables conformes à la nature humaine.</li><li>Le <strong>droit positif</strong> : règles en vigueur dans un État, à un moment donné.</li></ul>",
        children: [],
        parent: "sens_droit"
    },

    // SOUS-BRANCHE 1.2.2
    droit_subjectif: {
        title: "Chapitre 2 : Le droit au sens subjectif",
        info: "Le droit au sens subjectif est une faculté, une prérogative attachée à une certaine personne et protégée par l'ordre juridique existant. C'est la faculté appartenant à un sujet de droit de faire ou d'exiger quelque chose (sujet actif) ou d'être obligée à quelque chose (sujet passif).<br><br>On distingue deux catégories :<br><ul><li><strong>Les droits réels ou absolus :</strong> droits qui peuvent être exercés à l'égard de toute tierce personne (ex: le droit de propriété).</li><li><strong>Les droits relatifs ou personnels :</strong> droits qui ne peuvent être exercés qu'à l'encontre de certaines personnes bien déterminées (ex: l'obligation ou droit de créance découlant d'un contrat).</li></ul><br>Un droit subjectif ne peut exister que dans la mesure où le droit objectif le consacre et permet d'en obtenir le respect.",
        children: [],
        parent: "sens_droit"
    },

    // --- 2. LES SUJETS DE DROIT ---
    sujets: {
        title: "2. Les sujets de droit",
        info: "L'ordre juridique détermine qui peut être sujet de droit, c'est-à-dire avoir des droits et assumer des obligations.",
        children: ["definition_sujets", "jouissance_exercice_droits", "personne_morale_entreprise"],
        parent: "root"
    },

    // --- BRANCHE PRINCIPALE 2.1 ---
    definition_sujets: {
        title: "1. Définition et notion",
        info: "Un sujet de droit est soit le titulaire de droits subjectifs qui peut faire valoir les prérogatives qui en découlent (le créancier), soit la personne qui est obligée du fait de ces droits subjectifs (le débiteur). <br><br>Il est important de noter que les choses ne peuvent être en soi que l'objet d'un droit subjectif, elles sont un moyen et non un but en soi.",
        children: [],
        parent: "sujets"
    },

    // --- BRANCHE PRINCIPALE 2.2 ---
    jouissance_exercice_droits: {
        title: "2. La jouissance et l'exercice des droits civils",
        info: "Il est fondamental de distinguer la jouissance de l'exercice des droits civils :<br><br><ul><li><strong>La jouissance des droits civils (capacité juridique) :</strong> C'est la capacité d'être sujet de droit. Toute personne a une aptitude égale à devenir sujet de droits et d'obligations. Cette faculté, indépendante de l'âge ou des facultés mentales, commence à la naissance et finit par la mort.</li><li><strong>L'exercice des droits civils :</strong> C'est la capacité de s'engager juridiquement, d'acquérir des droits et pouvoir s'obliger par ses propres actes. Ne possède l'exercice des droits civils que la personne majeure et capable de discernement.</li></ul><br>Le <strong>discernement</strong> se définit comme étant la capacité intellectuelle présumée chez toute personne physique qui n'est pas atteinte de déficience mentale, de troubles psychiques, d'ivresse ou d'autres causes semblables, temporaires ou définitives, l'empêchant d'agir raisonnablement.",
        children: [],
        parent: "sujets"
    },

    // --- BRANCHE PRINCIPALE 2.3 ---
    personne_morale_entreprise: {
        title: "3. La personne morale et l'entreprise",
        info: "L'être humain cherche souvent à atteindre des buts qui dépassent les forces d'une personne individuelle, formant ainsi des groupements.<br><br><ul><li><strong>La personne morale (ou juridique) :</strong> Ce sont des entités, comme des groupements de personnes (ex: association, société de capitaux) ou des masses de biens (ex: fondation), qui peuvent devenir, à certaines conditions, sujets de droits et d'obligations.</li><li><strong>L'entreprise :</strong> La notion de personne morale doit être distinguée de celle d'entreprise. L'entreprise peut être définie comme étant une activité économique indépendante exercée en vue d'un revenu régulier.</li></ul><br>En pratique, la notion d'entreprise peut désigner l'activité commerciale exploitée par une personne morale (ex: société anonyme) ou par une ou plusieurs personnes physiques (ex: entreprise individuelle, société en nom collectif).",
        children: [],
        parent: "sujets"
    },

    // --- 3. LA RÈGLE DE DROIT ---
    regle: {
        title: "3. La règle de droit",
        info: "La règle de droit est une norme générale et abstraite qui énonce de manière contraignante ce qui doit être et qui bénéficie de la sanction étatique dans l'hypothèse où elle n'est pas respectée.",
        children: ["caracteristiques_regle", "nature_regles"],
        parent: "root"
    },

    // --- 1ÈRE BRANCHE PRINCIPALE : LES CARACTÉRISTIQUES ---
    caracteristiques_regle: {
        title: "Définition et caractéristiques",
        info: "Les caractéristiques de la règle de droit sont au nombre de trois. Elles permettent de structurer et d'imposer la règle au sein de la société.",
        children: ["caractere_general_abstrait", "structure_double", "caractere_obligatoire"],
        parent: "regle"
    },

    // SOUS-BRANCHE 1.1
    caractere_general_abstrait: {
        title: "1. Le caractère général et abstrait",
        info: "Par essence, la règle de droit est générale et abstraite. <br><br><ul><li>Elle est <strong>générale</strong>, en ce sens qu'elle vise un nombre indéterminé de personnes.</li><li>Elle est <strong>abstraite</strong> dans la mesure où elle s'applique à un nombre indéterminé de situations.</li></ul><br>La règle de droit doit donc être formulée de telle manière qu'elle puisse viser le plus de situations possibles, sans pour autant être trop générale et, par conséquent, trop vague, ce qui nuirait à la sécurité du droit.",
        children: [],
        parent: "caracteristiques_regle"
    },

    // SOUS-BRANCHE 1.2
    structure_double: {
        title: "2. La structure double",
        info: "Sur le plan de sa structure, la règle de droit comprend deux éléments, elle est bipartite :<br><br><ol><li>D'une part, elle comprend un <strong>point de départ</strong>. Ce sont les conditions, l'hypothèse, les faits ou les éléments dont la réalisation entraîne l'application de la règle.</li><li>D'autre part, elle emporte un <strong>effet juridique</strong>, soit la conséquence que la règle de droit attache à la réalisation des faits ou conditions d'application.</li></ol><br>Cette double structure se rencontre non seulement dans la règle abstraite, mais aussi dans l'application au cas concret (il y a une partie « fait » et une partie « droit » dans tout jugement).",
        children: [],
        parent: "caracteristiques_regle"
    },

    // SOUS-BRANCHE 1.3
    caractere_obligatoire: {
        title: "3. Le caractère obligatoire",
        info: "La troisième caractéristique, qui est de loin la plus importante, est le caractère obligatoire de la règle de droit, accompagné de la menace de sanction ou de la sanction elle-même. <br><br>La sanction, qui est la conséquence attachée par le droit à la violation d'une règle juridique, poursuit deux buts essentiels :<br><ul><li>Un but de <strong>prévention et de punition</strong> : inciter les justiciables à suivre les règles de droit.</li><li>Un but de <strong>réparation</strong> : réparer les effets d'une conduite contraire au droit.</li></ul>",
        children: [],
        parent: "caracteristiques_regle"
    },

    // --- 2ÈME BRANCHE PRINCIPALE : NATURE ET EXEMPLES ---
    nature_regles: {
        title: "Nature des règles et exemples",
        info: "Les règles de droit ne sont pas toutes de même nature. <br><br><ul><li><strong>Règles impératives :</strong> Règles auxquelles il n'est pas permis de déroger, même par convention, ou qu'il n'est pas licite d'éluder. Elles doivent être respectées par tous.</li><li><strong>Règles dispositives :</strong> Elles sont édictées dans les mêmes conditions mais ne s'appliquent que si les particuliers n'en ont pas décidé autrement. Elles peuvent suppléer à la volonté des parties.</li><li><strong>Règles semi-impératives :</strong> Règles auxquelles on ne peut déroger qu'en faveur de l'une des parties, généralement la plus faible (ex: droit du travail).</li></ul>",
        children: [],
        parent: "regle"
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
        title: "La loi fédérale",
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
        title: "6. Droit public",
        info: "Le droit public est l’ensemble des règles juridiques régissant l’accomplissement de tâches publiques et poursuivant un intérêt public.",
        children: ["droit_constitutionnel", "droit_administratif", "droit_penal", "droit_inter_public"],
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
        title: "Le droit administratif",
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

    // --- 6.4 LE DROIT INTERNATIONAL PUBLIC (Dès page 46 du cours) ---
    droit_inter_public: {
        title: "Le droit international public",
        info: "Branche du droit qui régit les relations entre les différents acteurs de la communauté internationale. Contrairement au droit interne, il n'y a pas de 'gouvernement mondial' ou de législateur suprême pour imposer ces règles de manière centralisée.",
        children: ["inter_definition", "inter_conventions", "inter_relation"],
        parent: "public"
    },

    inter_definition: {
        title: "Définition et notion",
        info: "Le droit international public régit les relations entre les <strong>sujets de droit international</strong>. <br><br><strong>Acteurs principaux :</strong><br><ul><li><strong>Les États :</strong> Sujets originaires et principaux. Ils bénéficient du principe de l'<span class='highlight'>égalité souveraine</span> (aucun État n'est supérieur à un autre).</li><li><strong>Les organisations internationales :</strong> (ex: ONU, OMC). Elles ont des compétences d'attribution limitées aux buts pour lesquels elles ont été créées.</li></ul>",
        children: [],
        parent: "droit_inter_public"
    },

    inter_conventions: {
        title: "Les conventions internationales",
        info: "Aussi appelées <strong>traités</strong>, accords ou pactes, ce sont la source principale du droit international. <br><br><strong>Notions clés :</strong><br><ul><li><strong>Pacta sunt servanda :</strong> Principe fondamental selon lequel <span class='highlight'>les engagements doivent être respectés</span>. Tout traité en vigueur lie les parties et doit être exécuté de bonne foi.</li><li><strong>Bilatéral vs Multilatéral :</strong> Un traité peut lier deux États (bilatéral) ou plusieurs États (multilatéral, comme la CEDH).</li><li><strong>La Ratification :</strong> Étape cruciale. C'est l'acte formel par lequel un État <span class='success'>s'engage définitivement</span> au niveau international à respecter le traité (après l'avoir signé).</li></ul>",
        children: [],
        parent: "droit_inter_public"
    },

    inter_relation: {
        title: "Relation avec le droit interne",
        info: "Comment le droit international s'applique-t-il à l'intérieur de la Suisse ? Le cours met en avant des principes stricts : <br><br><ul><li><strong>Le système moniste :</strong> La Suisse applique ce système. Dès qu'un traité est ratifié, il s'intègre <span class='highlight'>automatiquement</span> à l'ordre juridique suisse. Il n'y a pas besoin de voter une loi nationale supplémentaire pour le rendre applicable.</li><li><strong>La primauté du droit international (Art. 5 al. 4 Cst.) :</strong> En cas de conflit entre une règle de droit suisse et une règle de droit international, <strong>le droit international l'emporte</strong> en principe sur le droit interne.</li><li><strong>Le Jus Cogens :</strong> Ce sont les normes impératives du droit international général (ex: interdiction de la torture, de l'esclavage, du génocide). <strong>Aucune dérogation</strong> n'est permise, et aucun traité ni aucune loi nationale ne peut aller à l'encontre du <em>jus cogens</em>.</li></ul>",
        children: [],
        parent: "droit_inter_public"
    },
    
    // --- 7. LE DROIT PRIVÉ (Dès page 48 du cours) ---
    droit_prive_pt7: {
        title: "7. Le droit privé",
        info: "Cette section aborde les fondements des relations juridiques entre particuliers (ou entreprises) sur un pied d'égalité, principalement régies par le Code civil (CC) et le Code des obligations (CO).",
        children: ["autonomie_volonte", "droit_personnes", "droit_successions", "droits_reels", "procedure_civile", "droit_inter_prive", "arbitrage"],
        parent: "root" 
    },

    // --- BRANCHE : L'AUTONOMIE DE LA VOLONTÉ ---
    autonomie_volonte: {
        title: "L'autonomie de la volonté",
        info: "C'est le principe fondamental et le moteur du droit privé. Il garantit aux individus la <strong>liberté d'aménager leurs relations juridiques</strong> comme ils l'entendent, par leur propre volonté.",
        children: ["liberte_contractuelle", "limites_autonomie", "protection_faible"],
        parent: "droit_prive_pt7"
    },

    liberte_contractuelle: {
        title: "La liberté contractuelle",
        info: "C'est la traduction concrète de l'autonomie de la volonté dans le domaine des contrats. Elle se décline en plusieurs libertés fondamentales : <br><br><ul><li><strong>Liberté de conclure :</strong> Chacun est libre de conclure ou de ne pas conclure un contrat.</li><li><strong>Liberté de choisir son partenaire :</strong> Chacun décide avec qui il veut s'engager.</li><li><strong>Liberté de la forme (Art. 11 CO) :</strong> En principe, les contrats ne sont soumis à <span class='success'>aucune exigence de forme</span> (un accord oral ou même tacite est parfaitement valable). L'exigence d'une forme écrite ou d'un acte authentique n'est qu'une exception prévue par la loi.</li><li><strong>Liberté de l'objet (Art. 19 CO) :</strong> Les parties peuvent en principe fixer le contenu du contrat <span class='highlight'>librement</span>. Elles peuvent même créer des contrats qui ne sont pas prévus par la loi (les contrats innommés, comme le leasing).</li><li><strong>Liberté de modifier ou d'annuler :</strong> Les parties peuvent toujours modifier ou mettre fin à un contrat par un accord mutuel.</li></ul>",
        children: [],
        parent: "autonomie_volonte"
    },

    limites_autonomie: {
        title: "Les limites : La nullité absolue (Art. 20 CO)",
        info: "La liberté contractuelle n'est pas absolue. Pour protéger l'intérêt public, la loi pose des barrières infranchissables. <br><br>Un contrat est frappé de <span class='highlight'>nullité absolue</span> (il est considéré comme n'ayant jamais existé) si son objet remplit l'une de ces trois conditions :<br><ul><li><strong>Il est impossible :</strong> L'exécution du contrat est objectivement irréalisable pour tout le monde (ex: vendre un terrain sur Jupiter).</li><li><strong>Il est illicite :</strong> L'accord viole une règle de droit impérative (ex: contrat pour un assassinat, trafic de stupéfiants).</li><li><strong>Il est contraire aux mœurs :</strong> L'accord heurte les principes moraux fondamentaux de la société (ex: s'engager à ne jamais se marier, vendre son vote).</li></ul>",
        children: [],
        parent: "autonomie_volonte"
    },

    protection_faible: {
        title: "La protection de la partie faible",
        info: "L'autonomie de la volonté part du principe que les parties sont égales. Dans la réalité, ce n'est pas toujours le cas (ex: un employé face à une multinationale). <br><br>Le législateur intervient donc avec des <strong>règles impératives</strong> pour rééquilibrer la relation et <span class='highlight'>protéger la partie présumée la plus faible</span> :<br><ul><li><strong>Le droit du travail :</strong> Règles strictes sur les vacances, les licenciements, la santé.</li><li><strong>Le droit du bail :</strong> Protection du locataire contre les congés abusifs ou les loyers excessifs.</li><li><strong>Le droit de la consommation :</strong> Protection de l'acheteur privé face aux professionnels.</li></ul>",
        children: [],
        parent: "autonomie_volonte"
    },

    // --- 7.2 LE DROIT DES PERSONNES ET DES SOCIÉTÉS (Dès page 48 du cours) ---
    droit_personnes: {
        title: "Le droit des personnes",
        info: "Cette branche du Code civil (CC) détermine qui peut être sujet de droits et d'obligations, et comment ces sujets s'organisent juridiquement.",
        children: ["debut_fin_pers", "jouissance_exercice", "domicile", "protection_pers", "personnes_morales_structures"],
        parent: "droit_prive_pt7" // À adapter selon ton point d'ancrage principal
    },

    // --- PERSONNES PHYSIQUES ---
    debut_fin_pers: {
        title: "Le début et la fin de la personnalité",
        info: "<ul><li><strong>Le début :</strong> La personnalité commence avec la <span class='highlight'>naissance accomplie de l'enfant vivant</span>. L'enfant conçu jouit des droits civils à condition qu'il naisse vivant.</li><li><strong>La fin :</strong> La personnalité se termine par la <strong>mort</strong> (ou la déclaration d'absence).</li></ul>",
        children: [], parent: "droit_personnes"
    },

    jouissance_exercice: {
        title: "La jouissance et l'exercice des droits civils",
        info: "C'est une distinction fondamentale en droit civil suisse :<br><br><ul><li><strong>La jouissance des droits civils (capacité passive) :</strong> C'est l'aptitude à <em>avoir</em> des droits et des obligations. <strong>Tout être humain</strong> en bénéficie dès sa naissance, sans aucune condition d'âge ou de santé.</li><li><strong>L'exercice des droits civils (capacité active) :</strong> C'est l'aptitude à créer des droits et des obligations par ses <em>propres actes</em> (ex: signer un contrat). Pour l'avoir, il faut réunir deux conditions cumulatives : <strong>être majeur</strong> (18 ans révolus) ET <strong>avoir la capacité de discernement</strong> (faculté d'agir raisonnablement).</li></ul>",
        children: [], parent: "droit_personnes"
    },

    domicile: {
        title: "Le domicile",
        info: "Le domicile de toute personne est le lieu où elle réside avec <strong>l'intention de s'y établir</strong> (Art. 23 CC). Toute personne ne peut avoir qu'un seul domicile civil à la fois. C'est essentiel pour déterminer quel tribunal est compétent ou où payer ses impôts.",
        children: [], parent: "droit_personnes"
    },

    protection_pers: {
        title: "La protection de la personnalité",
        info: "Le Code civil protège l'individu dans ses droits les plus intimes.",
        children: ["prot_soimeme", "prot_tiers"], parent: "droit_personnes"
    },
    prot_soimeme: {
        title: "La protection contre elle-même",
        info: "Nul ne peut aliéner sa liberté ni s'en interdire l'usage dans une mesure contraire aux lois ou aux mœurs (Art. 27 CC). <br><br><strong>Exemple :</strong> On ne peut pas signer un contrat pour devenir esclave ou s'engager à ne jamais changer d'emploi.",
        children: [], parent: "protection_pers"
    },
    prot_tiers: {
        title: "La protection contre les tiers",
        info: "Celui qui subit une <strong>atteinte illicite</strong> à sa personnalité peut agir en justice (Art. 28 CC). <br><br>Cela protège notamment la sphère privée, l'honneur, le nom et le droit à l'image. Le juge peut interdire l'atteinte, la faire cesser ou constater son caractère illicite.",
        children: [], parent: "protection_pers"
    },

    // --- PERSONNES MORALES ET ENTREPRISES ---
    personnes_morales_structures: {
        title: "Les personnes morales et formes d'entreprises",
        info: "Le droit permet à des entités abstraites d'agir sur la scène juridique comme des personnes physiques.",
        children: ["notion_pm", "statut_pm", "formes_juridiques_pm", "association", "fondation", "entreprise_individuelle", "societes_personnes", "societes_capitaux"],
        parent: "droit_personnes"
    },

    notion_pm: {
        title: "La notion de personne morale",
        info: "Les personnes morales sont des <strong>fictions juridiques</strong>. Ce sont des groupements de personnes (ex: SA) ou des masses de biens (ex: fondation) auxquels la loi accorde la personnalité juridique de manière indépendante des individus qui la composent.",
        children: [], parent: "personnes_morales_structures"
    },

    statut_pm: {
        title: "Le statut des personnes morales",
        info: "<ul><li><strong>Naissance :</strong> Elles acquièrent généralement la personnalité juridique par leur <strong>inscription au Registre du commerce (RC)</strong> (exception faite des associations à but non lucratif).</li><li><strong>Fonctionnement :</strong> Elles agissent par l'intermédiaire de leurs <strong>organes</strong> (Conseil d'administration, direction, assemblée générale). La volonté de l'organe engage la personne morale.</li></ul>",
        children: [], parent: "personnes_morales_structures"
    },

    formes_juridiques_pm: {
        title: "Les différentes formes juridiques",
        info: "Le droit suisse est régi par le principe du <em>Numerus clausus</em> : on ne peut choisir qu'une des formes d'entreprises <strong>strictement prévues par la loi</strong>. On ne peut pas en inventer de nouvelles.",
        children: [], parent: "personnes_morales_structures"
    },

    association: {
        title: "L'association (CC)",
        info: "Groupement de personnes dédié à un <strong>but idéal</strong> (politique, religieux, scientifique, artistique, caritatif). Elle acquiert la personnalité juridique dès que ses statuts sont rédigés, sans obligation de s'inscrire au RC (sauf si elle exploite une industrie en la forme commerciale).",
        children: [], parent: "personnes_morales_structures"
    },

    fondation: {
        title: "La fondation (CC)",
        info: "Ce n'est pas un groupement de personnes, mais une <strong>masse de biens affectée à un but spécial</strong> (souvent d'utilité publique). Elle doit obligatoirement être inscrite au Registre du commerce.",
        children: [], parent: "personnes_morales_structures"
    },

    entreprise_individuelle: {
        title: "L’entreprise individuelle",
        info: "Bien qu'étudiée ici, c'est juridiquement une <strong>personne physique</strong> qui exerce une activité économique indépendante. <br><br><ul><li><strong>Création :</strong> Très simple et sans capital minimum exigé.</li><li><strong>Responsabilité :</strong> L'entrepreneur répond des dettes de l'entreprise <strong>sur sa fortune privée, de manière illimitée</strong>. C'est le risque principal de cette forme.</li></ul>",
        children: [], parent: "personnes_morales_structures"
    },

    // --- SOCIÉTÉS DE PERSONNES ---
    societes_personnes: {
        title: "Les sociétés de personnes",
        info: "Dans ces sociétés, c'repose sur la confiance mutuelle (<em>intuitu personae</em>) et la personnalité des associés joue un rôle central.",
        children: ["societe_simple", "snc", "soc_commandite", "soc_cooperative"],
        parent: "personnes_morales_structures"
    },
    societe_simple: {
        title: "La société simple",
        info: "Contrat par lequel deux ou plusieurs personnes conviennent d'unir leurs efforts ou leurs ressources en vue d'atteindre un <strong>but commun</strong> (Art. 530 CO). <br>C'est la forme de base par défaut. Elle n'a <strong>pas de personnalité juridique propre</strong> et ne s'inscrit pas au RC. Les associés sont solidairement responsables.",
        children: [], parent: "societes_personnes"
    },
    snc: {
        title: "La société en nom collectif (SNC)",
        info: "Constituée uniquement par des <strong>personnes physiques</strong> pour exploiter une entreprise commerciale. <br><br><strong>Caractéristique phare :</strong> Les associés contractent une responsabilité <strong>subsidiaire, illimitée et solidaire</strong>. Si la société fait faillite, les créanciers peuvent se retourner contre n'importe quel associé sur sa fortune privée.",
        children: [], parent: "societes_personnes"
    },
    soc_commandite: {
        title: "La société en commandite",
        info: "Société composée de deux types d'associés :<br><ul><li><strong>Le(s) commandité(s) :</strong> Toujours une personne physique. Responsabilité <strong>illimitée</strong> et solidaire.</li><li><strong>Le(s) commanditaire(s) :</strong> Le 'bailleur de fonds'. Sa responsabilité est <strong>limitée</strong> à l'apport convenu (la commandite).</li></ul>",
        children: [], parent: "societes_personnes"
    },
    soc_cooperative: {
        title: "La société coopérative",
        info: "Corporation formée d'un nombre variable de personnes ou sociétés, visant principalement à favoriser les <strong>intérêts économiques spécifiques de ses membres</strong> par une action d'entraide commune (ex: Migros, Coop, coopératives agricoles). Elle n'a pas de capital social fixe.",
        children: [], parent: "societes_personnes"
    },

    // --- SOCIÉTÉS DE CAPITAUX ---
    societes_capitaux: {
        title: "Les sociétés de capitaux",
        info: "Dans ces sociétés, l'apport financier (le capital) est plus important que la personne de l'associé. Elles sont des personnes morales à part entière.",
        children: ["sa", "sarl", "sca"],
        parent: "personnes_morales_structures"
    },
    sa: {
        title: "La société anonyme (SA)",
        info: "La forme juridique par excellence pour les grandes entreprises, mais aussi prisée par les PME.<br><br><ul><li><strong>Capital :</strong> Capital-actions minimum de <span class='highlight'>100'000 CHF</span> (dont au moins 20% ou 50'000 CHF libérés).</li><li><strong>Responsabilité :</strong> Exclusivement limitée au capital social. L'actionnaire ne risque pas sa fortune privée.</li><li><strong>Anonymat :</strong> Les actionnaires peuvent rester anonymes vis-à-vis du public (actions au porteur).</li></ul>",
        children: [], parent: "societes_capitaux"
    },
    sarl: {
        title: "La société à responsabilité limitée (Sàrl)",
        info: "Forme mixte combinant des éléments de la SA et de la SNC, idéale pour les PME et les entreprises familiales.<br><br><ul><li><strong>Capital :</strong> Capital social minimum de <span class='highlight'>20'000 CHF</span> (entièrement libéré).</li><li><strong>Responsabilité :</strong> Limitée au capital social.</li><li><strong>Transparence :</strong> Pas d'anonymat. Les associés et le nombre de leurs parts sociales sont <strong>obligatoirement inscrits au Registre du commerce</strong> (public).</li></ul>",
        children: [], parent: "societes_capitaux"
    },
    sca: {
        title: "La société en commandite par actions",
        info: "Société dont le capital est divisé en actions (comme la SA) mais dans laquelle un ou plusieurs associés répondent solidairement et indéfiniment des dettes sociales (comme les commandités). Très rare en pratique en Suisse.",
        children: [], parent: "societes_capitaux"
    },

    // --- 7.3 LE DROIT DES SUCCESSIONS (Dès page 63 du cours) ---
    droit_successions: {
        title: "Le droit des successions",
        info: "Cette branche du Code civil (CC) règle le sort des biens, des créances et des dettes d'une personne après son décès.",
        children: ["succ_definition", "succ_legale", "succ_volontaire", "succ_devolution"],
        parent: "droit_prive_pt7" 
    },

    // --- CHAPITRE 1 : DÉFINITION ---
    succ_definition: {
        title: "Définition",
        info: "Le droit des successions détermine qui hérite du patrimoine du défunt (appelé le <span class='highlight'>de cujus</span>). <br><br><strong>Principe fondamental :</strong> Il s'agit d'une <strong>succession universelle</strong>. Les héritiers reprennent l'ensemble du patrimoine du défunt, c'est-à-dire <span class='highlight'>aussi bien les actifs (biens, argent) que les passifs (dettes)</span>.",
        children: [], 
        parent: "droit_successions"
    },

    // --- CHAPITRE 2 : LA SUCCESSION LÉGALE ---
    succ_legale: {
        title: "La succession légale",
        info: "C'est le régime qui s'applique par défaut <strong>lorsque le défunt n'a rien prévu</strong> (pas de testament, pas de pacte successoral). Le droit suisse utilise le <strong>système des parentèles</strong> pour déterminer l'ordre des héritiers :<br><br><ul><li><strong>1ère parentèle :</strong> Les descendants (enfants, petits-enfants). Ils excluent toutes les autres parentèles.</li><li><strong>2ème parentèle :</strong> S'il n'y a pas de descendants, on remonte aux père et mère et à leurs descendants (les frères et sœurs du défunt).</li><li><strong>3ème parentèle :</strong> S'il n'y a personne dans la 2ème, on remonte aux grands-parents et à leurs descendants (oncles, tantes, cousins).</li><li><strong>Le conjoint survivant (ou partenaire enregistré) :</strong> Il n'appartient à aucune parentèle mais <strong>partage l'héritage</strong> avec la parentèle qui vient à la succession (ex: il reçoit la moitié s'il partage avec les enfants).</li><li><strong>L'État :</strong> S'il n'y a aucun héritier légal, la succession revient au canton ou à la commune.</li></ul>",
        children: [], 
        parent: "droit_successions"
    },

    // --- CHAPITRE 3 : LA SUCCESSION VOLONTAIRE ---
    succ_volontaire: {
        title: "La succession volontaire",
        info: "Le défunt a la liberté d'organiser sa succession autrement que ce que prévoit la loi par défaut, en respectant certaines formes et certaines limites.",
        children: ["succ_formes", "succ_reserve"], 
        parent: "droit_successions"
    },

    succ_formes: {
        title: "La forme des dispositions pour cause de mort",
        info: "Le défunt peut exprimer ses dernières volontés de deux manières principales :<br><br><strong>1. Le testament :</strong> Acte <strong>unilatéral</strong> et révocable en tout temps. Il existe sous plusieurs formes :<br><ul><li><em>Le testament olographe :</em> Doit être écrit en entier, daté et signé <span class='success'>de la main du testateur</span>.</li><li><em>Le testament public :</em> Rédigé par un notaire en présence de deux témoins.</li><li><em>Le testament oral :</em> Exceptionnel, uniquement en cas de danger de mort imminent.</li></ul><br><strong>2. Le pacte successoral :</strong> C'est un <strong>contrat</strong> passé entre le testateur et ses héritiers (ex: pour qu'un héritier renonce à sa part). Il nécessite la forme authentique (devant notaire) et ne peut être modifié qu'avec l'accord de toutes les parties.",
        children: [], 
        parent: "succ_volontaire"
    },

    succ_reserve: {
        title: "La réserve (Les héritiers réservataires)",
        info: "La liberté de tester n'est pas totale. La loi protège les héritiers les plus proches en leur garantissant une part minimale de l'héritage, appelée la <span class='highlight'>réserve héréditaire</span>.<br><br><ul><li><strong>Les héritiers réservataires :</strong> Ce sont les <strong>descendants</strong> (enfants) et le <strong>conjoint survivant</strong> (ou partenaire enregistré).</li><li><strong>Conséquence :</strong> Le testateur ne peut absolument pas les priver de cette part (sauf cas rarissimes d'exhérédation, ex: crime grave contre le défunt).</li><li><strong>La quotité disponible :</strong> C'est la partie du patrimoine qui reste <em>une fois les réserves déduites</em>. Le testateur peut la distribuer <strong>librement</strong> à qui il veut (amis, associations, etc.).</li></ul>",
        children: [], 
        parent: "succ_volontaire"
    },

    // --- CHAPITRE 4 : LA DÉVOLUTION ---
    succ_devolution: {
        title: "La dévolution",
        info: "C'est le processus par lequel la succession passe concrètement du défunt aux héritiers.<br><br><strong>Étapes et principes clés :</strong><br><ul><li><strong>L'ouverture :</strong> La succession s'ouvre au moment exact du décès, au dernier domicile du défunt.</li><li><strong>L'acquisition de plein droit :</strong> Les héritiers deviennent <strong>immédiatement et solidairement</strong> propriétaires des biens et débiteurs des dettes, sans avoir besoin d'une décision du juge.</li><li><strong>La répudiation :</strong> Si la succession est déficitaire (plus de dettes que d'actifs), les héritiers ont le droit de <span class='highlight'>répudier la succession</span>. Ils ont généralement un délai de <strong>3 mois</strong> pour le faire. S'ils ne font rien, la succession est réputée acceptée (y compris les dettes).</li></ul>",
        children: [], 
        parent: "droit_successions"
    },

    // --- 7.4 LES DROITS RÉELS (Dès page 68 du cours) ---
    droits_reels: {
        title: "Les droits réels",
        info: "Cette branche du droit privé régit la maîtrise juridique et matérielle qu'une personne exerce sur les choses (les biens).",
        children: ["reels_definition", "reels_meubles_immeubles", "reels_propriete", "reels_restreints", "reels_possession", "reels_acquisition_perte"],
        parent: "droit_prive_pt7" 
    },

    // --- CHAPITRE 1 : DÉFINITION ---
    reels_definition: {
        title: "Définition",
        info: "Un droit réel est un droit qui confère à son titulaire une <span class='highlight'>maîtrise directe et absolue sur une chose</span>. <br><br><strong>Caractère absolu :</strong> Contrairement à un droit de créance (qui ne lie que deux personnes), le droit réel est <strong>opposable à tous</strong> (<em>erga omnes</em>). Quiconque doit respecter ce droit.",
        children: [], 
        parent: "droits_reels"
    },

    // --- CHAPITRE 2 : LES MEUBLES ET LES IMMEUBLES ---
    reels_meubles_immeubles: {
        title: "Les meubles et les immeubles",
        info: "La loi divise les choses en deux grandes catégories, soumises à des règles différentes :<br><br><ul><li><strong>Les meubles :</strong> Ce sont les choses corporelles qui <span class='success'>peuvent être transportées</span> d'un lieu à un autre sans être altérées (ex: une voiture, un livre, l'argent). Les forces naturelles (ex: électricité) sont aussi des meubles.</li><li><strong>Les immeubles :</strong> Ce sont les choses qui <strong>ne peuvent pas être déplacées</strong>. Le Code civil en distingue plusieurs sortes : les biens-fonds (terrains), les droits distincts et permanents immatriculés au registre foncier (ex: droit de superficie), les mines, et les parts de copropriété d'un immeuble (ex: appartement en PPE).</li></ul>",
        children: [], 
        parent: "droits_reels"
    },

    // --- CHAPITRE 3 : LA PROPRIÉTÉ ---
    reels_propriete: {
        title: "La propriété",
        info: "C'est le droit réel le plus complet qu'une personne puisse avoir sur une chose.",
        children: ["propriete_definition", "propriete_restrictions", "propriete_copropriete", "propriete_commune"], 
        parent: "droits_reels"
    },

    propriete_definition: {
        title: "Définition (Art. 641 CC)",
        info: "Le propriétaire d'une chose a le droit d'en <span class='highlight'>disposer librement</span>, dans les limites de la loi. <br><br>Il possède deux prérogatives fondamentales :<br><ul><li>Le droit de l'utiliser, d'en percevoir les fruits et même de la détruire.</li><li>Le droit de <strong>revendiquer la chose</strong> contre quiconque la détient sans droit et de repousser toute usurpation.</li></ul>",
        children: [], 
        parent: "reels_propriete"
    },

    propriete_restrictions: {
        title: "Les restrictions du droit de propriété",
        info: "La propriété n'est pas un droit sans limites. Elle est restreinte par la loi pour protéger les autres.<br><br><ul><li><strong>Le droit de voisinage :</strong> Le propriétaire doit s'abstenir de tout excès au détriment de ses voisins (interdiction des <span class='highlight'>immissions excessives</span> comme le bruit, la fumée, les mauvaises odeurs).</li><li><strong>L'expropriation :</strong> L'État peut forcer un propriétaire à céder son bien pour cause d'<strong>utilité publique</strong> (ex: construire une route), moyennant une juste et entière indemnité.</li></ul>",
        children: [], 
        parent: "reels_propriete"
    },

    propriete_copropriete: {
        title: "La copropriété",
        info: "Plusieurs personnes sont propriétaires en commun de la même chose. <br><br><strong>Particularité :</strong> Chacun possède une <strong>quote-part idéale</strong> (une fraction mathématique, ex: 1/2 ou 1/4) dont il peut <span class='success'>disposer librement</span> (la vendre, la mettre en gage) sans l'accord des autres. <br><em>Exemple typique : La Propriété Par Étages (PPE).</em>",
        children: [], 
        parent: "reels_propriete"
    },

    propriete_commune: {
        title: "La propriété commune",
        info: "Plusieurs personnes forment une communauté préalable (ex: une communauté d'héritiers ou une société simple) et sont propriétaires d'un bien.<br><br><strong>Particularité :</strong> Il n'y a <strong>pas de quote-part indépendante</strong>. Aucun des propriétaires ne peut vendre sa part seul ; toutes les décisions doivent être prises à l'<span class='highlight'>unanimité</span>.",
        children: [], 
        parent: "reels_propriete"
    },

    // --- CHAPITRE 4 : LES DROITS RÉELS RESTREINTS ---
    reels_restreints: {
        title: "Les droits réels restreints",
        info: "Contrairement à la propriété, ils ne confèrent qu'une maîtrise <strong>partielle</strong> sur une chose qui appartient à quelqu'un d'autre.<br><br>On en distingue trois types :<br><ul><li><strong>Les servitudes :</strong> Obligent le propriétaire à <em>tolérer</em> un usage ou à <em>s'abstenir</em> d'exercer un droit (ex: droit de passage, usufruit).</li><li><strong>Les charges foncières :</strong> Obligent le propriétaire d'un immeuble à faire certaines prestations (ex: livrer du bois).</li><li><strong>Les droits de gage :</strong> Permettent au créancier de faire réaliser (vendre) la chose pour se payer sur le produit si le débiteur ne rembourse pas sa dette (ex: <span class='highlight'>hypothèque</span> pour un immeuble, droit de rétention pour un meuble).</li></ul>",
        children: [], 
        parent: "droits_reels"
    },

    // --- CHAPITRE 5 : LA POSSESSION ---
    reels_possession: {
        title: "La possession",
        info: "<strong>Attention à la nuance :</strong> La possession n'est pas un droit, c'est une <strong>situation de fait</strong>. <br><br>Le possesseur est celui qui a la <span class='highlight'>maîtrise effective et corporelle</span> de la chose (Art. 919 CC). <br><em>Exemple : Le locataire d'une voiture est le possesseur (il a les clés et conduit), mais l'entreprise de leasing en reste la propriétaire.</em>",
        children: [], 
        parent: "droits_reels"
    },

    // --- CHAPITRE 6 : L'ACQUISITION ET LA PERTE ---
    reels_acquisition_perte: {
        title: "L'acquisition et la perte de la propriété",
        info: "Les règles de transfert diffèrent fondamentalement selon la nature du bien :<br><br><strong>Pour les meubles :</strong><br><ul><li><em>Acquisition :</em> Se fait par le <strong>transfert de la possession</strong> (la tradition), c'est-à-dire la remise matérielle de l'objet.</li><li><em>Perte :</em> Par l'abandon volontaire (déréliction), le transfert à un tiers, ou la destruction de la chose.</li></ul><br><strong>Pour les immeubles :</strong><br><ul><li><em>Acquisition :</em> Ne devient effective que par l'<strong>inscription au Registre Foncier (RF)</strong>. Un contrat de vente immobilier (qui doit revêtir la forme authentique) ne suffit pas à lui seul pour transférer la propriété.</li><li><em>Perte :</em> Par la radiation au Registre Foncier.</li></ul>",
        children: [], 
        parent: "droits_reels"
    },

    // --- 7.5 LA PROCÉDURE CIVILE (Dès page 72 du cours) ---
    procedure_civile: {
        title: "La procédure civile",
        info: "Cette branche détermine les règles à suivre lorsqu'un litige de droit privé (entre particuliers ou entreprises) doit être tranché par un juge civil. Elle est régie au niveau national par le Code de procédure civile (CPC).",
        children: ["proc_civ_definition", "proc_civ_competence", "proc_civ_deroulement", "proc_civ_execution"],
        parent: "droit_prive_pt7" // À ajuster selon ton ancrage principal
    },

    // --- CHAPITRE 1 : DÉFINITION ET NOTIONS ---
    proc_civ_definition: {
        title: "Définition et notions générales",
        info: "La procédure civile sert à faire reconnaître et exécuter des droits subjectifs privés. Contrairement à la procédure pénale où l'État poursuit d'office, le procès civil est <span class='highlight'>l'affaire des parties</span>.<br><br><strong>Principes fondamentaux :</strong><br><ul><li><strong>La maxime de disposition :</strong> Le juge ne s'occupe que de ce que les parties lui demandent. Il ne peut pas accorder plus, ni autre chose, que ce qui est réclamé.</li><li><strong>La maxime des débats :</strong> C'est aux parties de <span class='success'>présenter les faits et d'apporter les preuves</span>. Le juge civil ne mène pas d'enquête lui-même (contrairement au juge pénal).</li><li><strong>Le fardeau de la preuve (Art. 8 CC) :</strong> Quiconque allègue un fait pour en déduire un droit doit le prouver. Si on n'a pas de preuve, on perd le procès.</li></ul>",
        children: [], 
        parent: "procedure_civile"
    },

    // --- CHAPITRE 2 : LA COMPÉTENCE DU TRIBUNAL ---
    proc_civ_competence: {
        title: "La compétence du tribunal",
        info: "Avant d'entrer en matière, il faut déterminer quel tribunal a le droit de juger l'affaire (la juridiction compétente).<br><br><ul><li><strong>La compétence à raison de la matière :</strong> Dépend de l'objet du litige ou de la somme en jeu (ex: Tribunal des prud'hommes pour le droit du travail, Tribunal des baux pour les loyers, Tribunal d'arrondissement).</li><li><strong>La compétence territoriale (Le For) :</strong> Détermine le lieu géographique du tribunal. <strong>Principe de base :</strong> Le for ordinaire est au <span class='highlight'>domicile du défendeur</span> (la personne qui est attaquée en justice). Des exceptions existent (ex: for du lieu de situation de l'immeuble pour les droits réels).</li></ul>",
        children: [], 
        parent: "procedure_civile"
    },

    // --- CHAPITRE 3 : LE DÉROULEMENT DE LA PROCÉDURE ---
    proc_civ_deroulement: {
        title: "Le déroulement de la procédure",
        info: "Le procès civil obéit à un processus chronologique strict pour garantir un procès équitable.<br><br><strong>Les étapes clés :</strong><br><ol><li><strong>La tentative de conciliation :</strong> Dans la grande majorité des cas, il est <span class='highlight'>obligatoire de passer d'abord par une autorité de conciliation</span>. Le but est de trouver un accord à l'amiable et d'éviter d'engorger les tribunaux.</li><li><strong>La procédure de première instance :</strong> Si la conciliation échoue, le plaignant reçoit une autorisation de procéder. S'ensuivent l'échange des écritures (demande et réponse), les débats oraux, l'administration des preuves (audition de témoins, expertises) et enfin, le jugement.</li><li><strong>Les voies de recours :</strong> La partie perdante peut contester le jugement devant une instance supérieure (Appel ou recours au Tribunal cantonal), puis éventuellement au Tribunal fédéral en dernière instance.</li></ol>",
        children: [], 
        parent: "procedure_civile"
    },

    // --- CHAPITRE 4 : LE RÉGIME DE L'EXÉCUTION FORCÉE ---
    proc_civ_execution: {
        title: "Le régime de l'exécution forcée",
        info: "Si la partie perdante refuse d'exécuter volontairement le jugement, le gagnant peut recourir à la force de l'État.<br><br>Il faut distinguer deux systèmes distincts :<br><ul><li><strong>Si la condamnation porte sur une somme d'argent :</strong> L'exécution est régie exclusivement par la <span class='highlight'>Loi fédérale sur la poursuite pour dettes et la faillite (LP)</span>. On s'adresse à l'Office des poursuites (saisie de salaire, faillite).</li><li><strong>Si la condamnation porte sur autre chose (faire, donner, tolérer, s'abstenir) :</strong> L'exécution est régie par le Code de procédure civile (CPC). Le juge de l'exécution peut prononcer des <span class='success'>amendes disciplinaires</span>, une menace de peine pénale (Art. 292 CP), ou ordonner l'intervention de la police (ex: pour une expulsion de locataire).</li></ul>",
        children: [], 
        parent: "procedure_civile"
    },

    // --- 7.6 LE DROIT INTERNATIONAL PRIVÉ (Dès page 78 du cours) ---
    droit_inter_prive: {
        title: "Le droit international privé (aperçu)",
        info: "Le droit international privé (DIP) entre en jeu lorsqu'une relation de droit privé comporte un <strong>élément d'extranéité</strong> (c'est-à-dire un lien avec l'étranger, comme des parties de nationalités différentes ou domiciliées dans des pays distincts). En Suisse, ces règles se trouvent dans la <span class='highlight'>Loi fédérale sur le droit international privé (LDIP)</span>.",
        children: ["dip_trois_questions"],
        parent: "droit_prive_pt7"
    },

    dip_trois_questions: {
        title: "Les trois questions fondamentales",
        info: "Lorsqu'un litige présente un caractère international, le juge doit obligatoirement se poser trois questions dans un ordre très précis :<br><br><ol><li><strong>La compétence (Conflit de juridictions) :</strong> Les tribunaux suisses sont-ils compétents pour juger l'affaire ? Si oui, dans quel canton ?</li><li><strong>Le droit applicable (Conflit de lois) :</strong> Quel droit national le juge doit-il appliquer pour trancher le litige sur le fond ? Le juge suisse peut tout à fait être amené à <span class='success'>appliquer un droit étranger</span> (par exemple le droit japonais ou français) si les règles de rattachement l'exigent.</li><li><strong>La reconnaissance et l'exécution :</strong> Un jugement rendu à l'étranger peut-il être reconnu et exécuté de force en Suisse ?</li></ol>",
        children: [], 
        parent: "droit_inter_prive"
    },

    // --- 7.7 L'ARBITRAGE (Dès page 79 du cours) ---
    arbitrage: {
        title: "L'arbitrage (aperçu)",
        info: "L'arbitrage est un mode de résolution des litiges <strong>privé et extrajudiciaire</strong>. Au lieu de s'adresser aux tribunaux de l'État, les parties confient le soin de trancher leur différend à un ou plusieurs particuliers que l'on appelle des <span class='highlight'>arbitres</span>.",
        children: ["arbitrage_convention", "arbitrage_sentence", "arbitrage_caracteristiques"],
        parent: "droit_prive_pt7"
    },

    arbitrage_convention: {
        title: "La convention d'arbitrage",
        info: "Pour qu'un litige soit soumis à l'arbitrage au lieu de la justice ordinaire, il faut obligatoirement le <strong>consentement des deux parties</strong>. <br><br>Cela se fait généralement par une <span class='highlight'>clause compromissoire</span> insérée directement dans le contrat principal (bien avant qu'un litige n'éclate). S'il y a une telle clause valide, les tribunaux étatiques doivent se déclarer incompétents.",
        children: [], 
        parent: "arbitrage"
    },

    arbitrage_sentence: {
        title: "La sentence arbitrale",
        info: "La décision finale rendue par le tribunal arbitral s'appelle une <strong>sentence arbitrale</strong>. <br><br>Elle est <strong>définitive et contraignante</strong> pour les parties, au même titre qu'un jugement étatique officiel. Fait essentiel : grâce aux traités internationaux (comme la Convention de New York), une sentence arbitrale est souvent <span class='success'>plus facilement reconnue et exécutable à l'étranger</span> qu'un jugement d'un tribunal national.",
        children: [], 
        parent: "arbitrage"
    },

    arbitrage_caracteristiques: {
        title: "Les caractéristiques (Avantages / Inconvénients)",
        info: "L'arbitrage est le mode de résolution favori dans le commerce international pour plusieurs raisons majeures :<br><br><ul><li><strong>Confidentialité :</strong> Contrairement aux tribunaux de l'État où les audiences sont publiques, l'arbitrage se déroule à huis clos. Les secrets d'affaires sont protégés.</li><li><strong>Expertise :</strong> Les parties peuvent choisir des arbitres hyper-spécialisés dans le domaine technique de leur litige (ingénierie, finance, etc.).</li><li><strong>Flexibilité :</strong> Le choix de la langue, du lieu et des règles de procédure est libre.</li><li><strong>Le coût (Inconvénient) :</strong> L'arbitrage est généralement <strong>très onéreux</strong>, car les parties doivent payer elles-mêmes les honoraires souvent très élevés des arbitres (contrairement aux juges étatiques qui sont payés par nos impôts).</li></ul>",
        children: [], 
        parent: "arbitrage"
    },

    // --- 8. LE DROIT DES OBLIGATIONS (Dès page 80 du cours) ---
    droit_obligations: {
        title: "8. Le droit des obligations",
        info: "Cette branche fondamentale du droit privé régit les relations juridiques entre créanciers et débiteurs. Elle est principalement codifiée dans le Code des obligations (CO).",
        children: ["ob_definition", "ob_prestation", "ob_sources"],
        parent: "root"
    },

    // --- CHAPITRE 1 : DÉFINITION ET NOTION ---
    ob_definition: {
        title: "Définition et notion d'obligation",
        info: "Au sens juridique, une obligation est un <span class='highlight'>lien juridique</span> entre deux personnes au moins.<br><br>Dans cette relation bilatérale, on distingue :<br><ul><li><strong>Le créancier :</strong> C'est la partie active. Il est celui qui a le <strong>droit d'exiger</strong> l'exécution de la prestation (il détient une <em>créance</em>).</li><li><strong>Le débiteur :</strong> C'est la partie passive. Il est celui qui a le <strong>devoir d'exécuter</strong> la prestation (il a une <em>dette</em> envers le créancier).</li></ul>",
        children: [],
        parent: "droit_obligations"
    },

    // --- CHAPITRE 2 : LA PRESTATION ---
    ob_prestation: {
        title: "La prestation",
        info: "C'est l'objet même de l'obligation, c'est-à-dire le comportement précis que le créancier peut exiger du débiteur.<br><br>La prestation peut prendre deux formes principales :<br><ul><li><strong>Prestation positive :</strong> Elle consiste à <span class='success'>donner</span> (ex: livrer une marchandise, transférer la propriété, payer une somme d'argent) ou à <span class='success'>faire</span> (ex: construire un mur, fournir un service, travailler).</li><li><strong>Prestation négative :</strong> Elle consiste à <span class='success'>ne pas faire</span> (une abstention, ex: respecter une clause de non-concurrence) ou à <span class='success'>tolérer</span> (ex: laisser un voisin passer sur son terrain).</li></ul>",
        children: [],
        parent: "droit_obligations"
    },

    // --- CHAPITRE 3 : LES SOURCES DES OBLIGATIONS ---
    ob_sources: {
        title: "Les sources des obligations",
        info: "Comment naît une obligation ? Le droit suisse reconnaît <span class='highlight'>trois sources légales principales</span> qui créent ce lien juridique entre deux individus :",
        children: ["ob_source_contrat", "ob_source_rc", "ob_source_enrichissement"],
        parent: "droit_obligations"
    },

    ob_source_contrat: {
        title: "1. Le contrat (Art. 1 ss CO)",
        info: "C'est la <strong>source volontaire</strong> la plus courante. L'obligation naît de la <span class='highlight'>manifestation de volonté concordante</span> de deux ou plusieurs parties qui se mettent d'accord pour créer, modifier ou annuler un lien juridique (ex: contrat de vente, de bail, de travail). Les deux parties ont voulu s'engager.",
        children: [],
        parent: "ob_sources"
    },

    ob_source_rc: {
        title: "2. La responsabilité civile / Acte illicite (Art. 41 ss CO)",
        info: "C'est une <strong>source légale non volontaire</strong>. L'obligation naît du fait qu'une personne a <strong>causé sans droit un dommage à autrui</strong> (soit de manière intentionnelle, soit par négligence). <br><br>L'auteur du dommage devient immédiatement le débiteur : il a l'obligation légale de <span class='highlight'>réparer le préjudice</span> (souvent par le versement de dommages-intérêts). La victime devient le créancier.",
        children: [],
        parent: "ob_sources"
    },

    ob_source_enrichissement: {
        title: "3. L'enrichissement illégitime (Art. 62 ss CO)",
        info: "C'est également une <strong>source non volontaire</strong>. L'obligation naît lorsqu'une personne <strong>s'enrichit aux dépens d'autrui sans cause légitime</strong>. <br><br>Celui qui s'est enrichi injustement (le débiteur) a l'obligation de <span class='highlight'>restituer cet enrichissement</span>. <br><em>Exemple typique : Vous payez par erreur une facture deux fois. L'entreprise qui a reçu le double paiement a l'obligation de vous rembourser le trop-perçu.</em>",
        children: [],
        parent: "ob_sources"
    },
    
    // --- 9. LES SOURCES DES OBLIGATIONS ---
    sources_obligations_titre9: {
        title: "9. Les sources des obligations",
        info: "Ce chapitre traite des différentes causes juridiques qui donnent naissance à une obligation entre deux ou plusieurs personnes[cite: 5].",
        children: ["so_notion", "so_volontaires", "so_legales"],
        parent: "root"
    },

    // --- SECTION 1 : NOTION ---
    so_notion: {
        title: "Section 1 : Notion",
        info: "La source d'une obligation est la <strong>cause juridique de cette dernière</strong>, c'est-à-dire le fait que le droit objectif attache directement ou indirectement à la naissance d'une obligation[cite: 5]. Chaque obligation repose donc sur une source[cite: 5].<br><br>Parmi ces dernières, on distingue deux grandes catégories[cite: 5] :<br><ul><li>Les sources <strong>volontaires</strong>[cite: 5].</li><li>Les sources <strong>légales</strong> (en particulier les actes illicites et l'enrichissement illégitime)[cite: 5].</li></ul>",
        children: [],
        parent: "sources_obligations_titre9"
    },

    // --- SECTION 2 : LES SOURCES VOLONTAIRES D'OBLIGATION ---
    so_volontaires: {
        title: "Section 2 : Les sources volontaires d'obligation",
        info: "Les sources volontaires d'obligation sont constituées par la ou les <strong>volontés d'une ou plusieurs parties de s'engager</strong>[cite: 5]. De cette volonté découlent des obligations qui lient la ou les parties (art. 1 CO)[cite: 5].",
        children: ["so_contrat", "so_acte_unilateral", "so_quasi_contrats"],
        parent: "sources_obligations_titre9"
    },

    // SOUS-BRANCHES SECTION 2
    so_contrat: {
        title: "Chapitre 1 : Le contrat ou les obligations contractuelles",
        info: "Le contrat constitue la source d'obligations volontaires la plus importante. Il se définit comme <strong>l'échange de plusieurs manifestations de volonté réciproques et concordantes</strong>[cite: 5].<br><br>Les obligations ayant leur source dans le contrat sont au nombre de trois[cite: 5] :<br><ol><li>Les obligations découlant du <strong>contenu même du contrat</strong>[cite: 5].</li><li>Les obligations prévues par le <strong>droit supplétif</strong> : un droit qui ne s'applique que lorsque les parties n'ont pas réglé le point dans le contrat. Il complète alors le contrat[cite: 5].</li><li>Les obligations prévues par le <strong>droit impératif</strong> : celui qui s'applique de manière obligatoire et incontournable dès que certaines conditions sont remplies[cite: 5].</li></ol>",
        children: [],
        parent: "so_volontaires"
    },

    so_acte_unilateral: {
        title: "Chapitre 2 : L'acte juridique unilatéral",
        info: "L'acte juridique unilatéral est <strong>l'acte par lequel une personne s'engage seule</strong>[cite: 5]. <br><br><strong>Exemples :</strong> <br><ul><li>La promesse publique faite à un nombre déterminé de personnes de récompenser celle qui réalisera une prestation déterminée (art. 8 CO)[cite: 5].</li><li>Le testament (art. 498 CC)[cite: 5].</li></ul>",
        children: [],
        parent: "so_volontaires"
    },

    so_quasi_contrats: {
        title: "Chapitre 3 : Les quasi-contrats",
        info: "Les quasi-contrats correspondent à des <strong>situations pour lesquelles les conditions d'un acte juridique font défaut</strong> (par exemple, la volonté de l'une des parties au moins) mais que la loi et la jurisprudence <strong>assimilent à des actes volontaires</strong>[cite: 5].<br><br><strong>Exemples de quasi-contrats :</strong><br><ul><li>La gestion d'affaires sans mandat (art. 419 à 424 CO)[cite: 5].</li><li>L'acte de complaisance[cite: 5].</li><li>La relation contractuelle de fait[cite: 5].</li></ul>",
        children: [],
        parent: "so_volontaires"
    },

    // --- SECTION 3 : LES SOURCES LÉGALES ---
    so_legales: {
        title: "Section 3 : Les sources légales",
        info: "La source d'obligation est ici <strong>la loi elle-même, indifféremment de la volonté du débiteur ou même de son comportement</strong>[cite: 5]. La loi impose des obligations lorsque certaines conditions définies par elle sont remplies, en raison de situations juridiques durables le plus souvent[cite: 5].",
        children: ["so_acte_illicite", "so_enrichissement"],
        parent: "sources_obligations_titre9"
    },

    // SOUS-BRANCHES SECTION 3
    so_acte_illicite: {
        title: "Chapitre 1 : L'acte illicite ou la responsabilité civile",
        info: "La loi impose <strong>l'obligation à l'auteur d'un préjudice de réparer le dommage causé aux tiers</strong>[cite: 5]. <br><br>Le fondement de cette obligation réside dans le fait qui a généré le dommage, donnant lieu à deux types de responsabilités[cite: 5] :<br><ul><li>La <strong>responsabilité subjective</strong> : fondée sur la faute de l'auteur (art. 41 CO)[cite: 5].</li><li>La <strong>responsabilité objective</strong> : fondée sur le risque créé[cite: 5].</li></ul><br>Des lois spéciales prévoient également une telle responsabilité (ex: la LCR qui impose l'obligation de réparer le dommage à la charge du détenteur d'un véhicule à moteur)[cite: 5].",
        children: [],
        parent: "so_legales"
    },

    so_enrichissement: {
        title: "Chapitre 2 : L'enrichissement illégitime",
        info: "La personne qui <strong>bénéficie aux dépens d'autrui d'un enrichissement sans cause valable a l'obligation de par la loi de restituer cet enrichissement</strong> (art. 62 à 67 CO)[cite: 5]. <br><br>Il est très important de noter que les règles sur l'enrichissement illégitime sont <strong>subsidiaires</strong> : elles ne s'appliquent que lorsqu'aucune règle de fond relative aux obligations contractuelles ou à la responsabilité civile ne trouve application[cite: 5].",
        children: [],
        parent: "so_legales"
    },

    // --- 10. LES OBLIGATIONS CONTRACTUELLES ---
    obligations_contractuelles_titre10: {
        title: "10. Les obligations contractuelles",
        info: "Cette branche traite de la source volontaire d'obligations la plus importante : le contrat. Elle régit sa formation, son objet, ses vices et ses modalités juridiques[cite: 5].",
        children: [
            "oc_sec1_definition", "oc_sec2_autonomie", "oc_sec3_conclusion", 
            "oc_sec4_interpretation", "oc_sec5_forme", "oc_sec6_objet", 
            "oc_sec7_vices", "oc_sec8_representation", "oc_sec9_stipulation", 
            "oc_sec10_suretes", "oc_sec11_subrogation"
        ],
        parent: "root"
    },

    // --- SECTION 1 ---
    oc_sec1_definition: {
        title: "Section 1 : Définition et classification",
        info: "<strong>L'acte juridique</strong> se définit comme une manifestation de volonté destinée et apte à produire un effet juridique[cite: 5]. Il peut être unilatéral ou bi/multilatéral.<br><br><strong>Le contrat</strong> se définit comme <strong>l'échange de deux ou plusieurs manifestations de volonté concordantes</strong> destiné à produire un effet juridique conforme aux volontés exprimées de manière concordante (art. 1 al. 1 CO)[cite: 5].<br><br>Classification des contrats[cite: 5] :<br><ul><li><strong>Selon les effets :</strong> unilatéral (ex: donation) ou bilatéral (parfait/synallagmatique où les prestations sont dans un rapport d'échange, ou imparfait)[cite: 5].</li><li><strong>Selon la durée :</strong> contrats simples (instantanés) ou contrats de durée[cite: 5].</li><li><strong>Selon la loi :</strong> contrats nommés (réglés par la loi) ou innommés (mixtes ou sui generis)[cite: 5].</li></ul>",
        children: [],
        parent: "obligations_contractuelles_titre10"
    },

    // --- SECTION 2 ---
    oc_sec2_autonomie: {
        title: "Section 2 : L'autonomie de la volonté",
        info: "En tant que branche du droit privé, le droit des obligations est soumis au principe de l'autonomie de la volonté[cite: 5].<br><br>Elle comprend <strong>cinq droits essentiels</strong>[cite: 5] :<br><ol><li>La liberté de contracter.</li><li>La liberté de choisir son ou ses partenaires contractuels.</li><li>La liberté de choisir la forme du contrat.</li><li>La liberté d'annuler ou de modifier le contrat par volonté commune.</li><li>La liberté de déterminer le contenu du contrat.</li></ol><br>Cette liberté connaît des <strong>limites de fait</strong> (poids respectif des parties) et des <strong>limites de droit</strong> (forme ou objet)[cite: 5].",
        children: [],
        parent: "obligations_contractuelles_titre10"
    },

    // --- SECTION 3 ---
    oc_sec3_conclusion: {
        title: "Section 3 : La conclusion du contrat",
        info: "La conclusion passe par plusieurs étapes[cite: 5] :<br><br><ul><li><strong>La négociation :</strong> Les parties ont des devoirs précontractuels (se comporter loyalement, s'informer). La violation de ces devoirs engage la responsabilité précontractuelle (<strong>culpa in contrahendo</strong>)[cite: 5].</li><li><strong>L'offre :</strong> Proposition ferme de conclure un contrat. C'est un acte <strong>soumis à réception</strong> qui est en principe <strong>irrévocable</strong> (sauf exceptions art. 9 CO)[cite: 5].</li><li><strong>L'acceptation :</strong> Manifestation de volonté définitive de conclure. Le <strong>silence ne vaut en principe pas acceptation</strong> (art. 6 CO)[cite: 5].</li><li><strong>La concordance :</strong> Il doit y avoir un accord sur les <strong>points objectivement et subjectivement essentiels</strong>[cite: 5]. Si les volontés réelles divergent, le juge applique le <strong>principe de la confiance</strong> (consentement juridique ou normatif)[cite: 5].</li><li><strong>Conditions générales (CG) :</strong> Sont limitées par la règle de l'insolite et l'interdiction des clauses abusives (art. 8 LCD)[cite: 5].</li></ul>",
        children: [],
        parent: "obligations_contractuelles_titre10"
    },

    // --- SECTION 4 ---
    oc_sec4_interpretation: {
        title: "Section 4 : Interprétation, complètement, correction",
        info: "Lorsque les parties sont en désaccord sur un contrat conclu[cite: 5] :<br><br><ol><li><strong>L'interprétation :</strong> Le juge recherche d'abord la <strong>volonté réelle</strong> des parties (interprétation subjective). En cas d'échec, il détermine la <strong>volonté supposée</strong> selon le principe de la confiance (interprétation objective)[cite: 5].</li><li><strong>Le complètement :</strong> En cas de lacune, le juge applique une <strong>règle légale supplétive</strong> ou, à défaut, recherche la volonté hypothétique des parties[cite: 5].</li><li><strong>La correction :</strong> Si l'exécution devient excessivement dure, le juge peut intervenir via la théorie de l'erreur sur les faits futurs ou la <strong>théorie de l'imprévision (clausula rebus sic stantibus)</strong>[cite: 5].</li></ol>",
        children: [],
        parent: "obligations_contractuelles_titre10"
    },

    // --- SECTION 5 ---
    oc_sec5_forme: {
        title: "Section 5 : La forme du contrat",
        info: "Le principe est le <strong>consensualisme (libre choix de la forme, art. 11 CO)</strong>[cite: 5].<br><br>Lorsque la loi exige une forme (pour protéger les parties ou assurer la sécurité des transactions), elle peut imposer[cite: 5] :<br><ul><li><strong>La forme écrite :</strong> Acte rédigé matériellement et <strong>signé par toutes les personnes qui s'obligent</strong>[cite: 5].</li><li><strong>La légalisation :</strong> Attestation officielle d'une signature[cite: 5].</li><li><strong>La forme authentique :</strong> Nécessite la collaboration d'un officier public (notaire)[cite: 5].</li></ul><br><strong>Sanction :</strong> Le non-respect d'une forme imposée entraîne de plein droit la <strong>nullité absolue</strong> du contrat (nullité originaire ou <em>ex tunc</em>)[cite: 5].",
        children: [],
        parent: "obligations_contractuelles_titre10"
    },

    // --- SECTION 6 ---
    oc_sec6_objet: {
        title: "Section 6 : L'objet du contrat",
        info: "L'objet du contrat peut être librement déterminé dans les limites de la loi (art. 19 al. 1 CO)[cite: 5].<br><br><strong>Les exceptions (Art. 19 et 20 CO)</strong> qui limitent cette liberté sont[cite: 5] :<br><ul><li><strong>L'impossibilité :</strong> Elle doit être <strong>initiale (originaire) et objective</strong> (impossible pour tout le monde)[cite: 5].</li><li><strong>L'illicéité :</strong> Violation d'une interdiction absolue du droit suisse (y compris la fraude à la loi)[cite: 5].</li><li><strong>L'immoralité :</strong> Contrat heurtant la morale sociale[cite: 5].</li><li><strong>Atteinte aux droits de la personnalité (art. 27 CC) :</strong> Engagement excessif[cite: 5].</li></ul><br><strong>Sanction :</strong> Le contrat est frappé de <strong>nullité absolue</strong>. Des exceptions existent comme la <strong>nullité partielle</strong> (seules les clauses viciées tombent) ou la <strong>nullité relative</strong> (seule la partie protégée peut l'invoquer)[cite: 5].",
        children: [],
        parent: "obligations_contractuelles_titre10"
    },

    // --- SECTION 7 ---
    oc_sec7_vices: {
        title: "Section 7 : Les vices du contrat",
        info: "Le contrat est <strong>annulable</strong> si la volonté a été faussée. La déclaration d'annulation a un effet rétroactif (<strong>ex tunc</strong>)[cite: 5].<br><br><strong>Les vices de la volonté (Art. 23-30 CO) :</strong><br><ul><li><strong>L'erreur essentielle :</strong> Fausse représentation de la réalité. Elle peut être une <strong>erreur de déclaration</strong> (volonté mal exprimée) ou une <strong>erreur sur les motifs/erreur de base</strong> (la volonté est bien exprimée mais repose sur un fait objectivement et subjectivement essentiel qui est faux)[cite: 5].</li><li><strong>Le dol :</strong> Induire <strong>intentionnellement</strong> une personne en erreur (tromperie) pour l'amener à conclure[cite: 5].</li><li><strong>La crainte fondée :</strong> Menace <strong>illicite et intentionnelle</strong> inspirant la peur pour forcer la conclusion (ex: chantage)[cite: 5].</li></ul><br><strong>La lésion (Art. 21 CO) :</strong><br>Disproportion évidente entre les prestations, causée par l'<strong>exploitation consciente de la gêne, de la légèreté ou de l'inexpérience</strong> de la victime[cite: 5].",
        children: [],
        parent: "obligations_contractuelles_titre10"
    },

    // --- SECTION 8 ---
    oc_sec8_representation: {
        title: "Section 8 : La représentation",
        info: "Rapport juridique en vertu duquel un acte accompli par le <strong>représentant</strong> produit des effets directement pour le <strong>représenté</strong> envers le <strong>cocontractant</strong>[cite: 5].<br><br><ul><li><strong>Représentation avec pouvoirs :</strong> Le représentant doit agir <strong>au nom du représenté</strong> (déclaration expresse ou implicite) et disposer du <strong>pouvoir de représentation</strong>[cite: 5].</li><li><strong>Représentation sans pouvoirs :</strong> Le pseudo-représenté n'est pas lié, SAUF s'il y a <strong>ratification du contrat</strong> ou s'il a créé une <strong>apparence efficace</strong> envers le tiers de bonne foi[cite: 5].</li><li><strong>Contrat avec soi-même et double représentation :</strong> Interdits en principe (danger de conflit d'intérêts) et frappés de nullité, sauf si la nature de l'affaire exclut tout préjudice ou s'il y a eu autorisation/ratification[cite: 5].</li></ul>",
        children: [],
        parent: "obligations_contractuelles_titre10"
    },

    // --- SECTION 9 ---
    oc_sec9_stipulation: {
        title: "Section 9 : La stipulation pour autrui",
        info: "Convention par laquelle le <strong>promettant</strong> promet au <strong>stipulant</strong> de faire sa prestation à une troisième personne, le <strong>bénéficiaire</strong> (art. 112 CO)[cite: 5].<br><br><ul><li><strong>Stipulation imparfaite :</strong> Seul le stipulant est créancier. Le bénéficiaire reçoit valablement mais ne peut pas exiger l'exécution en justice[cite: 5].</li><li><strong>Stipulation parfaite :</strong> Le bénéficiaire acquiert un <strong>droit de créance propre et indépendant</strong> contre le promettant. Il se substitue au stipulant dès qu'il déclare vouloir faire usage de son droit[cite: 5].</li></ul>",
        children: [],
        parent: "obligations_contractuelles_titre10"
    },

    // --- SECTION 10 ---
    oc_sec10_suretes: {
        title: "Section 10 : Les sûretés personnelles",
        info: "Garanties fournies par une personne pour protéger le créancier contre l'inexécution d'une dette[cite: 5].<br><br><ul><li><strong>Le cautionnement (art. 492 ss CO) :</strong> Engagement de la caution à répondre de la dette d'un débiteur principal. Il a un caractère <strong>strictement accessoire</strong> : sa validité dépend de la dette principale. La caution qui a payé est <strong>subrogée</strong> aux droits du créancier[cite: 5].</li><li><strong>Le contrat de porte-fort (art. 111 CO) :</strong> Engagement <strong>indépendant</strong> par lequel le promettant garantit au bénéficiaire le fait d'un tiers (verser des dommages-intérêts si le tiers ne s'exécute pas). N'est soumis à <strong>aucune règle de forme</strong>[cite: 5].</li></ul>",
        children: [],
        parent: "obligations_contractuelles_titre10"
    },

    // --- SECTION 11 ---
    oc_sec11_subrogation: {
        title: "Section 11 : La subrogation",
        info: "La subrogation est le <strong>transfert légal de la créance</strong> (art. 110 CO)[cite: 5].<br><br>Le paiement effectué par un tiers au créancier n'éteint pas la créance, mais la <strong>transfère du créancier au tiers payant</strong>, qui acquiert ainsi les droits liés à cette créance contre le débiteur initial (ex: la caution qui paie le créancier prend la place de ce dernier pour se retourner contre le débiteur)[cite: 5].",
        children: [],
        parent: "obligations_contractuelles_titre10"
    }
};
// [ ... GARDE TON OBJET courseData ENTIER ICI ... ]
// }; <-- Fin de ton objet courseData

const mainContent = document.getElementById('main-content');
const breadcrumb = document.getElementById('breadcrumb');
const searchBar = document.getElementById('searchBar');
const sidebarContent = document.getElementById('sidebar-content');

// --- FONCTION POUR GÉNÉRER LA BARRE LATÉRALE ---
function renderSidebar() {
    let html = `<ul class="nav-list">`;
    const mainBranches = courseData['root'].children;
    mainBranches.forEach(branchId => {
        const branch = courseData[branchId];
        if (branch) html += createSidebarItem(branchId, branch);
    });
    html += `</ul>`;
    sidebarContent.innerHTML = html;
}

function createSidebarItem(id, item) {
    let html = `<li class="nav-item">`;
    if (item.children && item.children.length > 0) {
        html += `<div class="nav-header" id="nav-${id}">
                    <span class="nav-title" onclick="renderTopic('${id}')">${item.title}</span>
                    <span class="toggle-btn" onclick="toggleSubmenu(this, event)">▼</span>
                 </div>`;
        html += `<ul class="sub-nav-list hidden">`;
        item.children.forEach(childId => {
            const child = courseData[childId];
            if (child) html += createSidebarItem(childId, child);
        });
        html += `</ul>`;
    } else {
        html += `<div class="nav-header no-children" id="nav-${id}">
                    <span class="nav-title" onclick="renderTopic('${id}')">${item.title}</span>
                 </div>`;
    }
    html += `</li>`;
    return html;
}

function toggleSubmenu(btn, event) {
    event.stopPropagation();
    const submenu = btn.parentElement.nextElementSibling;
    if (submenu) {
        submenu.classList.toggle('hidden');
        btn.textContent = submenu.classList.contains('hidden') ? '▼' : '▲';
    }
}

// --- GESTION DU MENU MOBILE ---
function toggleMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// --- FONCTION POUR AFFICHER LE CONTENU CENTRAL ---
// L'argument 'pushHistory' permet de savoir si on doit ajouter la page à l'historique ou non
function renderTopic(id, pushHistory = true) {
    const topic = courseData[id];
    if (!topic) return;

    // 1. Ajouter à l'historique du navigateur (pour le bouton retour)
    if (pushHistory) {
        // Enregistre l'état actuel dans le navigateur
        history.pushState({ topicId: id }, topic.title, "?topic=" + id);
    }

    // 2. Mise à jour du fil d'Ariane interactive
    let path = [];
    let currentId = id;

// On remonte la généalogie des parents pour construire le chemin
    while (currentId && currentId !== 'root') {
        path.unshift({ id: currentId, title: courseData[currentId].title });
        currentId = courseData[currentId].parent;
    }

// On commence toujours par le bouton Accueil
    let bcHtml = `<span class="breadcrumb-link" onclick="renderTopic('root')">🏠 Accueil</span>`;

// On ajoute chaque branche du chemin comme un lien cliquable
    path.forEach((p, index) => {
    // On ajoute un séparateur
        bcHtml += ` <span class="breadcrumb-separator">/</span> `;
    
    // Si c'est le dernier élément (la page actuelle), on peut le styliser différemment
        if (index === path.length - 1) {
            bcHtml += `<span class="breadcrumb-current">${p.title}</span>`;
        } else {
            bcHtml += `<span class="breadcrumb-link" onclick="renderTopic('${p.id}')">${p.title}</span>`;
        }
    });

    breadcrumb.innerHTML = bcHtml;
    // 3. Génération du HTML principal
    let html = `
        <div class="info-box">
            <h2>${topic.title}</h2>
            <p>${topic.info}</p>
        </div>
    `;

    if (topic.children.length > 0) {
        html += `<h3 style="color: var(--secondary);">Explorer :</h3><div class="sub-branches-grid">`;
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
    
    // 4. Sur mobile, fermer le menu automatiquement après un clic
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('active')) {
        toggleMobileSidebar();
    }

    // 5. Remonter en haut de la page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- GESTION DU BOUTON RETOUR DU NAVIGATEUR/TÉLÉPHONE ---
window.addEventListener('popstate', (event) => {
    // Si l'historique contient un ID sauvegardé, on l'affiche sans repousser dans l'historique
    if (event.state && event.state.topicId) {
        renderTopic(event.state.topicId, false);
    } else {
        renderTopic('root', false);
    }
});

// --- SYSTÈME DE RECHERCHE ---
searchBar.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    if (val.length < 2) {
        if (val.length === 0) renderTopic('root');
        return;
    }
    
    let resultsHTML = `<div class="info-box"><h2>Résultats pour : "${val}"</h2></div><div class="sub-branches-grid">`;
    let count = 0;

    for (let key in courseData) {
        if (key === 'root') continue;
        if (courseData[key].title.toLowerCase().includes(val) || courseData[key].info.toLowerCase().includes(val)) {
            resultsHTML += `<div class="branch-button" onclick="renderTopic('${key}')">${courseData[key].title}</div>`;
            count++;
        }
    }
    mainContent.innerHTML = count > 0 ? resultsHTML + `</div>` : `
        <div class="info-box">
            <h2>Aucun résultat</h2>
            <p>Essayez d'autres mots-clés.</p>
        </div>`;
});

// --- LANCEMENT INITIAL DE L'APPLICATION ---
renderSidebar();

// Vérifie si on a rechargé la page sur un sujet précis (via l'URL ?topic=...)
const urlParams = new URLSearchParams(window.location.search);
const initialTopic = urlParams.get('topic') || 'root';

// Remplace l'état initial pour que le tout premier bouton retour fonctionne bien
history.replaceState({ topicId: initialTopic }, courseData[initialTopic]?.title || "Accueil", "?topic=" + initialTopic);
renderTopic(initialTopic, false);
