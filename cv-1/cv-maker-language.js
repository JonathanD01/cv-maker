var CURRENT_LANGUAGE = localStorage.getItem('language') || 'en';


const translations = {
    en: {
        languageText: "Language",
        languageSelectorText: "Select a language",
        fullName: "FULL NAME",
        educationTitle: "Education",
        competenceTitle: "Competence Overview",
        workHistoryTitle: "Work History",
        projectsTitle: "Projects",
        removeButtonText: "Remove",
        invalidInputMessage: "Invalid input",
        placeholderUrl: "<Username> <Link>",
        placeholderTitle: "<Title> <Link>",
        placeholderEmail: "<Email>",
        placeholderPhone: "<Phone>",
        newSectionText: "New section (click to edit name)",
        newSectionShortText: "New section",
        newSchoolText: "New school",
        phdText: "PhD",
        addMoreText: "Add more",
        addEmailText: "Email",
        addPhoneText: "Mobile",
        removeText: "Remove",
        newLineButton: "New line",
        defaultBulletPoint: "Lorem ipsum dolor sit amet",
        addUrlBtn: "Add Url",
        addEmailBtn: "Add Email",
        addPhoneBtn: "Add Mobile",
        toggleEducationBtn: 'Show / Hide "Education"',
        toggleCompetenceBtn: 'Show / Hide "Competence Overview"',
        toggleWorkHistoryBtn: 'Show / Hide "Work History"',
        toggleProjectsBtn: 'Show / Hide "Projects"',
        addSchoolBtn: "Add School",
        addCompetenceBtn: "Add Competence",
        addWorkHistoryBtn: "Add Work History",
        addProjectBtn: "Add Project"
    },
    no: {
        languageText: "Språk",
        languageSelectorText: "Velg et språk",
        fullName: "FULLT NAVN",
        educationTitle: "Utdanning",
        competenceTitle: "Kompetanseoversikt",
        workHistoryTitle: "Arbeidshistorikk",
        projectsTitle: "Prosjekter",
        removeButtonText: "Fjern",
        invalidInputMessage: "Ugyldig innhold",
        placeholderUrl: "<Brukernavn> <Lenke>",
        placeholderTitle: "<Tittel> <Lenke>",
        placeholderEmail: "<Epost>",
        placeholderPhone: "<Telefon>",
        newSectionText: "Ny seksjon (trykk for å endre navn)",
        newSectionShortText: "Ny seksjon",
        newSchoolText: "Ny skole",
        phdText: "Phd",
        addMoreText: "Legg til mer",
        addEmailText: "Epost",
        addPhoneText: "Mobil",
        removeText: "Fjern",
        newLineButton: "Ny linje",
        defaultBulletPoint: "Lorem ipsum dolor sit amet",
        addUrlBtn: "Legg til Url",
        addEmailBtn: "Legg til Epost",
        addPhoneBtn: "Legg til Mobil",
        toggleEducationBtn: 'Vis / Gjem "Utdanning"',
        toggleCompetenceBtn: 'Vis / Gjem "Kompetanseoversikt"',
        toggleWorkHistoryBtn: 'Vis / Gjem "Arbeidshistorikk"',
        toggleProjectsBtn: 'Vis / Gjem "Prosjekter"',
        addSchoolBtn: "Legg til skole",
        addCompetenceBtn: "Legg til ny kompetanse",
        addWorkHistoryBtn: "Legg til ny arbeidshistorikk",
        addProjectBtn: "Legg til nytt prosjekt"
    },
    es: {
        languageText: "Idioma",
        languageSelectorText: "Selecciona un idioma",
        fullName: "NOMBRE COMPLETO",
        educationTitle: "Educación",
        competenceTitle: "Resumen de Competencias",
        workHistoryTitle: "Historial Laboral",
        projectsTitle: "Proyectos",
        removeButtonText: "Eliminar",
        invalidInputMessage: "Entrada inválida",
        placeholderUrl: "<Nombre de usuario> <Enlace>",
        placeholderTitle: "<Título> <Enlace>",
        placeholderEmail: "<Correo electrónico>",
        placeholderPhone: "<Teléfono>",
        newSectionText: "Nueva sección (haga clic para editar el nombre)",
        newSectionShortText: "Nueva sección",
        newSchoolText: "Nueva escuela",
        phdText: "Doctorado",
        addMoreText: "Añadir más",
        addEmailText: "Correo electrónico",
        addPhoneText: "Móvil",
        removeText: "Eliminar",
        newLineButton: "Nueva línea",
        defaultBulletPoint: "Lorem ipsum dolor sit amet",
        addUrlBtn: "Agregar URL",
        addEmailBtn: "Agregar Correo",
        addPhoneBtn: "Agregar Teléfono",
        toggleEducationBtn: 'Mostrar / Ocultar "Educación"',
        toggleCompetenceBtn: 'Mostrar / Ocultar "Resumen de Competencias"',
        toggleWorkHistoryBtn: 'Mostrar / Ocultar "Historial Laboral"',
        toggleProjectsBtn: 'Mostrar / Ocultar "Proyectos"',
        addSchoolBtn: "Agregar Escuela",
        addCompetenceBtn: "Agregar Competencia",
        addWorkHistoryBtn: "Agregar Historial Laboral",
        addProjectBtn: "Agregar Proyecto"
    },
    fr: {
        languageText: "Langue",
        languageSelectorText: "Sélectionnez une langue",
        fullName: "NOM COMPLET",
        educationTitle: "Éducation",
        competenceTitle: "Résumé des compétences",
        workHistoryTitle: "Historique de travail",
        projectsTitle: "Projets",
        removeButtonText: "Supprimer",
        invalidInputMessage: "Entrée non valide",
        placeholderUrl: "<Nom d'utilisateur> <Lien>",
        placeholderTitle: "<Titre> <Lien>",
        placeholderEmail: "<E-mail>",
        placeholderPhone: "<Téléphone>",
        newSectionText: "Nouvelle section (cliquez pour modifier le nom)",
        newSectionShortText: "Nouvelle section",
        newSchoolText: "Nouvelle école",
        phdText: "Doctorat",
        addMoreText: "Ajouter plus",
        addEmailText: "E-mail",
        addPhoneText: "Mobile",
        removeText: "Supprimer",
        newLineButton: "Nouvelle ligne",
        defaultBulletPoint: "Lorem ipsum dolor sit amet",
        addUrlBtn: "Ajouter une URL",
        addEmailBtn: "Ajouter un Email",
        addPhoneBtn: "Ajouter un Téléphone",
        toggleEducationBtn: 'Afficher / Masquer "Éducation"',
        toggleCompetenceBtn: 'Afficher / Masquer "Résumé des compétences"',
        toggleWorkHistoryBtn: 'Afficher / Masquer "Historique de travail"',
        toggleProjectsBtn: 'Afficher / Masquer "Projets"',
        addSchoolBtn: "Ajouter une École",
        addCompetenceBtn: "Ajouter une Compétence",
        addWorkHistoryBtn: "Ajouter un Historique de Travail",
        addProjectBtn: "Ajouter un Projet"
    }
};

