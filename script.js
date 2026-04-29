// BASE DE DONNÉES COMPLÈTE DU COURS
const courseData = {
    
    root: {
        title: "Droit de l'Entreprise",
        info: "Bienvenue sur cette plateforme de révision interactive.<br><br>Ce site est basé sur le polycopié du cours de <strong>Droit de l'entreprise</strong> donné lors du semestre de printemps 2026 aux étudiants de première année de Bachelor en HEC Lausanne par le <strong>Prof. Pascal Favrod-Coune</strong>.<img src='Capture d'écran 2026-04-29 110409.png' alt='illustration' style='width:100%; max-width: 600px; display: block; margin: 20px auto;'><br><br>Sélectionnez une des grandes branches ci-dessous ou utilisez le menu latéral pour commencer vos révisions.",
        children: ["notion", "sujets", "regle", "sources", "divisions", "public", "droit_prive_pt7", "droit_obligations", "sources_obligations_titre9", "obligations_contractuelles_titre10", "rc_titre11", "rc_contractuelle_titre12", "enrichissement_illegitime_titre13", "modalites_obligations_titre14", "transmission_obligations_titre15", "exec_obligations_titre16", "extinction_obligations_titre17"]
    },

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
    fondements_droit: {
        title: "Les fondements du droit",
        info: "Pour pouvoir exercer ses fonctions, à savoir assurer un équilibre entre des intérêts opposés et organiser la vie en communauté, le droit doit remplir trois sortes de conditions : il doit être sûr, émaner d'un pouvoir social et correspondre à une idée de justice.",
        children: ["def_fonctions", "securite_droit", "pouvoir_social", "idee_justice"],
        parent: "notion"
    },
    def_fonctions: {
        title: "Définition et fonctions",
        info: "Le droit est le système normatif englobant toutes les règles de droit obligatoires, soit l'ensemble des règles de conduite imposées aux personnes physiques et morales par un pouvoir que personnifie l'État. <br><br>Le droit a deux fonctions principales :<br><ul><li><strong>Une fonction pacificatrice :</strong> freiner les appétits égoïstes et assurer la coexistence pacifique entre les individus.</li><li><strong>Une fonction organisatrice :</strong> établir un ordre social fondé sur l'équilibre des divers intérêts.</li></ul>",
        children: [], parent: "fondements_droit"
    },
    securite_droit: {
        title: "La sécurité du droit",
        info: "Les personnes soumises au droit doivent toujours avoir la possibilité de le connaître pour pouvoir se conformer à ses normes ; il s'agit de la sécurité du droit. En règle générale, le droit écrit correspond le mieux à cette idée de clarté et de prévisibilité.<br><br>La sécurité du droit implique plusieurs exigences :<br><ul><li>Le principe de la <strong>non-rétroactivité des lois</strong> et l'existence de règles transitoires.</li><li>L'institution de la <strong>prescription</strong>, c'est-à-dire l'extinction d'un droit, d'une obligation ou d'une action par l'effet de l'écoulement du temps.</li></ul><br>Ces éléments garantissent l'équilibre entre les intérêts opposés (c'est l'effet préventif).",
        children: [], parent: "fondements_droit"
    },
    pouvoir_social: {
        title: "L'émanation d'un pouvoir social",
        info: "Le droit doit émaner d'un pouvoir social. L'ordre social suppose l'existence d'une autorité habilitée et apte à imposer les normes établies, à les faire exécuter et à infliger des sanctions. <br><br>Dans une société correspondant à un État de droit, c'est l'État qui, à lui seul, assure le fonctionnement de la justice.",
        children: [], parent: "fondements_droit"
    },
    idee_justice: {
        title: "La conformité à l'idée de justice",
        info: "Le droit doit correspondre à une idée de justice. On distingue deux approches :<br><ul><li><strong>La justice commutative :</strong> se rapporte aux droits fondamentaux qui appartiennent à chaque être humain de façon égale sans que l'on tienne compte de l'origine, de la race ou de la religion (ex: liberté de conscience).</li><li><strong>La justice distributive :</strong> implique que l'on tienne compte de certaines différences qui existent entre les individus dans leur rapport avec la société (ex: impôts proportionnels aux revenus).</li></ul><br>Il est à noter que l'ordre juridique est le fruit de la pensée humaine et qu'il ne doit pas être immuable, mais doit s'adapter continuellement aux conditions changeantes de la vie.",
        children: [], parent: "fondements_droit"
    },
    sens_droit: {
        title: "Les différents sens du mot droit",
        info: "Le terme de « droit » recouvre deux notions fondamentales : le droit au sens objectif et le droit au sens subjectif.",
        children: ["droit_objectif", "droit_subjectif"],
        parent: "notion"
    },
    droit_objectif: {
        title: "Le droit au sens objectif",
        info: "Le droit au sens objectif est un ensemble de règles obligatoires (ou de normes), générales et abstraites, indiquant ce qui doit être fait dans un cas donné, édictées ou reconnues par un organe officiel, régissant l'organisation et le déroulement des relations sociales et dont le respect est assuré par des moyens de contrainte organisés par l'État.<br><br>Dans ce cadre, on distingue :<br><ul><li>Le <strong>droit naturel</strong> : règles universelles et immuables conformes à la nature humaine.</li><li>Le <strong>droit positif</strong> : règles en vigueur dans un État, à un moment donné.</li></ul>",
        children: [], parent: "sens_droit"
    },
    droit_subjectif: {
        title: "Le droit au sens subjectif",
        info: "Le droit au sens subjectif est une faculté, une prérogative attachée à une certaine personne et protégée par l'ordre juridique existant. C'est la faculté appartenant à un sujet de droit de faire ou d'exiger quelque chose (sujet actif) ou d'être obligée à quelque chose (sujet passif).<br><br>On distingue deux catégories :<br><ul><li><strong>Les droits réels ou absolus :</strong> droits qui peuvent être exercés à l'égard de toute tierce personne (ex: le droit de propriété).</li><li><strong>Les droits relatifs ou personnels :</strong> droits qui ne peuvent être exercés qu'à l'encontre de certaines personnes bien déterminées (ex: l'obligation ou droit de créance découlant d'un contrat).</li></ul><br>Un droit subjectif ne peut exister que dans la mesure où le droit objectif le consacre et permet d'en obtenir le respect.",
        children: [], parent: "sens_droit"
    },

    // --- 2. LES SUJETS DE DROIT ---
    sujets: {
        title: "2. Les sujets de droit",
        info: "L'ordre juridique détermine qui peut être sujet de droit, c'est-à-dire avoir des droits et assumer des obligations.",
        children: ["definition_sujets", "jouissance_exercice_droits", "personne_morale_entreprise"],
        parent: "root"
    },
    definition_sujets: {
        title: "Définition et notion",
        info: "Un sujet de droit est soit le titulaire de droits subjectifs qui peut faire valoir les prérogatives qui en découlent (le créancier), soit la personne qui est obligée du fait de ces droits subjectifs (le débiteur). <br><br>Il est important de noter que les choses ne peuvent être en soi que l'objet d'un droit subjectif, elles sont un moyen et non un but en soi.",
        children: [], parent: "sujets"
    },
    jouissance_exercice_droits: {
        title: "La jouissance et l'exercice des droits civils",
        info: "Il est fondamental de distinguer la jouissance de l'exercice des droits civils :<br><br><ul><li><strong>La jouissance des droits civils (capacité juridique) :</strong> C'est la capacité d'être sujet de droit. Toute personne a une aptitude égale à devenir sujet de droits et d'obligations. Cette faculté, indépendante de l'âge ou des facultés mentales, commence à la naissance et finit par la mort.</li><li><strong>L'exercice des droits civils :</strong> C'est la capacité de s'engager juridiquement, d'acquérir des droits et pouvoir s'obliger par ses propres actes. Ne possède l'exercice des droits civils que la personne majeure et capable de discernement.</li></ul><br>Le <strong>discernement</strong> se définit comme étant la capacité intellectuelle présumée chez toute personne physique qui n'est pas atteinte de déficience mentale, de troubles psychiques, d'ivresse ou d'autres causes semblables, temporaires ou définitives, l'empêchant d'agir raisonnablement.",
        children: ["cp_frere_jean"], parent: "sujets"
    },
    personne_morale_entreprise: {
        title: "La personne morale et l'entreprise",
        info: "L'être humain cherche souvent à atteindre des buts qui dépassent les forces d'une personne individuelle, formant ainsi des groupements.<br><br><ul><li><strong>La personne morale (ou juridique) :</strong> Ce sont des entités, comme des groupements de personnes (ex: association, société de capitaux) ou des masses de biens (ex: fondation), qui peuvent devenir, à certaines conditions, sujets de droits et d'obligations.</li><li><strong>L'entreprise :</strong> La notion de personne morale doit être distinguée de celle d'entreprise. L'entreprise peut être définie comme étant une activité économique indépendante exercée en vue d'un revenu régulier.</li></ul><br>En pratique, la notion d'entreprise peut désigner l'activité commerciale exploitée par une personne morale (ex: société anonyme) ou par une ou plusieurs personnes physiques (ex: entreprise individuelle, société en nom collectif).",
        children: ["cp_perroquet"], parent: "sujets"
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
    caracteristiques_regle: {
        title: "Définition et caractéristiques",
        info: "Les caractéristiques de la règle de droit sont au nombre de trois. Elles permettent de structurer et d'imposer la règle au sein de la société.",
        children: ["caractere_general_abstrait", "structure_double", "caractere_obligatoire"],
        parent: "regle"
    },
    caractere_general_abstrait: {
        title: "Le caractère général et abstrait",
        info: "Par essence, la règle de droit est générale et abstraite. <br><br><ul><li>Elle est <strong>générale</strong>, en ce sens qu'elle vise un nombre indéterminé de personnes.</li><li>Elle est <strong>abstraite</strong> dans la mesure où elle s'applique à un nombre indéterminé de situations.</li></ul><br>La règle de droit doit donc être formulée de telle manière qu'elle puisse viser le plus de situations possibles, sans pour autant être trop générale et, par conséquent, trop vague, ce qui nuirait à la sécurité du droit.",
        children: [], parent: "caracteristiques_regle"
    },
    structure_double: {
        title: "La structure double",
        info: "Sur le plan de sa structure, la règle de droit comprend deux éléments, elle est bipartite :<br><br><ol><li>D'une part, elle comprend un <strong>point de départ</strong>. Ce sont les conditions, l'hypothèse, les faits ou les éléments dont la réalisation entraîne l'application de la règle.</li><li>D'autre part, elle emporte un <strong>effet juridique</strong>, soit la conséquence que la règle de droit attache à la réalisation des faits ou conditions d'application.</li></ol><br>Cette double structure se rencontre non seulement dans la règle abstraite, mais aussi dans l'application au cas concret (il y a une partie « fait » et une partie « droit » dans tout jugement).",
        children: [], parent: "caracteristiques_regle"
    },
    caractere_obligatoire: {
        title: "Le caractère obligatoire",
        info: "La troisième caractéristique, qui est de loin la plus importante, est le caractère obligatoire de la règle de droit, accompagné de la menace de sanction ou de la sanction elle-même. <br><br>La sanction, qui est la conséquence attachée par le droit à la violation d'une règle juridique, poursuit deux buts essentiels :<br><ul><li>Un but de <strong>prévention et de punition</strong> : inciter les justiciables à suivre les règles de droit.</li><li>Un but de <strong>réparation</strong> : réparer les effets d'une conduite contraire au droit.</li></ul>",
        children: [], parent: "caracteristiques_regle"
    },
    nature_regles: {
        title: "Nature des règles et exemples",
        info: "Les règles de droit ne sont pas toutes de même nature. <br><br><ul><li><strong>Règles impératives :</strong> Règles auxquelles il n'est pas permis de déroger, même par convention, ou qu'il n'est pas licite d'éluder. Elles doivent être respectées par tous.</li><li><strong>Règles dispositives :</strong> Elles sont édictées dans les mêmes conditions mais ne s'appliquent que si les particuliers n'en ont pas décidé autrement. Elles peuvent suppléer à la volonté des parties.</li><li><strong>Règles semi-impératives :</strong> Règles auxquelles on ne peut déroger qu'en faveur de l'une des parties, généralement la plus faible (ex: droit du travail).</li></ul>",
        children: [], parent: "regle"
    },

    // --- 4. LES SOURCES DU DROIT ---
    sources: {
        title: "4. Les sources du droit",
        info: "Les sources du droit sont les formes sous lesquelles les règles apparaissent et deviennent obligatoires. On distingue les sources formelles (obligatoires) des sources matérielles (interprétatives).",
        children: ["coutume", "loi_large", "jurisprudence", "doctrine", "usages_commerciaux"],
        parent: "root"
    },
    coutume: {
        title: "La Coutume",
        info: "Usage constant et conviction juridique. <br><strong>Conditions cumulatives :</strong> <br>1. <strong>Usage constant :</strong> Pratique répétée sur une longue durée. <br>2. <strong>Opinio iuris :</strong> Conviction des individus d'obéir à une règle de droit.",
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

    loi_large: {
        title: "La Loi (au sens large)",
        info: "La source écrite principale, structurée en pyramide.",
        children: ["traites_internationaux", "constitution", "loi_etroit", "ordonnance", "application_loi"],
        parent: "sources"
    },
    traites_internationaux: {
        title: "Traités internationaux",
        info: "Accords conclus entre États ou avec des organisations internationales. <br><br><strong>Détails du cours :</strong> <br><ul><li><strong>Primauté :</strong> Ils l'emportent en principe sur le droit national.</li><li><strong>Domaines :</strong> Droits de l'homme (CEDH), économie, environnement, etc.</li><li><strong>Exemple majeur :</strong> La Convention européenne des droits de l'homme (CEDH) garantit des libertés fondamentales que la Suisse doit respecter.</li></ul>",
        children: [], parent: "loi_large"
    },
    constitution: {
        title: "La Constitution fédérale (Cst)",
        info: "Loi fondamentale au sommet de la hiérarchie.",
        children: ["cst_adoption", "cst_droits", "cst_organisation", "cst_separation", "cst_primante"],
        parent: "loi_large"
    },
    cst_adoption: {
        title: "Adoption et Révision",
        info: "<strong>Révision totale ou partielle :</strong> Elle nécessite la <span class='highlight'>double majorité du Peuple et des Cantons</span>. <br><ul><li><strong>Initiative populaire :</strong> 100'000 citoyens peuvent demander une modification.</li><li><strong>Référendum obligatoire :</strong> Toute révision décidée par le Parlement est soumise au vote.</li></ul>",
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
    loi_etroit: {
        title: "La loi fédérale",
        info: "Édictées par le Parlement. <br><ul><li><strong>Exemples :</strong> Code Civil, Code des Obligations.</li><li><strong>Référendum facultatif :</strong> 50'000 citoyens ou 8 cantons peuvent demander un vote populaire.</li></ul>",
        children: [], parent: "loi_large"
    },
    ordonnance: {
        title: "Ordonnances",
        info: "Édictées par le Conseil fédéral pour appliquer les lois. <br><ul><li><strong>Nature :</strong> Rang inférieur à la loi.</li><li><strong>Sanction :</strong> Jamais de référendum possible contre une ordonnance.</li></ul>",
        children: [], parent: "loi_large"
    },
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

    doctrine: {
        title: "La Doctrine",
        info: "Opinions des savants. <br>Indispensable pour éclairer le juge sur des cas complexes, bien qu'elle n'ait pas de force obligatoire.",
        children: [], parent: "sources"
    },
    
    // --- 5. LES GRANDES DIVISIONS DU DROIT ---
    divisions: {
        title: "5. Les grandes divisions du droit",
        info: "Le droit n'est pas un bloc monolithique ; il est divisé en grandes catégories pour mieux organiser les rapports sociaux.",
        children: ["div_general", "div_public_prive", "div_materiel_formel"],
        parent: "root"
    },
    div_general: {
        title: "En général",
        info: "L'ordre juridique est la somme des règles de droit. Pour s'y retrouver, la doctrine a établi des classifications fondées sur l'objet de la règle ou les personnes qu'elle régit. <br><br><strong>Points clés :</strong> <br><ul><li>La division la plus ancienne et la plus importante est celle qui oppose le <strong>droit public</strong> au <strong>droit privé</strong>.</li><li>Une règle de droit peut appartenir à plusieurs catégories, mais sa nature (impérative ou dispositive) dépendra souvent de sa branche d'origine.</li></ul>",
        children: [], parent: "divisions"
    },
    div_public_prive: {
        title: "Le droit public et le droit privé",
        info: "C'est la <em>'Summa Divisio'</em> (la division suprême). Elle repose sur trois critères principaux soulignés dans le cours.",
        children: ["detail_droit_public", "detail_droit_prive", "cp_public_prive"],
        parent: "divisions"
    },
    detail_droit_public: {
        title: "Le Droit Public",
        info: "Le droit public régit l'organisation de l'État et les rapports entre l'État (agissant comme puissance publique) et les particuliers. <br><br><ul><li><span class='highlight'>Lien de subordination</span> : L'État impose sa volonté au particulier par des décisions unilatérales.</li><li><span class='highlight'>Intérêt général</span> : Le but est la satisfaction des besoins de la collectivité.</li><li><span class='highlight'>Caractère impératif</span> : Les règles de droit public sont presque toujours impératives (on ne peut pas y déroger).</li></ul><br><strong>Comprend :</strong> Droit constitutionnel, administratif, pénal et fiscal.",
        children: [], parent: "div_public_prive"
    },
    detail_droit_prive: {
        title: "Le Droit Privé",
        info: "Le droit privé régit les rapports entre les particuliers (personnes physiques ou morales) ou entre l'État et les particuliers quand l'État n'agit pas en puissance publique. <br><br><ul><li><span class='success'>Rapport d'égalité</span> : Les parties traitent d'égal à égal.</li><li><span class='success'>Intérêt particulier</span> : Vise la satisfaction des besoins individuels.</li><li><span class='success'>Autonomie de la volonté</span> : Les règles sont souvent <strong>dispositives</strong> (on peut les modifier par contrat).</li></ul><br><strong>Comprend :</strong> Droit civil (CC) et Droit des obligations (CO).",
        children: [], parent: "div_public_prive"
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
    div_materiel_formel: {
        title: "Le droit matériel et le droit formel",
        info: "Cette distinction concerne l'objet même de la règle : le fond contre la forme.",
        children: ["detail_droit_materiel", "detail_droit_formel", "cp_materiel_formel"],
        parent: "divisions"
    },
    detail_droit_materiel: {
        title: "Le Droit Matériel (Droit de fond)",
        info: "Le droit matériel comprend les règles de conduite qui définissent les <strong>droits et les obligations</strong> des personnes. <br><br><strong>Exemple :</strong> L'article 41 CO (celui qui cause un dommage doit le réparer) est une règle de fond car elle définit une obligation.",
        children: [], parent: "div_materiel_formel"
    },
    detail_droit_formel: {
        title: "Le Droit Formel (Droit de procédure)",
        info: "Le droit formel (ou procédural) comprend les règles qui fixent la <strong>marche à suivre</strong> pour faire valoir ses droits de fond ou pour les faire appliquer par les autorités. <br><br><strong>Rôles soulignés :</strong> <br><ul><li>Organisation des autorités et des tribunaux.</li><li>Déroulement du procès (délais, preuves).</li><li>Voies de recours.</li></ul><br><strong>Exemples :</strong> Code de procédure civile (CPC), Code de procédure pénale (CPP).",
        children: [], parent: "div_materiel_formel"
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
    
    // --- 6.1 LE DROIT CONSTITUTIONNEL ---
    droit_constitutionnel: {
        title: "Le droit constitutionnel",
        info: "Cette branche examine l'impact de la Constitution fédérale sur l'activité économique et les droits des entreprises.",
        children: ["portee_cst", "libertes_fondamentales"],
        parent: "public"
    },
    portee_cst: {
        title: "La portée du droit constitutionnel",
        info: "Le droit constitutionnel définit le cadre dans lequel l'entreprise peut agir. <br><br><ul><li>Il garantit la <span class='highlight'>liberté d'action</span> des acteurs économiques face à l'État.</li><li>Il fixe les limites de l'intervention étatique pour protéger l'initiative privée.</li><li>Il assure l'unité de l'espace économique suisse.</li></ul>",
        children: [], parent: "droit_constitutionnel"
    },
    libertes_fondamentales: {
        title: "Les libertés fondamentales et leur restriction",
        info: "Les libertés ne sont pas absolues ; l'État peut les limiter à des conditions très strictes fixées par la Constitution elle-même.",
        children: ["principes_generaux_lib", "restriction_lib", "liberte_economique", "liberte_association"],
        parent: "droit_constitutionnel"
    },
    principes_generaux_lib: {
        title: "Les principes généraux",
        info: "Les droits fondamentaux s'appliquent à toute personne physique ou morale (entreprise) se trouvant en Suisse. <br><br><ul><li>L'État a l'obligation de respecter, protéger et réaliser les droits fondamentaux.</li><li>Les particuliers doivent également respecter les droits fondamentaux d'autrui dans leurs relations privées (effet horizontal).</li></ul>",
        children: [], parent: "libertes_fondamentales"
    },
    restriction_lib: {
        title: "La restriction des libertés fondamentales",
        info: "Selon l'<strong>Article 36 Cst</strong>, toute restriction d'un droit fondamental doit remplir <span class='highlight'>quatre conditions cumulatives</span> soulignées dans le cours : <br><br><ol><li><strong>Base légale :</strong> La restriction doit être prévue par une loi.</li><li><strong>Intérêt public :</strong> Elle doit être justifiée par un intérêt public prépondérant ou par la protection des droits d'autrui.</li><li><strong>Proportionnalité :</strong> La mesure doit être apte, nécessaire et raisonnable pour atteindre le but visé.</li><li><strong>Essence du droit :</strong> L'essence du droit fondamental est inviolable.</li></ol>",
        children: [], parent: "libertes_fondamentales"
    },
    liberte_economique: {
        title: "La liberté économique (Art. 27 Cst)",
        info: "C'est la liberté fondamentale pivot pour le droit de l'entreprise. <br><br><ul><li>Elle comprend notamment le <span class='success'>libre choix de la profession</span> ainsi que le <span class='success'>libre accès à une activité économique lucrative privée</span> et son libre exercice.</li><li>Elle protège toute activité économique privée exercée en vue de l'obtention d'un gain.</li></ul><br><strong>Distinction importante :</strong> L'État ne peut prendre des mesures qui dérogent au principe de la liberté économique que si elles sont prévues par la Constitution ou fondées sur des prérogatives cantonales régulières.",
        children: [], parent: "libertes_fondamentales"
    },
    liberte_association: {
        title: "Liberté d'association et syndicale",
        info: "Ces libertés garantissent le droit de se regrouper pour défendre des intérêts communs. <br><br><ul><li><strong>Liberté d'association (Art. 23 Cst) :</strong> Toute personne a le droit de former des associations, d'y adhérer ou de ne pas y adhérer.</li><li><strong>Liberté syndicale (Art. 28 Cst) :</strong> Les travailleurs et les employeurs ont le droit de s'unir pour la défense de leurs intérêts, de former des associations professionnelles et d'y adhérer.</li></ul>",
        children: [], parent: "libertes_fondamentales"
    },

    // --- 6.2 LE DROIT ADMINISTRATIF ---
    droit_administratif: {
        title: "Le droit administratif",
        info: "Ensemble des règles de droit public qui régissent l'organisation et l'activité de l'administration, ainsi que les rapports entre l'administration et les administrés.",
        children: ["admin_definition", "admin_organisation", "admin_activite", "admin_procedure"],
        parent: "public"
    },
    admin_definition: {
        title: "Définition et notion",
        info: "Le droit administratif est le <strong>droit de l'action publique</strong>. <br><br><ul><li>Il s'agit d'un <span class='highlight'>droit interne</span> (propre à chaque État ou canton).</li><li>Il appartient au <span class='highlight'>droit public</span>, impliquant un rapport de subordination (l'intérêt général prime sur l'intérêt particulier).</li><li>Il règle les tâches concrètes de l'État (police, santé, éducation, infrastructures).</li></ul>",
        children: [], parent: "droit_administratif"
    },
    admin_organisation: {
        title: "L'organisation de l'administration",
        info: "L'administration est structurée pour remplir les tâches de l'État à différents échelons. <br><br><strong>Notions clés :</strong> <br><ul><li><strong>Administration centralisée :</strong> Directement rattachée au pouvoir politique (Départements, Offices).</li><li><strong>Administration décentralisée :</strong> Entités autonomes chargées de tâches spécifiques (ex: CFF, La Poste, universités).</li><li><strong>Collectivités publiques :</strong> En Suisse, l'administration est répartie entre la Confédération, les Cantons et les Communes.</li></ul>",
        children: ["cp_garage_1"], parent: "droit_administratif"
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
    admin_activite: {
        title: "L'activité de l'administration",
        info: "L'administration agit par des actes juridiques pour accomplir ses tâches.",
        children: ["decision_vs_contrat", "principe_legalite", "principe_interet_public", "principe_proportionnalite", "principe_bonne_foi", "principe_non_retroactivite", "modalites_decision", "cp_garage_2"],
        parent: "droit_administratif"
    },
    decision_vs_contrat: {
        title: "Décision vs Contrat administratif",
        info: "<strong>1. La Décision administrative (Moyen principal) :</strong> Acte <span class='highlight'>unilatéral</span> et individuel par lequel une autorité règle un cas d'espèce de façon obligatoire et contraignante. <br><br><strong>2. Le Contrat de droit administratif :</strong> Accord entre l'administration et un particulier pour accomplir une tâche d'intérêt public. Il est plus rare car il suppose un pied d'égalité partiel.",
        children: [], parent: "admin_activite"
    },
    principe_legalite: {
        title: "Principe de la légalité",
        info: "<strong>'Le droit est la base et la limite de l'activité de l'État.'</strong> (Art. 5 al. 1 Cst.) <br><br>L'administration ne peut agir que si une loi l'y autorise expressément. Elle doit respecter la hiérarchie des normes.",
        children: [], parent: "admin_activite"
    },
    principe_interet_public: {
        title: "Intérêt public",
        info: "Toute activité de l'État doit répondre à un <span class='highlight'>intérêt public</span> (Art. 5 al. 2 Cst.). L'administration ne peut pas agir pour satisfaire des intérêts privés ou purement politiques.",
        children: [], parent: "admin_activite"
    },
    principe_proportionnalite: {
        title: "Proportionnalité",
        info: "La mesure prise par l'État doit être <span class='highlight'>proportionnée au but visé</span> (Art. 5 al. 2 Cst.). <br><br><strong>Les 3 conditions :</strong> <ol><li><strong>Aptitude :</strong> La mesure doit permettre d'atteindre le but.</li><li><strong>Nécessité :</strong> On doit choisir la mesure la moins incisive possible.</li><li><strong>Proportionnalité au sens étroit :</strong> Équilibre raisonnable entre le but et la restriction imposée.</li></ol>",
        children: [], parent: "admin_activite"
    },
    principe_bonne_foi: {
        title: "Bonne foi",
        info: "L'État et les particuliers doivent agir de manière <strong>loyale</strong> (Art. 5 al. 3 Cst.). Cela implique la protection de la confiance du citoyen envers les promesses de l'administration.",
        children: [], parent: "admin_activite"
    },
    principe_non_retroactivite: {
        title: "Principe de non-rétroactivité",
        info: "Une règle nouvelle ne s'applique pas à des faits passés. Cela garantit la <span class='highlight'>sécurité juridique</span>.",
        children: [], parent: "admin_activite"
    },
    modalites_decision: {
        title: "Modalités de la décision",
        info: "Une décision administrative doit être <strong>notifiée</strong> (communiquée par écrit), <strong>motivée</strong>, et mentionner les <strong>voies de recours</strong>.",
        children: [], parent: "admin_activite"
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
    admin_procedure: {
        title: "La procédure et les recours",
        info: "Le citoyen n'est pas sans défense face à l'administration. <br><br><ul><li><strong>Droit d'être entendu :</strong> Avant toute décision, l'administré a le droit de s'exprimer.</li><li><strong>Le Recours :</strong> Moyen de contester une décision devant une autorité supérieure ou un tribunal (ex: TAF).</li></ul>",
        children: ["cp_garage_3", "cp_restaurant"], parent: "droit_administratif"
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

    // --- 6.3 LE DROIT PÉNAL ---
    droit_penal: {
        title: "Le droit pénal",
        info: "Branche du droit public qui définit les comportements constitutifs d'infractions et les sanctions qui leur sont applicables.",
        children: ["penal_definition", "penal_comportement", "penal_illiceite", "penal_culpabilite", "penal_responsabilite", "penal_sanction", "penal_infractions", "penal_procedure"],
        parent: "public"
    },
    penal_definition: {
        title: "Définition et notion",
        info: "Le droit pénal intervient en <strong>ultime recours</strong> (<em>ultima ratio</em>). Il est régi par le <strong>Code pénal suisse (CP)</strong>.",
        children: [], parent: "droit_penal"
    },
    penal_comportement: {
        title: "Le comportement humain",
        info: "Pour qu'il y ait infraction, il faut un comportement humain volontaire. <br><ul><li><strong>L'action (commission) :</strong> Faire ce que la loi interdit.</li><li><strong>L'omission :</strong> Ne pas faire ce que la loi commande, alors que l'auteur avait une <span class='highlight'>position de garant</span>.</li></ul>",
        children: ["cp_stage"], parent: "droit_penal"
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
        info: "Le comportement doit être contraire au droit. Un acte n'est pas illicite s'il existe un fait justificatif (Légitime défense, état de nécessité, consentement de la victime).",
        children: ["cp_randonnee"], parent: "droit_penal"
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
        info: "C'est le reproche personnel à l'auteur (pas de peine sans culpabilité). Se manifeste sous deux formes : l'intention (inclut le dol éventuel) et la négligence.",
        children: ["cp_basejump", "cp_bonnepom"], parent: "droit_penal"
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
        info: "Capacité d'apprécier le caractère illicite. Comprend l'irresponsabilité (trouble mental) et la responsabilité de l'entreprise (art. 102 CP).",
        children: ["cp_demence", "cp_bonus_roland"], parent: "droit_penal"
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
    penal_sanction: {
        title: "La sanction",
        info: "La conséquence juridique d'une infraction. Elle se divise en peines (pécuniaire, TIG, prison) et en mesures (thérapeutiques, internement).",
        children: [], parent: "droit_penal"
    },
    penal_infractions: {
        title: "Les infractions",
        info: "Le Code pénal classe les infractions en trois catégories selon leur gravité : Crime (> 3 ans), Délit (max 3 ans), Contravention (amende).",
        children: [], parent: "droit_penal"
    },
    penal_procedure: {
        title: "La procédure pénale",
        info: "L'ensemble des règles fixant le déroulement de la poursuite et du jugement des auteurs d'infractions.",
        children: ["procedure_notions", "procedure_deroulement", "cp_patron_soupe"],
        parent: "droit_penal"
    },
    procedure_notions: {
        title: "Les notions générales",
        info: "Principes directeurs de la procédure : poursuite d'office vs sur plainte, présomption d'innocence, In dubio pro reo.",
        children: [], parent: "penal_procedure"
    },
    procedure_deroulement: {
        title: "Le déroulement de la procédure",
        info: "Procédure préliminaire (Ministère public), procédure de première instance (Tribunal), voies de recours, exécution.",
        children: [], parent: "penal_procedure"
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

    // --- 6.4 LE DROIT INTERNATIONAL PUBLIC ---
    droit_inter_public: {
        title: "Le droit international public",
        info: "Branche du droit qui régit les relations entre les différents acteurs de la communauté internationale.",
        children: ["inter_definition", "inter_conventions", "inter_relation"],
        parent: "public"
    },
    inter_definition: {
        title: "Définition et notion",
        info: "Le droit international public régit les relations entre les <strong>sujets de droit international</strong> (États et organisations internationales).",
        children: [], parent: "droit_inter_public"
    },
    inter_conventions: {
        title: "Les conventions internationales",
        info: "Aussi appelées <strong>traités</strong> (Pacta sunt servanda, Bilatéral/Multilatéral, Ratification).",
        children: [], parent: "droit_inter_public"
    },
    inter_relation: {
        title: "Relation avec le droit interne",
        info: "Système moniste, primauté du droit international (Art. 5 Cst), Jus Cogens (normes impératives internationales).",
        children: [], parent: "droit_inter_public"
    },

    // --- 7. LE DROIT PRIVÉ ---
    droit_prive_pt7: {
        title: "7. Le droit privé",
        info: "Cette section aborde les fondements des relations juridiques entre particuliers.",
        children: ["autonomie_volonte", "droit_personnes", "droit_successions", "droits_reels", "procedure_civile", "droit_inter_prive", "arbitrage"],
        parent: "root" 
    },
    autonomie_volonte: {
        title: "L'autonomie de la volonté",
        info: "C'est le principe fondamental et le moteur du droit privé. Liberté contractuelle, ses limites (nullité absolue), protection de la partie faible.",
        children: [], parent: "droit_prive_pt7"
    },
    droit_personnes: {
        title: "Le droit des personnes",
        info: "Détermine qui peut être sujet de droits et d'obligations.",
        children: ["debut_fin_pers", "jouissance_exercice", "domicile", "protection_pers", "personnes_morales_structures"],
        parent: "droit_prive_pt7"
    },
    debut_fin_pers: {
        title: "Le début et la fin de la personnalité",
        info: "Début = naissance accomplie de l'enfant vivant. Fin = mort.",
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
        info: "Jouissance = aptitude à avoir des droits. Exercice = aptitude à agir par soi-même (majeur + discernement).",
        children: ["cp_frere_jean"], parent: "droit_personnes" /* Link already created above in Sujets de Droit, keeping structure logical */
    },
    domicile: {
        title: "Le domicile",
        info: "Le lieu où l'on réside avec l'intention de s'y établir.",
        children: [], parent: "droit_personnes"
    },
    protection_pers: {
        title: "La protection de la personnalité",
        info: "Protection contre soi-même (engagements excessifs) et contre les tiers (atteintes illicites).",
        children: ["prot_soimeme", "prot_tiers", "cp_presse"], parent: "droit_personnes"
    },
    prot_soimeme: {
        title: "Protection contre soi-même",
        info: "Nul ne peut aliéner sa liberté.",
        children: [], parent: "protection_pers"
    },
    prot_tiers: {
        title: "Protection contre les tiers",
        info: "Action contre les atteintes illicites.",
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
    personnes_morales_structures: {
        title: "Personnes morales et structures d'entreprises",
        info: "Association, Fondation, Entreprise individuelle, Sociétés de personnes (SS, SNC, SCom, SCoop), Sociétés de capitaux (SA, Sàrl).",
        children: ["cp_amis_recolte", "cp_entrepreneuriat", "cp_manon"], parent: "droit_personnes"
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

    droit_successions: {
        title: "Le droit des successions",
        info: "Règle le sort du patrimoine après le décès.",
        children: ["succ_legale", "succ_volontaire", "succ_devolution"],
        parent: "droit_prive_pt7" 
    },
    succ_legale: {
        title: "La succession légale",
        info: "Par défaut, s'il n'y a pas de testament. Système des parentèles.",
        children: ["cp_succ_lucienne"], parent: "droit_successions"
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
    succ_volontaire: {
        title: "La succession volontaire",
        info: "Formes (testament, pacte) et limites (la réserve).",
        children: ["cp_succ_rey", "cp_succ_maxime"], parent: "droit_successions"
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
    succ_devolution: {
        title: "La dévolution",
        info: "L'ouverture, l'acquisition de plein droit, et la répudiation.",
        children: [], parent: "droit_successions"
    },

    droits_reels: {
        title: "Les droits réels",
        info: "Maîtrise juridique sur les choses. Propriété, droits réels restreints, possession.",
        children: ["propriete_commune", "reels_restreints", "reels_acquisition_perte"],
        parent: "droit_prive_pt7" 
    },
    propriete_commune: {
        title: "Propriété en commun",
        info: "Copropriété et propriété commune.",
        children: ["cp_voiture_vacances"], parent: "droits_reels"
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
    reels_restreints: {
        title: "Les droits réels restreints",
        info: "Servitudes, charges foncières, droit de gage.",
        children: ["cp_bois_sarl"], parent: "droits_reels"
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
    reels_acquisition_perte: {
        title: "Acquisition et Perte de la propriété",
        info: "Moyens originaires et dérivés pour acquérir (Tradition, RF, etc.).",
        children: ["cp_acquisition_prop"], parent: "droits_reels"
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

    procedure_civile: {
        title: "La procédure civile",
        info: "Déroulement des procès de droit privé.",
        children: ["proc_civ_competence", "proc_civ_deroulement", "proc_civ_execution", "cp_scooter_global"],
        parent: "droit_prive_pt7" 
    },
    proc_civ_competence: {
        title: "La compétence du tribunal",
        info: "Territoriale (Le For) et Matérielle (Valeur litigieuse).",
        children: [], parent: "procedure_civile"
    },
    proc_civ_deroulement: {
        title: "Le déroulement de la procédure",
        info: "Conciliation, première instance, recours.",
        children: [], parent: "procedure_civile"
    },
    proc_civ_execution: {
        title: "Le régime de l'exécution forcée",
        info: "Mise en œuvre du jugement (LP pour l'argent).",
        children: [], parent: "procedure_civile"
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

    droit_inter_prive: {
        title: "Le droit international privé",
        info: "Conflits de lois et juridictions (LDIP).",
        children: ["dip_trois_questions", "cp_achats_internet"],
        parent: "droit_prive_pt7"
    },
    dip_trois_questions: {
        title: "Les 3 questions (Compétence, Droit, Exécution)",
        info: "Les 3 étapes d'analyse d'un litige international.",
        children: [], parent: "droit_inter_prive"
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

    arbitrage: {
        title: "L'arbitrage",
        info: "Résolution extrajudiciaire.",
        children: ["arbitrage_convention", "cp_pacha"],
        parent: "droit_prive_pt7"
    },
    arbitrage_convention: {
        title: "Clause compromissoire et caractéristiques",
        info: "Consentement mutuel, huis clos, expertise, coût.",
        children: [], parent: "arbitrage"
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

    // --- 8. LE DROIT DES OBLIGATIONS ---
    droit_obligations: {
        title: "8. Le droit des obligations",
        info: "Cette branche fondamentale du droit privé régit les relations juridiques entre créanciers et débiteurs. Elle est principalement codifiée dans le Code des obligations (CO).",
        children: ["ob_definition", "ob_prestation", "ob_sources"],
        parent: "root"
    },
    ob_definition: {
        title: "Définition et notion d'obligation",
        info: "Lien juridique entre un créancier (exige) et un débiteur (exécute).",
        children: [], parent: "droit_obligations"
    },
    ob_prestation: {
        title: "La prestation",
        info: "Objet de l'obligation : Prestation positive (donner, faire) ou négative (ne pas faire, tolérer).",
        children: [], parent: "droit_obligations"
    },
    ob_sources: {
        title: "Les sources des obligations",
        info: "Contrat, Acte illicite, Enrichissement illégitime.",
        children: [], parent: "droit_obligations"
    },
    
    // --- 9. LES SOURCES DES OBLIGATIONS ---
    sources_obligations_titre9: {
        title: "9. Les sources des obligations",
        info: "Ce chapitre traite des différentes causes juridiques qui donnent naissance à une obligation entre deux ou plusieurs personnes.",
        children: ["so_notion", "so_volontaires", "so_legales"],
        parent: "root"
    },
    so_notion: {
        title: "Notion",
        info: "Sources volontaires vs légales.",
        children: [], parent: "sources_obligations_titre9"
    },
    so_volontaires: {
        title: "Les sources volontaires d'obligation",
        info: "Le contrat, l'acte unilatéral, les quasi-contrats.",
        children: [], parent: "sources_obligations_titre9"
    },
    so_legales: {
        title: "Les sources légales",
        info: "La loi impose des obligations. Acte illicite, enrichissement illégitime.",
        children: [], parent: "sources_obligations_titre9"
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
    oc_definition_classification: {
        title: "Définition et classification",
        info: "Le contrat se définit comme l'échange de deux ou plusieurs manifestations de volonté concordantes.",
        children: [], parent: "obligations_contractuelles_titre10"
    },
    oc_autonomie: {
        title: "L'autonomie de la volonté",
        info: "Cinq droits essentiels (contracter, partenaire, forme, annuler, contenu).",
        children: [], parent: "obligations_contractuelles_titre10"
    },
    oc_conclusion: {
        title: "La conclusion du contrat",
        info: "Offre (irrévocable) + Acceptation (silence != acceptation). Contrats d'adhésion soumis au contrôle.",
        children: [], parent: "obligations_contractuelles_titre10"
    },
    oc_icc: {
        title: "Interprétation, complètement et correction",
        info: "Principe de la confiance. Théorie de l'imprévision.",
        children: [], parent: "obligations_contractuelles_titre10"
    },
    oc_forme: {
        title: "La forme du contrat",
        info: "Principe du consensualisme. Sanction = Nullité absolue.",
        children: [], parent: "obligations_contractuelles_titre10"
    },
    oc_objet: {
        title: "L'objet du contrat",
        info: "Limites: Impossible, illicite, immoral. Sanction: Nullité absolue (parfois partielle).",
        children: [], parent: "obligations_contractuelles_titre10"
    },
    oc_vices: {
        title: "Les vices du contrat",
        info: "Erreur essentielle, Dol, Crainte fondée. + La lésion (exploitation d'une faiblesse). Contrat annulable (délai 1 an).",
        children: [], parent: "obligations_contractuelles_titre10"
    },
    oc_representation: {
        title: "La représentation",
        info: "Agir au nom d'un autre. Sans pouvoirs = pseudocontractant non lié sauf ratification.",
        children: [], parent: "obligations_contractuelles_titre10"
    },
    oc_stipulation: {
        title: "La stipulation pour autrui",
        info: "Imparfaite ou Parfaite.",
        children: [], parent: "obligations_contractuelles_titre10"
    },
    oc_suretes: {
        title: "Les sûretés personnelles",
        info: "Cautionnement (strictement accessoire) vs Porte-fort (indépendant).",
        children: [], parent: "obligations_contractuelles_titre10"
    },
    oc_subrogation: {
        title: "La subrogation",
        info: "Le transfert légal de la créance.",
        children: [], parent: "obligations_contractuelles_titre10"
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
    rc_notion: {
        title: "Notion",
        info: "3 conditions générales : préjudice, causalité, illicéité + titre (faute ou loi).",
        children: [], parent: "rc_titre11"
    },
    rc_prejudice: {
        title: "Le préjudice",
        info: "Dommage (perte effective / gain manqué) et Tort moral.",
        children: [], parent: "rc_titre11"
    },
    rc_causalite: {
        title: "Le rapport de causalité",
        info: "Naturelle et adéquate. Interruption possible.",
        children: [], parent: "rc_titre11"
    },
    rc_illiceite: {
        title: "L'illicéité",
        info: "Par résultat (droit absolu) ou comportement (norme protectrice). Faits justificatifs.",
        children: [], parent: "rc_titre11"
    },
    rc_faute: {
        title: "La faute, condition de la responsabilité subjective",
        info: "Manquement de la volonté. Intention ou négligence.",
        children: [], parent: "rc_titre11"
    },
    rc_objective: {
        title: "La responsabilité objective",
        info: "Indépendante de la faute. Employeur (preuves libératoires), Ouvrage, Produits (LRFP).",
        children: [], parent: "rc_titre11"
    },
    rc_reparation: {
        title: "La réparation du préjudice",
        info: "Réduction possible selon la gravité. Cas de lésions ou décès.",
        children: [], parent: "rc_titre11"
    },
    rc_pluralite: {
        title: "La pluralité de responsables",
        info: "Solidarité parfaite (faute commune) ou imparfaite (titres différents).",
        children: [], parent: "rc_titre11"
    },
    rc_prescription: {
        title: "La prescription (RC)",
        info: "Relatif 3 ans. Absolu 10 ans (20 ans si mort/lésion).",
        children: [], parent: "rc_titre11"
    },

    // --- 12. LA RESPONSABILITÉ CONTRACTUELLE ---
    rc_contractuelle_titre12: {
        title: "12. La responsabilité contractuelle",
        info: "Obligation de réparer le préjudice causé par la violation d'un contrat (Art. 97 à 101 CO).",
        children: ["rcc_notion", "rcc_conditions", "rcc_prescription"],
        parent: "root"
    },
    rcc_notion: {
        title: "Notion",
        info: "Les parties sont liées par une relation juridique préalable.",
        children: [], parent: "rc_contractuelle_titre12"
    },
    rcc_conditions: {
        title: "Les conditions",
        info: "Quatre conditions cumulatives. <strong>La faute est présumée.</strong>",
        children: [], parent: "rc_contractuelle_titre12"
    },
    rcc_prescription: {
        title: "La prescription",
        info: "Délai ordinaire de 10 ans. 5 ans pour loyers/artisans/médecins.",
        children: [], parent: "rc_contractuelle_titre12"
    },

    // --- 13. L'ENRICHISSEMENT ILLÉGITIME ---
    enrichissement_illegitime_titre13: {
        title: "13. L'enrichissement illégitime",
        info: "Restituer un avantage patrimonial acquis sans cause juridique valable (art. 62 à 67 CO).",
        children: ["ei_notion", "ei_conditions", "ei_restitution", "ei_prescription"],
        parent: "root"
    },
    ei_notion: {
        title: "Notion",
        info: "Règles subsidiaires.",
        children: [], parent: "enrichissement_illegitime_titre13"
    },
    ei_conditions: {
        title: "Les conditions",
        info: "Enrichissement, appauvrissement, connexité, absence de cause valable.",
        children: [], parent: "enrichissement_illegitime_titre13"
    },
    ei_restitution: {
        title: "La restitution",
        info: "Remboursement des impenses (nécessaires, utiles).",
        children: [], parent: "enrichissement_illegitime_titre13"
    },
    ei_prescription: {
        title: "La prescription (EI)",
        info: "Relatif 3 ans, Absolu 10 ans.",
        children: [], parent: "enrichissement_illegitime_titre13"
    },

    // --- 14. LES MODALITÉS DES OBLIGATIONS ---
    modalites_obligations_titre14: {
        title: "14. Les modalités des obligations",
        info: "Situation où une obligation s'écarte du modèle de base.",
        children: [
            "mo_pluralite_debiteurs", "mo_pluralite_creanciers", "mo_obligations_conditionnelles", "mo_clause_arrhes_dedit"
        ],
        parent: "root"
    },
    mo_pluralite_debiteurs: {
        title: "La pluralité de débiteurs",
        info: "Solidarité passive (ne se présume pas).",
        children: [], parent: "modalites_obligations_titre14"
    },
    mo_pluralite_creanciers: {
        title: "La pluralité de créanciers",
        info: "Solidarité active.",
        children: [], parent: "modalites_obligations_titre14"
    },
    mo_obligations_conditionnelles: {
        title: "Les obligations conditionnelles",
        info: "Événement incertain. Suspensive ou Résolutoire.",
        children: [], parent: "modalites_obligations_titre14"
    },
    mo_clause_arrhes_dedit: {
        title: "La clause pénale, les arrhes et le dédit",
        info: "Clause pénale: Juge doit réduire si excessif. Dédit réel (restitué au double).",
        children: [], parent: "modalites_obligations_titre14"
    },

    // --- 15. LA TRANSMISSION DES OBLIGATIONS ---
    transmission_obligations_titre15: {
        title: "15. La transmission des obligations",
        info: "Transfert à un tiers (Cession / Reprise).",
        children: ["to_cession_creance", "to_reprise_dette"],
        parent: "root"
    },
    to_cession_creance: {
        title: "La cession de créance",
        info: "Ne nécessite aucune intervention du débiteur. Forme écrite obligatoire.",
        children: [], parent: "transmission_obligations_titre15"
    },
    to_reprise_dette: {
        title: "La reprise de dette",
        info: "Reprise interne vs externe. Reprise cumulative (adjonction d'un débiteur).",
        children: [], parent: "transmission_obligations_titre15"
    },

    // --- 16. L'EXÉCUTION DES OBLIGATIONS ---
    exec_obligations_titre16: {
        title: "16. L'exécution des obligations",
        info: "Lieu, Moment, Preuve, et Demeure.",
        children: ["eo_lieu_moment", "eo_demeure_creancier", "eo_demeure_debiteur"],
        parent: "root"
    },
    eo_lieu_moment: {
        title: "Lieu et Moment",
        info: "Dettes portables vs quérables. Exécution immédiate = principe. Contrats bilatéraux (exception d'inexécution).",
        children: [], parent: "exec_obligations_titre16"
    },
    eo_demeure_creancier: {
        title: "La demeure du créancier",
        info: "Le créancier refuse de recevoir. Assumation des risques de la chose.",
        children: [], parent: "exec_obligations_titre16"
    },
    eo_demeure_debiteur: {
        title: "La demeure du débiteur",
        info: "Retard. Demeure simple vs Demeure qualifiée (délai de grâce nécessaire, résolution possible).",
        children: [], parent: "exec_obligations_titre16"
    },

    // --- 17. L'EXTINCTION DES OBLIGATIONS ---
    extinction_obligations_titre17: {
        title: "17. L'extinction des obligations",
        info: "Causes d'extinction hors exécution.",
        children: [
            "eo_ext_causes"
        ],
        parent: "root"
    },
    eo_ext_causes: {
        title: "Les différentes causes",
        info: "Remise de dette (contrat). Novation (présomption contre). Confusion (réunion des qualités). Impossibilité subséquente. Compensation. Prescription.",
        children: [], parent: "extinction_obligations_titre17"
    }

};

// ============================================
// APP LOGIC
// ============================================

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
        // Rend chaque élément du chemin cliquable
        if (index === path.length - 1) {
            bcHtml += `<span class="breadcrumb-current" onclick="renderTopic('${p.id}')" style="cursor: pointer;">${p.title}</span>`;
        } else {
            bcHtml += `<span class="breadcrumb-link" onclick="renderTopic('${p.id}')">${p.title}</span>`;
        }
    });

    breadcrumb.innerHTML = bcHtml;

    let html = ``; 

    // --- LOGIQUE POUR LES BOUTONS PRÉCÉDENT / SUIVANT (TOUT EN HAUT) ---
    if (id !== 'root' && id !== 'bibliographie') {
        const parentId = topic.parent;
        const parentTopic = courseData[parentId];
        
        if (parentTopic && parentTopic.children) {
            const currentIndex = parentTopic.children.indexOf(id);
            let prevId = null;
            let nextId = null;

            if (currentIndex > 0) {
                prevId = parentTopic.children[currentIndex - 1];
            } else {
                prevId = parentId;
            }

            if (topic.children && topic.children.length > 0) {
                nextId = topic.children[0];
            } else if (currentIndex < parentTopic.children.length - 1) {
                nextId = parentTopic.children[currentIndex + 1];
            } else {
                let tempParentId = parentId;
                
                while(tempParentId && tempParentId !== 'root') {
                    let gpTopic = courseData[courseData[tempParentId].parent];
                    if(gpTopic && gpTopic.children) {
                        let pIndex = gpTopic.children.indexOf(tempParentId);
                        if(pIndex < gpTopic.children.length - 1) {
                            nextId = gpTopic.children[pIndex + 1];
                            break; 
                        }
                    }
                    tempParentId = courseData[tempParentId].parent;
                }
            }

            if (prevId || nextId) {
                html += `<div class="navigation-buttons" style="margin-top: 0; margin-bottom: 20px; padding-top: 0; border-top: none; border-bottom: 2px solid var(--border); padding-bottom: 20px;">`;
                
                if (prevId && prevId !== 'root') {
                    html += `
                        <div class="nav-btn nav-btn-prev" onclick="renderTopic('${prevId}')">
                            <span>◀︎ Précédent</span>
                            ${courseData[prevId].title}
                        </div>`;
                } else {
                    html += `<div></div>`; 
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
    
    // 4. Sur mobile, fermer le menu automatiquement
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('active')) {
        toggleMobileSidebar();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- GESTION DU BOUTON RETOUR ---
window.addEventListener('popstate', (event) => {
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

renderSidebar();

const urlParams = new URLSearchParams(window.location.search);
const initialTopic = urlParams.get('topic') || 'root';

history.replaceState({ topicId: initialTopic }, courseData[initialTopic]?.title || "Accueil", "?topic=" + initialTopic);
renderTopic(initialTopic, false);
