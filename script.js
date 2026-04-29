// BASE DE DONNÉES COMPLÈTE DU COURS
const courseData = {
    
    root: {
        title: "Droit de l'Entreprise",
        info: "Bienvenue sur cette plateforme de révision interactive.<br><br>Ce site <strong>non officiel</strong> est basé sur le polycopié du cours de <strong>Droit de l'entreprise</strong> donné lors du semestre de printemps 2026 aux étudiants de première année de Bachelor en HEC Lausanne par le <strong>Prof. Pascal Favrod-Coune</strong>.<br><br><strong>Attention! Bien que tout soit tiré du polycopié, tous les contenus ont été généré par IA. Nous déclinons donc toute responsabilité pour toute omission, erreur manifeste, erreur typographique, exemple erroné, théorie approximative ou raccourci osé qui pourraient figurer sur ce site.</strong><br><br>Sélectionnez une des grandes branches ci-dessous ou utilisez le menu latéral pour commencer vos révisions.",
        children: ["notion", "sujets", "regle", "sources", "divisions", "public", "droit_prive_pt7", "droit_obligations", "sources_obligations_titre9", "obligations_contractuelles_titre10", "rc_titre11", "rc_contractuelle_titre12", "enrichissement_illegitime_titre13", "modalites_obligations_titre14", "transmission_obligations_titre15", "exec_obligations_titre16", "extinction_obligations_titre17"]
    },

    // --- NOUVELLE ENTRÉE POUR LA BIBLIOGRAPHIE (Footer) ---
    bibliographie: {
        title: "Définitions juridiques et bibliographie",
        info: "Ce cours se base sur les livres suivants :<br><br><ul><li>C. BOVET / A. CARVALHO, Glossaire juridique, Collection Quid iuris ?, Genève / Zurich 2017.</li><li>B. CARRON / P. WESSNER, Le droit des obligations: Partie générale - Vol. I et Vol. II, Berne 2022 et 2024.</li><li>F. CHAUDET / J. C. LANDROVE / V. JUNOD / A. MACALUSO / F. CHAUDET, Droit suisse des affaires, 4ème éd., Bâle 2023.</li><li>P. TERCIER / P. PICHONNAZ, Le droit des obligations, 7ème éd., Zürich / Genève 2024.</li><li>F. WERRO, La responsabilité civile, 4ème éd., Berne 2025.</li></ul><br><em>Les définitions qui se trouvent sur des sites Internet et les réponses proposées par des outils d'intelligence artificielle ne concernent pas forcément le droit suisse. (Extrait de la page 2 du polycopié)</em>",
        children: [],
        parent: "root"
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
        title: "Les fondements du droit",
        info: "Pour pouvoir exercer ses fonctions, à savoir assurer un équilibre entre des intérêts opposés et organiser la vie en communauté, le droit doit remplir trois sortes de conditions : il doit être sûr, émaner d'un pouvoir social et correspondre à une idée de justice.",
        children: ["def_fonctions", "securite_droit", "pouvoir_social", "idee_justice"],
        parent: "notion"
    },

    // SOUS-BRANCHE 1.1.1
    def_fonctions: {
        title: "Définition et fonctions",
        info: "Le droit est le système normatif englobant toutes les règles de droit obligatoires, soit l'ensemble des règles de conduite imposées aux personnes physiques et morales par un pouvoir que personnifie l'État. <br><br>Le droit a deux fonctions principales :<br><ul><li><strong>Une fonction pacificatrice :</strong> freiner les appétits égoïstes et assurer la coexistence pacifique entre les individus.</li><li><strong>Une fonction organisatrice :</strong> établir un ordre social fondé sur l'équilibre des divers intérêts.</li></ul>",
        children: [],
        parent: "fondements_droit"
    },

    // SOUS-BRANCHE 1.1.2
    securite_droit: {
        title: "La sécurité du droit",
        info: "Les personnes soumises au droit doivent toujours avoir la possibilité de le connaître pour pouvoir se conformer à ses normes ; il s'agit de la sécurité du droit. En règle générale, le droit écrit correspond le mieux à cette idée de clarté et de prévisibilité.<br><br>La sécurité du droit implique plusieurs exigences :<br><ul><li>Le principe de la <strong>non-rétroactivité des lois</strong> et l'existence de règles transitoires.</li><li>L'institution de la <strong>prescription</strong>, c'est-à-dire l'extinction d'un droit, d'une obligation ou d'une action par l'effet de l'écoulement du temps.</li></ul><br>Ces éléments garantissent l'équilibre entre les intérêts opposés (c'est l'effet préventif).",
        children: [],
        parent: "fondements_droit"
    },

    // SOUS-BRANCHE 1.1.3
    pouvoir_social: {
        title: "L'émanation d'un pouvoir social",
        info: "Le droit doit émaner d'un pouvoir social. L'ordre social suppose l'existence d'une autorité habilitée et apte à imposer les normes établies, à les faire exécuter et à infliger des sanctions. <br><br>Dans une société correspondant à un État de droit, c'est l'État qui, à lui seul, assure le fonctionnement de la justice.",
        children: [],
        parent: "fondements_droit"
    },

    // SOUS-BRANCHE 1.1.4
    idee_justice: {
        title: "La conformité à l'idée de justice",
        info: "Le droit doit correspondre à une idée de justice. On distingue deux approches :<br><ul><li><strong>La justice commutative :</strong> se rapporte aux droits fondamentaux qui appartiennent à chaque être humain de façon égale sans que l'on tienne compte de l'origine, de la race ou de la religion (ex: liberté de conscience).</li><li><strong>La justice distributive :</strong> implique que l'on tienne compte de certaines différences qui existent entre les individus dans leur rapport avec la société (ex: impôts proportionnels aux revenus).</li></ul><br>Il est à noter que l'ordre juridique est le fruit de la pensée humaine et qu'il ne doit pas être immuable, mais doit s'adapter continuellement aux conditions changeantes de la vie.",
        children: [],
        parent: "fondements_droit"
    },

    // --- BRANCHE PRINCIPALE 1.2 : LES DIFFÉRENTS SENS DU MOT DROIT ---
    sens_droit: {
        title: "Les différents sens du mot droit",
        info: "Le terme de « droit » recouvre deux notions fondamentales : le droit au sens objectif et le droit au sens subjectif.",
        children: ["droit_objectif", "droit_subjectif"],
        parent: "notion"
    },

    // SOUS-BRANCHE 1.2.1
    droit_objectif: {
        title: "Le droit au sens objectif",
        info: "Le droit au sens objectif est un ensemble de règles obligatoires (ou de normes), générales et abstraites, indiquant ce qui doit être fait dans un cas donné, édictées ou reconnues par un organe officiel, régissant l'organisation et le déroulement des relations sociales et dont le respect est assuré par des moyens de contrainte organisés par l'État.<br><br>Dans ce cadre, on distingue :<br><ul><li>Le <strong>droit naturel</strong> : règles universelles et immuables conformes à la nature humaine.</li><li>Le <strong>droit positif</strong> : règles en vigueur dans un État, à un moment donné.</li></ul>",
        children: [],
        parent: "sens_droit"
    },

    // SOUS-BRANCHE 1.2.2
    droit_subjectif: {
        title: "Le droit au sens subjectif",
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
        title: "Définition et notion",
        info: "Un sujet de droit est soit le titulaire de droits subjectifs qui peut faire valoir les prérogatives qui en découlent (le créancier), soit la personne qui est obligée du fait de ces droits subjectifs (le débiteur). <br><br>Il est important de noter que les choses ne peuvent être en soi que l'objet d'un droit subjectif, elles sont un moyen et non un but en soi.",
        children: [],
        parent: "sujets"
    },

    // --- BRANCHE PRINCIPALE 2.2 ---
    jouissance_exercice_droits: {
        title: "La jouissance et l'exercice des droits civils",
        info: "Il est fondamental de distinguer la jouissance de l'exercice des droits civils :<br><br><ul><li><strong>La jouissance des droits civils (capacité juridique) :</strong> C'est la capacité d'être sujet de droit. Toute personne a une aptitude égale à devenir sujet de droits et d'obligations. Cette faculté, indépendante de l'âge ou des facultés mentales, commence à la naissance et finit par la mort.</li><li><strong>L'exercice des droits civils :</strong> C'est la capacité de s'engager juridiquement, d'acquérir des droits et pouvoir s'obliger par ses propres actes. Ne possède l'exercice des droits civils que la personne majeure et capable de discernement.</li></ul><br>Le <strong>discernement</strong> se définit comme étant la capacité intellectuelle présumée chez toute personne physique qui n'est pas atteinte de déficience mentale, de troubles psychiques, d'ivresse ou d'autres causes semblables, temporaires ou définitives, l'empêchant d'agir raisonnablement.",
        children: ["cp_frere_jean"],
        parent: "sujets"
    },

    // --- BRANCHE PRINCIPALE 2.3 ---
    personne_morale_entreprise: {
        title: "La personne morale et l'entreprise",
        info: "L'être humain cherche souvent à atteindre des buts qui dépassent les forces d'une personne individuelle, formant ainsi des groupements.<br><br><ul><li><strong>La personne morale (ou juridique) :</strong> Ce sont des entités, comme des groupements de personnes (ex: association, société de capitaux) ou des masses de biens (ex: fondation), qui peuvent devenir, à certaines conditions, sujets de droits et d'obligations.</li><li><strong>L'entreprise :</strong> La notion de personne morale doit être distinguée de celle d'entreprise. L'entreprise peut être définie comme étant une activité économique indépendante exercée en vue d'un revenu régulier.</li></ul><br>En pratique, la notion d'entreprise peut désigner l'activité commerciale exploitée par une personne morale (ex: société anonyme) ou par une ou plusieurs personnes physiques (ex: entreprise individuelle, société en nom collectif).",
        children: ["cp_perroquet"],
        parent: "sujets"
    },

     // --- CAS PRATIQUES (Sujets de droit) ---
    cp_frere_jean: {
        title: "Cas pratique : Charlie et son frère Jean",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie conseille à son petit frère Jean, âgé de 16 ans, qui est à la recherche d’un « job d’été » pour les vacances scolaires, de se faire engager par une start-up active dans la livraison de médicaments à domicile. Jean, qui n’habite plus chez ses parents, postule et se fait engager par la start-up.</p>
            <p class="cas-pratique-question">Cela est-il possible juridiquement ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>La start-up doit conclure un contrat de travail avec Jean. La conclusion d’un contrat nécessite l’exercice des droits civils.</p>
                <p>Selon l’art. 17 CC, les mineurs n’ont pas l’exercice des droits civils. L’art. 19 al. 1 CC précise que les mineurs ne peuvent s’obliger par leurs propres actes qu’avec le consentement de leurs parents. À défaut d’accord, l’acte demeure en suspens jusqu’au moment où le représentant accorde ou refuse son consentement.</p>
                <p><strong>Conclusion :</strong> Ainsi, Jean aura besoin d’une ratification, expresse ou tacite, du contrat de travail par son représentant légal.</p>
            </div>
        </div>`,
        children: [], parent: "jouissance_exercice_droits"
    },
    cp_perroquet: {
        title: "Cas pratique : Charlie et son perroquet",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie est un jeune étudiant tout fraîchement inscrit à l’Université de Lausanne qui adore les oiseaux et, tout particulièrement, son jeune perroquet Max.</p>
            <p>Son attachement pour Max est tel que Charlie, qui pratique le Base jump de manière assidue, décide, au cas où un accident devait lui arriver, de léguer par testament son appartement à son perroquet Max.</p>
            <p class="cas-pratique-question">Le legs de Charlie est-il valable ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Les choses ne sont pas des sujets de droit et ne bénéficient pas de la jouissance des droits civils. Sauf disposition contraire, les dispositions s’appliquant aux choses sont également applicables aux animaux, qui ne sont pas des choses (art. 641a CC). Les animaux ne peuvent donc ni jouir de droits ni assumer des obligations.</p>
                <p>Le bénéficiaire d’un legs jouit d’un droit à l’encontre des héritiers sur un ou plusieurs biens de la succession. Les animaux ne peuvent être légataires.</p>
                <p><strong>Conclusion :</strong> Le legs de Charlie serait donc en principe nul.</p>
            </div>
        </div>`,
        children: [], parent: "personne_morale_entreprise"
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
        title: "Le caractère général et abstrait",
        info: "Par essence, la règle de droit est générale et abstraite. <br><br><ul><li>Elle est <strong>générale</strong>, en ce sens qu'elle vise un nombre indéterminé de personnes.</li><li>Elle est <strong>abstraite</strong> dans la mesure où elle s'applique à un nombre indéterminé de situations.</li></ul><br>La règle de droit doit donc être formulée de telle manière qu'elle puisse viser le plus de situations possibles, sans pour autant être trop générale et, par conséquent, trop vague, ce qui nuirait à la sécurité du droit.",
        children: [],
        parent: "caracteristiques_regle"
    },

    // SOUS-BRANCHE 1.2
    structure_double: {
        title: "La structure double",
        info: "Sur le plan de sa structure, la règle de droit comprend deux éléments, elle est bipartite :<br><br><ol><li>D'une part, elle comprend un <strong>point de départ</strong>. Ce sont les conditions, l'hypothèse, les faits ou les éléments dont la réalisation entraîne l'application de la règle.</li><li>D'autre part, elle emporte un <strong>effet juridique</strong>, soit la conséquence que la règle de droit attache à la réalisation des faits ou conditions d'application.</li></ol><br>Cette double structure se rencontre non seulement dans la règle abstraite, mais aussi dans l'application au cas concret (il y a une partie « fait » et une partie « droit » dans tout jugement).",
        children: [],
        parent: "caracteristiques_regle"
    },

    // SOUS-BRANCHE 1.3
    caractere_obligatoire: {
        title: "Le caractère obligatoire",
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
        children: ["cp_easyflight"], parent: "sources"
    },
    
    // --- CAS PRATIQUE (Sources) ---
    cp_easyflight: {
        title: "Cas pratique : Charlie et son entreprise « EasyFlight »",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie souhaite utiliser la dénomination « EasyFlight » pour constituer une entreprise ayant pour but d’offrir des services de transport aérien bon marché.</p>
            <p class="cas-pratique-question">Qu'en pensez-vous ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>L’exploitation d’une telle entreprise pourrait être contraire à la Loi contre la concurrence déloyale (LCD), parce qu’elle pourrait créer une confusion avec les services proposés par EasyJet (art. 3 al. 1 lit. d LCD et jurisprudence ATF 127 III 160 précitée).</p>
                <p><strong>Conclusion :</strong> Il ne pourra pas utiliser la dénomination EasyFlight.</p>
            </div>
        </div>`,
        children: [], parent: "usages_commerciaux"
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
        children: ["juris_role", "juris_effets", "juris_revirement", "cp_qcm_jurisprudence"],
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
    
    cp_qcm_jurisprudence: {
        title: "Cas pratique : Exemple de question d'examen",
        info: `<div class="cas-pratique">
            <h4>Question à choix multiples</h4>
            <p>La jurisprudence permet de (d') :</p>
            <ol type="A">
                <li>Interpréter la loi.</li>
                <li>Combler un silence qualifié de la loi.</li>
                <li>Abroger une loi clairement injuste et inéquitable.</li>
                <li>Assurer une certaine continuité dans l'application de la loi.</li>
            </ol>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p><strong>Résolution :</strong></p>
                <ul>
                    <li>A. Correct</li>
                    <li>B. Faux</li>
                    <li>C. Faux</li>
                    <li>D. Correct</li>
                </ul>
            </div>
        </div>`,
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
        children: ["detail_droit_public", "detail_droit_prive", "cp_public_prive"],
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

    cp_public_prive: {
        title: "Cas pratique : Charlie et la commune",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>En appliquant les théories de délimitation, les situations suivantes relèvent-elles du droit privé ou du droit public ?</p>
            <ol>
                <li>Charlie, qui est propriétaire d'un petit terrain à Moudon, conclut un contrat avec sa commune autorisant cette dernière à utiliser une partie de son terrain afin d'y installer des panneaux solaires.</li>
                <li>La commune de Moudon rappelle à l'ordre un de ses habitants, farouchement opposé aux énergies renouvelables, qui a tagué la fontaine du village.</li>
                <li>La commune d'Orbe contacte la commune voisine afin de conclure un accord intercommunal qui a pour but de se répartir l'énergie produite par les panneaux solaires.</li>
            </ol>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher les réponses</button>
            <div class="answer-box" style="display: none;">
                <p><strong>Situation 1 : Droit privé</strong><br>Critère de la subordination: Charlie et la commune se trouvent sur un pied d'égalité. Théorie formelle: Conclusion d'un contrat (et non prise d'une décision).</p>
                <p><strong>Situation 2 : Droit public</strong><br>Critère de la subordination: Injonction de l'État. Théorie formelle: Le rappel à l'ordre est une décision unilatérale. Critère de la sanction: imposé par l'État. Critère des sujets: entité publique.</p>
                <p><strong>Situation 3 : Droit public</strong><br>Critère des intérêts: L'accord sur l'énergie vise l'intérêt public. Critère des sujets: L'accord se fait entre deux communes.</p>
            </div>
        </div>`,
        children: [], parent: "div_public_prive"
    },

    // --- BRANCHE : DROIT MATÉRIEL ET DROIT FORMEL ---
    div_materiel_formel: {
        title: "Le droit matériel et le droit formel",
        info: "Cette distinction concerne l'objet même de la règle : le fond contre la forme.",
        children: ["detail_droit_materiel", "detail_droit_formel", "cp_materiel_formel"],
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

    cp_materiel_formel: {
        title: "Cas pratique : Le vélo de Charlie",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie souhaite vendre son vélo de course à son ami Bertrand pour la somme de CHF 2'000.-. Ils ont rédigé un contrat de vente allant dans ce sens. Charlie a déjà livré le vélo à son ami, mais celui-ci n'a toujours pas payé le prix.</p>
            <p class="cas-pratique-question">Que peut-il faire en terme de droit matériel et de droit formel ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p><strong>Droit matériel :</strong> Bertrand doit-il de l'argent à Charlie ? Combien ? (Ce sont les droits et obligations de fond).</p>
                <p><strong>Droit formel :</strong> Comment Charlie peut-il récupérer son dû ? Quel est le tribunal compétent, les modalités de saisine du juge, et les conséquences en cas d'inexécution par Bertrand ? (C'est la procédure à suivre).</p>
            </div>
        </div>`,
        children: [], parent: "div_materiel_formel"
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
        parent: "droit_administratif, cp_garage_1"
    },

    cp_garage_1: {
        title: "Cas pratique : Charlie et son garage (Organisation)",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie est propriétaire d'un terrain à Moudon. Il se demande s'il serait possible d'utiliser son terrain pour construire un garage de vente et de réparation de motos.</p>
            <p class="cas-pratique-question">Qui est compétent dans le domaine de l'aménagement du territoire dans un État fédéral comme la Suisse ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>L'aménagement du territoire (mesures veillant à l'utilisation judicieuse du sol) fonctionne par étapes selon les compétences :</p>
                <ul>
                    <li><strong>Étape 1 :</strong> La Confédération fixe les principes applicables (art. 75 al. 1 Cst.).</li>
                    <li><strong>Étape 2 :</strong> Les Cantons élaborent des études de base pour établir les plans directeurs (art. 6 LAT).</li>
                    <li><strong>Étape 3 :</strong> Autonomie communale. Les communes disposent d'autonomie pour l'aménagement local (art. 139 Cst. Vaud).</li>
                    <li><strong>Étape 4 :</strong> Plans d'affectation communaux qui règlent le mode d'utilisation du sol (art. 22 LATC).</li>
                    <li><strong>Étape 5 :</strong> Le Règlement de la Commune de Moudon s'applique.</li>
                </ul>
                <p><strong>Conclusion :</strong> C'est la commune de Moudon qui est compétente pour régler la question de l'autorisation de construction envisagée par Charlie.</p>
            </div>
        </div>`,
        children: [], parent: "admin_organisation"
    },

    // SOUS-BRANCHE : ACTIVITÉ (BRANCHE DÉTAILLÉE)
    admin_activite: {
        title: "L'activité de l'administration",
        info: "L'administration agit par des actes juridiques pour accomplir ses tâches.",
        children: ["decision_vs_contrat", "principe_legalite", "principe_interet_public", "principe_proportionnalite", "principe_bonne_foi", "principe_non_retroactivite", "modalites_decision", "cp_garage_2"],
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

    cp_garage_2: {
        title: "Cas pratique : Charlie et son garage (Activité)",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Ayant constaté que la commune de Moudon est compétente, Charlie adresse une demande d'autorisation de construire aux autorités communales. Malheureusement, le fonctionnaire de la commune refuse la construction au motif que le terrain de Charlie se trouve sur une zone viticole et non sur une zone à bâtir.</p>
            <p class="cas-pratique-question">Sur le plan juridique, comment faut-il qualifier le comportement de la commune ? Est-ce que ce comportement respecte les principes de l'activité de l'administration ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Le comportement du fonctionnaire est une <strong>décision administrative</strong> car elle est un acte juridique pris unilatéralement par une autorité sur un fondement de droit public sortissant ses effets dans une situation individuelle.</p>
                <p><strong>Respect des principes :</strong></p>
                <ul>
                    <li><strong>Légalité :</strong> Oui, fondée sur la LATC (les zones viticoles sont affectées à la viticulture).</li>
                    <li><strong>Intérêt public :</strong> Oui, elle vise à protéger le terrain en le destinant à une activité viticole.</li>
                    <li><strong>Proportionnalité :</strong> Oui, la commune se sert de moyens adaptés au but visé.</li>
                    <li><strong>Non-rétroactivité et Bonne foi :</strong> Oui, respectées également.</li>
                </ul>
            </div>
        </div>`,
        children: [], parent: "admin_activite"
    },

    // SOUS-BRANCHE : PROCÉDURE ET RECOURS
    admin_procedure: {
        title: "La procédure et les recours",
        info: "Le citoyen n'est pas sans défense face à l'administration. <br><br><ul><li><strong>Droit d'être entendu :</strong> Avant toute décision, l'administré a le droit de s'exprimer et de consulter le dossier.</li><li><strong>Le Recours :</strong> Moyen de contester une décision devant une autorité supérieure ou un tribunal.</li><li><strong>Tribunaux administratifs :</strong> En Suisse, il existe le Tribunal administratif fédéral (TAF) et des tribunaux cantonaux spécialisés.</li></ul>",
        children: ["cp_garage_3", "cp_restaurant"],
        parent: "droit_administratif"
    },

    cp_garage_3: {
        title: "Cas pratique : Charlie et son garage (Procédure)",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie n’est pas d’accord avec la décision de l’autorité communale de Moudon lui interdisant la construction d’un garage à motos sur son terrain.</p>
            <p class="cas-pratique-question">Que peut-il faire ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Charlie va devoir former un <strong>recours de droit administratif</strong> au sens de la LPA-VD.</p>
                <p>La procédure se tiendra devant la Cour de droit administratif et public du Tribunal cantonal (CDAP). Charlie devra envoyer un recours signé, dans un délai de 30 jours dès réception de la décision de refus, avec indication des conclusions.</p>
                <p><strong>Conclusion :</strong> Bien que la voie de recours soit ouverte, au fond, le recours de Charlie sera très vraisemblablement rejeté car la décision de la commune était fondée.</p>
            </div>
        </div>`,
        children: [], parent: "admin_procedure"
    },
    cp_restaurant: {
        title: "Cas pratique : Charlie et son restaurant",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie décide d’ouvrir un restaurant en plein centre de Lausanne mettant en avant les spécialités culinaires produites à Moudon. Sur le plan des boissons, Charlie prévoit de proposer de l’eau du robinet ou du jus d’orange, ainsi qu’une fine sélection de bières et de vins locaux. Il souhaiterait aussi proposer un solide petit-déjeuner campagnard, dès 5h00 du matin, y compris le samedi matin.</p>
            <p class="cas-pratique-question">Charlie peut-il ouvrir son restaurant dans ces conditions ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p><strong>Autorisation :</strong> L'exercice de cette activité nécessite l'obtention préalable d'une <strong>licence</strong> (autorisation d'exercer et d'exploiter) selon la LADB. À Lausanne, la commune est compétente par délégation. Le droit administratif l'empêche d'ouvrir sans licence sous peine de lourdes amendes (art. 63 LADB).</p>
                <p><strong>Boissons :</strong> Charlie vend des boissons alcoolisées, il est donc tenu (art. 45 LADB) d'offrir un choix d'au moins <strong>trois boissons sans alcool de type différent, à un prix inférieur</strong> à la boisson alcoolique la moins chère. Il devra donc revoir son offre de boissons non-alcoolisées (seulement eau et jus d'orange ne suffisent pas).</p>
                <p><strong>Horaires :</strong> Les horaires sont fixés par le règlement communal. Les établissements de jour permettant la vente d'alcool peuvent ouvrir de 06h30 à minuit les samedis. <strong>L'horaire de 5h00 prévu par Charlie est donc trop matinal</strong> et illégal selon la commune.</p>
            </div>
        </div>`,
        children: [], parent: "admin_procedure"
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
        children: ["cp_stage"],
        parent: "droit_penal"
    },

    cp_stage: {
        title: "Cas pratique : Charlie et son stage",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie effectue un stage de programmeur auprès de Souritech SA. Son contrat prévoit une clause de confidentialité lui interdisant la divulgation de tout fait découvert dans le cadre de son travail. Charlie a mis la main sur le code source d’un logiciel. Attiré par l’envie de gagner de l'argent, il contacte une entreprise concurrente afin de lui vendre ce code source.</p>
            <p>Cependant, l’entreprise refuse la transaction et informe Souritech SA. Souritech SA porte plainte pour violation du secret commercial (art. 162 CP).</p>
            <p class="cas-pratique-question">La plainte a-t-elle des chances d’aboutir même si le code source n’a pas été divulgué ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Charlie est soumis à une obligation contractuelle de garder le secret. L’art. 162 CP est donc applicable.</p>
                <p>L’infraction n’a pas abouti, il n’y a donc pas d’infraction consommée.</p>
                <p>Néanmoins, Charlie a dépassé le stade des actes préparatoires et a voulu réaliser tous les éléments constituant l’infraction. Ce n’est qu’en raison de circonstances extérieures à sa volonté (l'attitude loyale du concurrent) que l’infraction n’a pas abouti. Il s’agit d’une <strong>tentative</strong>.</p>
                <p><strong>Conclusion :</strong> Oui, la plainte a de grandes chances d’aboutir à une condamnation, bien que le juge puisse atténuer la peine (tentative).</p>
            </div>
        </div>`,
        children: [], parent: "penal_comportement"
    },

    penal_illiceite: {
        title: "L'illicéité",
        info: "Le comportement doit être contraire au droit. <br><br>Un acte n'est <strong>pas</strong> illicite s'il existe un <span class='success'>fait justificatif</span>. Les principaux faits justificatifs sont :<br><ul><li><strong>La légitime défense :</strong> Repousser une attaque actuelle ou imminente de manière proportionnée.</li><li><strong>L'état de nécessité :</strong> Commettre une infraction pour préserver un bien juridique plus important d'un danger imminent.</li><li><strong>Le consentement de la victime :</strong> Valable uniquement pour les biens dont on peut disposer librement.</li></ul>",
        children: ["cp_randonnee"],
        parent: "droit_penal"
    },

    cp_randonnee: {
        title: "Cas pratique : Charlie et la randonnée",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Alors que Charlie se balade en montagne, une forte tempête de neige se lève et met clairement sa vie en danger. Il ne trouve d’autre alternative que de forcer la porte d’un mazot et de se réfugier à l’intérieur.</p>
            <p>Pris de peur face à cet inconnu et se sentant victime d’une agression, un berger qui se trouvait à l’intérieur du mazot dégaine un fusil de chasse et blesse très légèrement Charlie à l’épaule.</p>
            <p class="cas-pratique-question">Charlie peut-il être puni pour avoir endommagé la porte du mazot ? Le berger peut-il être puni pour avoir tiré sur Charlie ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p><strong>Concernant Charlie :</strong> Il s’est rendu coupable de dommage à la propriété (art. 144 CP) et de violation de domicile (art. 186 CP). Cependant, ces infractions ont été commises afin de protéger sa vie, qui est un intérêt prépondérant par rapport au patrimoine du berger. Charlie a donc agi dans un <strong>état de nécessité (art. 17 CP)</strong> et donc licitement.</p>
                <p><strong>Concernant le berger :</strong> Il a commis une lésion corporelle (voire tentative de meurtre). Il a agi dans une situation d’erreur sur les faits (art. 13 CP) en croyant être agressé. Le fait de tirer sur autrui sans préavis avec une arme à feu n'est pas proportionné, donc la légitime défense absolue ne sera pas admise. En revanche, le juge pourrait retenir la <strong>défense excusable</strong> avec atténuation de la peine.</p>
            </div>
        </div>`,
        children: [], parent: "penal_illiceite"
    },

    penal_culpabilite: {
        title: "La culpabilité",
        info: "C'est le reproche personnel que l'on peut faire à l'auteur de l'infraction. Il n'y a <strong>pas de peine sans culpabilité</strong>. <br><br>La culpabilité se manifeste sous deux formes :<br><ul><li><strong>L'intention :</strong> L'auteur agit avec conscience et volonté. Cela inclut le <span class='highlight'>dol éventuel</span> (l'auteur s'accommode du résultat même s'il ne le recherche pas directement).</li><li><strong>La négligence :</strong> L'auteur agit par imprudence ou imprévoyance coupable (il ne se rend pas compte des conséquences de son acte, ou pense à tort pouvoir les éviter).</li></ul>",
        children: ["cp_basejump", "cp_bonnepom"],
        parent: "droit_penal"
    },

    cp_basejump: {
        title: "Cas pratique : Charlie et le Base jump",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie effectue régulièrement des sauts de Base jump. Dans une vidéo, il explique qu’il considère « envisageable qu’il blesse des personnes au cours de ses activités mais qu’il vaut la peine de prendre ce genre de risques pour ressentir pleinement certaines sensations ».</p>
            <p>Lors d’un de ses sauts, Charlie atterrit malencontreusement avec son parachute sur un berger bernois et le blesse.</p>
            <p class="cas-pratique-question">Quid au niveau de la culpabilité ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>L’infraction commise relève manifestement de la lésion corporelle.</p>
                <p>Au regard de ses allégations sur Internet, il apparait que Charlie s'accommodait du risque de blesser une personne dans l’exercice de son activité. Il ne s’agit donc pas d’une infraction commise par négligence, mais bien plutôt par <strong>dol éventuel</strong>.</p>
                <p><strong>Conclusion :</strong> Le CP punit plus lourdement le dol éventuel que l’infraction commise par simple négligence.</p>
            </div>
        </div>`,
        children: [], parent: "penal_culpabilite"
    },
    
    cp_bonnepom: {
        title: "Cas pratique : Gilles et l’entreprise BonnePom’ SA",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Gilles, directeur de la société BonnePom’ SA, a fait organiser son déménagement privé par le secrétariat de la société et a fait mettre les frais (CHF 4'000.-) à la charge de BonnePom’ SA, sans l’accord de ses supérieurs.</p>
            <p class="cas-pratique-question">Le comportement de Gilles est-il problématique sous l’angle du droit pénal ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Gilles a réalisé les éléments constitutifs de la <strong>gestion déloyale (art. 158 CP)</strong> :</p>
                <ol>
                    <li>Il a agi en qualité de « gérant ».</li>
                    <li>Il est soumis à un devoir de fidélité envers son employeur.</li>
                    <li>Il a violé ce devoir et porté atteinte aux intérêts de la société.</li>
                    <li>Il a agi intentionnellement (sous l’angle du dol éventuel au moins).</li>
                    <li>Il a voulu s'enrichir illégitimement aux dépens de la société.</li>
                </ol>
                <p><strong>Conclusion :</strong> Oui, ce comportement est punissable.</p>
            </div>
        </div>`,
        children: [], parent: "penal_culpabilite"
    },

    penal_responsabilite: {
        title: "La responsabilité pénale",
        info: "C'est la capacité de l'auteur d'apprécier le caractère illicite de son acte et de se déterminer d'après cette appréciation. <br><br><ul><li><strong>Irresponsabilité :</strong> Si l'auteur souffre d'un grave trouble mental au moment des faits, il n'est pas punissable (mais des mesures peuvent être ordonnées).</li><li><strong>Responsabilité de l'entreprise (Art. 102 CP) :</strong> Exceptionnellement, une entreprise peut être punie pénalement si une infraction a été commise en son sein et qu'elle n'a pas pris toutes les <strong>mesures d'organisation raisonnables et nécessaires</strong> pour l'empêcher.</li></ul>",
        children: ["cp_demence", "cp_bonus_roland"],
        parent: "droit_penal"
    },

    cp_demence: {
        title: "Cas pratique : Charlie et la démence",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie s’enivre afin de se donner du courage pour aller vandaliser la voiture d'un concurrent garée en face du bar. Lorsqu’il est interrogé par la police le lendemain, Charlie confesse n’avoir aucun souvenir de ces événements.</p>
            <p class="cas-pratique-question">Sera-t-il puni ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>L'auteur n'est pas punissable s'il ne possédait pas la faculté d'apprécier le caractère illicite de son acte (art. 19 al. 1 CP). Le comportement relève du dommage à la propriété.</p>
                <p>Au moment où il a agi, Charlie semblait incapable de discernement.</p>
                <p><strong>Cependant :</strong> Il sera puni s’il pouvait prévoir, au moment où il disposait de son entière capacité de discernement, qu’il commettrait une infraction en s'enivrant. C'est le principe de l'<em>actio libera in causa</em> (art. 19 al. 4 CP). Comme il s'est enivré <em>pour</em> le faire, il sera puni.</p>
            </div>
        </div>`,
        children: [], parent: "penal_responsabilite"
    },
    
    cp_bonus_roland: {
        title: "Cas pratique : Le bonus de Roland",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Roland, cadre chez Petrolus SA, corrompt Rami (un fonctionnaire au Moyen-Orient) avec CHF 50'000.- pour assurer la conclusion d'un contrat pétrolier et toucher un gros bonus. La presse révèle le paiement effectué depuis le compte privé de Roland.</p>
            <p class="cas-pratique-question">Que risquent Roland et la société Petrolus SA ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p><strong>Concernant Roland :</strong> Il s’est rendu coupable de corruption d'agents publics étrangers (art. 322septies CP) et sera condamné.</p>
                <p><strong>Concernant Petrolus SA :</strong> Elle ne peut pas être punie selon l’art. 102 al. 1 CP car l’auteur (Roland) a été identifié. <em>Toutefois</em>, la corruption fait partie des infractions spécifiques où l'entreprise peut être punie <strong>en plus</strong> de la personne physique (art. 102 al. 2 CP) si on peut lui reprocher de ne pas avoir pris les mesures nécessaires pour empêcher l’infraction.</p>
                <p>Il faudra donc déterminer si Petrolus SA avait un dispositif anti-corruption suffisant. Si ce n'est pas le cas, la société sera condamnée.</p>
            </div>
        </div>`,
        children: [], parent: "penal_responsabilite"
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
        children: ["procedure_notions", "procedure_deroulement", "cp_patron_soupe"],
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

    cp_patron_soupe: {
        title: "Cas pratique : Le patron soupe-au-lait de Charlie",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie fait une erreur de trading. Son supérieur, James, le convoque et tient à son encontre des propos clairement injurieux. Charlie, énervé, décide de se tourner vers la justice.</p>
            <p class="cas-pratique-question">Que peut-il faire, et comment se déroulera la procédure ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>L'injure (art. 177 CP) est une infraction poursuivie <strong>sur plainte</strong>. Charlie peut donc déposer plainte pénale auprès de la police ou du ministère public.</p>
                <p><strong>Procédure :</strong> Le procureur va instruire. S'il retient les faits (l'injure est punie d'une peine pécuniaire max de 90 jours-amende), il pourra rendre directement une <strong>ordonnance pénale</strong> (car la peine est inférieure au seuil de 180 jours-amende de l'art. 352 CP). La condamnation sera probablement assortie du sursis.</p>
            </div>
        </div>`,
        children: [], parent: "penal_procedure"
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
        children: ["cp_testament_reymond"], parent: "droit_personnes"
    },

    cp_testament_reymond: {
        title: "Cas pratique : Le testament de Reymond",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Caroline est enceinte de 5 mois d’un garçon. Son père, Reymond, rédige sur son lit de mort un testament pour léguer ses actions à son futur petit-fils. Reymond décède avant la naissance du fils de Caroline.</p>
            <p class="cas-pratique-question">L'enfant de Caroline pourra-t-il hériter ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Selon l’art. 31 al. 2 CC, un enfant conçu mais pas encore né jouit des droits civils à condition qu’il naisse vivant.</p>
                <p><strong>Conclusion :</strong> L’enfant de Caroline pourra hériter de son grand-père, même si celui-ci décède avant sa naissance, à la stricte condition qu’il naisse vivant.</p>
            </div>
        </div>`,
        children: [], parent: "debut_fin_pers"
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
        children: ["prot_soimeme", "prot_tiers", "cp_presse"], parent: "droit_personnes"
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

    cp_presse: {
        title: "Cas pratique : Charlie et la presse",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>1. Un journal publie un article sur les relations extraconjugales du chanteur M. Johnny. 2. Un autre article montre un conseiller d'État en charge de la sécurité routière conduisant fortement alcoolisé après une soirée privée.</p>
            <p class="cas-pratique-question">Que peuvent faire les personnes visées ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p><strong>Pour le chanteur :</strong> La vie sexuelle relève de la sphère intime. L'atteinte n'est justifiée par aucun intérêt public. Il peut agir en constatation du caractère illicite, demander des dommages-intérêts, un tort moral, et exercer un droit de réponse.</p>
                <p><strong>Pour le conseiller d'État :</strong> Bien qu'il y ait atteinte à la personnalité, la publication est justifiée par l'<strong>intérêt public</strong> (informer les électeurs qu'un ministre enfreint la loi qu'il est censé faire respecter). La pesée des intérêts rend l'atteinte licite.</p>
            </div>
        </div>`,
        children: [], parent: "protection_pers"
    },

    // --- PERSONNES MORALES ET ENTREPRISES ---
    personnes_morales_structures: {
        title: "Les personnes morales et formes d'entreprises",
        info: "Le droit permet à des entités abstraites d'agir sur la scène juridique comme des personnes physiques.",
        children: ["notion_pm", "statut_pm", "formes_juridiques_pm", "association", "fondation", "entreprise_individuelle", "societes_personnes", "societes_capitaux", "cp_amis_recolte", "cp_entrepreneuriat", "cp_manon"],
        parent: "droit_personnes"
    },

    cp_amis_recolte: {
        title: "Cas pratique : Charlie et ses amis (Asso / Fond)",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie et ses amis récoltent CHF 25'000.- auprès de particuliers pour créer une organisation de conservation de la faune de Moudon.</p>
            <p class="cas-pratique-question">Quelle forme juridique est la plus adaptée ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Deux options principales :</p>
                <p><strong>1. La Fondation (art. 80 CC) :</strong> Il y a un patrimoine (25k) affecté à un but spécial. Elle n'acquerra la personnalité que lors de son inscription au RC.</p>
                <p><strong>2. L'Association (art. 60 CC) :</strong> Il y a une volonté de s'organiser corporativement pour un but idéal (conservation faune). La personnalité s'acquiert par l'adoption des statuts. Inscription au RC nécessaire seulement si elle déploie une activité économique en la forme commerciale.</p>
            </div>
        </div>`,
        children: [], parent: "personnes_morales_structures"
    },
    
    cp_entrepreneuriat: {
        title: "Cas pratique : Charlie et l'entrepreneuriat",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie souhaite débuter une activité de conseil en sécurité informatique.</p>
            <p class="cas-pratique-question">Quelle forme juridique choisir ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p><strong>Entreprise individuelle :</strong> Facile à créer, pas de capital minimum, mais responsabilité illimitée sur la fortune privée.</p>
                <p><strong>Sàrl :</strong> Nécessite un capital de CHF 20'000.-, mais offre une <strong>responsabilité limitée à l'actif social</strong>.</p>
                <p><strong>Conclusion :</strong> La Sàrl est la forme la plus appropriée s'il souhaite protéger sa fortune privée.</p>
            </div>
        </div>`,
        children: [], parent: "personnes_morales_structures"
    },
    
    cp_manon: {
        title: "Cas pratique : Charlie et Manon",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie (logiciel météo/GPS) s'associe avec Manon (marketing, réseau) pour créer une société commerciale avec des moyens financiers limités.</p>
            <p class="cas-pratique-question">Quelle forme de société est la plus adéquate ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <ul>
                    <li><strong>SA :</strong> Capital de 100k trop élevé pour leurs moyens limités.</li>
                    <li><strong>SNC :</strong> Responsabilité illimitée et solidaire des associés (trop risqué).</li>
                    <li><strong>Sàrl :</strong> Capital plus accessible (20k) et responsabilité limitée à l'actif social.</li>
                </ul>
                <p><strong>Conclusion :</strong> La Sàrl est la forme la plus adaptée.</p>
            </div>
        </div>`,
        children: [], parent: "personnes_morales_structures"
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
        children: ["cp_succ_lucienne"], 
        parent: "droit_successions"
    },

    cp_succ_lucienne: {
        title: "Cas pratique : La succession de Lucienne",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Lucienne décède sans testament. <br>Cas 1 : Elle laisse deux petits-fils, un frère, trois cousins. <br>Cas 2 : Elle laisse deux neveux, un oncle, une tante.</p>
            <p class="cas-pratique-question">Qui hérite ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Le système des parentèles donne priorité absolue à la parentèle la plus proche.</p>
                <p><strong>Cas 1 :</strong> Les deux petits-fils héritent. Ils font partie de la 1ère parentèle, ce qui exclut le frère (2e) et les cousins (3e).</p>
                <p><strong>Cas 2 :</strong> Les deux neveux héritent. Ils font partie de la 2ème parentèle, ce qui exclut l'oncle et la tante (3e parentèle).</p>
            </div>
        </div>`,
        children: [], parent: "succ_legale"
    },

    // --- CHAPITRE 3 : LA SUCCESSION VOLONTAIRE ---
    succ_volontaire: {
        title: "La succession volontaire",
        info: "Le défunt a la liberté d'organiser sa succession autrement que ce que prévoit la loi par défaut, en respectant certaines formes et certaines limites.",
        children: ["succ_formes", "succ_reserve", "cp_succ_rey", "cp_succ_maxime"], 
        parent: "droit_successions"
    }, 
    
    cp_succ_rey: {
        title: "Cas pratique : La succession de M. Rey",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>M. Rey décède. Il laisse sa fille, sa petite-fille (enfant de son fils prédécédé), et sa soeur. Son épouse vit toujours (en mauvais termes, séparation de biens). Il veut limiter l'épouse au strict minimum légal, donner son commerce à sa petite-fille, et le reste (maximum possible) à son neveu.</p>
            <p class="cas-pratique-question">Quelle est la répartition des réserves et que peut toucher le neveu ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Parts légales ab intestat : Épouse = 1/2. Descendants = 1/2 (réparti : Fille = 1/4, Petite-fille = 1/4).</p>
                <p><strong>Réserves :</strong></p>
                <ul>
                    <li>Épouse : 1/2 de sa part (1/2) = 1/4 (soit 2/8) de la succession.</li>
                    <li>Fille : 1/2 de sa part (1/4) = 1/8.</li>
                    <li>Petite-fille : 1/2 de sa part (1/4) = 1/8.</li>
                </ul>
                <p>Total des réserves : 4/8. La <strong>quotité disponible est donc de 4/8 (soit 1/2)</strong>.</p>
                <p>Le neveu pourra toucher au maximum la quotité disponible (1/2), à condition que la valeur du commerce attribué à la petite-fille n'excède pas sa réserve de 1/8.</p>
            </div>
        </div>`,
        children: [], parent: "succ_volontaire"
    },
    
    cp_succ_maxime: {
        title: "Cas pratique : La succession de Maxime",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Maxime a une femme et deux enfants. Très malade, il veut s'assurer que son entreprise de papeterie revienne entièrement à son cousin Gérard à son décès.</p>
            <p class="cas-pratique-question">Quelles sont ses options ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Il doit respecter les réserves légales de sa femme et de ses enfants (quotité disponible de 1/2).</p>
                <p>Il peut procéder par testament ou donation. Cependant, si l'entreprise vaut plus que la moitié (1/2) de son patrimoine total, il devra obligatoirement conclure un <strong>pacte successoral abdicatif</strong> avec ses héritiers réservataires (femme et enfants) pour qu'ils renoncent à leur part sur cette entreprise.</p>
            </div>
        </div>`,
        children: [], parent: "succ_volontaire"
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
        children: ["cp_voiture_vacances"], 
        parent: "reels_propriete"
    },

    cp_voiture_vacances: {
        title: "Cas pratique : Charlie et la voiture de vacances",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie achète une voiture en commun avec son ami Fernand. Plus tard, devant rembourser des dettes, Charlie veut revendre la voiture seul pour récupérer son argent.</p>
            <p class="cas-pratique-question">Peut-il le faire ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>L'achat de la voiture en commun forme une société simple (propriété commune). Dans une propriété commune, les décisions (comme l'aliénation) nécessitent l'unanimité (art. 652 CC).</p>
                <p>Charlie ne peut donc <strong>pas décider seul</strong> de la vente. Il lui faudra requérir la dissolution de la société simple pour liquider le bien.</p>
            </div>
        </div>`,
        children: [], parent: "propriete_commune"
    },

    // --- CHAPITRE 4 : LES DROITS RÉELS RESTREINTS ---
    reels_restreints: {
        title: "Les droits réels restreints",
        info: "Contrairement à la propriété, ils ne confèrent qu'une maîtrise <strong>partielle</strong> sur une chose qui appartient à quelqu'un d'autre.<br><br>On en distingue trois types :<br><ul><li><strong>Les servitudes :</strong> Obligent le propriétaire à <em>tolérer</em> un usage ou à <em>s'abstenir</em> d'exercer un droit (ex: droit de passage, usufruit).</li><li><strong>Les charges foncières :</strong> Obligent le propriétaire d'un immeuble à faire certaines prestations (ex: livrer du bois).</li><li><strong>Les droits de gage :</strong> Permettent au créancier de faire réaliser (vendre) la chose pour se payer sur le produit si le débiteur ne rembourse pas sa dette (ex: <span class='highlight'>hypothèque</span> pour un immeuble, droit de rétention pour un meuble).</li></ul>",
        children: ["cp_bois_sarl"], 
        parent: "droits_reels"
    },

    cp_bois_sarl: {
        title: "Cas pratique : Charlie et Bois Sàrl",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>1. Charlie vend un bout de terrain à Bois Sàrl. Le seul accès à ce bout de terrain passe par la propriété restante de Charlie. Que faire pour garantir l'accès ?</p>
            <p>2. Bois Sàrl construit un immeuble pour vendre des appartements, grâce à un prêt bancaire garanti par l'immeuble. Mode de propriété des futurs acquéreurs et nature de la garantie ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p><strong>Cas 1 :</strong> Ils doivent convenir d'une <strong>servitude de passage</strong> (droit réel restreint) inscrite au Registre foncier.</p>
                <p><strong>Cas 2 :</strong> Les appartements seront vendus sous le régime de la <strong>Propriété par Étages (PPE)</strong> (une forme de copropriété). Le prêt bancaire est garanti par une <strong>hypothèque</strong>, qui est un droit de gage immobilier permettant la réalisation forcée si la créance n'est pas remboursée.</p>
            </div>
        </div>`,
        children: [], parent: "reels_restreints"
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
        children: ["cp_acquisition_prop"], 
        parent: "droits_reels"
    },

    cp_acquisition_prop: {
        title: "Cas pratique : Charlie et l'acquisition de la propriété",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <ol>
                <li>Charlie sculpte un bloc de marbre qu'on lui a confié pour en faire une Vénus de Milo.</li>
                <li>Charlie garde des livres qu'un ami lui a "donnés" il y a 3 ans.</li>
                <li>Charlie trouve un Macbook Air au Parc de Milan (ou à la gare).</li>
            </ol>
            <p class="cas-pratique-question">Dans ces trois cas, Charlie acquiert-il la propriété ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p><strong>1. Le Marbre :</strong> Oui, il acquiert la propriété par <strong>spécification</strong> (art. 726 CC) du fait de son travail sur la matière.</p>
                <p><strong>2. Les Livres :</strong> Non. La prescription acquisitive mobilière (art. 728 CC) nécessite <strong>5 ans</strong> de possession ininterrompue de bonne foi.</p>
                <p><strong>3. L'ordinateur :</strong> Charlie n'est que possesseur. Valeur > 10 CHF, il doit informer la police. Si non réclamé pendant 5 ans, il en devient propriétaire. <em>Variante gare :</em> Doit le remettre aux CFF, pas de gratification, les CFF deviendront propriétaires si non réclamé (art. 720/722 CC).</p>
            </div>
        </div>`,
        children: [], parent: "reels_acquisition_perte"
    },

    // --- 7.5 LA PROCÉDURE CIVILE (Dès page 72 du cours) ---
    procedure_civile: {
        title: "La procédure civile",
        info: "Cette branche détermine les règles à suivre lorsqu'un litige de droit privé (entre particuliers ou entreprises) doit être tranché par un juge civil. Elle est régie au niveau national par le Code de procédure civile (CPC).",
        children: ["proc_civ_definition", "proc_civ_competence", "proc_civ_deroulement", "proc_civ_execution", "cp_scooter_global"],
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

    cp_scooter_global: {
        title: "Cas pratique : Charlie et le scooter (Global)",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie vend un scooter pour 2'000 CHF à Pierre, domicilié à Cossonay (Vaud). Pierre reçoit le scooter mais refuse de payer.</p>
            <p class="cas-pratique-question">Quelle est la procédure complète (compétence, procès, exécution) pour récupérer l'argent ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p><strong>1. Compétence :</strong> Charlie doit agir au domicile du défendeur (Cossonay, Canton de Vaud). La valeur litigieuse étant de 2'000 CHF (< 10'000), le <strong>Juge de Paix</strong> du district de Morges est compétent matériellement et territorialement.</p>
                <p><strong>2. Déroulement :</strong> Dépôt d'une requête de conciliation ou demande simplifiée. Le fardeau de la preuve repose sur Charlie : il devra produire le contrat de vente (Preuve par titre, art. 168 CPC).</p>
                <p><strong>3. Exécution forcée :</strong> Une fois le jugement en sa faveur obtenu, il doit réclamer son argent via la LP. Il dépose une réquisition de poursuite, un commandement de payer est notifié. Si Pierre fait opposition, Charlie demandera la mainlevée définitive grâce à son jugement. Ensuite, saisie des biens de Pierre (ex: un tableau) et réalisation aux enchères pour être payé.</p>
            </div>
        </div>`,
        children: [], parent: "procedure_civile"
    },

    // --- 7.6 LE DROIT INTERNATIONAL PRIVÉ (Dès page 78 du cours) ---
    droit_inter_prive: {
        title: "Le droit international privé (aperçu)",
        info: "Le droit international privé (DIP) entre en jeu lorsqu'une relation de droit privé comporte un <strong>élément d'extranéité</strong> (c'est-à-dire un lien avec l'étranger, comme des parties de nationalités différentes ou domiciliées dans des pays distincts). En Suisse, ces règles se trouvent dans la <span class='highlight'>Loi fédérale sur le droit international privé (LDIP)</span>.",
        children: ["dip_trois_questions", "cp_achats_internet"],
        parent: "droit_prive_pt7"
    },

    dip_trois_questions: {
        title: "Les trois questions fondamentales",
        info: "Lorsqu'un litige présente un caractère international, le juge doit obligatoirement se poser trois questions dans un ordre très précis :<br><br><ol><li><strong>La compétence (Conflit de juridictions) :</strong> Les tribunaux suisses sont-ils compétents pour juger l'affaire ? Si oui, dans quel canton ?</li><li><strong>Le droit applicable (Conflit de lois) :</strong> Quel droit national le juge doit-il appliquer pour trancher le litige sur le fond ? Le juge suisse peut tout à fait être amené à <span class='success'>appliquer un droit étranger</span> (par exemple le droit japonais ou français) si les règles de rattachement l'exigent.</li><li><strong>La reconnaissance et l'exécution :</strong> Un jugement rendu à l'étranger peut-il être reconnu et exécuté de force en Suisse ?</li></ol>",
        children: [], 
        parent: "droit_inter_prive"
    },

    cp_achats_internet: {
        title: "Cas pratique : Charlie et les achats sur Internet",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie, domicilié à Lausanne, achète des lunettes depuis Paris sur le site de Will Ltd. (entreprise espagnole). Livraison à Lausanne. Il refuse de payer. Will Ltd. veut agir à Lausanne.</p>
            <p class="cas-pratique-question">Tribunal compétent ? Droit applicable ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p><strong>Compétence :</strong> Convention de Lugano. En matière contractuelle, on peut attraire le défendeur au lieu d'exécution de l'obligation (Lausanne, lieu de livraison). Will Ltd. peut donc agir à Lausanne.</p>
                <p><strong>Droit applicable :</strong> Art. 117 LDIP (liens les plus étroits). C'est la loi de l'établissement de la partie qui fournit la <strong>prestation caractéristique</strong> (le vendeur). Le juge suisse appliquera donc le <strong>droit espagnol</strong> (Will Ltd n'ayant fait aucune sollicitation spécifique visant la Suisse pour appliquer le droit de consommation).</p>
            </div>
        </div>`,
        children: [], parent: "droit_inter_prive"
    },

    // --- 7.7 L'ARBITRAGE (Dès page 79 du cours) ---
    arbitrage: {
        title: "L'arbitrage (aperçu)",
        info: "L'arbitrage est un mode de résolution des litiges <strong>privé et extrajudiciaire</strong>. Au lieu de s'adresser aux tribunaux de l'État, les parties confient le soin de trancher leur différend à un ou plusieurs particuliers que l'on appelle des <span class='highlight'>arbitres</span>.",
        children: ["arbitrage_convention", "arbitrage_sentence", "arbitrage_caracteristiques", "cp_pacha"],
        parent: "droit_prive_pt7"
    },

    arbitrage_convention: {
        title: "La convention d'arbitrage",
        info: "Pour qu'un litige soit soumis à l'arbitrage au lieu de la justice ordinaire, il faut obligatoirement le <strong>consentement des deux parties</strong>. <br><br>Cela se fait généralement par une <span class='highlight'>clause compromissoire</span> insérée directement dans le contrat principal (bien avant qu'un litige n'éclate). S'il y a une telle clause valide, les tribunaux étatiques doivent se déclarer incompétents.",
        children: [], 
        parent: "arbitrage"
    },

    cp_pacha: {
        title: "Cas pratique : L'arbitrage de Pacha SA",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Pacha SA et Sica SA (sièges en Suisse) insèrent une clause prévoyant un arbitrage à Lausanne avec 5 arbitres, procédure en anglais fixée par les parties.</p>
            <p class="cas-pratique-question">Est-ce conforme au droit suisse ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Il s'agit d'un <strong>arbitrage interne</strong> (CPC applicable) car le siège de l'arbitrage et les parties sont en Suisse.</p>
                <p>L'objet du litige (vente de métaux précieux) relève de la <strong>libre disposition des parties</strong> (art. 354 CPC), l'arbitrage est donc possible.</p>
                <p>Le CPC permet aux parties de régler elles-mêmes la procédure arbitrale (art. 373 CPC). La composition à 5 arbitres, bien que lourde, est parfaitement <strong>conforme</strong> au droit.</p>
            </div>
        </div>`,
        children: [], parent: "arbitrage"
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
        children: ["ob_definition", "ob_prestation", "ob_sources", "cp_paris"],
        parent: "root"
    },

    cp_paris: {
        title: "Cas pratique : Charlie & les paris",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie a parié CHF 1000.- avec Grégoire que son équipe favorite va passer le 1er tour de la Ligue des champions. Charlie remporte le pari mais Grégoire refuse de lui verser la somme.</p>
            <p class="cas-pratique-question">Charlie peut-il forcer Grégoire à payer ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Selon l'art. 513 al. 1 CO, « le jeu et le pari ne donnent aucun droit de créance ». Il s'agit d'une obligation naturelle qui est donc dépourvue d'action en exécution.</p>
                <p><strong>Conclusion :</strong> Charlie ne peut pas exiger l'exécution de sa créance en justice.</p>
            </div>
        </div>`,
        children: [], parent: "ob_definition"
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
        children: ["ob_source_contrat", "ob_source_rc", "ob_source_enrichissement", "cp_jean_accident"],
        parent: "droit_obligations"
    },

    cp_jean_accident: {
        title: "Cas pratique : Charlie & Jean (Sources multiples)",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie emboutit la voiture de Jean. Charlie verse l'argent pour les réparations à un homonyme de Jean qui refuse de rendre l'argent. Charlie engage un avocat pour récupérer la somme.</p>
            <p class="cas-pratique-question">Quelles sont les sources des obligations en l'espèce ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <ul>
                    <li><strong>Charlie et Jean :</strong> Obligation résultant d'un acte illicite (Responsabilité civile, art. 41 CO).</li>
                    <li><strong>Charlie et l'homonyme :</strong> L'homonyme s'est enrichi sans cause valable (Enrichissement illégitime, art. 62 CO).</li>
                    <li><strong>Charlie et son avocat :</strong> L'obligation de payer la provision relève d'un contrat de mandat (Obligations contractuelles).</li>
                </ul>
            </div>
        </div>`,
        children: [], parent: "ob_sources"
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
        info: "Ce chapitre traite des différentes causes juridiques qui donnent naissance à une obligation entre deux ou plusieurs personnes.",
        children: ["so_notion", "so_volontaires", "so_legales"],
        parent: "root"
    },

    // --- SECTION 1 : NOTION ---
    so_notion: {
        title: "Notion",
        info: "La source d'une obligation est la <strong>cause juridique de cette dernière</strong>, c'est-à-dire le fait que le droit objectif attache directement ou indirectement à la naissance d'une obligation. Chaque obligation repose donc sur une source.<br><br>Parmi ces dernières, on distingue deux grandes catégories :<br><ul><li>Les sources <strong>volontaires</strong>.</li><li>Les sources <strong>légales</strong> (en particulier les actes illicites et l'enrichissement illégitime).</li></ul>",
        children: [],
        parent: "sources_obligations_titre9"
    },

    // --- SECTION 2 : LES SOURCES VOLONTAIRES D'OBLIGATION ---
    so_volontaires: {
        title: "Les sources volontaires d'obligation",
        info: "Les sources volontaires d'obligation sont constituées par la ou les <strong>volontés d'une ou plusieurs parties de s'engager</strong>. De cette volonté découlent des obligations qui lient la ou les parties (art. 1 CO).",
        children: ["so_contrat", "so_acte_unilateral", "so_quasi_contrats"],
        parent: "sources_obligations_titre9"
    },

    // SOUS-BRANCHES SECTION 2
    so_contrat: {
        title: "Le contrat ou les obligations contractuelles",
        info: "Le contrat constitue la source d'obligations volontaires la plus importante. Il se définit comme <strong>l'échange de plusieurs manifestations de volonté réciproques et concordantes</strong>.<br><br>Les obligations ayant leur source dans le contrat sont au nombre de trois :<br><ol><li>Les obligations découlant du <strong>contenu même du contrat</strong>.</li><li>Les obligations prévues par le <strong>droit supplétif</strong> : un droit qui ne s'applique que lorsque les parties n'ont pas réglé le point dans le contrat. Il complète alors le contrat.</li><li>Les obligations prévues par le <strong>droit impératif</strong> : celui qui s'applique de manière obligatoire et incontournable dès que certaines conditions sont remplies.</li></ol>",
        children: [],
        parent: "so_volontaires"
    },

    so_acte_unilateral: {
        title: "L'acte juridique unilatéral",
        info: "L'acte juridique unilatéral est <strong>l'acte par lequel une personne s'engage seule</strong>. <br><br><strong>Exemples :</strong> <br><ul><li>La promesse publique faite à un nombre déterminé de personnes de récompenser celle qui réalisera une prestation déterminée (art. 8 CO).</li><li>Le testament (art. 498 CC).</li></ul>",
        children: [],
        parent: "so_volontaires"
    },

    so_quasi_contrats: {
        title: "Les quasi-contrats",
        info: "Les quasi-contrats correspondent à des <strong>situations pour lesquelles les conditions d'un acte juridique font défaut</strong> (par exemple, la volonté de l'une des parties au moins) mais que la loi et la jurisprudence <strong>assimilent à des actes volontaires</strong>.<br><br><strong>Exemples de quasi-contrats :</strong><br><ul><li>La gestion d'affaires sans mandat (art. 419 à 424 CO).</li><li>L'acte de complaisance.</li><li>La relation contractuelle de fait.</li></ul>",
        children: [],
        parent: "so_volontaires"
    },

    // --- SECTION 3 : LES SOURCES LÉGALES ---
    so_legales: {
        title: "Les sources légales",
        info: "La source d'obligation est ici <strong>la loi elle-même, indifféremment de la volonté du débiteur ou même de son comportement</strong>. La loi impose des obligations lorsque certaines conditions définies par elle sont remplies, en raison de situations juridiques durables le plus souvent.",
        children: ["so_acte_illicite", "so_enrichissement"],
        parent: "sources_obligations_titre9"
    },

    // SOUS-BRANCHES SECTION 3
    so_acte_illicite: {
        title: "L'acte illicite ou la responsabilité civile",
        info: "La loi impose <strong>l'obligation à l'auteur d'un préjudice de réparer le dommage causé aux tiers</strong>. <br><br>Le fondement de cette obligation réside dans le fait qui a généré le dommage, donnant lieu à deux types de responsabilités :<br><ul><li>La <strong>responsabilité subjective</strong> : fondée sur la faute de l'auteur (art. 41 CO).</li><li>La <strong>responsabilité objective</strong> : fondée sur le risque créé.</li></ul><br>Des lois spéciales prévoient également une telle responsabilité (ex: la LCR qui impose l'obligation de réparer le dommage à la charge du détenteur d'un véhicule à moteur).",
        children: [],
        parent: "so_legales"
    },

    so_enrichissement: {
        title: "L'enrichissement illégitime",
        info: "La personne qui <strong>bénéficie aux dépens d'autrui d'un enrichissement sans cause valable a l'obligation de par la loi de restituer cet enrichissement</strong> (art. 62 à 67 CO). <br><br>Il est très important de noter que les règles sur l'enrichissement illégitime sont <strong>subsidiaires</strong> : elles ne s'appliquent que lorsqu'aucune règle de fond relative aux obligations contractuelles ou à la responsabilité civile ne trouve application.",
        children: [],
        parent: "so_legales"
    },

    // --- 10. LES OBLIGATIONS CONTRACTUELLES ---
    obligations_contractuelles_titre10: {
        title: "10. Les obligations contractuelles",
        info: "Cette grande thématique aborde la vie du contrat : sa formation, sa validité, son interprétation, ses vices et ses sûretés.",
        children: [
            "oc_definition_classification", "oc_autonomie", "oc_conclusion", 
            "oc_icc", "oc_forme", "oc_objet", "oc_vices", 
            "oc_representation", "oc_stipulation", "oc_suretes", "oc_subrogation"
        ],
        parent: "root"
    },

    // ==========================================
    // DÉFINITION ET CLASSIFICATION
    // ==========================================
    oc_definition_classification: {
        title: "Définition et classification",
        info: "Bases de la notion de contrat et de sa typologie.",
        children: ["oc_dc_definition", "oc_dc_classification"],
        parent: "obligations_contractuelles_titre10"
    },
    oc_dc_definition: {
        title: "Définition",
        info: "L'acte juridique est une manifestation de volonté destinée et apte à produire un effet juridique (création, modification, suppression ou transfert d'un droit). Il peut être unilatéral ou bi/multilatéral.<br><br>Le contrat se définit comme <strong>l'échange de deux ou plusieurs manifestations de volonté concordantes</strong> destiné à produire un effet juridique conforme aux volontés exprimées de manière concordante.",
        children: [],
        parent: "oc_definition_classification"
    },
    oc_dc_classification: {
        title: "Classification",
        info: "Les différents contrats peuvent être classés selon divers critères.",
        children: ["oc_dc_class_effets", "oc_dc_class_duree", "oc_dc_class_loi", "oc_dc_class_autres"],
        parent: "oc_definition_classification"
    },
    oc_dc_class_effets: {
        title: "Selon les effets",
        info: "<ul><li><strong>Contrat unilatéral :</strong> une seule des parties assume des obligations (ex: donation).</li><li><strong>Contrat bilatéral :</strong> obligations réciproques. S'il est <strong>parfait (ou synallagmatique)</strong>, les prestations sont dans un rapport d'échange. S'il est imparfait, une seule partie a une obligation principale.</li><li><strong>Contrats multilatéraux :</strong> les prestations sont réunies en vue d'un but commun.</li></ul>",
        children: [],
        parent: "oc_dc_classification"
    },
    oc_dc_class_duree: {
        title: "Selon la durée",
        info: "<ul><li><strong>Contrats simples (ou instantanés) :</strong> le débiteur doit faire une prestation isolée dans le temps.</li><li><strong>Contrats de durée :</strong> le débiteur doit une prestation qui se prolonge dans le temps.</li><li><strong>Contrats analogues aux contrats de durée :</strong> exécution qui nécessite un certain temps.</li></ul>",
        children: [],
        parent: "oc_dc_classification"
    },
    oc_dc_class_loi: {
        title: "Selon la relation avec la loi",
        info: "<ul><li><strong>Contrats nommés :</strong> réglementés par le CO ou une autre loi (ex: vente).</li><li><strong>Contrats innommés :</strong> non réglés par la loi. Peuvent être des <strong>contrats mixtes</strong> (combinaison d'éléments réglementés) ou <strong>sui generis</strong> (contenu entièrement original, ex: franchise).</li></ul>",
        children: [],
        parent: "oc_dc_classification"
    },
    oc_dc_class_autres: {
        title: "Autres distinctions",
        info: "Le contrat peut être principal ou accessoire (existe seulement en fonction d'un autre contrat). Il peut aussi être gratuit ou onéreux (recevoir un avantage en fournissant ou non un équivalent).",
        children: [],
        parent: "oc_dc_classification"
    },

    // ==========================================
    // L'AUTONOMIE DE LA VOLONTÉ
    // ==========================================
    oc_autonomie: {
        title: "L'autonomie de la volonté",
        info: "Le droit des obligations est soumis au principe fondamental de l'autonomie de la volonté des parties.",
        children: ["oc_auto_notion", "oc_auto_limites", "oc_auto_liberte"],
        parent: "obligations_contractuelles_titre10"
    },
    oc_auto_notion: {
        title: "Notion",
        info: "L'autonomie de la volonté comprend cinq droits essentiels :<br><ol><li>La liberté de contracter.</li><li>La liberté de choisir son ou ses partenaires contractuels.</li><li>La liberté de choisir la forme du contrat.</li><li>La liberté d'annuler le contrat, d'y mettre fin ou de le ratifier.</li><li>La liberté de déterminer le contenu du contrat.</li></ol>",
        children: [],
        parent: "oc_autonomie"
    },
    oc_auto_limites: {
        title: "Les limites",
        info: "Le principe de l'autonomie de la volonté se heurte à deux types de limites : les limites de fait (poids respectif des parties) et les limites de droit (forme ou objet).",
        children: [],
        parent: "oc_autonomie"
    },
    oc_auto_liberte: {
        title: "La liberté de contracter",
        info: "Nul ne peut être contraint de contracter contre sa volonté. Cette liberté est cependant limitée par des dispositions de droit public et de droit privé créant, dans certaines circonstances, une obligation de contracter.",
        children: [],
        parent: "oc_autonomie"
    },

    // ==========================================
    // LA CONCLUSION DU CONTRAT
    // ==========================================
    oc_conclusion: {
        title: "La conclusion du contrat",
        info: "Étapes et règles régissant la formation de l'accord entre les parties.",
        children: [
            "oc_concl_negociation", "oc_concl_offre", "oc_concl_acceptation", 
            "oc_concl_lettre", "oc_concl_concordance", "oc_concl_moment", "oc_concl_cas"
        ],
        parent: "obligations_contractuelles_titre10"
    },
    oc_concl_negociation: {
        title: "La négociation",
        info: "Durant la phase de pourparlers, les parties ne sont pas encore liées. Néanmoins, elles ont certains devoirs précontractuels : négocier sérieusement, s'informer soi-même, renseigner l'autre partie et se comporter loyalement.<br><br>Si une partie cause un dommage à l'autre en violant un de ces devoirs, elle encourt une responsabilité précontractuelle appelée <strong>culpa in contrahendo</strong>.",
        children: [],
        parent: "oc_conclusion"
    },
    oc_concl_offre: {
        title: "L'offre",
        info: "La première étape formelle de la conclusion.",
        children: ["oc_offre_notion", "oc_offre_contenu", "oc_offre_effets", "oc_offre_duree"],
        parent: "oc_conclusion"
    },
    oc_offre_notion: {
        title: "Notion",
        info: "L'offre est une proposition ferme de conclure un contrat, adressée à l'autre partie. Il s'agit d'un acte juridique <strong>soumis à réception</strong> ; l'offre déploie ses effets dès que le destinataire l'a reçue, même s'il n'en a pas pris connaissance.",
        children: [],
        parent: "oc_concl_offre"
    },
    oc_offre_contenu: {
        title: "Contenu et forme",
        info: "L'offre doit contenir <strong>tous les éléments essentiels du contrat</strong> ainsi que <strong>l'expression d'une volonté de se lier</strong>. Conformément au principe de liberté, elle est en principe informelle.",
        children: [],
        parent: "oc_concl_offre"
    },
    oc_offre_effets: {
        title: "Effets",
        info: "L'offre lie son auteur et confère un <strong>droit formateur</strong> au destinataire (qui peut provoquer unilatéralement la conclusion). <br><br>Elle est <strong>irrévocable</strong> sauf dans deux cas (art. 9 CO) :<br>1. Retrait parvenu au destinataire avant ou en même temps que l'offre.<br>2. Retrait communiqué avant que le destinataire ait pris connaissance de l'offre.",
        children: [],
        parent: "oc_concl_offre"
    },
    oc_offre_duree: {
        title: "Durée de validité",
        info: "L'offrant peut fixer un délai. À défaut, la loi impose :<br><ul><li><strong>Entre présents :</strong> l'offrant est délié à défaut d'acceptation immédiate.</li><li><strong>Entre absents :</strong> l'offrant est lié jusqu'au moment où il peut s'attendre à l'arrivée d'une réponse expédiée à temps et régulièrement.</li></ul>",
        children: [],
        parent: "oc_concl_offre"
    },
    oc_concl_acceptation: {
        title: "L'acceptation",
        info: "La réponse positive à l'offre.",
        children: ["oc_acc_notion", "oc_acc_contenu"],
        parent: "oc_conclusion"
    },
    oc_acc_notion: {
        title: "Notion",
        info: "Manifestation de volonté par laquelle l'acceptant exprime sa <strong>volonté définitive de conclure</strong>. C'est un acte soumis à réception, qui constitue l'exercice du droit formateur. Elle peut être retirée aux mêmes conditions restrictives que l'offre.",
        children: [],
        parent: "oc_concl_acceptation"
    },
    oc_acc_contenu: {
        title: "Contenu et forme",
        info: "L'acceptation doit être conforme à l'offre. Elle peut être tacite ou résulter d'actes concluants. <br><br>Cependant, <strong>le silence ne vaut pas acceptation</strong>, à moins que le contraire ne résulte de la nature de l'affaire (art. 6 CO).",
        children: [],
        parent: "oc_concl_acceptation"
    },
    oc_concl_lettre: {
        title: "La lettre de confirmation",
        info: "Pratique commerciale où une partie résume le contenu d'un accord préalable. Elle a un <strong>effet probatoire</strong> et confirme l'accord. Elle peut avoir un <strong>effet constitutif</strong> si l'on doit s'attendre à ce que le destinataire conteste son contenu inexact.",
        children: [],
        parent: "oc_conclusion"
    },
    oc_concl_concordance: {
        title: "La concordance des manifestations de volonté",
        info: "L'harmonie nécessaire entre l'offre et l'acceptation.",
        children: ["oc_conc_notion", "oc_conc_objet", "oc_conc_regles", "cp_voitures_sarl_1"],
        parent: "oc_conclusion"
    },

    cp_voitures_sarl_1: {
        title: "Cas pratique : Charlie & Voitures Sàrl (L'offre)",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie publie une annonce sur Internet : « Voiture à vendre. 5'000 km. Très bon état. Prix à discuter ». Antoine lui propose CHF 3'000.-. Charlie accepte en précisant que « la voiture n'est pas livrée ».</p>
            <p class="cas-pratique-question">Le contrat est-il conclu ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>L'annonce de Charlie n'est pas une offre (pas de prix = manque un point essentiel). C'est Antoine qui formule l'offre d'achat. Charlie accepte en modifiant une condition (livraison).</p>
                <p><strong>Conclusion :</strong> Si la livraison est un point secondaire, le juge le réglera (art. 2 CO). Si c'est subjectivement essentiel pour Antoine, l'acceptation de Charlie est en fait une contre-offre qu'Antoine doit accepter pour que le contrat soit conclu.</p>
            </div>
        </div>`,
        children: [], parent: "oc_concl_concordance"
    },

    oc_conc_notion: {
        title: "Notion",
        info: "Le contrat consiste dans un accord de manifestations de volonté. L'acceptation doit correspondre à l'offre.",
        children: [],
        parent: "oc_concl_concordance"
    },
    oc_conc_objet: {
        title: "L'objet de l'accord",
        info: "L'accord doit se faire sur les <strong>points essentiels</strong> du contrat. On distingue :<br><ul><li>Les points <strong>objectivement essentiels</strong> : le noyau indispensable du contrat.</li><li>Les points <strong>subjectivement essentiels</strong> : éléments sans lesquels une partie ne contracterait pas.</li></ul>Les autres points sont secondaires.",
        children: [],
        parent: "oc_concl_concordance"
    },
    oc_conc_regles: {
        title: "Les règles régissant l'accord",
        info: "S'il y a <strong>accord réel ou naturel</strong>, les volontés effectives sont concordantes (le sens voulu, déclaré et compris sont identiques). <br><br>S'il n'y a pas d'accord réel, l'ordre juridique applique le <strong>principe de la confiance</strong> : les déclarations doivent être comprises dans le sens que leur destinataire pouvait et devait leur donner de bonne foi. On parle alors de <strong>consentement juridique ou normatif</strong>.",
        children: [],
        parent: "oc_concl_concordance"
    },
    oc_concl_moment: {
        title: "Le moment de la conclusion du contrat",
        info: "Le contrat est formellement conclu à la réception de l'acceptation. <br><br>Toutefois, les effets des contrats <strong>rétroagissent au moment de l'expédition de l'acceptation</strong> ou, en cas d'acceptation tacite, au moment de la réception de l'offre.",
        children: ["cp_voitures_sarl_2"],
        parent: "oc_conclusion"
    },
    cp_voitures_sarl_2: {
        title: "Cas pratique : Charlie & Voitures Sàrl (Le retrait)",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie envoie par courrier une offre de vente d'une voiture à CHF 50'000.- à un ami. Quelques heures plus tard, quelqu'un lui propose 200'000.-. Charlie appelle immédiatement son ami pour retirer son offre envoyée par courrier.</p>
            <p class="cas-pratique-question">L'offre est-elle valablement retirée ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Selon l'art. 9 CO, le retrait est valable s'il parvient avant l'offre ou en même temps. L'appel de Charlie arrive avant la réception de la lettre postale.</p>
                <p><strong>Conclusion :</strong> Oui, l'offre a été valablement retirée.</p>
            </div>
        </div>`,
        children: [], parent: "oc_concl_moment"
    },
    oc_concl_cas: {
        title: "Cas particuliers de conclusion",
        info: "Situations spécifiques prévues par la loi.",
        children: ["oc_cas_appel", "oc_cas_promesse", "oc_cas_precontrat", "oc_cas_adhesion"],
        parent: "oc_conclusion"
    },
    oc_cas_appel: {
        title: "L'appel d'offres",
        info: "Déclaration par laquelle l'appelant demande, <strong>sans engagement</strong>, que des offres lui soient faites (art. 7 CO).",
        children: [],
        parent: "oc_concl_cas"
    },
    oc_cas_promesse: {
        title: "La promesse publique",
        info: "Promesse faite à un nombre indéterminé de personnes de récompenser celle qui réalisera une prestation. Étant publique, elle <strong>lie son auteur</strong> qui doit payer la récompense (art. 8 CO).",
        children: [],
        parent: "oc_concl_cas"
    },
    oc_cas_precontrat: {
        title: "La promesse de contracter",
        info: "Aussi appelée <strong>précontrat</strong>, c'est l'engagement souscrit par une ou deux parties de conclure ultérieurement un contrat principal (art. 22 CO).",
        children: [],
        parent: "oc_concl_cas"
    },
    oc_cas_adhesion: {
        title: "Contrat d'adhésion et CG",
        info: "<strong>Le contrat d'adhésion</strong> ne peut en pratique être discuté par l'adhérent. <strong>Les conditions générales (CG)</strong> sont des clauses standardisées.<br><br>Le juge effectue deux contrôles :<br><ul><li><strong>L'incorporation :</strong> Elles n'ont d'effet que si incorporées dans l'accord.</li><li><strong>Le contenu :</strong> La jurisprudence applique la <strong>règle de l'insolite</strong> (les clauses insolites, c.-à-d. excessivement onéreuses ou s'écartant du contenu attendu, ne lient pas).</li></ul><br>L'art. 8 LCD protège également le consommateur si la clause provoque une <strong>disproportion notable et injustifiée</strong> contraire aux règles de la bonne foi (entraîne la nullité de la clause).",
        children: ["cp_voitures_sarl_3"],
        parent: "oc_concl_cas"
    },

    cp_voitures_sarl_3: {
        title: "Cas pratique : Charlie et les Conditions Générales",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie conclut une assurance sur Internet. Le contrat renvoie aux CG sur le site web. Dans un document annexe de 13 pages en petits caractères, il est stipulé un délai de résiliation de 3 ans.</p>
            <p class="cas-pratique-question">Ces clauses sont-elles valables ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p><strong>Incorporation :</strong> Si le renvoi est clair et les CG accessibles, l'incorporation globale est valable.</p>
                <p><strong>Contenu :</strong> Le délai de 3 ans déroge aux usages habituels, c'est une clause insolite. Elle ne sera pas valable à moins que l'assurance n'ait attiré expressément l'attention de Charlie sur ce point.</p>
            </div>
        </div>`,
        children: [], parent: "oc_cas_adhesion"
    },

    // ==========================================
    // INTERPRÉTATION, COMPLÈTEMENT, CORRECTION
    // ==========================================
    oc_icc: {
        title: "Interprétation, complètement et correction",
        info: "Processus applicables lorsqu'un contrat est conclu mais génère des conflits sur son sens ou son exécution.",
        children: ["oc_icc_interpretation", "oc_icc_completement", "oc_icc_correction"],
        parent: "obligations_contractuelles_titre10"
    },
    oc_icc_interpretation: {
        title: "L'interprétation du contrat",
        info: "Le juge procède en deux étapes :<br><ol><li>La <strong>recherche de la volonté réelle</strong> (interprétation subjective) : établir ce que les parties ont effectivement voulu.</li><li>La <strong>détermination de la volonté supposée</strong> (interprétation objective) : s'il y a divergence, le juge applique le <strong>principe de la confiance</strong> pour retenir l'interprétation d'une personne raisonnable et honnête placée dans les mêmes circonstances.</li></ol>",
        children: [],
        parent: "oc_icc"
    },
    oc_icc_completement: {
        title: "Le complètement du contrat",
        info: "Utilisé pour combler une lacune du contrat :<br><ul><li>Application d'une <strong>règle légale supplétive</strong> (prévue par le CO ou loi spéciale).</li><li>À défaut, le juge devra imaginer la <strong>volonté hypothétique des parties</strong> à partir des règles de la bonne foi.</li></ul>",
        children: ["cp_completement_transport"],
        parent: "oc_icc"
    },
    cp_completement_transport: {
        title: "Cas pratique : Charlie et le complètement du contrat",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie achète un tableau à Pierre pour CHF 10'000.-. Le contrat écrit ne mentionne pas les frais de port de Zurich à Moudon. Pierre facture CHF 200.- supplémentaires pour l'envoi. Charlie refuse de payer ce supplément.</p>
            <p class="cas-pratique-question">Comment le juge va-t-il combler cette lacune ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Le contrat (vente) est muet sur un point secondaire (les frais de port). Le juge utilise les règles supplétives du CO.</p>
                <p>Selon l'art. 189 al. 1 CO, les frais de transport sont à la charge de l'acheteur dans la vente à distance (sauf convention contraire). Charlie doit donc payer les CHF 200.-.</p>
            </div>
        </div>`,
        children: [], parent: "oc_icc_completement"
    },
    oc_icc_correction: {
        title: "La correction du contrat",
        info: "Si le contrat devient excessivement dur en raison de changements, et en l'absence de clause spécifique, le juge peut intervenir via :<br><ul><li><strong>L'erreur sur les faits futurs :</strong> si les faits étaient prévisibles.</li><li><strong>La théorie de l'imprévision (clausula rebus sic stantibus) :</strong> permet exceptionnellement de refuser l'exécution stricte quand les circonstances ont fondamentalement changé.</li></ul>",
        children: [],
        parent: "oc_icc"
    },

    // ==========================================
    // LA FORME DU CONTRAT
    // ==========================================
    oc_forme: {
        title: "La forme du contrat",
        info: "Règles relatives aux exigences formelles pour la validité d'un contrat.",
        children: ["oc_forme_principe", "oc_forme_exceptions", "oc_forme_sanctions", "oc_forme_conv", "cp_vente_ppe"],
        parent: "obligations_contractuelles_titre10"
    },
    cp_vente_ppe: {
        title: "Cas pratique : Charlie & la vente d'une PPE",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie vend une part de Propriété Par Étages (PPE) à son cousin. Ils rédigent et signent ensemble un contrat complet de plusieurs pages.</p>
            <p class="cas-pratique-question">Leur contrat est-il valable en la forme ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Une part de PPE est un immeuble (art. 665 CC). Selon l'art. 216 al. 1 CO, les ventes d'immeubles ne sont valables que par <strong>acte authentique</strong> (passé devant notaire).</p>
                <p><strong>Conclusion :</strong> Le contrat sous seing privé est frappé de nullité absolue.</p>
            </div>
        </div>`,
        children: [], parent: "oc_forme"
    },
    oc_forme_principe: {
        title: "Le principe du libre choix de la forme",
        info: "Le droit des obligations consacre le principe du <strong>consensualisme</strong> : le libre choix de la forme, sauf exceptions prévues par la loi (art. 11 CO).",
        children: [],
        parent: "oc_forme"
    },
    oc_forme_exceptions: {
        title: "Les exceptions",
        info: "La loi peut imposer une forme pour protéger les parties ou assurer la sécurité des transactions.",
        children: ["oc_fexc_ecrite", "oc_fexc_leg", "oc_fexc_auth", "oc_fexc_reg"],
        parent: "oc_forme"
    },
    oc_fexc_ecrite: {
        title: "La forme écrite",
        info: "Suppose que le contenu soit rédigé sur un support matériel. Le contrat doit être <strong>signé par toutes les personnes qui s'obligent</strong>. Une forme écrite qualifiée peut exiger des indications obligatoires manuscrites (ex: montant du cautionnement).",
        children: [],
        parent: "oc_forme_exceptions"
    },
    oc_fexc_leg: {
        title: "Légalisation",
        info: "Attestation officielle de l'authenticité d'une signature, réglée par le droit cantonal.",
        children: [],
        parent: "oc_forme_exceptions"
    },
    oc_fexc_auth: {
        title: "La forme authentique",
        info: "Nécessite la collaboration d'un fonctionnaire ou d'un officier public, généralement un <strong>notaire</strong>.",
        children: [],
        parent: "oc_forme_exceptions"
    },
    oc_fexc_reg: {
        title: "L'inscription dans un registre public",
        info: "Certains actes doivent être inscrits (Registre foncier, Registre du commerce, etc.).",
        children: [],
        parent: "oc_forme_exceptions"
    },
    oc_forme_sanctions: {
        title: "Sanctions en cas d'inobservation",
        info: "Lorsque la loi impose une forme, elle est solennelle. Le non-respect entraîne la <strong>nullité absolue du contrat</strong> (art. 11 al. 2 CO). Cette nullité est <strong>originaire (ex tunc)</strong> et invocable en tout temps (limitée par l'interdiction de l'abus de droit).",
        children: [],
        parent: "oc_forme"
    },
    oc_forme_conv: {
        title: "La forme conventionnelle",
        info: "Même si la loi ne l'exige pas, les parties sont libres de subordonner la conclusion à une forme qu'elles ont choisie. Cette forme est présumée être une condition de validité du contrat.",
        children: [],
        parent: "oc_forme"
    },

    // ==========================================
    // L'OBJET DU CONTRAT
    // ==========================================
    oc_objet: {
        title: "L'objet du contrat",
        info: "Il désigne les obligations découlant du contrat et les prestations convenues.",
        children: ["oc_obj_principe", "oc_obj_exceptions", "oc_obj_sanctions"],
        parent: "obligations_contractuelles_titre10"
    },
    oc_obj_principe: {
        title: "Le principe du libre choix",
        info: "L'objet du contrat peut être librement déterminé dans les limites de la loi (art. 19 al. 1 CO). Les parties peuvent même créer de nouveaux contrats (contrats innommés).",
        children: [],
        parent: "oc_objet"
    },
    oc_obj_exceptions: {
        title: "Les exceptions",
        info: "Limites matérielles à la liberté contractuelle (art. 19 et 20 CO).",
        children: ["oc_oexc_imp", "oc_oexc_ill", "oc_oexc_fraude", "oc_oexc_imm", "oc_oexc_att"],
        parent: "oc_objet"
    },
    oc_oexc_imp: {
        title: "L'impossibilité",
        info: "L'impossibilité de la prestation doit présenter deux caractéristiques : elle doit être <strong>initiale (ou originaire)</strong> et <strong>objective</strong> (irréalisable pour tout le monde). Elle peut être matérielle ou juridique.",
        children: ["cp_sculpture_detruite"],
        parent: "oc_obj_exceptions"
    },
    cp_sculpture_detruite: {
        title: "Cas pratique : Charlie & la sculpture",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie achète par téléphone une statue unique à un ami et verse l'argent. Or, la statue a été détruite la nuit précédant la conclusion du contrat (à l'insu de Charlie).</p>
            <p class="cas-pratique-question">Que peut faire Charlie ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Il y a une <strong>impossibilité initiale et objective</strong> (la chose n'existait plus au moment de l'accord).</p>
                <p>La sanction (art. 20 CO) est la nullité absolue. Charlie disposera de l'action en enrichissement illégitime (art. 62 CO) pour récupérer son argent.</p>
            </div>
        </div>`,
        children: [], parent: "oc_oexc_imp"
    },
    oc_oexc_ill: {
        title: "L'illicéité",
        info: "Le contrat est illicite si son objet se heurte à une <strong>interdiction absolue</strong> du droit suisse (violation de dispositions impératives de droit privé ou public).",
        children: [],
        parent: "oc_obj_exceptions"
    },
    oc_oexc_fraude: {
        title: "La fraude à la loi",
        info: "Consiste à recourir à un moyen apparemment légitime pour atteindre un résultat qui est prohibé (éviter une norme). Sanctionnée par l'interdiction de l'abus de droit.",
        children: [],
        parent: "oc_obj_exceptions"
    },
    oc_oexc_imm: {
        title: "L'immoralité",
        info: "Sanctionne des comportements qui, sans être expressément interdits, <strong>heurtent la morale sociale</strong>.",
        children: [],
        parent: "oc_obj_exceptions"
    },
    oc_oexc_att: {
        title: "L'atteinte aux droits de la personnalité",
        info: "Sanctionne un contrat dont l'objet porte sur une sphère inadmissible ou qui constitue un <strong>engagement excessif</strong> (art. 27 CC).",
        children: [],
        parent: "oc_obj_exceptions"
    },
    oc_obj_sanctions: {
        title: "Sanctions pour objet illicite",
        info: "Conséquences si l'objet viole les exceptions.",
        children: ["oc_osan_principe", "oc_osan_exceptions"],
        parent: "oc_objet"
    },
    oc_osan_principe: {
        title: "Le principe de nullité absolue",
        info: "La sanction normale du contrat impossible, illicite, contraire aux mœurs ou aux droits de la personnalité est la <strong>nullité absolue</strong>. Le contrat est radicalement nul même si le vice ne touche qu'une seule clause.",
        children: [],
        parent: "oc_obj_sanctions"
    },
    oc_osan_exceptions: {
        title: "Les exceptions",
        info: "<ul><li><strong>La nullité partielle :</strong> Seules les clauses viciées sont nulles, à moins que le contrat n'eût pas été conclu sans elles (art. 20 al. 2 CO).</li><li><strong>La nullité relative :</strong> Lorsque la norme violée a pour seul but de protéger la partie faible, seule cette partie protégée peut invoquer le vice.</li></ul>",
        children: [],
        parent: "oc_obj_sanctions"
    },

    // ==========================================
    // LES VICES DU CONTRAT
    // ==========================================
    oc_vices: {
        title: "Les vices du contrat",
        info: "Défauts mettant en péril l'existence du contrat en raison d'une volonté faussée ou d'une lésion.",
        children: ["oc_vices_volonte", "oc_vices_lesion"],
        parent: "obligations_contractuelles_titre10"
    },
    oc_vices_volonte: {
        title: "Les vices de la volonté",
        info: "La partie dont la volonté a été faussée par une cause interne (erreur) ou externe (dol, crainte) peut annuler le contrat.",
        children: ["oc_vvol_erreur", "oc_vvol_dol", "oc_vvol_crainte"],
        parent: "oc_vices"
    },
    oc_vvol_erreur: {
        title: "L'erreur essentielle",
        info: "L'erreur est une fausse représentation de la réalité. Pour être essentielle, elle doit être justifiable objectivement et causale subjectivement. L'annulation a un effet <strong>ex tunc</strong> (rétroactif). Guérison possible par ratification (délai péremptoire d'un an).<br><br>Deux types :<br><ul><li><strong>L'erreur de déclaration :</strong> La volonté exprimée ne correspond pas à la volonté réelle (sur la nature, l'identité de la chose/personne, quantité).</li><li><strong>L'erreur sur les motifs (erreur de base) :</strong> La déclaration est conforme à la volonté, mais repose sur une idée fausse. Doit être qualifiée : fait déterminé, <strong>subjectivement essentiel</strong> et <strong>objectivement essentiel</strong>.</li></ul>",
        children: ["cp_tableau_faux"],
        parent: "oc_vices_volonte"
    },
    cp_tableau_faux: {
        title: "Cas pratique : Charlie & le tableau",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie achète de bonne foi à un ami une toile qu'ils pensent tous les deux être un original de Félix Vallotton. Plus tard, Charlie s'aperçoit que c'est un faux.</p>
            <p class="cas-pratique-question">Peut-il annuler la vente ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Il s'agit d'une <strong>erreur essentielle sur les motifs (erreur de base, art. 24 al. 1 ch. 4 CO)</strong>. La jurisprudence fédérale (arrêt Picasso) admet que l'authenticité d'une œuvre est un fait que la loyauté commerciale permet de considérer comme une condition nécessaire au contrat.</p>
                <p>Charlie pourra annuler le contrat de vente.</p>
            </div>
        </div>`,
        children: [], parent: "oc_vvol_erreur"
    },
    oc_vvol_dol: {
        title: "Le dol",
        info: "Consiste à <strong>induire intentionnellement une personne en erreur</strong> pour l'amener à conclure (art. 28 CO). Assimilé à l'escroquerie pénale.<br><br>Suppose deux conditions : <strong>une erreur et une tromperie</strong> (intentionnelle et qui a effectivement induit l'autre en erreur). Entraîne l'annulabilité et droit aux dommages-intérêts.",
        children: [],
        parent: "oc_vices_volonte"
    },
    oc_vvol_crainte: {
        title: "La crainte fondée",
        info: "Crainte inspirée <strong>intentionnellement et de manière illicite</strong> pour forcer à conclure (extorsion/chantage, art. 29 CO).<br><br>Quatre conditions : menace illicite, crainte fondée, menace intentionnelle et menace causale. La victime peut annuler le contrat et demander des dommages-intérêts, même si l'auteur est un tiers et le cocontractant de bonne foi.",
        children: [],
        parent: "oc_vices_volonte"
    },
    oc_vices_lesion: {
        title: "La lésion",
        info: "Préjudice économique issu d'un résultat inéquitable.",
        children: ["oc_vles_notion", "oc_vles_conditions", "oc_vles_effets"],
        parent: "oc_vices"
    },
    oc_vles_notion: {
        title: "Notion",
        info: "C'est le préjudice économique éprouvé à raison de la <strong>disproportion évidente des prestations</strong>, causé par l'exploitation de la gêne, de la légèreté ou de l'inexpérience (art. 21 CO). Contrairement aux vices de la volonté, la lésion s'attache au résultat obtenu.",
        children: [],
        parent: "oc_vices_lesion"
    },
    oc_vles_conditions: {
        title: "Conditions",
        info: "Trois conditions :<br>1. Disproportion évidente entre les prestations.<br>2. La gêne, la légèreté ou l'inexpérience de la victime.<br>3. <strong>L'exploitation consciente</strong> de la situation d'infériorité.",
        children: [],
        parent: "oc_vices_lesion"
    },
    oc_vles_effets: {
        title: "Les effets de la lésion",
        info: "Entraîne l'annulabilité du contrat. Le <strong>délai péremptoire d'un an court dès la conclusion du contrat</strong> (et non de la découverte du vice). Droit de réclamer des dommages-intérêts.",
        children: [],
        parent: "oc_vices_lesion"
    },

    // ==========================================
    // LA REPRÉSENTATION
    // ==========================================
    oc_representation: {
        title: "La représentation",
        info: "Rapport en vertu duquel un acte accompli par un <strong>représentant</strong> produit des effets pour le <strong>représenté</strong> (art. 32 à 40 CO).",
        children: ["oc_rep_notion", "oc_rep_types", "oc_rep_conditions", "oc_rep_sp", "oc_rep_double"],
        parent: "obligations_contractuelles_titre10"
    },
    oc_rep_notion: {
        title: "Notion",
        info: "Trois personnes sont impliquées : le représenté, le représentant (qui agit au nom et pour le compte), et le cocontractant. <br><br>Se distingue de la <strong>représentation indirecte</strong> (représentant agit en son propre nom), des <strong>organes d'une personne morale</strong> (qui forment directement la volonté) et du <strong>messager</strong> (qui n'exprime aucune volonté propre).",
        children: [],
        parent: "oc_representation"
    },
    oc_rep_types: {
        title: "Les types de représentation",
        info: "Quatre distinctions :<br>1. Légale / Volontaire.<br>2. Avec pouvoirs / Sans pouvoirs.<br>3. Civile / Commerciale.<br>4. Active (émettre déclarations) / Passive (recevoir déclarations).",
        children: [],
        parent: "oc_representation"
    },
    oc_rep_conditions: {
        title: "Les conditions",
        info: "Deux conditions d'efficacité.",
        children: ["oc_rcond_nom", "oc_rcond_pouvoir"],
        parent: "oc_representation"
    },
    oc_rcond_nom: {
        title: "L'action au nom du représenté",
        info: "Le représentant doit avoir la volonté d'agir au nom du représenté et la <strong>manifester expressément</strong> au cocontractant. Exceptions (art. 32 al. 2) : rapport implicite ou indifférence du cocontractant.",
        children: [],
        parent: "oc_rep_conditions"
    },
    oc_rcond_pouvoir: {
        title: "Le pouvoir de représentation",
        info: "Peut avoir trois sources : la loi, décision d'autorité, acte juridique unilatéral. À la fin, le représentant doit restituer le titre de procuration.",
        children: [],
        parent: "oc_rep_conditions"
    },
    oc_rep_sp: {
        title: "La représentation sans pouvoirs",
        info: "Agir au nom d'un autre sans avoir les pouvoirs nécessaires.",
        children: ["oc_rsp_notion", "oc_rsp_pseudocont", "oc_rsp_repcont", "oc_rsp_pseudo_pseudo", "cp_catherine_1"],
        parent: "oc_representation"
    },
    cp_catherine_1: {
        title: "Cas pratique : Charlie et la procuration trop large",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie, cloué au lit, donne une procuration très générale à son mécanicien pour aller acheter des pièces détachées. Le mécanicien en profite pour mandater, au nom de Charlie, un architecte afin de rénover le magasin.</p>
            <p class="cas-pratique-question">Quels sont les rapports juridiques entre Charlie, le mécanicien et l'architecte ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Il s'agit d'une représentation sans pouvoir (le mécanicien n'avait pas l'autorité pour la rénovation).</p>
                <p>Toutefois, la procuration écrite très générale créée par Charlie constitue une <strong>apparence efficace</strong>. Si l'architecte est de bonne foi, Charlie est lié par le contrat.</p>
                <p>Charlie pourra ensuite réclamer des dommages-intérêts à son mécanicien (le pseudo-représentant).</p>
            </div>
        </div>`,
        children: [], parent: "oc_rep_sp"
    },
    oc_rsp_notion: {
        title: "Notion",
        info: "Survient quand les pouvoirs n'ont jamais été octroyés, ont été excédés, ou se sont éteints.",
        children: [],
        parent: "oc_rep_sp"
    },
    oc_rsp_pseudocont: {
        title: "Rapports pseudo-représenté / contractant",
        info: "Le pseudo-représenté <strong>n'est pas lié</strong>. Il le devient seulement si :<br><ul><li><strong>Ratification du contrat :</strong> Acte unilatéral avec effet rétroactif (ex tunc). Le tiers peut fixer un délai.</li><li><strong>Apparence efficace :</strong> Le pseudo-représenté a lui-même créé l'apparence des pouvoirs, le tiers de bonne foi est protégé.</li></ul>",
        children: [],
        parent: "oc_rep_sp"
    },
    oc_rsp_repcont: {
        title: "Rapports pseudo-représentant / cocontractant",
        info: "Le pseudo-représentant n'est pas obligé par le contrat. S'il n'y a pas ratification, il <strong>doit des dommages-intérêts</strong> au cocontractant, sauf si ce dernier connaissait l'absence de pouvoirs.",
        children: [],
        parent: "oc_rep_sp"
    },
    oc_rsp_pseudo_pseudo: {
        title: "Rapports pseudo-représenté / pseudo-représentant",
        info: "Le comportement peut causer un préjudice au représenté, réparable via le contrat de base (mandat), responsabilité délictuelle, ou gestion d'affaires.",
        children: [],
        parent: "oc_rep_sp"
    },
    oc_rep_double: {
        title: "Contrat avec soi-même et double représentation",
        info: "Une personne agit seule comme représentant et en son propre nom (avec soi-même) ou comme représentant des deux parties (double). <br><br>Il y a un <strong>danger évident de conflit d'intérêts</strong>. La jurisprudence pose le <strong>principe de la nullité du contrat</strong>, à moins que la nature de l'affaire exclue tout préjudice ou que le représenté ait autorisé/ratifié l'acte.",
        children: ["cp_catherine_2"],
        parent: "oc_representation"
    },
    cp_catherine_2: {
        title: "Cas pratique : Catherine, l'avocate-administratrice",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Catherine est avocate et administratrice unique d'une start-up. Face à un litige, la société décide de mandater Catherine comme avocate.</p>
            <p class="cas-pratique-question">Est-ce valable ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Il s'agit d'un <strong>contrat avec soi-même</strong> (Catherine agit pour la société et pour elle-même). Il y a un fort risque de conflit d'intérêts qui peut entraîner la nullité.</p>
                <p>De plus, l'art. 718b CO exige impérativement que ce contrat revête la <strong>forme écrite</strong> s'il dépasse CHF 1'000.-.</p>
            </div>
        </div>`,
        children: [], parent: "oc_rep_double"
    },

    // ==========================================
    // LA STIPULATION POUR AUTRUI
    // ==========================================
    oc_stipulation: {
        title: "La stipulation pour autrui",
        info: "Convention où le <strong>promettant</strong> promet au <strong>stipulant</strong> de faire sa prestation à un tiers, le <strong>bénéficiaire</strong> (art. 112 CO).",
        children: ["oc_stip_notion", "oc_stip_effets", "cp_stipulation_tv"],
        parent: "obligations_contractuelles_titre10"
    },
    cp_stipulation_tv: {
        title: "Cas pratique I : Charlie et la télévision",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie achète une télévision dans un magasin et demande au vendeur de la livrer directement chez ses parents en cadeau.</p>
            <p class="cas-pratique-question">Comment qualifier juridiquement cet acte ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Il s'agit d'une <strong>stipulation pour autrui imparfaite</strong>.</p>
                <ul>
                    <li>Le promettant (débiteur de la livraison) = Le magasin.</li>
                    <li>Le stipulant (créancier qui peut exiger l'exécution) = Charlie.</li>
                    <li>Les bénéficiaires (ceux qui reçoivent) = Les parents. Les parents ne peuvent pas forcer le magasin en justice à livrer (imparfaite).</li>
                </ul>
            </div>
        </div>`,
        children: [], parent: "oc_stipulation"
    },
    oc_stip_notion: {
        title: "Notion",
        info: "<ul><li><strong>Imparfaite :</strong> Seul le stipulant est créancier. Le bénéficiaire reçoit valablement mais ne peut exiger l'exécution.</li><li><strong>Parfaite :</strong> Le bénéficiaire acquiert un droit de créance. Le promettant a deux créanciers. Le bénéficiaire <strong>se substitue entièrement</strong> au stipulant s'il déclare vouloir utiliser son droit.</li></ul>",
        children: [],
        parent: "oc_stipulation"
    },
    oc_stip_effets: {
        title: "Les effets",
        info: "Les trois relations qui en découlent.",
        children: ["oc_seff_couv", "oc_seff_prest", "oc_seff_val"],
        parent: "oc_stipulation"
    },
    oc_seff_couv: {
        title: "Rapport de couverture ou de provision",
        info: "Entre le promettant et le stipulant. Le stipulant est créancier du promettant (seul dans l'imparfaite, solidaire dans la parfaite).",
        children: [],
        parent: "oc_stip_effets"
    },
    oc_seff_prest: {
        title: "Rapport de prestation",
        info: "Entre le promettant et le bénéficiaire. Le bénéficiaire acquiert une créance propre uniquement dans la stipulation parfaite.",
        children: [],
        parent: "oc_stip_effets"
    },
    oc_seff_val: {
        title: "Rapport de valeur",
        info: "Entre le stipulant et le bénéficiaire. Justifie l'enrichissement du bénéficiaire.",
        children: [],
        parent: "oc_stip_effets"
    },

    // ==========================================
    // LES SÛRETÉS PERSONNELLES
    // ==========================================
    oc_suretes: {
        title: "Les sûretés personnelles",
        info: "Contrats garantissant l'exécution d'une obligation.",
        children: ["oc_sur_cautionnement", "oc_sur_portefort"],
        parent: "obligations_contractuelles_titre10"
    },
    oc_sur_cautionnement: {
        title: "Le cautionnement",
        info: "Garantie de la dette d'autrui (art. 492 CO).",
        children: ["oc_caut_notion", "oc_caut_effets", "cp_caution_manon"],
        parent: "oc_suretes"
    },
    cp_caution_manon: {
        title: "Cas pratique II : Charlie et Manon (La caution)",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie contracte un prêt de CHF 30'000.- auprès d'une banque pour ouvrir son magasin. La banque exige une caution. Manon, célibataire, accepte.</p>
            <p class="cas-pratique-question">Quelles sont les conditions et les risques pour Manon ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p><strong>Conditions :</strong> La dette principale existe (30'000.-). La loi exige la <strong>forme authentique</strong> car le montant dépasse CHF 2'000.- (art. 493 CO). La signature de Manon chez un notaire est requise (seule, puisqu'elle n'est pas mariée).</p>
                <p><strong>Risques :</strong> Si Charlie ne paie pas, Manon devra payer CHF 30'000.- (+ intérêts/frais) à la banque. Elle obtiendra ensuite, par subrogation légale, un droit de recours contre Charlie.</p>
            </div>
        </div>`,
        children: [], parent: "oc_sur_cautionnement"
    },
    oc_caut_notion: {
        title: "Notion",
        info: "La caution s'engage envers le créancier à répondre accessoirement de la dette. <br><br><strong>Spécificité : son caractère accessoire.</strong> Il dépend de l'existence de la dette principale. La nullité de l'engagement principal entraîne la nullité du cautionnement.",
        children: [],
        parent: "oc_sur_cautionnement"
    },
    oc_caut_effets: {
        title: "Les effets",
        info: "La caution donne une garantie de solvabilité.<br><br><strong>Subrogation :</strong> La caution qui a désintéressé le créancier est <strong>subrogée aux droits de celui-ci</strong> (le paiement transfère la créance à la caution), lui offrant un droit de recours contre le débiteur.",
        children: [],
        parent: "oc_sur_cautionnement"
    },
    oc_sur_portefort: {
        title: "Le contrat de porte-fort",
        info: "Garantie indépendante (art. 111 CO).",
        children: ["oc_pf_notion", "oc_pf_effets", "cp_portefort_cata"],
        parent: "oc_suretes"
    },
    cp_portefort_cata: {
        title: "Cas pratique III : Charlie et Cata SA",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie vend ses actions de Cata SA à son ami Romain en lui garantissant qu'elles lui verseront un dividende annuel de plus de 8%. Cependant, Cata SA ne verse que 2% de dividendes.</p>
            <p class="cas-pratique-question">Comment qualifier l'engagement de Charlie ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Il s'agit d'un <strong>contrat de porte-fort</strong> (Charlie promet le fait d'un tiers, la société Cata SA).</p>
                <p>Puisque le tiers (Cata SA) ne réalise pas l'événement promis, Charlie devra payer des dommages-intérêts à Romain (art. 111 CO).</p>
            </div>
        </div>`,
        children: [], parent: "oc_sur_portefort"
    },
    oc_pf_notion: {
        title: "Notion",
        info: "Engagement <strong>indépendant</strong> par lequel on promet de réparer le dommage si un débiteur/tiers ne s'exécute pas. Implique la garantie du fait d'autrui. <br><br>Contrairement au cautionnement, il n'est <strong>soumis à aucune règle de forme</strong>. En cas de doute d'interprétation, le juge penchera pour le cautionnement (plus protecteur).",
        children: [],
        parent: "oc_sur_portefort"
    },
    oc_pf_effets: {
        title: "Les effets",
        info: "N'a aucun effet pour le tiers. Oblige le promettant (le porte-fort) à verser des dommages-intérêts à son cocontractant si le tiers ne s'exécute pas.",
        children: [],
        parent: "oc_sur_portefort"
    },

    // ==========================================
    // LA SUBROGATION
    // ==========================================
    oc_subrogation: {
        title: "La subrogation",
        info: "La subrogation est le <strong>transfert légal de la créance</strong> (art. 110 CO). Le paiement n'éteint pas la créance, mais la transfère du créancier à un tiers. Exemples : la caution qui paie, ou le tiers qui paie le créancier pour libérer un gage.",
        children: ["cp_subrogation_guillaume"],
        parent: "obligations_contractuelles_titre10"
    },
    cp_subrogation_guillaume: {
        title: "Cas pratique IV : Le frère de Charlie",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Suite à l'affaire précédente, Charlie doit de l'argent à Romain. Guillaume, le frère de Charlie, s'acquitte de la dette de Charlie envers Romain. Charlie avait averti Romain de cet arrangement.</p>
            <p class="cas-pratique-question">Que se passe-t-il juridiquement ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>C'est un cas de <strong>subrogation légale</strong> (art. 110 ch. 2 CO). Un tiers (Guillaume) paie le créancier (Romain), et le créancier a été prévenu par le débiteur (Charlie).</p>
                <p>La dette n'est pas éteinte : Guillaume devient le nouveau créancier de Charlie à la place de Romain.</p>
            </div>
        </div>`,
        children: [], parent: "oc_subrogation"
    },

    // --- 11. LA RESPONSABILITÉ CIVILE ---
    rc_titre11: {
        title: "11. La responsabilité civile",
        info: "Ce domaine traite de l'obligation de réparer un préjudice causé à autrui. Il régit les relations entre sujets de droit privé.",
        children: [
            "rc_notion", "rc_prejudice", "rc_causalite", "rc_illiceite", 
            "rc_faute", "rc_objective", "rc_reparation", "rc_pluralite", "rc_prescription"
        ],
        parent: "root"
    },

    // ==========================================
    // NOTION
    // ==========================================
    rc_notion: {
        title: "Notion",
        info: "La responsabilité désigne l'obligation faite à un sujet de droit de réparer le préjudice causé à autrui. <br><br>Au sens étroit, elle désigne l'obligation de réparer un dommage résultant d'un acte illicite. Elle a alors pour synonyme les expressions de <strong>responsabilité délictuelle</strong> et de <strong>responsabilité extracontractuelle</strong>.<br><br>Toute responsabilité civile suppose <strong>trois conditions générales</strong> (préjudice, rapport de causalité, illicéité) ainsi qu'un titre de responsabilité (la faute ou la loi).",
        children: [],
        parent: "rc_titre11"
    },

    // ==========================================
    // LE PRÉJUDICE
    // ==========================================
    rc_prejudice: {
        title: "Le préjudice",
        info: "Toute prétention délictuelle suppose une <strong>péjoration de la situation de la victime</strong>. Le préjudice est une catégorie générique regroupant le dommage et le tort moral.",
        children: ["rc_prej_dommage", "rc_prej_tortmoral"],
        parent: "rc_titre11"
    },
    rc_prej_dommage: {
        title: "Le dommage",
        info: "C'est la diminution de valeur du patrimoine d'une personne qui se produit sans la volonté de celle-ci.",
        children: ["rc_dom_notion", "rc_dom_types"],
        parent: "rc_prejudice"
    },
    rc_dom_notion: {
        title: "Notion",
        info: "Le dommage se calcule en faisant la différence entre l'état actuel du patrimoine et son état hypothétique sans l'acte dommageable. C'est la <strong>théorie de la différence</strong>.<br><br>Le dommage est une <strong>notion exclusivement patrimoniale</strong> (la valeur affective n'entre pas en considération).",
        children: [],
        parent: "rc_prej_dommage"
    },
    rc_dom_types: {
        title: "Les types de dommage",
        info: "Distinctions des différentes formes que peut prendre le dommage patrimonial.",
        children: ["rc_typ_pertegain", "rc_typ_corpmat"],
        parent: "rc_prej_dommage"
    },
    rc_typ_pertegain: {
        title: "La perte effective et le gain manqué",
        info: "<ul><li><strong>La perte effective :</strong> diminution effective de la fortune nette (l'actif diminue ou le passif augmente).</li><li><strong>Le gain manqué :</strong> perte d'un gain futur que la victime aurait réalisé sans l'acte dommageable.</li></ul>",
        children: [],
        parent: "rc_dom_types"
    },
    rc_typ_corpmat: {
        title: "Le dommage corporel, matériel et les autres dommages",
        info: "<ul><li><strong>Dommage corporel :</strong> résulte d'une atteinte à l'intégrité physique de la victime (ex: frais médicaux).</li><li><strong>Dommage matériel :</strong> découle d'une atteinte à un objet. Il y a dommage matériel lorsqu'une personne subit la destruction d'une chose <strong>dont elle est propriétaire</strong>.</li><li><strong>Autres dommages (purement patrimonial ou économique) :</strong> tous les dommages qui ne sont ni corporels ni matériels (ex: perte d'exploitation).</li></ul>",
        children: [],
        parent: "rc_dom_types"
    },
    rc_prej_tortmoral: {
        title: "Le tort moral",
        info: "Le tort moral désigne les <strong>souffrances physiques ou psychiques</strong> que ressent la victime à la suite d'une atteinte à sa personnalité (ex: chagrin consécutif au décès d'un proche, douleur d'une blessure).",
        children: [],
        parent: "rc_prejudice"
    },

    // ==========================================
    // LE RAPPORT DE CAUSALITÉ
    // ==========================================
    rc_causalite: {
        title: "Le rapport de causalité",
        info: "L'exigence d'un lien de cause à effet entre le comportement de l'auteur et le préjudice.",
        children: ["rc_caus_nat", "rc_caus_adeq", "rc_caus_int"],
        parent: "rc_titre11"
    },
    rc_caus_nat: {
        title: "La causalité naturelle",
        info: "D'un point de vue logique, constitue la cause d'un événement <strong>tout fait sans lequel l'événement ne se serait pas produit</strong>.",
        children: [],
        parent: "rc_causalite"
    },
    rc_caus_adeq: {
        title: "La causalité adéquate",
        info: "Pour limiter l'extension illimitée de la responsabilité, la jurisprudence utilise la causalité adéquate. Un fait est une cause adéquate si, <strong>d'après le cours ordinaire des choses et l'expérience de la vie</strong>, ce fait était propre à entraîner un résultat du genre de celui qui s'est produit.",
        children: [],
        parent: "rc_causalite"
    },
    rc_caus_int: {
        title: "L'interruption du lien de causalité",
        info: "Une cause adéquate cesse de l'être lorsqu'une autre cause apparaît à tel point prépondérante qu'elle rejette la première à l'arrière-plan. On distingue trois faits interruptifs :<br><ul><li><strong>La force majeure.</strong></li><li><strong>La faute grave de la victime.</strong></li><li><strong>La faute grave d'un tiers.</strong></li></ul>",
        children: [],
        parent: "rc_causalite"
    },

    // ==========================================
    // L'ILLICÉITÉ
    // ==========================================
    rc_illiceite: {
        title: "L'illicéité",
        info: "La transgression d'une norme protégeant autrui.",
        children: ["rc_ill_notion", "rc_ill_res", "rc_ill_comp", "rc_ill_faits"],
        parent: "rc_titre11"
    },
    rc_ill_notion: {
        title: "Notion",
        info: "L'illicéité consiste en la transgression d'une norme de comportement appliquant défense de nuire à autrui. Elle prend deux formes : par le résultat ou par le comportement.",
        children: [],
        parent: "rc_illiceite"
    },
    rc_ill_res: {
        title: "L'illicéité par le résultat",
        info: "Lorsque le préjudice résulte de l'atteinte à un <strong>droit subjectif absolu</strong> (intégrité corporelle, propriété, droits réels), il est <strong>d'emblée illicite</strong> sans qu'il soit nécessaire d'examiner le comportement de l'auteur.",
        children: [],
        parent: "rc_illiceite"
    },
    rc_ill_comp: {
        title: "L'illicéité par le comportement",
        info: "Lorsque le dommage est purement patrimonial (pas d'atteinte à un droit absolu), l'illicéité n'est donnée que si l'auteur a transgressé une <strong>norme protectrice</strong> dont la finalité est de protéger la victime contre ce genre de préjudice.",
        children: [],
        parent: "rc_illiceite"
    },
    rc_ill_faits: {
        title: "Les faits justificatifs",
        info: "Un comportement a priori illicite peut devenir licite grâce à cinq faits justificatifs :<br><ul><li><strong>Le consentement de la victime.</strong></li><li><strong>La légitime défense.</strong></li><li><strong>L'état de nécessité.</strong></li><li><strong>La défense personnelle.</strong></li><li><strong>Le devoir de fonction</strong> (exercice autorisé de la puissance publique).</li></ul>",
        children: [],
        parent: "rc_illiceite"
    },

    // ==========================================
    // LA FAUTE (SUBJECTIVE)
    // ==========================================
    rc_faute: {
        title: "La faute, condition de la responsabilité subjective",
        info: "Élément central de la responsabilité basée sur le comportement (Art. 41 CO).",
        children: ["rc_fau_notion", "rc_fau_gravite", "cp_ski"],
        parent: "rc_titre11"
    },
    cp_ski: {
        title: "Cas pratique : Charlie & le ski",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie veut battre un record de vitesse à ski sur une piste qui croise un chemin de randonnée. Il sait qu'il risque de créer un accident mais se dit qu'avec un peu de chance il n'y aura personne. Il percute un randonneur (lésions graves, iPhone et lunettes cassés).</p>
            <p class="cas-pratique-question">Charlie est-il responsable civilement ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Vérifions les 4 conditions de la responsabilité subjective (art. 41 CO) :</p>
                <ol>
                    <li><strong>Préjudice :</strong> Lésions corporelles, frais médicaux, gain manqué, dommage matériel (lunettes, iPhone).</li>
                    <li><strong>Causalité :</strong> Naturelle et adéquate.</li>
                    <li><strong>Illicéité :</strong> Atteinte à un droit absolu (intégrité corporelle + propriété). Illicéité par résultat.</li>
                    <li><strong>Faute :</strong> Il connaissait les risques et les a acceptés (Dol éventuel).</li>
                </ol>
                <p>Charlie devra réparer l'intégralité du dommage subi par le randonneur.</p>
            </div>
        </div>`,
        children: [], parent: "rc_faute"
    },
    rc_fau_notion: {
        title: "Notion",
        info: "La faute se définit comme un <strong>manquement de la volonté aux devoirs imposés par l'ordre juridique</strong>.<br><br>Elle comprend :<br><ul><li>Un <strong>élément objectif</strong> : déviation du comportement exigé par rapport à une personne consciencieuse et raisonnable.</li><li>Un <strong>élément subjectif</strong> : intention ou négligence.</li></ul><br>En pratique, la jurisprudence recourt à une <strong>notion objectivée de la faute</strong> et écarte les motifs d'excuses purement personnels (ex: stress, fatigue).",
        children: [],
        parent: "rc_faute"
    },
    rc_fau_gravite: {
        title: "Gravité",
        info: "On distingue trois degrés : <strong>faute grave (ou lourde), faute légère, et faute moyenne</strong>. Une faute légère peut entraîner une réduction de la réparation, tandis qu'une faute grave de la victime/tiers peut interrompre le lien de causalité.",
        children: [],
        parent: "rc_faute"
    },

    // ==========================================
    // LA RESPONSABILITÉ OBJECTIVE
    // ==========================================
    rc_objective: {
        title: "La responsabilité objective",
        info: "Responsabilités indépendantes de toute faute personnelle de l'auteur.",
        children: ["rc_obj_notion", "rc_obj_employeur", "rc_obj_ouvrage", "rc_obj_produits"],
        parent: "rc_titre11"
    },
    rc_obj_notion: {
        title: "Notion",
        info: "Certaines dispositions instituent des responsabilités sans faute. On distingue :<br><ul><li><strong>Les responsabilités objectives simples :</strong> reposent sur la violation présumée d'un <strong>devoir de diligence</strong> (ex: l'employeur).</li><li><strong>Les responsabilités objectives aggravées :</strong> reposent sur le <strong>risque inhérent</strong> à certaines activités (ne supposent même pas la violation d'un devoir de diligence).</li></ul>",
        children: [],
        parent: "rc_objective"
    },
    rc_obj_employeur: {
        title: "La responsabilité de l'employeur",
        info: "L'employeur répond du fait de ses auxiliaires (dès qu'il y a <strong>lien de subordination</strong>) s'ils commettent un acte illicite dans l'exercice de leur travail (art. 55 CO).<br><br>Il dispose de <strong>deux preuves libératoires</strong> :<br><ul><li>Faire la triple preuve de la diligence dans le choix, l'instruction et la surveillance de l'auxiliaire.</li><li>Établir l'absence de lien de causalité.</li></ul>",
        children: [],
        parent: "rc_objective"
    },
    rc_obj_ouvrage: {
        title: "La responsabilité du propriétaire d'ouvrage",
        info: "Le propriétaire d'un ouvrage (objet créé/disposé par la main de l'homme et rattaché au sol) est responsable si le préjudice est la conséquence d'un <strong>défaut de l'ouvrage</strong> (art. 58 CO).",
        children: ["cp_plongeoir"],
        parent: "rc_objective"
    },
    cp_plongeoir: {
        title: "Cas pratique : Charlie et le plongeoir",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>La commune de Cully construit un plongeoir dans le lac, mais l'eau n'y fait même pas un mètre de profondeur. Charlie saute, se brise la jambe (frais médicaux + perte de gain pendant 6 semaines).</p>
            <p class="cas-pratique-question">La commune est-elle responsable ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Il s'agit de la <strong>responsabilité objective du propriétaire d'ouvrage (art. 58 CO)</strong>.</p>
                <p>La commune est propriétaire. Le plongeoir est un ouvrage. Il y a un <strong>défaut de l'ouvrage</strong> car le plongeoir n'offre pas la sécurité suffisante pour l'usage auquel il est destiné. Le comportement de Charlie (sauter d'un plongeoir) correspond à un usage normal, sa faute concomitante n'interrompt pas le lien de causalité.</p>
                <p>La commune devra indemniser Charlie.</p>
            </div>
        </div>`,
        children: [], parent: "rc_obj_ouvrage"
    },
    rc_obj_produits: {
        title: "La responsabilité du fait des produits",
        info: "Le producteur répond, indépendamment de toute faute, des dommages corporels causés par un <strong>produit défectueux</strong> (qui n'offre pas la sécurité à laquelle on est en droit de s'attendre). Régi par la LRFP.<br><br>Pour les dommages matériels, la victime doit supporter une <strong>franchise de 900 CHF</strong> pour éviter la multiplication des petits litiges.",
        children: [],
        parent: "rc_objective"
    },

    // ==========================================
    // LA RÉPARATION DU PRÉJUDICE
    // ==========================================
    rc_reparation: {
        title: "La réparation du préjudice",
        info: "Manières dont le dommage est compensé en justice.",
        children: ["rc_rep_modes", "rc_rep_etendue", "rc_rep_cas"],
        parent: "rc_titre11"
    },
    rc_rep_modes: {
        title: "Les modes de réparation",
        info: "Le juge a le choix entre la <strong>réparation en nature</strong> ou la <strong>réparation en argent</strong>. En pratique, les tribunaux optent dans la grande majorité des cas pour la réparation en argent.",
        children: [],
        parent: "rc_reparation"
    },
    rc_rep_etendue: {
        title: "L'étendue de la réparation",
        info: "En principe, l'auteur doit réparer l'intégralité du préjudice. Toutefois, le juge peut réduire l'indemnité selon certains <strong>facteurs de réduction</strong> :<br><ul><li>La légèreté de la faute de l'auteur.</li><li>La faute concomitante de la victime.</li><li>Le consentement de la victime.</li><li>La gêne du responsable.</li></ul>",
        children: [],
        parent: "rc_reparation"
    },
    rc_rep_cas: {
        title: "Cas particuliers de réparation",
        info: "La loi encadre spécifiquement les indemnités en cas d'atteinte aux personnes.",
        children: ["rc_cas_lesions", "rc_cas_deces"],
        parent: "rc_reparation"
    },
    rc_cas_lesions: {
        title: "L'indemnité en cas de lésions corporelles",
        info: "Comprend quatre postes : le remboursement des frais de traitement, l'indemnité pour incapacité de travail, l'indemnité pour atteinte à l'avenir économique, et l'indemnité pour tort moral (art. 46 et 47 CO).",
        children: [],
        parent: "rc_rep_cas"
    },
    rc_cas_deces: {
        title: "L'indemnité en cas de décès de la victime",
        info: "Accorde à de tierces personnes le droit de réclamer la réparation du préjudice qu'elles subissent par ricochet. Comprend : dommage antérieur au décès, frais d'inhumation, <strong>perte de soutien</strong>, et tort moral (art. 45 et 47 CO).",
        children: [],
        parent: "rc_rep_cas"
    },

    // ==========================================
    // LA PLURALITÉ DE RESPONSABLES
    // ==========================================
    rc_pluralite: {
        title: "La pluralité de responsables",
        info: "Lorsque plusieurs personnes sont tenues de réparer un même préjudice, la loi prévoit deux cas de figure (art. 50 et 51 CO) :<br><ul><li><strong>La solidarité parfaite :</strong> Les auteurs ont causé le préjudice par une faute commune (activité/entreprise commune).</li><li><strong>La solidarité imparfaite :</strong> Les auteurs répondent du préjudice à des titres différents (ex: un contractuel, un délictuel).</li></ul><br>Dans les deux cas, la victime peut agir <strong>pour le tout contre chacun</strong>. En interne, l'ordre de recours est : d'abord le responsable délictuel, puis le contractuel, enfin l'objectif.",
        children: [],
        parent: "rc_titre11"
    },

    // ==========================================
    // LA PRESCRIPTION
    // ==========================================
    rc_prescription: {
        title: "La prescription",
        info: "L'action délictuelle (art. 60 CO) est soumise à des délais spécifiques :<br><ul><li>Un <strong>délai relatif de trois ans</strong> (dès la connaissance du préjudice et de l'auteur).</li><li>Un <strong>délai absolu de dix ans</strong> (dès la survenance du fait dommageable).</li><li>Un <strong>délai absolu de vingt ans en cas de mort d'homme ou de lésions corporelles</strong>.</li></ul>",
        children: ["cp_manifestation"],
        parent: "rc_titre11"
    },
    cp_manifestation: {
        title: "Cas pratique : Charlie et la manifestation (Prescription)",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Lors d'une manifestation, 5 casseurs détruisent la vitrine du magasin de Charlie (dizaines de milliers de CHF de dommage). Charlie découvre l'identité des coupables 13 ans plus tard.</p>
            <p class="cas-pratique-question">La créance est-elle prescrite ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Les casseurs forment une <strong>solidarité parfaite</strong> (art. 50 CO). Le délai de prescription pour une RC est en principe de 10 ans absolu.</p>
                <p>Cependant, l'art. 60 al. 2 CO prévoit que si l'acte est punissable pénalement d'un délai plus long, c'est le délai pénal qui s'applique. L'infraction de dommages à la propriété (considérable) au sens pénal se prescrit par <strong>15 ans</strong> (art. 97 CP).</p>
                <p><strong>Conclusion :</strong> L'action de Charlie n'est pas prescrite (13 ans < 15 ans).</p>
            </div>
        </div>`,
        children: [], parent: "rc_prescription"
    },

    // --- 12. LA RESPONSABILITÉ CONTRACTUELLE ---
    rc_contractuelle_titre12: {
        title: "12. La responsabilité contractuelle",
        info: "Ce titre traite de l'obligation de réparer le préjudice causé par la violation d'un contrat (Art. 97 à 101 CO).",
        children: ["rcc_notion", "rcc_sources", "rcc_conditions", "rcc_reparation", "rcc_prescription"],
        parent: "root"
    },

    // ==========================================
    // NOTION
    // ==========================================
    rcc_notion: {
        title: "Notion",
        info: "Alors que la responsabilité civile vise la violation d'un devoir général, la responsabilité contractuelle s'applique lors de la <strong>violation d'une obligation contractuelle</strong>.<br><br>Elle se définit comme l'ensemble des règles qui impose au débiteur l'obligation de réparer le préjudice causé au créancier par la violation de ses obligations contractuelles.<br><br>La différence majeure avec la responsabilité civile extracontractuelle est que <strong>les parties sont liées par une relation juridique préalable</strong>.",
        children: [],
        parent: "rc_contractuelle_titre12"
    },

    // ==========================================
    // LES SOURCES
    // ==========================================
    rcc_sources: {
        title: "Les sources de la responsabilité contractuelle",
        info: "La responsabilité contractuelle est régie par deux types de sources :<br><ul><li><strong>Les règles contractuelles :</strong> celles qui proviennent du contrat liant le débiteur et le créancier. C'est la première source applicable.</li><li><strong>Les règles légales :</strong> composées de règles générales (art. 97 à 101 CO) ou spéciales (partie spéciale du CO ou lois spéciales).</li></ul>",
        children: [],
        parent: "rc_contractuelle_titre12"
    },

    // ==========================================
    // LES CONDITIONS
    // ==========================================
    rcc_conditions: {
        title: "Les conditions de la responsabilité contractuelle",
        info: "Selon l'art. 97 al. 1 CO, la responsabilité contractuelle exige la réalisation de <strong>quatre conditions cumulatives</strong> :<br><ol><li><strong>Un préjudice :</strong> Conséquences de l'inexécution sur le patrimoine du créancier (s'interprète comme en RC extracontractuelle).</li><li><strong>La violation du contrat :</strong> Condition remplie lorsque le débiteur a violé ses obligations contractuelles.</li><li><strong>Un rapport de causalité :</strong> Lien de causalité naturelle et adéquate entre la violation de l'obligation et le préjudice.</li><li><strong>Une faute :</strong> Manquement de la volonté aux devoirs imposés par le contrat. <strong>Particularité cruciale : la faute est présumée</strong> (art. 97 al. 1 CO). C'est au débiteur de prouver qu'il n'a commis aucune faute pour se libérer.</li></ol>",
        children: ["cp_marcel_banque"],
        parent: "rc_contractuelle_titre12"
    },
    cp_marcel_banque: {
        title: "Cas pratique : Charlie & Prizebank SA",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie demande à Prizebank SA de vendre ses actions (qui valent 10'000.-). La banque oublie. Le lendemain, l'action s'effondre. Le surlendemain, la banque n'ayant toujours pas vendu, les actions ne valent plus que 100.-.</p>
            <p class="cas-pratique-question">Sur quelle base Charlie peut-il récupérer ses 9'900.- ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Charlie agira sur la base de la <strong>Responsabilité contractuelle (art. 97 CO)</strong> car ils sont liés par un contrat de gestion de fortune.</p>
                <ol>
                    <li><strong>Préjudice :</strong> Gain manqué de CHF 9'900.-</li>
                    <li><strong>Violation :</strong> La banque n'a pas exécuté l'ordre (inexécution).</li>
                    <li><strong>Causalité :</strong> L'oubli de la banque a directement causé la perte.</li>
                    <li><strong>Faute :</strong> Présumée. Prizebank a manqué de diligence (négligence).</li>
                </ol>
                <p>Charlie a 10 ans pour agir en justice (art. 127 CO).</p>
            </div>
        </div>`,
        children: [], parent: "rcc_conditions"
    },

    // ==========================================
    // LA RÉPARATION DU PRÉJUDICE
    // ==========================================
    rcc_reparation: {
        title: "La réparation du préjudice",
        info: "Lorsque les conditions sont remplies, le débiteur est tenu de réparer le préjudice causé.<br><br>La réparation consistera soit en une <strong>somme d'argent</strong> (capital ou rente), soit en une <strong>réparation en nature</strong> (art. 43 CO). L'indemnité due se substitue à la prestation initiale et est fixée conformément aux principes qui régissent la responsabilité civile (renvoi de l'art. 99 al. 3 CO).",
        children: [],
        parent: "rc_contractuelle_titre12"
    },

    // ==========================================
    // LA PRESCRIPTION
    // ==========================================
    rcc_prescription: {
        title: "La prescription",
        info: "Le délai général qui s'applique à l'action en responsabilité contractuelle est un <strong>délai ordinaire de dix ans</strong> (art. 127 CO).",
        children: ["rcc_presc_exceptions"],
        parent: "rc_contractuelle_titre12"
    },
    rcc_presc_exceptions: {
        title: "Les exceptions",
        info: "Il existe deux exceptions principales :<br><ul><li><strong>Art. 128 CO :</strong> Un délai spécial plus court de <strong>cinq ans</strong> s'applique pour les redevances périodiques, les prestations d'entretien et pour certaines prestations courantes (ex: factures des artisans, honoraires des médecins).</li><li><strong>Art. 128a CO :</strong> En cas de <strong>mort d'homme ou de lésions corporelles</strong> résultant d'une faute contractuelle, l'action se prescrit par un <strong>délai relatif de trois ans</strong> (dès connaissance du dommage) et, dans tous les cas, par un <strong>délai absolu de vingt ans</strong> (dès que le fait dommageable s'est produit ou a cessé).</li></ul>",
        children: [],
        parent: "rcc_prescription"
    },

    // --- 13. L'ENRICHISSEMENT ILLÉGITIME ---
    enrichissement_illegitime_titre13: {
        title: "13. L'enrichissement illégitime",
        info: "Ce titre traite de l'obligation légale de restituer un avantage patrimonial acquis sans cause juridique valable aux dépens d'autrui (art. 62 à 67 CO).",
        children: ["ei_notion", "ei_conditions", "ei_repetition_indu", "ei_restitution", "ei_prescription"],
        parent: "root"
    },

    // ==========================================
    // NOTION
    // ==========================================
    ei_notion: {
        title: "Notion",
        info: "<strong>Si une personne bénéficie sans cause valable d’une augmentation de son patrimoine aux dépens d’autrui, celui-ci se voit reconnaître par l’ordre juridique une créance en restitution contre l’enrichi</strong> (art. 62 al. 1 CO).<br><br>Comme cette créance a son fondement directement dans la loi, l’enrichissement illégitime est une <strong>source légale d’obligation</strong>.",
        children: [],
        parent: "enrichissement_illegitime_titre13"
    },

    // ==========================================
    // LES CONDITIONS
    // ==========================================
    ei_conditions: {
        title: "Les conditions de l'enrichissement illégitime",
        info: "Pour invoquer l'enrichissement illégitime (art. 62 CO), quatre conditions cumulatives doivent être réunies.",
        children: ["ei_cond_enrichissement", "ei_cond_appauvrissement", "ei_cond_causalite", "ei_cond_absence_cause"],
        parent: "enrichissement_illegitime_titre13"
    },
    ei_cond_enrichissement: {
        title: "L'enrichissement du défendeur",
        info: "<strong>L’enrichissement consiste dans la différence entre l’état actuel du patrimoine de l’enrichi et son montant, par hypothèse inférieur, sans le déplacement de valeur.</strong><br><br>Il peut prendre plusieurs formes :<br><ul><li><strong>L’augmentation du patrimoine</strong></li><li><strong>La non-diminution du patrimoine</strong></li></ul>",
        children: [],
        parent: "ei_conditions"
    },
    ei_cond_appauvrissement: {
        title: "L'appauvrissement du demandeur",
        info: "<strong>L’appauvrissement consiste dans la différence entre l’état actuel du patrimoine de l’appauvri et son montant, par hypothèse supérieur, sans le déplacement de valeur.</strong><br><br>Il peut consister en une diminution du patrimoine (perte effective) ou une non-augmentation (gain manqué). <br><br><strong>L’appauvrissement peut résulter d'une attribution de l’appauvri à l’enrichi.</strong> C'est le cas le plus fréquent. Il peut également découler d'un acte de l'enrichi, d'un tiers, ou d'un fait de la nature.",
        children: [],
        parent: "ei_conditions"
    },
    ei_cond_causalite: {
        title: "Le rapport de causalité (ou connexité)",
        info: "Le rapport de causalité entre la diminution du patrimoine d'une personne et l'enrichissement de l'autre est <strong>donné dès lors que l’enrichissement de l’un n’a pas pu se produire sans l’appauvrissement de l’autre.</strong>",
        children: [],
        parent: "ei_conditions"
    },
    ei_cond_absence_cause: {
        title: "L'absence de cause valable",
        info: "<strong>L’absence de cause valable se caractérise comme le manque d’une base obligatoire au transfert patrimonial.</strong><br><br>L'art. 62 al. 2 CO envisage trois hypothèses :<br><ul><li><strong>L’enrichissement sans cause valable</strong></li><li><strong>L’enrichissement en vertu d’une cause qui ne s’est pas réalisée</strong></li><li><strong>L'enrichissement en vertu d'une cause qui a cessé d'exister</strong></li></ul>",
        children: [],
        parent: "ei_conditions"
    },

    // ==========================================
    // LA RÉPÉTITION DE L'INDU
    // ==========================================
    ei_repetition_indu: {
        title: "La répétition de l'indu",
        info: "<strong>La répétition de l'indu désigne l'hypothèse particulière où l'appauvri a lui-même effectué la prestation</strong> (art. 63 et 66 CO).<br><br>Cette action présente certaines particularités par rapport à l'action générale :<br><ul><li><strong>L'erreur sur l'existence de la dette lors de l'exécution</strong></li><li><strong>L'exécution ne doit pas concerner une obligation imparfaite</strong></li><li><strong>Les prestations ne doivent pas poursuivre un but illicite ou immoral</strong></li></ul>",
        children: ["cp_dettes_yvan"],
        parent: "enrichissement_illegitime_titre13"
    },
    cp_dettes_yvan: {
        title: "Cas pratique : Charlie et ses dettes envers Yvan",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Par mégarde, Charlie verse une grosse somme d'argent sur le compte de son ami Yvan, alors qu'il n'avait plus aucune dette envers lui.</p>
            <p class="cas-pratique-question">Peut-il récupérer la somme ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>C'est un cas de <strong>Répétition de l'indu (art. 63 CO)</strong>, forme spécifique de l'enrichissement illégitime.</p>
                <p>Conditions : Appauvrissement de Charlie, Enrichissement d'Yvan, Causalité entre les deux, et Absence de cause valable (il ne lui devait plus rien).</p>
                <p>Conditions supplémentaires (art. 63) : Charlie était dans l'erreur, ce n'est pas un don immoral. Charlie peut exiger restitution.</p>
            </div>
        </div>`,
        children: [], parent: "ei_repetition_indu"
    },

    // ==========================================
    // LA RESTITUTION
    // ==========================================
    ei_restitution: {
        title: "La restitution",
        info: "Règles encadrant la manière et l'étendue selon lesquelles l'enrichi doit rendre l'avantage acquis.",
        children: ["ei_rest_mode", "ei_rest_etendue", "ei_rest_impenses"],
        parent: "enrichissement_illegitime_titre13"
    },
    ei_rest_mode: {
        title: "Le mode de restitution",
        info: "<strong>La restitution a lieu soit en nature soit, si la restitution en nature est impossible, en argent.</strong> En pratique, la restitution en argent est la plus fréquente. <br><br>Cependant, lorsque l'enrichi détient encore la chose qui lui a été transférée, l'appauvri dispose généralement de <strong>l'action réelle en revendication</strong>.",
        children: [],
        parent: "ei_restitution"
    },
    ei_rest_etendue: {
        title: "L'étendue de la restitution",
        info: "Afin d'effacer les conséquences d'un déplacement patrimonial injustifié, <strong>la restitution est limitée par un double plafond soit l'appauvrissement du demandeur et l'enrichissement du défendeur</strong> (art. 64 CO). <br><br>Pour le reste, l'étendue de la restitution dépend de la bonne foi ou de la mauvaise foi de l'enrichi.",
        children: [],
        parent: "ei_restitution"
    },
    ei_rest_impenses: {
        title: "Le remboursement des impenses",
        info: "<strong>Le remboursement des impenses faites par l’enrichi signifie le remboursement que doit effectuer l’appauvri à l’enrichi pour les dépenses faites par l’enrichi en faveur d’une chose appartenant à l’appauvri</strong> (ex: frais d'entretien) (art. 65 CO).<br><br>L'art. 65 CO distingue trois catégories :<br><ul><li><strong>Les impenses nécessaires. Elles donnent toujours droit au remboursement intégral</strong> (art. 65 al. 1 CO).</li><li><strong>Les impenses utiles. L'étendue du remboursement dépend de la bonne ou de la mauvaise foi de l'enrichi</strong> (art. 65 al. 1 CO).</li><li><strong>Les impenses voluptuaires ou somptuaires. Elles ne donnent droit à aucun remboursement</strong> (art. 65 al. 2 CO).</li></ul>",
        children: [],
        parent: "ei_restitution"
    },

    // ==========================================
    // LA PRESCRIPTION
    // ==========================================
    ei_prescription: {
        title: "La prescription",
        info: "L'action en enrichissement illégitime (art. 67 CO) est subordonnée à un double délai de prescription :<br><ul><li><strong>Le délai relatif de 3 ans</strong>, qui court dès que l'appauvri connaît suffisamment la personne de l'enrichi, le montant de son enrichissement et l'absence de cause valable au transfert.</li><li><strong>Le délai absolu de 10 ans</strong>, qui commence à courir dès l'exigibilité de la créance.</li></ul>",
        children: [],
        parent: "enrichissement_illegitime_titre13"
    },

    // --- 14. LES MODALITÉS DES OBLIGATIONS ---
    modalites_obligations_titre14: {
        title: "14. Les modalités des obligations",
        info: "Ce titre aborde les situations où une obligation s'écarte du modèle de base, que ce soit par le nombre de sujets impliqués (pluralité de débiteurs ou créanciers) ou par des conditions et clauses spécifiques.",
        children: [
            "mo_pluralite_debiteurs", 
            "mo_pluralite_creanciers", 
            "mo_obligations_conditionnelles", 
            "mo_clause_arrhes_dedit"
        ],
        parent: "root"
    },

    // ==========================================
    // LA PLURALITÉ DE DÉBITEURS
    // ==========================================
    mo_pluralite_debiteurs: {
        title: "La pluralité de débiteurs",
        info: "Situation où une seule et même obligation compte plusieurs débiteurs (dette plurale).",
        children: ["mo_pd_notion", "mo_pd_solidarite_passive"],
        parent: "modalites_obligations_titre14"
    },
    mo_pd_notion: {
        title: "Notion",
        info: "La pluralité de débiteurs peut revêtir plusieurs formes :<br><ul><li><strong>Les débiteurs partiels :</strong> Chaque débiteur doit une partie de la prestation totale.</li><li><strong>Les débiteurs collectifs :</strong> Plusieurs personnes sont débitrices, mais elles doivent toutes exécuter ensemble.</li><li><strong>Les débiteurs pour le tout :</strong> Le créancier peut rechercher chacun des débiteurs pour l'ensemble de la dette.</li></ul>",
        children: [],
        parent: "mo_pluralite_debiteurs"
    },
    mo_pd_solidarite_passive: {
        title: "La solidarité passive",
        info: "Mécanisme très protecteur pour le créancier face à de multiples débiteurs.",
        children: ["mo_pd_sp_notion", "mo_pd_sp_effets", "mo_pd_sp_recours", "cp_cormoran_solidarite"],
        parent: "mo_pluralite_debiteurs"
    },
    cp_cormoran_solidarite: {
        title: "Cas pratique : Administrateurs de Cormoran SA",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie, Fanny et Florian, les trois administrateurs de Cormoran SA, sont condamnés à payer CHF 500'000.- pour négligence grave dans leur gestion.</p>
            <p class="cas-pratique-question">Comment fonctionne le paiement de cette somme ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>C'est un cas de <strong>Solidarité passive</strong>. Ils répondent d'un dommage causé par un comportement commun.</p>
                <p>Le créancier peut réclamer la totalité à un seul administrateur. Le paiement total par l'un libérera les deux autres. Ensuite, un recours interne entre les co-débiteurs aura lieu.</p>
            </div>
        </div>`,
        children: [], parent: "mo_pd_solidarite_passive"
    },
    mo_pd_sp_notion: {
        title: "Notion",
        info: "Il y a solidarité passive lorsque <strong>le créancier peut exiger de chaque débiteur la prestation totale et que la prestation faite par l'un des débiteurs libère les autres</strong>.<br><br>Il est très important de noter que <strong>la solidarité passive ne se présume pas</strong>. Elle découle soit d'un contrat (accord entre le créancier et les débiteurs), soit de la loi.",
        children: [],
        parent: "mo_pd_solidarite_passive"
    },
    mo_pd_sp_effets: {
        title: "Les effets",
        info: "La solidarité n'aggrave pas la situation des débiteurs (chacun est comme s'il était l'unique débiteur). Un co-débiteur ne peut aggraver la situation des autres.<br><br>En matière de libération :<br><ul><li><strong>En cas de libération par paiement ou par compensation, la dette est éteinte et tous les débiteurs solidaires sont libérés.</strong></li><li>En cas de libération d'un co-débiteur pour une autre cause (ex: remise de dette), sa libération ne profite aux autres que dans la mesure indiquée par les circonstances.</li></ul>",
        children: [],
        parent: "mo_pd_solidarite_passive"
    },
    mo_pd_sp_recours: {
        title: "Le recours entre co-débiteurs",
        info: "L'institution de la solidarité règle les rapports externes (créancier/débiteurs). La répartition du poids de la dette entre les co-obligés (rapports internes) est réglée par le <strong>recours</strong>.<br><br>L'existence et l'étendue du recours sont régies dans l'ordre par le contrat liant les co-obligés, les dispositions légales, puis les règles subsidiaires. <strong>Le recours de celui qui a indemnisé le créancier se prescrit par trois ans</strong> (art. 139 CO).",
        children: [],
        parent: "mo_pd_solidarite_passive"
    },

    // ==========================================
    // LA PLURALITÉ DE CRÉANCIERS
    // ==========================================
    mo_pluralite_creanciers: {
        title: "La pluralité de créanciers",
        info: "Situation où une même obligation bénéficie à plusieurs créanciers.",
        children: ["mo_pc_notion", "mo_pc_solidarite_active"],
        parent: "modalites_obligations_titre14"
    },
    mo_pc_notion: {
        title: "Notion",
        info: "De même qu'il y a plusieurs formes de débiteurs, on distingue :<br><ul><li><strong>Les créanciers partiels :</strong> Chacun ne peut exiger qu'une partie de la prestation.</li><li><strong>Les créanciers collectifs :</strong> Ils doivent faire valoir la créance ensemble.</li><li><strong>Les créanciers pour le tout :</strong> Chacun est autorisé à faire valoir la créance de manière intégrale et indépendante.</li></ul>",
        children: [],
        parent: "mo_pluralite_creanciers"
    },
    mo_pc_solidarite_active: {
        title: "La solidarité active",
        info: "Règles applicables lorsque n'importe quel créancier peut réclamer la totalité.",
        children: ["mo_pc_sa_notion", "mo_pc_sa_effets", "cp_beaubeton"],
        parent: "mo_pluralite_creanciers"
    },
    cp_beaubeton: {
        title: "Cas pratique : Charlie et Beaubéton SA (Compte joint)",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie, Pierre et Paul ouvrent un compte-joint à la banque. Pierre et Paul sont inatteignables. Charlie veut retirer les fonds seul.</p>
            <p class="cas-pratique-question">Peut-il le faire ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Le compte-joint crée une <strong>Solidarité active</strong> (art. 150 CO).</p>
                <p>Chaque titulaire est créancier solidaire de la banque. La banque peut valablement se libérer en payant tout à un seul. Charlie peut donc retirer l'intégralité seul.</p>
            </div>
        </div>`,
        children: [], parent: "mo_pc_solidarite_active"
    },
    mo_pc_sa_notion: {
        title: "Notion",
        info: "Dans la solidarité active, <strong>chaque créancier peut exiger la totalité de la prestation et le débiteur se libère à l'égard de tous en faisant sa prestation à l'un d'eux</strong>.",
        children: [],
        parent: "mo_pc_solidarite_active"
    },
    mo_pc_sa_effets: {
        title: "Effets",
        info: "Le débiteur peut choisir le créancier auquel il fera la prestation, à moins qu'il n'ait été poursuivi par l'un d'eux. Le créancier ayant reçu la prestation peut être tenu d'en reverser une partie aux autres selon leurs arrangements internes.",
        children: [],
        parent: "mo_pc_solidarite_active"
    },

    // ==========================================
    // LES OBLIGATIONS CONDITIONNELLES
    // ==========================================
    mo_obligations_conditionnelles: {
        title: "Les obligations conditionnelles",
        info: "Régies par les art. 151 à 157 CO, elles lient l'effet juridique à un événement futur.",
        children: [
            "mo_oc_notion", 
            "mo_oc_categories", 
            "mo_oc_admissibilite", 
            "mo_oc_nonavenement", 
            "mo_oc_effets_suspensive", 
            "mo_oc_effets_resolutoire",
            "cp_cormoran_conditions"
        ],
        parent: "modalites_obligations_titre14"
    },
    cp_cormoran_conditions: {
        title: "Cas pratique : Les conditions de Cormoran SA",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Contrat avec deux clauses : 1. "Si les dividendes passent sous 0.5%, Charlie vend 20 actions à CHF 100.-" 2. "Charlie cède l'usufruit jusqu'à ce que la société soit cotée en bourse".</p>
            <p class="cas-pratique-question">Identifiez les types de conditions.</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Clause 1 : <strong>Condition suspensive.</strong> Les effets du contrat sont suspendus et naîtront uniquement si les dividendes chutent.</p>
                <p>Clause 2 : <strong>Condition résolutoire.</strong> Le contrat produit ses effets immédiatement, mais s'éteindra automatiquement le jour où la société entrera en bourse.</p>
            </div>
        </div>`,
        children: [], parent: "mo_obligations_conditionnelles"
    },
    mo_oc_notion: {
        title: "Notion",
        info: "La condition est un <strong>événement futur incertain dont dépend un effet juridique</strong>. Elle se distingue du terme par le caractère incertain de sa survenance.",
        children: [],
        parent: "mo_obligations_conditionnelles"
    },
    mo_oc_categories: {
        title: "Les catégories",
        info: "Il existe deux sortes principales de conditions : <strong>la condition suspensive et la condition résolutoire</strong>. Selon l'objet, on distingue aussi la condition casuelle, potestative ou mixte.",
        children: [],
        parent: "mo_obligations_conditionnelles"
    },
    mo_oc_admissibilite: {
        title: "Admissibilité des conditions",
        info: "En principe, tous les contrats peuvent être conditionnels. Toutefois, la plupart des actes du droit de la famille ne le sont pas. <strong>La condition ne saurait être illicite ou contraire aux mœurs</strong>, sinon l'obligation qui en dépend est nulle.",
        children: [],
        parent: "mo_obligations_conditionnelles"
    },
    mo_oc_nonavenement: {
        title: "Non-avènement et empêchement frauduleux",
        info: "La condition n'est pas réalisée si l'événement ne s'est pas produit dans le temps convenu. Par une fiction, la loi assimile à l'avènement de la condition le cas où <strong>une partie empêche l'accomplissement contrairement aux règles de la bonne foi</strong>.",
        children: [],
        parent: "mo_obligations_conditionnelles"
    },
    mo_oc_effets_suspensive: {
        title: "Effets de la condition suspensive",
        info: "Avant l'avènement de la condition, le rapport est en suspens. Le contrat est obligatoire mais les parties n'ont qu'une <strong>expectative</strong> pour leurs droits. <strong>L'obligation n'est pas exigible</strong>.",
        children: [],
        parent: "mo_obligations_conditionnelles"
    },
    mo_oc_effets_resolutoire: {
        title: "Effets de la condition résolutoire",
        info: "Avant l'avènement de la condition, <strong>l'acte produit tous ses effets comme s'il était pur et simple</strong>. La prestation est exigible, le débiteur doit s'exécuter et la prescription court. L'avènement de la condition anéantit les effets du contrat.",
        children: [],
        parent: "mo_obligations_conditionnelles"
    },

    // ==========================================
    // CLAUSE PÉNALE, ARRHES ET DÉDIT
    // ==========================================
    mo_clause_arrhes_dedit: {
        title: "La clause pénale, les arrhes et le dédit",
        info: "Clauses accessoires visant à sécuriser l'exécution ou aménager une sortie du contrat.",
        children: ["mo_cad_clause_penale", "mo_cad_arrhes", "mo_cad_dedit", "cp_new_tech"],
        parent: "modalites_obligations_titre14"
    },
    cp_new_tech: {
        title: "Cas pratique : Contrat New Tech Sàrl",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Achat d'un brevet à 10 M CHF. Clause 1 : "200'000 CHF remis à la signature, à déduire du prix". Clause 2 : "New Tech peut se départir en payant 250'000 CHF".</p>
            <p class="cas-pratique-question">Qualifier ces deux clauses.</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Clause 1 : C'est un <strong>acompte</strong> et non un dédit réel.</p>
                <p>Clause 2 : C'est une <strong>clause pénale résolutoire (dédit consensuel)</strong>. L'argent n'a pas été versé d'avance. Seul le débiteur désigné par la clause (New Tech) a la liberté d'annuler en payant cette somme.</p>
            </div>
        </div>`,
        children: [], parent: "mo_clause_arrhes_dedit"
    },
    mo_cad_clause_penale: {
        title: "La clause pénale",
        info: "Convention accessoire par laquelle le débiteur promet <strong>le versement d'une somme d'argent pour l'éventualité d'une inexécution totale ou partielle, ou d'une exécution tardive ou défectueuse</strong> (art. 160 à 163 CO).<br><br>Elle peut être alternative ou cumulative. Elle est indépendante du dommage effectif subi par le créancier. Toutefois, <strong>le juge doit réduire la peine conventionnelle excessive</strong>.",
        children: [],
        parent: "mo_clause_arrhes_dedit"
    },
    mo_cad_arrhes: {
        title: "Les arrhes",
        info: "Les arrhes consistent en une somme d'argent qu'une partie remet à l'autre lors de la conclusion d'un contrat, <strong>à titre purement probatoire ou à titre d'acompte</strong> (art. 158 CO).",
        children: [],
        parent: "mo_clause_arrhes_dedit"
    },
    mo_cad_dedit: {
        title: "Le dédit",
        info: "C'est le droit pour chacune des parties de <strong>se départir du contrat en payant une certaine somme</strong>. <br><br>S'il y a eu versement (dédit réel) : <strong>celui qui a versé la somme peut se départir du contrat en l'abandonnant, celui qui l'a reçue en la restituant au double</strong>. <br><br>Il y a une présomption contre le dédit : la remise d'argent lors de la conclusion fait présumer l'existence d'arrhes, et non d'un dédit.",
        children: [],
        parent: "mo_clause_arrhes_dedit"
    },

    // --- 15. LA TRANSMISSION DES OBLIGATIONS ---
    transmission_obligations_titre15: {
        title: "15. La transmission des obligations",
        info: "Tant le côté actif de l’obligation, la créance, que le côté passif de l’obligation, la dette, peuvent être transférés à un tiers. Dans le premier cas, on parle de cession de créance, dans le second de reprise de dette.",
        children: ["to_cession_creance", "to_reprise_dette"],
        parent: "root"
    },

    // ==========================================
    // LA CESSION DE CRÉANCE
    // ==========================================
    to_cession_creance: {
        title: "La cession de créance",
        info: "Règles applicables au transfert du côté actif de l'obligation (art. 164 à 174 CO).",
        children: ["to_cc_notion", "to_cc_forme", "to_cc_effets", "cp_cession_creance"],
        parent: "transmission_obligations_titre15"
    },
    cp_cession_creance: {
        title: "Cas pratique : Charlie et la société de recouvrement",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Cormoran SA a des impayés. Charlie signe un contrat écrit cédant ses créances à une entreprise de recouvrement pour 70% de leur valeur, payés cash.</p>
            <p class="cas-pratique-question">Quid du consentement des clients débiteurs ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>C'est une <strong>Cession de créance</strong> (art. 164 CO). La forme écrite est respectée.</p>
                <p>Les parties <strong>n'ont pas besoin d'avertir ou d'obtenir l'accord des débiteurs</strong> cédés. Toutefois, s'ils ne sont pas prévenus et qu'ils paient Cormoran SA, ils seront valablement libérés.</p>
            </div>
        </div>`,
        children: [], parent: "to_cession_creance"
    },
    to_cc_notion: {
        title: "Notion",
        info: "La cession de créance est le <strong>contrat passé entre le créancier (le cédant) et un tiers (le cessionnaire) en vertu duquel le cessionnaire devient le titulaire de la créance à la place du cédant</strong>.<br><br>Il est fondamental de noter que la cession de créance <strong>ne nécessite aucune intervention du débiteur</strong> (art. 164 al. 1 CO). <br><br>Pour pouvoir être cédée, la créance doit être <strong>cessible</strong> (l'incessibilité peut résulter de la loi, de la convention ou de la nature de l'affaire) et suffisamment déterminée.",
        children: [],
        parent: "to_cession_creance"
    },
    to_cc_forme: {
        title: "Forme",
        info: "La loi exige la <strong>forme écrite</strong> (art. 165 al. 1 CO). L’acte écrit doit couvrir tous les points essentiels du contrat, à savoir la créance cédée, la personne du cessionnaire et la volonté de céder la créance.",
        children: [],
        parent: "to_cession_creance"
    },
    to_cc_effets: {
        title: "Effets",
        info: "La cession déploie des effets à deux niveaux distincts.",
        children: ["to_cce_cedant_cessionnaire", "to_cce_cessionnaire_debiteur"],
        parent: "to_cession_creance"
    },
    to_cce_cedant_cessionnaire: {
        title: "Entre le cédant et le cessionnaire",
        info: "Du fait de la cession, <strong>le cessionnaire devient créancier en lieu et place du cédant</strong>. Le cédant doit lui remettre le titre de créance et les moyens de preuve existants. <br><br>Si la cession a lieu à titre onéreux, le cédant <strong>répond de l’existence de la créance lors de la cession</strong>. Si elle a lieu à titre gratuit, il n'assume aucune garantie.",
        children: [],
        parent: "to_cc_effets"
    },
    to_cce_cessionnaire_debiteur: {
        title: "Entre le cessionnaire et le débiteur",
        info: "Le débiteur <strong>n’a pas besoin de donner son accord à la cession ni même d’être avisé</strong>. Sa situation ne doit pas être aggravée.<br><br>Deux règles essentielles s'appliquent :<br><ul><li>Avant que la cession ne lui ait été notifiée, le débiteur qui paie <strong>de bonne foi entre les mains du cédant est libéré</strong> (art. 167 CO). Après notification, il doit payer au cessionnaire.</li><li><strong>Le débiteur cédé conserve tous les moyens qu’il avait contre le cédant</strong> au moment où il a pris connaissance de la cession (ex: nullité, prescription).</li></ul>",
        children: [],
        parent: "to_cc_effets"
    },

    // ==========================================
    // LA REPRISE DE DETTE
    // ==========================================
    to_reprise_dette: {
        title: "La reprise de dette",
        info: "Règles applicables au transfert du côté passif de l'obligation (art. 175 à 183 CO).",
        children: [
            "to_rd_notion", 
            "to_rd_forme", 
            "to_rd_effets", 
            "to_rd_patrimoine", 
            "to_rd_cumulative",
            "cp_reprise_1",
            "cp_reprise_2"
        ],
        parent: "transmission_obligations_titre15"
    },
    cp_reprise_1: {
        title: "Cas pratique 1 : Charlie et son amie Manon",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie doit 700'000 CHF à Architectes SA. Sans le sou, il demande de l'aide à son amie Manon pour régler cette dette en cadeau.</p>
            <p class="cas-pratique-question">Comment organiser cela juridiquement ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Il faut une <strong>Reprise de dette interne</strong> entre Charlie et Manon (qui devra revêtir la forme écrite d'une promesse de donner car c'est un cadeau).</p>
                <p>Ensuite, Manon doit conclure un contrat de <strong>Reprise de dette externe</strong> avec Architectes SA (le créancier). Ce n'est qu'avec leur accord que Charlie sera définitivement libéré et que Manon deviendra la seule débitrice.</p>
            </div>
        </div>`,
        children: [], parent: "to_reprise_dette"
    },
    cp_reprise_2: {
        title: "Cas pratique 2 : Jacques rachète Cormoran SA",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Jacques accepte de reprendre à son nom certaines dettes de Cormoran SA envers ses fournisseurs et s'engage à les avertir. Il réfléchit aussi à reprendre tout le patrimoine de la société.</p>
            <p class="cas-pratique-question">Validité de ces opérations ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p><strong>Reprise de dettes individuelles :</strong> L'avertissement ne suffit pas. Il faut un accord (exprès ou tacite) de chaque créancier pour que la reprise devienne externe.</p>
                <p><strong>Reprise du patrimoine entier :</strong> La loi impose de respecter les règles de la Loi sur la Fusion (LFus, art. 181 CO). La reprise entraînera le transfert des dettes sans besoin de l'accord de chaque créancier, mais Cormoran restera solidairement responsable pendant un certain temps.</p>
            </div>
        </div>`,
        children: [], parent: "to_reprise_dette"
    },
    to_rd_notion: {
        title: "Notion",
        info: "Lorsque la loi parle de la reprise de dette, elle envisage en réalité deux choses distinctes :<br><ol><li><strong>L’engagement pris par un tiers envers le débiteur de le libérer de sa dette (reprise de dette interne)</strong> (art. 175 CO).</li><li><strong>Le contrat entre le tiers et le créancier par lequel celui-ci accepte que le tiers devienne débiteur de l’obligation (reprise de dette externe)</strong> (art. 176 à 183 CO).</li></ol>",
        children: [],
        parent: "to_reprise_dette"
    },
    to_rd_forme: {
        title: "Forme",
        info: "Le contrat de reprise de dette interne obéit en principe aux règles ordinaires sur la formation du contrat. <br><br>Le contrat de reprise de dette externe n'est également <strong>soumis au respect d’aucune forme particulière</strong>, bien qu'il obéisse à quelques dispositions spéciales du CO.",
        children: [],
        parent: "to_reprise_dette"
    },
    to_rd_effets: {
        title: "Effets",
        info: "Dans la reprise de dette externe, <strong>le reprenant devient débiteur en lieu et place de l’ancien débiteur</strong>. Le créancier a donc un nouveau débiteur.<br><br>Il n'y a pas novation. De plus :<br><ul><li><strong>Les droits accessoires subsistent et accompagnent la dette</strong>.</li><li>Le reprenant est placé dans la <strong>même situation juridique</strong> que l’ancien débiteur.</li></ul>",
        children: [],
        parent: "to_reprise_dette"
    },
    to_rd_patrimoine: {
        title: "La reprise d'un patrimoine ou d'une entreprise",
        info: "Lorsqu'une entreprise ou un patrimoine sont repris dans leur ensemble, il est impossible de demander le consentement de chaque créancier (régi par la LFus et l'art. 181 CO).<br><br>Le système cherche à concilier les intérêts en instituant deux caractéristiques :<br><ul><li><strong>Le transfert de la dette sans reprise de dette externe.</strong></li><li><strong>La responsabilité solidaire de l’ancien débiteur.</strong></li></ul>",
        children: [],
        parent: "to_reprise_dette"
    },
    to_rd_cumulative: {
        title: "La reprise cumulative de dette",
        info: "La reprise cumulative de dette est le <strong>contrat entre le créancier et un tiers en vertu duquel celui-ci devient solidairement responsable de la dette</strong>.<br><br>À la différence de la reprise de dette normale (privative), elle n'entraîne pas un changement de débiteur mais <strong>l'adjonction d’un second débiteur</strong> au débiteur originel. Elle est admissible en vertu de l'autonomie contractuelle et est un contrat informel.",
        children: [],
        parent: "to_reprise_dette"
    },

    // --- 16. L'EXÉCUTION DES OBLIGATIONS ---
    exec_obligations_titre16: {
        title: "16. L'exécution des obligations",
        info: "Ce titre traite de l'accomplissement de la prestation due par le débiteur au créancier, de ses modalités pratiques, et des conséquences en cas de retard de l'une ou l'autre des parties.",
        children: [
            "eo_lieu", 
            "eo_moment", 
            "eo_argent", 
            "eo_interets", 
            "eo_preuve", 
            "eo_demeure_creancier", 
            "eo_demeure_debiteur"
        ],
        parent: "root"
    },

    // ==========================================
    // LE LIEU DE L'EXÉCUTION
    // ==========================================
    eo_lieu: {
        title: "Le lieu de l'exécution",
        info: "Détermine l'endroit physique où la prestation doit être effectuée.",
        children: ["eo_lieu_notion", "eo_lieu_determination", "cp_lieu_farma"],
        parent: "exec_obligations_titre16"
    },
    cp_lieu_farma: {
        title: "Cas pratique : Cormoran SA & les produits alimentaires",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Farma SA (siège à Lucerne) vend des graines à Cormoran SA (siège à Moudon). Le stock est physiquement à Moudon lors de l'accord. Le contrat ne mentionne pas de lieu de livraison. Farma informe que les graines sont à dispo à Lucerne.</p>
            <p class="cas-pratique-question">Où doit se faire la livraison ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Pour une dette de chose déterminée (corps certain), la loi supplétive indique que le lieu est celui où se trouve la chose lors de la conclusion du contrat (art. 74 CO).</p>
                <p><strong>Conclusion :</strong> La livraison doit se faire à Moudon.</p>
            </div>
        </div>`,
        children: [], parent: "eo_lieu"
    },
    eo_lieu_notion: {
        title: "Notion",
        info: "Le lieu de l'exécution est l'endroit où une prestation doit être accomplie (art. 74 CO), c'est-à-dire <strong>le lieu où le débiteur doit faire le dernier acte en son pouvoir pour s'exécuter</strong>. Il détermine certaines modalités (comme la monnaie de paiement) mais ne détermine pas le juge compétent.<br><br>Il est nécessaire de distinguer :<br><ul><li><strong>Les dettes « portables » :</strong> ce sont les dettes d'une somme d'argent.</li><li><strong>Les dettes « quérables » :</strong> ce sont les dettes d'une chose déterminée.</li></ul>",
        children: [],
        parent: "eo_lieu"
    },
    eo_lieu_determination: {
        title: "Détermination",
        info: "La détermination relève <strong>primairement de la volonté des parties</strong>. À défaut, la loi (art. 74 CO) fixe des règles supplétives selon qu'il s'agisse de dettes d'argent, de choses déterminées, d'autres dettes, ou de dettes comportant expédition.",
        children: [],
        parent: "eo_lieu"
    },

    // ==========================================
    // LE MOMENT DE L'EXÉCUTION
    // ==========================================
    eo_moment: {
        title: "Le moment de l'exécution",
        info: "Règles régissant le moment où la prestation doit être fournie (art. 75 à 83 CO).",
        children: ["eo_mom_exigibilite", "eo_mom_immediate_diff", "eo_mom_interdependance", "eo_mom_composes"],
        parent: "exec_obligations_titre16"
    },
    eo_mom_exigibilite: {
        title: "L'exigibilité et l'exécutabilité",
        info: "<ul><li><strong>L'exigibilité :</strong> désigne le moment à partir duquel le créancier <strong>peut exiger la prestation</strong> (au besoin par une poursuite ou action). Elle permet de mettre en demeure, constitue le point de départ de la prescription et est une condition de la compensation.</li><li><strong>L'exécutabilité :</strong> désigne le moment à partir duquel le débiteur <strong>peut effectuer sa prestation avec effet libératoire</strong>. Dès ce moment, le créancier qui refuse de recevoir est en demeure.</li></ul><br>L'exigibilité et l'exécutabilité ne coïncident pas forcément (une dette peut être exécutable avant d'être exigible).",
        children: [],
        parent: "eo_moment"
    },
    eo_mom_immediate_diff: {
        title: "L'exécution immédiate et l'exécution différée",
        info: "<strong>L'exécution immédiate est le principe</strong> (art. 75 CO).<br><br>L'exécution différée (ou à terme) est l'exception. Le terme est un <strong>événement futur dont la survenance est certaine</strong> (qui se distingue de la <em>condition</em> dont la survenance est incertaine).",
        children: [],
        parent: "eo_moment"
    },
    eo_mom_interdependance: {
        title: "L'interdépendance des prestations",
        info: "Dans les contrats bilatéraux (art. 82 et 83 CO).",
        children: ["eo_mom_int_inexecution", "eo_mom_int_insolvabilite"],
        parent: "eo_moment"
    },
    eo_mom_int_inexecution: {
        title: "Exception d'inexécution",
        info: "Dans les contrats synallagmatiques, <strong>les prestations doivent en principe être exécutées trait pour trait</strong>. Si le créancier n'a pas exécuté ou offert d'exécuter sa propre prestation, le débiteur peut <strong>refuser d'exécuter la sienne</strong> (art. 82 CO).",
        children: [],
        parent: "eo_mom_interdependance"
    },
    eo_mom_int_insolvabilite: {
        title: "Exception d'insolvabilité",
        info: "Si une partie est au bénéfice d'un terme mais que <strong>l'autre est devenue insolvable</strong>, la partie dont les droits sont mis en péril peut <strong>refuser d'exécuter sa propre prestation jusqu'à ce que l'exécution de l'obligation de l'autre ait été garantie</strong> (art. 83 CO).",
        children: [],
        parent: "eo_mom_interdependance"
    },
    eo_mom_composes: {
        title: "Le problème des contrats composés",
        info: "Un contrat composé est un <strong>groupe de contrats formellement distincts mais entre lesquels il existe un lien économique ou psychologique</strong>. Si les contrats sont dans un rapport d'échange, on applique par analogie les règles de l'interdépendance, de la demeure et de l'impossibilité.",
        children: [],
        parent: "eo_moment"
    },

    // ==========================================
    // LA DETTE D'ARGENT
    // ==========================================
    eo_argent: {
        title: "La dette d'argent",
        info: "Règles spécifiques au paiement de sommes d'argent.",
        children: ["eo_arg_monnaie", "eo_arg_imputation", "eo_arg_modes", "cp_argent_farma"],
        parent: "exec_obligations_titre16"
    },
    cp_argent_farma: {
        title: "Cas pratique : Cormoran SA, Euros et Intérêts",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Farma SA exige un taux d'intérêt de 12% pour retard de paiement, sans que cela n'ait été conclu. Charlie panique et veut aller payer immédiatement en Euros au siège de Farma.</p>
            <p class="cas-pratique-question">Charlie doit-il payer 12% et peut-il payer en euros ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p><strong>Monnaie :</strong> Une dette en Suisse sans précision doit être payée en <strong>monnaie du pays (CHF)</strong> (art. 84 CO). Farma peut refuser les Euros.</p>
                <p><strong>Intérêts :</strong> En l'absence d'accord contractuel, le taux légal pour les intérêts moratoires s'applique. Il est de <strong>5%</strong> (art. 104 CO). Farma ne peut pas imposer 12% unilatéralement.</p>
            </div>
        </div>`,
        children: [], parent: "eo_argent"
    },
    eo_arg_monnaie: {
        title: "La monnaie de paiement",
        info: "La devise utilisée pour se libérer de la dette.",
        children: ["eo_arg_mon_chf", "eo_arg_mon_etrangere"],
        parent: "eo_argent"
    },
    eo_arg_mon_chf: {
        title: "La dette libellée en francs suisses",
        info: "Le paiement d'une dette ayant pour objet une somme d'argent se fait en <strong>monnaie du pays</strong> (art. 84 al. 1 CO).",
        children: [],
        parent: "eo_arg_monnaie"
    },
    eo_arg_mon_etrangere: {
        title: "La dette libellée en monnaie étrangère",
        info: "Le débiteur peut <strong>se libérer en francs suisses selon le cours du jour de l'échéance</strong>, sauf si le contraire a été stipulé (ex: clause valeur effective, art. 84 al. 2 CO).",
        children: [],
        parent: "eo_arg_monnaie"
    },
    eo_arg_imputation: {
        title: "L'imputation des paiements",
        info: "Le débiteur <strong>ne peut imputer le paiement sur le capital s'il est en retard pour les intérêts et les frais</strong> (art. 85 al. 1 CO). En cas de pluralité de dettes, c'est le débiteur qui peut préciser la dette qu'il entend acquitter.",
        children: [],
        parent: "eo_argent"
    },
    eo_arg_modes: {
        title: "Les modes de paiement particuliers",
        info: "Le paiement se fait en monnaie du pays (en espèces). Comme les dettes d'argent sont portables, <strong>le débiteur n'est libéré que lorsque le montant est à disposition du créancier sur son compte</strong>.",
        children: [],
        parent: "eo_argent"
    },

    // ==========================================
    // LA DETTE D'INTÉRÊTS
    // ==========================================
    eo_interets: {
        title: "La dette d'intérêts",
        info: "Règles relatives aux intérêts (art. 73 CO).",
        children: ["eo_int_notion", "eo_int_taux", "eo_int_nature"],
        parent: "exec_obligations_titre16"
    },
    eo_int_notion: {
        title: "Notion",
        info: "L'intérêt est la <strong>compensation pécuniaire due au créancier pour le capital dont celui-ci est privé</strong>. Elle peut avoir pour source le contrat ou la loi.",
        children: [],
        parent: "eo_interets"
    },
    eo_int_taux: {
        title: "Le taux d'intérêt",
        info: "Fixé en première ligne par la convention (intérêts conventionnels) avec deux limites : la <strong>prohibition de l'anatocisme</strong> (intérêts composés) et les dispositions de droit public.<br><br>À défaut d'accord, le taux est fixé par l'usage ou la loi. <strong>À titre subsidiaire, la loi fixe le taux d'intérêt à 5 %</strong> (art. 73 al. 1 CO).",
        children: [],
        parent: "eo_interets"
    },
    eo_int_nature: {
        title: "Nature de la dette d'intérêts",
        info: "C'est <strong>l'accessoire de la dette principale</strong>. Si une quittance est donnée pour le capital, les intérêts sont présumés payés. Toutefois, la créance d'intérêt est <strong>cessible indépendamment</strong> de la créance principale.",
        children: [],
        parent: "eo_interets"
    },

    // ==========================================
    // LA PREUVE DE L'EXÉCUTION
    // ==========================================
    eo_preuve: {
        title: "La preuve de l'exécution",
        info: "Moyens légaux pour le débiteur de prouver qu'il s'est acquitté de sa dette.",
        children: ["eo_pre_quittance", "eo_pre_titre"],
        parent: "exec_obligations_titre16"
    },
    eo_pre_quittance: {
        title: "La remise d'une quittance",
        info: "Une quittance est une <strong>déclaration écrite du créancier par laquelle il reconnaît avoir reçu une prestation déterminée</strong>. Le débiteur peut exiger sa remise même pour une prestation partielle.",
        children: [],
        parent: "eo_preuve"
    },
    eo_pre_titre: {
        title: "La restitution ou mention sur le titre",
        info: "S'il s'est <strong>entièrement acquitté</strong>, le débiteur peut exiger la restitution du titre, ce qui fait <strong>présumer l'extinction de la dette</strong>. En cas de paiement partiel, il peut uniquement exiger la <strong>mention du paiement sur le titre</strong>.",
        children: [],
        parent: "eo_preuve"
    },

    // ==========================================
    // LA DEMEURE DU CRÉANCIER
    // ==========================================
    eo_demeure_creancier: {
        title: "La demeure du créancier",
        info: "Situation où le créancier refuse de recevoir la prestation (art. 91 à 96 CO).",
        children: ["eo_dc_notion", "eo_dc_conditions", "eo_dc_effets", "cp_pommes_sequoia"],
        parent: "exec_obligations_titre16"
    },
    cp_pommes_sequoia: {
        title: "Cas pratique : Charlie & les Pommes Sequoia",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie commande 500 pommes à Sequoia SA. Un mois plus tard, Charlie n'a toujours pas indiqué le lieu et la date de livraison, empêchant Sequoia d'exécuter son obligation.</p>
            <p class="cas-pratique-question">Que se passe-t-il pour Charlie ? Que peut faire Sequoia ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Charlie a violé son devoir d'incombance. Il est en <strong>Demeure du créancier</strong>.</p>
                <p>Sequoia SA ne pouvant pas consigner des denrées périssables, elle devra sommer le créancier, obtenir l'autorisation du juge et <strong>vendre le stock</strong> pour se protéger (art. 92 CO).</p>
            </div>
        </div>`,
        children: [], parent: "eo_demeure_creancier"
    },
    eo_dc_notion: {
        title: "Notion",
        info: "Le créancier est tenu de prêter son concours (actes préparatoires). Ce devoir n'est pas une véritable obligation mais une <strong>incombance</strong>. Le débiteur ne peut en exiger l'exécution, mais le créancier encourt un <strong>désavantage juridique appelé la demeure du créancier</strong>.",
        children: [],
        parent: "eo_demeure_creancier"
    },
    eo_dc_conditions: {
        title: "Conditions",
        info: "Trois conditions (art. 91 CO) :<br><ol><li><strong>L'offre effective de la prestation.</strong></li><li><strong>La violation de ses devoirs par le créancier.</strong></li><li><strong>L'absence de motif légitime.</strong></li></ol>",
        children: [],
        parent: "eo_demeure_creancier"
    },
    eo_dc_effets: {
        title: "Les effets",
        info: "La demeure du créancier <strong>exclut la demeure du débiteur</strong>. Selon les cas, le débiteur a le <strong>droit de consigner, le droit de vendre ou le droit de se départir du contrat</strong>.<br><br>Il est fondamental de retenir qu'à partir de ce moment, <strong>c'est le créancier qui assume les risques de la chose</strong>. Si elle périt, il ne pourra pas rechercher le débiteur.",
        children: [],
        parent: "eo_demeure_creancier"
    },

    // ==========================================
    // LA DEMEURE DU DÉBITEUR
    // ==========================================
    eo_demeure_debiteur: {
        title: "La demeure du débiteur",
        info: "Retard dans l'exécution de la prestation due.",
        children: ["eo_dd_notion", "eo_dd_simple", "eo_dd_qualifiee", "cp_demeure_farma"],
        parent: "exec_obligations_titre16"
    },
    cp_demeure_farma: {
        title: "Cas pratique : La demeure de Cormoran SA",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Cormoran reçoit des croquettes mais ne paie pas. Farma SA envoie un courrier fixant un délai au 31 mai pour payer. Le 31 mai passe, rien n'est payé. </p>
            <p class="cas-pratique-question">Que peut faire Farma ? Et si Cormoran n'avait pas payé car Farma refusait de lui donner son IBAN ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Cormoran est en <strong>demeure qualifiée</strong> (Délai de grâce fixé et échu). Farma peut réclamer l'exécution + dommages, ou renoncer à l'exécution pour des DI positifs, ou se départir du contrat.</p>
                <p><em>Variante IBAN :</em> Si Farma refuse de donner son IBAN, elle ne prête pas son concours. C'est la <strong>demeure du créancier</strong>. La demeure du créancier exclut la demeure du débiteur, Cormoran ne serait donc pas en tort.</p>
            </div>
        </div>`,
        children: [], parent: "eo_demeure_debiteur"
    },
    eo_dd_notion: {
        title: "Notion",
        info: "C'est la situation défavorable dans laquelle se trouve le débiteur en <strong>retard dans l'exécution</strong>. À la différence de l'inexécution, <strong>la demeure est une situation provisoire</strong> qui peut encore déboucher sur l'exécution.",
        children: [],
        parent: "eo_demeure_debiteur"
    },
    eo_dd_simple: {
        title: "La demeure simple",
        info: "Applicable à tous les contrats (art. 102 à 106 CO).",
        children: ["eo_dds_conditions", "eo_dds_interpellation", "eo_dds_effets"],
        parent: "eo_dd_simple"
    },
    eo_dds_conditions: {
        title: "Conditions",
        info: "Quatre conditions (art. 102 al. 1 CO) :<br><ol><li><strong>L'exigibilité de l'obligation.</strong></li><li><strong>L'échéance :</strong> fixée par contrat ou par interpellation.</li><li><strong>L'inexécution de l'obligation.</strong></li><li><strong>L'absence de motif justificatif.</strong></li></ol>",
        children: [],
        parent: "eo_dd_simple"
    },
    eo_dds_interpellation: {
        title: "L'interpellation",
        info: "C'est une <strong>sommation de s'exécuter</strong> faite par le créancier au débiteur.<br><br>Exceptions à l'exigence d'interpellation (art. 108 CO) :<br><ul><li>Obligation assortie d'un <strong>terme comminatoire</strong>.</li><li>Le débiteur a manifesté sa <strong>ferme volonté de ne pas s'exécuter</strong>.</li><li>Le débiteur empêche intentionnellement l'interpellation de l'atteindre.</li></ul>",
        children: [],
        parent: "eo_dd_simple"
    },
    eo_dds_effets: {
        title: "Les effets",
        info: "La demeure ne suppose pas en soi une faute, mais certains effets la requièrent.<br><ul><li><strong>Intérêts moratoires :</strong> dus <strong>indépendamment de toute faute</strong>.</li><li><strong>Responsabilité aggravée :</strong> il doit des dommages-intérêts supplémentaires et encourt une <strong>responsabilité pour le cas fortuit uniquement s'il est fautif</strong>.</li></ul>",
        children: [],
        parent: "eo_dd_simple"
    },
    eo_dd_qualifiee: {
        title: "La demeure qualifiée",
        info: "Dans les contrats synallagmatiques (art. 107 à 109 CO).",
        children: ["eo_ddq_conditions", "eo_ddq_effets"],
        parent: "eo_dd_qualifiee"
    },
    eo_ddq_conditions: {
        title: "Conditions",
        info: "Trois conditions supplémentaires s'appliquent :<br><ol><li><strong>La demeure du débiteur</strong> (simple).</li><li><strong>L'inexécution dans le délai de grâce :</strong> le créancier doit avoir fixé un <strong>délai supplémentaire</strong> (sauf si l'attitude du débiteur ou le terme fixe rend cela inutile, art. 108 CO).</li><li><strong>La déclaration immédiate.</strong></li></ol>",
        children: [],
        parent: "eo_dd_qualifiee"
    },
    eo_ddq_effets: {
        title: "Les effets",
        info: "Si les conditions sont remplies, le créancier a le choix entre trois possibilités :<br><ol><li><strong>L'exécution du contrat en nature.</strong></li><li><strong>L'exécution sous forme de dommages-intérêts positifs.</strong></li><li><strong>La résolution du contrat</strong> (avec dommages-intérêts négatifs si le débiteur est en faute).</li></ol>",
        children: [],
        parent: "eo_dd_qualifiee"
    },

    // --- 17. L'EXTINCTION DES OBLIGATIONS ---
    extinction_obligations_titre17: {
        title: "17. L'extinction des obligations",
        info: "Ce titre aborde les différentes causes qui mettent fin à une obligation, libérant ainsi le débiteur et éteignant le droit de créance.",
        children: [
            "eo_notion", 
            "eo_remise", 
            "eo_novation", 
            "eo_confusion", 
            "eo_impossibilite", 
            "eo_compensation", 
            "eo_prescription", 
            "eo_rapports"
        ],
        parent: "root"
    },

    // ==========================================
    // NOTION
    // ==========================================
    eo_notion: {
        title: "Notion",
        info: "Constitue une cause d'extinction tout fait qui, en vertu de la loi, met fin à l'obligation.<br><br><strong>La cause ordinaire d'extinction des obligations est l'exécution.</strong> Toutefois, les obligations peuvent s'éteindre sans qu'il y ait eu exécution.<br><br>On distingue :<br><ul><li><strong>Les causes volontaires :</strong> l'exécution, la remise de dette, la novation, la compensation.</li><li><strong>Les causes involontaires :</strong> l'impossibilité subséquente, la confusion, la prescription.</li></ul><br>L'extinction a pour effet que <strong>le créancier ne peut plus en demander l'exécution et que le débiteur n'est plus tenu d'effectuer la prestation</strong>.",
        children: [],
        parent: "extinction_obligations_titre17"
    },

    // ==========================================
    // LA REMISE DE DETTE
    // ==========================================
    eo_remise: {
        title: "La remise de dette",
        info: "Mécanisme prévu à l'art. 115 CO.",
        children: ["eo_remise_notion", "eo_remise_cond", "cp_ext_remise"],
        parent: "extinction_obligations_titre17"
    },
    cp_ext_remise: {
        title: "Cas pratique 1 : Farma SA passe l'éponge",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Farma SA décide d'annuler une ancienne facture de 20 sacs pour remercier Cormoran SA de sa fidélité.</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Il s'agit d'une <strong>Remise de dette</strong> (art. 115 CO). Elle n'est soumise à aucune exigence de forme.</p>
            </div>
        </div>`,
        children: [], parent: "eo_remise"
    },
    eo_remise_notion: {
        title: "Notion",
        info: "La remise de dette est le <strong>contrat entre le débiteur et le créancier par lequel ce dernier annule ou réduit la dette</strong>.<br><br>Lorsque les parties annulent seulement une partie, on parle de <strong>remise de dette partielle</strong>. Le contrat de remise de dette peut être conditionnel.",
        children: [],
        parent: "eo_remise"
    },
    eo_remise_cond: {
        title: "Conditions",
        info: "C'est un <strong>contrat informel</strong>, même si la naissance de l'obligation remise nécessitait une forme particulière. <br><br>S'agissant d'un acte de disposition, le créancier doit <strong>avoir le pouvoir de disposer de la créance</strong>, et l'acte doit <strong>reposer sur une cause</strong>.",
        children: [],
        parent: "eo_remise"
    },

    // ==========================================
    // LA NOVATION
    // ==========================================
    eo_novation: {
        title: "La novation",
        info: "Mécanisme prévu aux art. 116 et 117 CO.",
        children: ["eo_nov_notion", "eo_nov_cond", "eo_nov_effets", "eo_nov_compte", "cp_ext_novation"],
        parent: "extinction_obligations_titre17"
    },
    cp_ext_novation: {
        title: "Cas pratique 2 : Le changement de facture",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Cormoran ajoute 50 sacs à une commande existante de 500 sacs. Farma annule la première facture de CHF 250'000.- et en envoie une nouvelle consolidée de CHF 275'000.-.</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Il s'agit d'une <strong>Novation</strong> (art. 116 CO). Attention, la novation ne se présume pas, la volonté de nover doit être claire. L'ancienne dette est éteinte, remplacée par la nouvelle.</p>
            </div>
        </div>`,
        children: [], parent: "eo_novation"
    },
    eo_nov_notion: {
        title: "Notion",
        info: "La novation est le <strong>contrat par lequel les parties éteignent la créance originale et y substituent une créance nouvelle</strong>.",
        children: [],
        parent: "eo_novation"
    },
    eo_nov_cond: {
        title: "Conditions",
        info: "La novation est un <strong>contrat informel</strong> qui suppose l'existence d'une <strong>créance valable</strong>. <br><br>Il est très important de noter que <strong>la loi pose une présomption contre la novation</strong> (art. 116 al. 1 CO).",
        children: [],
        parent: "eo_novation"
    },
    eo_nov_effets: {
        title: "Les effets",
        info: "La novation entraîne <strong>l'extinction de la dette primitive</strong>. Toutes les exceptions que le débiteur pouvait tirer de la créance novée et <strong>tous les accessoires (sûretés réelles et personnelles) disparaissent</strong>.",
        children: [],
        parent: "eo_novation"
    },
    eo_nov_compte: {
        title: "Le cas particulier du compte-courant",
        info: "Contrat (art. 117 CO) par lequel deux personnes s'engagent à porter en compte leurs créances réciproques, à <strong>ne pas les faire valoir immédiatement et de façon indépendante, mais de les compenser périodiquement</strong>.",
        children: [],
        parent: "eo_novation"
    },

    // ==========================================
    // LA CONFUSION
    // ==========================================
    eo_confusion: {
        title: "La confusion",
        info: "Mécanisme prévu à l'art. 118 CO.",
        children: ["eo_conf_notion", "eo_conf_cond", "eo_conf_effets", "cp_ext_confusion"],
        parent: "extinction_obligations_titre17"
    },
    cp_ext_confusion: {
        title: "Cas pratique 3 : La Fusion Farma / Cormoran",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Farma SA et Cormoran SA décident de fusionner avant que la dette ne soit payée.</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Il s'agit d'une <strong>Confusion</strong> (art. 118 CO). Le créancier et le débiteur ne forment plus qu'une seule entité, la dette s'éteint.</p>
            </div>
        </div>`,
        children: [], parent: "eo_confusion"
    },
    eo_conf_notion: {
        title: "Notion",
        info: "La confusion est la <strong>réunion dans la même personne des qualités de créancier et de débiteur</strong> (art. 118 al. 1 CO).",
        children: [],
        parent: "eo_confusion"
    },
    eo_conf_cond: {
        title: "Conditions",
        info: "Trois conditions : <strong>l'identité de l'obligation</strong>, <strong>l'identité de créancier et du débiteur</strong>, et <strong>l'absence d'un autre créancier ou débiteur</strong>.",
        children: [],
        parent: "eo_confusion"
    },
    eo_conf_effets: {
        title: "Les effets",
        info: "L'effet extinctif ne se produit pas si la créance est grevée d'un gage ou d'un usufruit. <br><br>Même s'il se produit, <strong>l'effet extinctif de la confusion n'est pas définitif</strong>. La dette renaît si l'identité entre le créancier et le débiteur vient à cesser (art. 118 al. 2 CO).",
        children: [],
        parent: "eo_confusion"
    },

    // ==========================================
    // L'IMPOSSIBILITÉ SUBSÉQUENTE
    // ==========================================
    eo_impossibilite: {
        title: "L'impossibilité subséquente",
        info: "Mécanisme prévu à l'art. 119 CO.",
        children: ["eo_imp_notion", "eo_imp_cond", "eo_imp_effets", "cp_ext_impossibilite_1", "cp_ext_impossibilite_2"],
        parent: "extinction_obligations_titre17"
    },
    cp_ext_impossibilite_1: {
        title: "Cas pratique 4.1 : La peinture de Vallotton",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Charlie achète une peinture à Paul. Charlie "oublie" d'aller la chercher l'après-midi comme convenu. La nuit, la maison de Paul brûle accidentellement avec la peinture.</p>
            <p class="cas-pratique-question">Charlie peut-il récupérer son argent ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>L'impossibilité est objective et non fautive pour le débiteur (Paul). L'obligation s'éteint (art. 119 CO).</p>
                <p>MAIS, l'impossibilité est ici <strong>imputable au créancier</strong>, car Charlie était en demeure (il devait la prendre l'après-midi). C'est lui qui assume les risques. <strong>Il ne récupérera pas son argent</strong>.</p>
            </div>
        </div>`,
        children: [], parent: "eo_impossibilite"
    },
    cp_ext_impossibilite_2: {
        title: "Cas pratique 4.2 : L'incendie chez Farma SA",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Farma prépare 550 sacs individualisés dans des camions. La nuit avant la livraison, un incendie détruit tout.</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Si la chose est de genre, le risque passe à l'acquéreur quand elle est individualisée ET expédiée (dessaisi) (art. 185 CO).</p>
                <p>Les camions n'étant pas encore partis de Farma SA, Farma n'est pas dessaisie. Farma supporte donc le risque et la perte de la marchandise.</p>
            </div>
        </div>`,
        children: [], parent: "eo_impossibilite"
    },
    eo_imp_notion: {
        title: "Notion",
        info: "Il y a impossibilité subséquente lorsque, <strong>postérieurement à la naissance de l'obligation, des circonstances surviennent qui en empêchent l'exécution</strong>.",
        children: [],
        parent: "eo_impossibilite"
    },
    eo_imp_cond: {
        title: "Conditions",
        info: "Quatre conditions (art. 119 CO) :<br><ol><li><strong>L'impossibilité de la prestation.</strong></li><li><strong>Une impossibilité subséquente.</strong></li><li><strong>Une impossibilité objective.</strong></li><li><strong>Une impossibilité non fautive.</strong></li></ol>",
        children: [],
        parent: "eo_impossibilite"
    },
    eo_imp_effets: {
        title: "Les effets",
        info: "Elle entraîne <strong>l'extinction de l'obligation qui en est affectée</strong>. Dans les contrats synallagmatiques, elle entraîne également <strong>l'extinction de l'obligation réciproque</strong>, conformément au principe de l'échange.<br><br>Exceptions : le transfert légal ou conventionnel des risques au créancier, et l'impossibilité imputable au créancier.",
        children: [],
        parent: "eo_impossibilite"
    },

    // ==========================================
    // LA COMPENSATION
    // ==========================================
    eo_compensation: {
        title: "La compensation",
        info: "Mécanisme prévu aux art. 120 à 126 CO.",
        children: ["eo_comp_notion", "eo_comp_cond", "eo_comp_effets", "cp_ext_compensation"],
        parent: "extinction_obligations_titre17"
    },
    cp_ext_compensation: {
        title: "Cas pratique 5 : Les dettes croisées",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Cormoran doit CHF 275'000.- à Farma. Mais Farma doit CHF 200'000.- à Cormoran pour une licence.</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>Les conditions de la <strong>Compensation</strong> sont réunies (art. 120 CO). L'une des parties doit en faire la déclaration. Après compensation, Cormoran devra seulement CHF 75'000.-.</p>
            </div>
        </div>`,
        children: [], parent: "eo_compensation"
    },
    eo_comp_notion: {
        title: "Notion",
        info: "La compensation est <strong>l'extinction d'une dette par le sacrifice d'une créance que le débiteur a contre son créancier</strong>.<br><br>Elle suppose deux obligations : la créance compensée (la dette du compensant) et la créance compensante (la créance du compensant).",
        children: [],
        parent: "eo_compensation"
    },
    eo_comp_cond: {
        title: "Les conditions",
        info: "Quatre conditions matérielles :<br><ol><li><strong>La réciprocité des créances.</strong></li><li><strong>L'identité des prestations dues.</strong></li><li><strong>L'exigibilité de la créance compensante.</strong></li><li><strong>L'absence d'une cause d'exclusion.</strong></li></ol><br>Même réunies, la compensation n'est pas automatique : il faut <strong>une déclaration de volonté du compensant</strong> (art. 124 al. 1 CO), qui constitue l'exercice d'un droit formateur résolutoire.",
        children: [],
        parent: "eo_compensation"
    },
    eo_comp_effets: {
        title: "Les effets",
        info: "Éteint les deux créances. Si les montants diffèrent, <strong>l'effet extinctif ne se produit qu'à concurrence du montant le plus faible</strong> (art. 124 al. 2 CO). La plus faible est totalement éteinte, l'autre simplement réduite.",
        children: [],
        parent: "eo_compensation"
    },

    // ==========================================
    // LA PRESCRIPTION
    // ==========================================
    eo_prescription: {
        title: "La prescription",
        info: "Mécanisme prévu aux art. 127 à 142 CO.",
        children: ["eo_presc_notion", "eo_presc_delai", "eo_presc_effets", "cp_ext_prescription"],
        parent: "extinction_obligations_titre17"
    },
    cp_ext_prescription: {
        title: "Cas pratique 6 : La reconnaissance tardive",
        info: `<div class="cas-pratique">
            <h4>Situation</h4>
            <p>Délai de paiement au 1er janvier 2012. En 2014, Cormoran signe une reconnaissance de dette. En 2022, toujours pas payé. La dette est-elle prescrite ?</p>
            <button class="toggle-answer-btn" onclick="const res = this.nextElementSibling; if(res.style.display === 'none') { res.style.display = 'block'; this.textContent = 'Masquer la réponse'; } else { res.style.display = 'none'; this.textContent = 'Afficher la réponse'; }">Afficher la réponse</button>
            <div class="answer-box" style="display: none;">
                <p>La prescription contractuelle est de 10 ans. Elle courait initialement de 2012 à 2022.</p>
                <p>Cependant, la reconnaissance de dette en 2014 a provoqué une <strong>interruption</strong> (art. 135 CO). Un nouveau délai de 10 ans a commencé, courant donc jusqu'en <strong>2024</strong>. En 2022, la dette n'est pas prescrite.</p>
            </div>
        </div>`,
        children: [], parent: "eo_prescription"
    },
    eo_presc_notion: {
        title: "Notion",
        info: "Institution qui permet au débiteur de <strong>paralyser le droit d'action lié à une créance par suite de l'écoulement du temps</strong>. En principe, toutes les créances se prescrivent, mais <strong>certaines créances sont imprescriptibles</strong> (ex: créances garanties par gage immobilier).",
        children: [],
        parent: "eo_prescription"
    },
    eo_presc_delai: {
        title: "Le délai de prescription",
        info: "Règles régissant le calcul du temps de prescription.",
        children: [
            "eo_pdel_duree", 
            "eo_pdel_depart", 
            "eo_pdel_suspension", 
            "eo_pdel_interruption", 
            "eo_pdel_prolongation", 
            "eo_pdel_renonciation"
        ],
        parent: "eo_prescription"
    },
    eo_pdel_duree: {
        title: "La durée",
        info: "Le <strong>délai général est de 10 ans</strong> (art. 127 CO).<br><br>Quatre exceptions majeures :<br><ul><li><strong>5 ans</strong> (art. 128 CO) pour loyers, artisans, médecins/avocats.</li><li><strong>3 ans (relatif) et 20 ans (absolu)</strong> en cas de mort/lésions par faute contractuelle (art. 128a CO).</li><li>Créances délictuelles (art. 60 CO) : <strong>3 ans (relatif) et 10/20 ans (absolu)</strong>.</li><li>Enrichissement illégitime (art. 67 CO) : <strong>3 ans (relatif) et 10 ans (absolu)</strong>.</li></ul><br>En vertu de l'art. 129 CO, <strong>il est interdit de modifier conventionnellement ces délais, qui sont impératifs</strong>.",
        children: [],
        parent: "eo_presc_delai"
    },
    eo_pdel_depart: {
        title: "Le point de départ",
        info: "En principe, <strong>la prescription court dès l'exigibilité de la créance</strong> (art. 130 al. 1 CO). Exceptions pour les créances délictuelles et d'enrichissement illégitime, où le délai relatif ne part que lorsque la personne connaît son droit.",
        children: [],
        parent: "eo_presc_delai"
    },
    eo_pdel_suspension: {
        title: "La suspension",
        info: "Pendant sa durée, <strong>la prescription ne court pas</strong>. Si le délai n'a jamais couru, il commence après la cause. S'il a déjà couru, <strong>il s'arrête et continue dès que la cause disparaît</strong>. <br><br>Causes : dépendance, impossibilité de faire valoir en Suisse, inventaire de succession, ou discussions extrajudiciaires convenues par écrit.",
        children: [],
        parent: "eo_presc_delai"
    },
    eo_pdel_interruption: {
        title: "L'interruption",
        info: "A pour effet de <strong>faire courir un nouveau délai</strong>. De même durée sauf si la créance est reconnue dans un titre/jugement, où <strong>le nouveau délai est toujours de 10 ans</strong>. Provoquée par la <strong>reconnaissance de dette</strong> du débiteur ou des <strong>actes d'exécution forcée</strong> du créancier.",
        children: [],
        parent: "eo_presc_delai"
    },
    eo_pdel_prolongation: {
        title: "La prolongation",
        info: "À titre exceptionnel, l'art. 63 CPC <strong>accorde un délai supplémentaire d'un mois</strong> au créancier qui a agi à temps mais dont l'acte est irrecevable/retiré, si la prescription s'est écoulée dans l'intervalle.",
        children: [],
        parent: "eo_presc_delai"
    },
    eo_pdel_renonciation: {
        title: "La renonciation",
        info: "<strong>La renonciation anticipée est nulle</strong>. Cependant, le débiteur peut <strong>renoncer à soulever l'exception de prescription</strong>, à chaque fois pour 10 ans au plus, à compter du début du délai (art. 141 CO). Cette renonciation doit être faite par écrit.",
        children: [],
        parent: "eo_presc_delai"
    },
    eo_presc_effets: {
        title: "Les effets",
        info: "À proprement parler, ce n'est pas une cause d'extinction absolue : <strong>elle confère seulement au débiteur une exception lui permettant de paralyser la créance</strong>, qui continue d'exister sous forme d'obligation imparfaite.",
        children: [],
        parent: "eo_prescription"
    },

    // ==========================================
    // L'EXTINCTION DES RAPPORTS D'OBLIGATION
    // ==========================================
    eo_rapports: {
        title: "L'extinction des rapports d'obligation",
        info: "La fin de la relation globale entre les parties.",
        children: ["eo_rap_notion", "eo_rap_imprevision"],
        parent: "extinction_obligations_titre17"
    },
    eo_rap_notion: {
        title: "Notion",
        info: "En principe, les contrats <strong>ne prennent fin que par la correcte exécution des obligations réciproques</strong>.<br><br>La cause ordinaire dépend de la durée :<br><ul><li><strong>Durée déterminée :</strong> expiration de la durée convenue.</li><li><strong>Durée indéterminée :</strong> résiliation unilatérale par l'une des parties.</li></ul>Les causes extraordinaires empêchent le déroulement normal.",
        children: [],
        parent: "eo_rapports"
    },
    eo_rap_imprevision: {
        title: "La théorie de l'imprévision",
        info: "Normalement, le contrat s'applique malgré un changement (<strong>principe de la fidélité contractuelle</strong>). Exceptionnellement, le contrat peut être adapté : c'est la <strong>théorie de l'imprévision (clausula rebus sic stantibus)</strong>.<br><br>En l'absence de clause, le juge peut intervenir si deux conditions sont réunies : le <strong>caractère imprévisible du changement</strong> et une <strong>disproportion importante entre les prestations</strong>.",
        children: [],
        parent: "eo_rapports"
    }
};
// [ ... GARDE TON OBJET courseData ENTIER ICI ... ]
const mainContent = document.getElementById('main-content');
const breadcrumb = document.getElementById('breadcrumb');
const searchBar = document.getElementById('searchBar');
const sidebarContent = document.getElementById('sidebar-content');

// --- FONCTION POUR GÉNÉRER LA BARRE LATÉRALE ---
function renderSidebar() {
    let html = `<ul class="nav-list">`;
    
    // Ajout manuel de l'Accueil tout en haut
    html += `<li class="nav-item">
                <div class="nav-header no-children" id="nav-root">
                    <span class="nav-title" onclick="renderTopic('root')">🏠 Accueil</span>
                </div>
             </li>`;

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
function renderTopic(id, pushHistory = true) {
    const topic = courseData[id];
    if (!topic) return;

    if (pushHistory) {
        history.pushState({ topicId: id }, topic.title, "?topic=" + id);
    }

    // 2. Mise à jour du fil d'Ariane interactif
    let path = [];
    let currentId = id;

    while (currentId && currentId !== 'root') {
        path.unshift({ id: currentId, title: courseData[currentId].title });
        currentId = courseData[currentId].parent;
    }

    let bcHtml = `<span class="breadcrumb-link" onclick="renderTopic('root')">🏠 Accueil</span>`;

    path.forEach((p, index) => {
        bcHtml += ` <span class="breadcrumb-separator">/</span> `;
        // Rend chaque élément du chemin cliquable, même le dernier (au cas où)
        if (index === path.length - 1) {
            bcHtml += `<span class="breadcrumb-current" onclick="renderTopic('${p.id}')" style="cursor: pointer;">${p.title}</span>`;
        } else {
            bcHtml += `<span class="breadcrumb-link" onclick="renderTopic('${p.id}')">${p.title}</span>`;
        }
    });

    breadcrumb.innerHTML = bcHtml;

    let html = ``; // Start empty

    // --- LOGIQUE POUR LES BOUTONS PRÉCÉDENT / SUIVANT (TOUT EN HAUT) ---
    if (id !== 'root' && id !== 'bibliographie') {
        const parentId = topic.parent;
        const parentTopic = courseData[parentId];
        
        if (parentTopic && parentTopic.children) {
            const currentIndex = parentTopic.children.indexOf(id);
            let prevId = null;
            let nextId = null;

            // Déterminer le Sujet Précédent
            if (currentIndex > 0) {
                // S'il y a un frère avant
                prevId = parentTopic.children[currentIndex - 1];
            } else {
                // Sinon on remonte au parent
                prevId = parentId;
            }

            // Déterminer le Sujet Suivant
            if (topic.children && topic.children.length > 0) {
                // S'il a des enfants, on descend dans le premier enfant
                nextId = topic.children[0];
            } else if (currentIndex < parentTopic.children.length - 1) {
                // S'il n'a pas d'enfant mais un frère après
                nextId = parentTopic.children[currentIndex + 1];
            } else {
                // S'il n'a pas d'enfant, pas de frère après -> On est à la fin du chapitre/section.
                // On va chercher le prochain titre principal dans l'arbre.
                let tempParentId = parentId;
                let tempCurrentId = id;
                
                // Remonter jusqu'à trouver un parent qui a un frère suivant
                while(tempParentId && tempParentId !== 'root') {
                    let gpTopic = courseData[courseData[tempParentId].parent];
                    if(gpTopic && gpTopic.children) {
                        let pIndex = gpTopic.children.indexOf(tempParentId);
                        if(pIndex < gpTopic.children.length - 1) {
                            nextId = gpTopic.children[pIndex + 1];
                            break; // On a trouvé le prochain grand titre
                        }
                    }
                    tempCurrentId = tempParentId;
                    tempParentId = courseData[tempParentId].parent;
                }
            }

            // Génération du HTML pour les boutons
            if (prevId || nextId) {
                html += `<div class="navigation-buttons" style="margin-top: 0; margin-bottom: 20px; padding-top: 0; border-top: none; border-bottom: 2px solid var(--border); padding-bottom: 20px;">`;
                
                if (prevId && prevId !== 'root') {
                    html += `
                        <div class="nav-btn nav-btn-prev" onclick="renderTopic('${prevId}')">
                            <span>◀︎ Précédent</span>
                            ${courseData[prevId].title}
                        </div>`;
                } else {
                    html += `<div></div>`; // Espace vide pour flexbox
                }

                if (nextId) {
                    html += `
                        <div class="nav-btn nav-btn-next" onclick="renderTopic('${nextId}')">
                            <span>Suivant ▶︎</span>
                            ${courseData[nextId].title}
                        </div>`;
                } else {
                     html += `<div></div>`;
                }
                
                html += `</div>`;
            }
        }
    }

    // --- 3. Génération du HTML principal (Titre et Info) ---
    html += `
        <div class="info-box" style="border-top: none;">
            <h2>${topic.title}</h2>
            <p>${topic.info}</p>
        </div>
    `;

    // --- SOUS-BRANCHES ("Explorer :") (EN BAS) ---
    if (topic.children && topic.children.length > 0) {
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
renderTopic(initialTopic, false)

const ACADEMIC_PASSWORD = "HEC_DROIT_2026"; // Changez ceci par le mot de passe de votre choix

function checkPassword() {
    const input = document.getElementById('password-input').value;
    const errorMsg = document.getElementById('auth-error');
    const overlay = document.getElementById('auth-overlay');

    if (input === ACADEMIC_PASSWORD) {
        overlay.style.display = 'none';
        sessionStorage.setItem('isAuth', 'true');
    } else {
        errorMsg.style.display = 'block';
    }
}

// Vérification au chargement de la page
window.onload = function() {
    if (sessionStorage.getItem('isAuth') === 'true') {
        document.getElementById('auth-overlay').style.display = 'none';
    }
};