function changeLanguage(language) {
    CURRENT_LANGUAGE = language;
    localStorage.setItem('language', language);

    document.getElementById('language-selector-text').textContent = translations[CURRENT_LANGUAGE].languageSelectorText;

    document.getElementById('full-name').textContent = translations[CURRENT_LANGUAGE].fullName;
    document.getElementById('education-title').textContent = translations[CURRENT_LANGUAGE].educationTitle;
    document.getElementById('competence-title').textContent = translations[CURRENT_LANGUAGE].competenceTitle;
    document.getElementById('work-history-title').textContent = translations[CURRENT_LANGUAGE].workHistoryTitle;
    document.getElementById('projects-title').textContent = translations[CURRENT_LANGUAGE].projectsTitle;
    document.getElementById('new-section-btn').textContent = translations[CURRENT_LANGUAGE].newSectionShortText;

    document.getElementById('add-url-btn').textContent = translations[CURRENT_LANGUAGE].addUrlBtn;
    document.getElementById('add-email-btn').textContent = translations[CURRENT_LANGUAGE].addEmailBtn;
    document.getElementById('add-phone-btn').textContent = translations[CURRENT_LANGUAGE].addPhoneBtn;
    document.getElementById('toggle-education-btn').textContent = translations[CURRENT_LANGUAGE].toggleEducationBtn;
    document.getElementById('toggle-competence-btn').textContent = translations[CURRENT_LANGUAGE].toggleCompetenceBtn;
    document.getElementById('toggle-work-history-btn').textContent = translations[CURRENT_LANGUAGE].toggleWorkHistoryBtn;
    document.getElementById('toggle-projects-btn').textContent = translations[CURRENT_LANGUAGE].toggleProjectsBtn;

    document.getElementById('add-school-btn').textContent = translations[CURRENT_LANGUAGE].addSchoolBtn;
    document.getElementById('add-competence-btn').textContent = translations[CURRENT_LANGUAGE].addCompetenceBtn;
    document.getElementById('add-work-history-btn').textContent = translations[CURRENT_LANGUAGE].addWorkHistoryBtn;
    document.getElementById('add-project-btn').textContent = translations[CURRENT_LANGUAGE].addProjectBtn;


    document.querySelectorAll('.btn-danger').forEach(button => button.textContent = translations[CURRENT_LANGUAGE].removeButtonText);
    document.querySelectorAll('.btn-new-line').forEach(button => button.textContent = translations[CURRENT_LANGUAGE].newLineButton);
    document.querySelectorAll('.btn-add-more').forEach(button => button.textContent = translations[CURRENT_LANGUAGE].addMoreText);
}