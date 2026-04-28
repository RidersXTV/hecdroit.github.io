// BASE DE DONNÉES COMPLÈTE DU COURS
const courseData = {
    root: {
        title: "Sommaire Général",
        info: "Sélectionnez une des grandes branches du cours de Droit de l'entreprise pour commencer vos révisions.",
        children: ["notion", "sujets", "regle", "sources", "divisions", "entreprise", "obligations"]
    },
    
    // --- 1. NOTION ET FONCTION ---
    notion: {
        title: "1. Notion et fonction du droit",
        info: "Le droit a pour fonction de pacifier la société, de garantir l'ordre et d'assurer la prévisibilité.",
        children: ["droit_objectif", "droit_subjectif"],
        parent: "root"
    },
    droit_objectif: {
        title: "Droit Objectif",
        info: "C'est 'LE' Droit. L'ensemble des règles de conduite générales et abstraites.",
        children: [], parent: "notion"
    },
    droit_subjectif: {
        title: "Droit Subjectif",
        info: "Ce sont 'LES' droits. Prérogative reconnue à une personne (ex: droit de propriété).",
        children: [], parent: "notion"
    },

    // --- 2. LES SUJETS DE DROIT ---
    sujets: {
        title: "2. Les sujets de droit",
        info: "Entités aptes à avoir des droits et des obligations.",
        children: ["personnes_physiques", "personnes_morales"],
        parent: "root"
    },
    personnes_physiques: {
        title: "Personnes Physiques",
        info: "Êtres humains. Requiert la jouissance et l'exercice des droits civils.",
        children: [], parent: "sujets"
    },
    personnes_morales: {
        title: "Personnes Morales",
        info: "Fictions juridiques (SA, Sàrl) agissant par leurs organes.",
        children: [], parent: "sujets"
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
