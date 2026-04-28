// BASE DE DONNÉES COMPLÈTE DU COURS
const courseData = {
    root: {
        title: "Sommaire Général",
        info: "Sélectionnez une des grandes branches du cours de Droit de l'entreprise pour commencer vos révisions.",
        children: ["notion", "sujets", "regle", "sources", "divisions", "entreprise", "obligations"]
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
        info: "Générale, abstraite et obligatoire.",
        children: ["regle_imperative", "regle_dispositive"],
        parent: "root"
    },
    regle_imperative: {
        title: "Règle Impérative",
        info: "On ne peut pas y déroger (Art. 19 CO).",
        children: [], parent: "regle"
    },
    regle_dispositive: {
        title: "Règle Dispositive",
        info: "S'applique si rien n'est prévu par les parties.",
        children: [], parent: "regle"
    },

    // --- 4. LES SOURCES DU DROIT ---
    sources: {
        title: "4. Les sources du droit",
        info: "Origines des règles juridiques.",
        children: ["sources_formelles", "sources_materielles"],
        parent: "root"
    },
    sources_formelles: {
        title: "Sources Formelles",
        info: "La Loi (Constitution > Lois > Ordonnances) et la Coutume.",
        children: [], parent: "sources"
    },
    sources_materielles: {
        title: "Sources Matérielles",
        info: "Jurisprudence (Tribunal Fédéral) et Doctrine.",
        children: [], parent: "sources"
    },

    // --- 5. DIVISIONS DU DROIT ---
    divisions: {
        title: "5. Les grandes divisions du droit",
        info: "Séparation selon les acteurs.",
        children: ["droit_public", "droit_prive"],
        parent: "root"
    },
    droit_public: {
        title: "Le Droit Public",
        info: "Rapports État-citoyen avec lien de subordination.",
        children: [], parent: "divisions"
    },
    droit_prive: {
        title: "Le Droit Privé",
        info: "Rapports entre particuliers sur un pied d'égalité.",
        children: [], parent: "divisions"
    },

    // --- 6. DROIT DE L'ENTREPRISE ---
    entreprise: {
        title: "6. Droit de l'entreprise",
        info: "Règles sur la création et gestion commerciale.",
        children: ["registre_commerce", "formes_juridiques"],
        parent: "root"
    },
    registre_commerce: {
        title: "Le Registre du Commerce (RC)",
        info: "Fonctions de publicité et de protection de la raison de commerce.",
        children: [], parent: "entreprise"
    },
    formes_juridiques: {
        title: "Les Formes Juridiques",
        info: "Structures d'exploitation.",
        children: ["raison_individuelle", "snc", "sa", "sarl"],
        parent: "entreprise"
    },
    raison_individuelle: {
        title: "Raison Individuelle",
        info: "Un propriétaire, responsabilité illimitée.",
        children: [], parent: "formes_juridiques"
    },
    snc: {
        title: "Société en Nom Collectif (SNC)",
        info: "Associés responsables solidairement et illimitée.",
        children: [], parent: "formes_juridiques"
    },
    sa: {
        title: "Société Anonyme (SA)",
        info: "Capital min. 100k, risque limité au capital.",
        children: [], parent: "formes_juridiques"
    },
    sarl: {
        title: "Société à Responsabilité Limitée (Sàrl)",
        info: "Capital min. 20k, risque limité au capital.",
        children: [], parent: "formes_juridiques"
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
