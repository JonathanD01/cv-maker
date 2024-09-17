const DEBUG = true;
const STORAGE_KEY = "content-cv-1";

function createEditableElement(editableElementId, placeholder, validationFn, formatFn) {
	const editableDivElement = document.createElement("div");
	editableDivElement.classList.add("action-grid");
	if (editableElementId) {
		editableDivElement.setAttribute("id", editableElementId);
	}

	const editableSpan = document.createElement("span");
	editableSpan.setAttribute("contenteditable", "true");
	editableSpan.textContent = placeholder;

	const removeButton = createButton(activeLanguage().removeButtonText, "btn-danger", () => deleteParentElement(removeButton));
	editableDivElement.appendChild(editableSpan);
	editableDivElement.appendChild(removeButton);

	editableSpan.addEventListener("blur", (event) => {
		const content = event.target.textContent.trim();
		if (!validationFn(content) && !DEBUG) {
			alert(activeLanguage().invalidInputMessage);
			return;
		}
		formatFn(editableSpan, content);
	}, false);

	return editableDivElement;
}

function createButton(text, className, onClick) {
	const button = document.createElement("button");
	button.classList.add("print-hidden", className);
	button.textContent = text;
	button.onclick = onClick;
	return button;
}

function appendEditableElement(editableElementId, containerId, placeholder, cssList, validationFn, formatFn) {
	const container = document.getElementById(containerId);
	const editableElement = createEditableElement(editableElementId, placeholder, validationFn, formatFn);
	if (cssList) {
		editableElement.classList.add(...[cssList]);
	}
	container.appendChild(editableElement);
}

function validateUrl(content) {
	const parts = content.split(/\s+/);
	return parts.length === 2 && isValidHttpUrl(parts[1]);
}

function formatUrlElement(element, content) {
	const [username, url] = content.split(/\s+/);
	const domain = getDomainFromUrl(url);
	element.innerHTML = `<a href="${url}" target="_blank">${username} | ${domain}</a>`;
	element.setAttribute("contenteditable", "false");
}

function validateEmail(email) {
	return email.includes("@");
}

function formatEmailElement(element, email) {
	element.innerHTML = `<span contenteditable="true">${activeLanguage().addEmailText}: </span><a href="mailto:${email}" target="_blank">${email}</a>`;
	element.setAttribute("contenteditable", "false");
}

function validatePhone(phone) {
	return phone.length >= 8;
}

function formatPhoneElement(element, phone) {
	element.innerHTML = `<span contenteditable="true">${activeLanguage().addPhoneText}: </span><a href="tel:${phone}" target="_blank">${phone}</a>`;
	element.setAttribute("contenteditable", "false");
}

function addUrl() {
	appendEditableElement(null, "urls", activeLanguage().placeholderUrl, null, validateUrl, formatUrlElement);
}

function addEmail() {
	appendEditableElement(null, "email", activeLanguage().placeholderEmail, ["content-end"], validateEmail, formatEmailElement);
}

function addPhone() {
	appendEditableElement(null, "phone", activeLanguage().placeholderPhone, ["content-end"], validatePhone, formatPhoneElement);
}

function addNewSchool() {
	document.getElementById("schools").innerHTML += `
		<div class="even-grid">
			<div>
				<span class="block bold" contenteditable="true">${activeLanguage().newSchoolText}</span>
				<span class="block" contenteditable="true">${activeLanguage().phdText}</span>
			</div>
			<div class="text-right">
				<span class="block" contenteditable="true">Germany</span>
				<span class="block bold"><span contenteditable="true">2014</span> - <span contenteditable="true">2016</span></span>
				<button class="print-hidden btn-danger" onclick="deleteParentElement(this.parentElement)">${activeLanguage().removeText}</button>
			</div>
		</div>`;
}

function addCompetenceOverviewItem() {
	document.getElementById("competense-overview-items").innerHTML += `
		<div class="item">
			<dt><span contenteditable="true">${activeLanguage().languageText}</span></dt>
			<dd><span contenteditable="true">Java, Python, Javascript</span></dd>
			<button class="print-hidden btn-danger" onclick="deleteParentElement(this)">${activeLanguage().removeButtonText}</button>
		</div>`;
}

function addBulletPointSection(elementId) {
	const id = generateUUID();
	const id2 = generateUUID();

	appendEditableElement(id, elementId, activeLanguage().placeholderTitle, null, validateUrl, (editableSpan, content) => {
		const contentArray = content.split(/\s+/);
		const url = contentArray[contentArray.length - 1];
		const title = content.substring(0, content.length - url.length - 1);
		const domain = getDomainFromUrl(url);
		document.getElementById(elementId).innerHTML += `
			<div>
				<div class="even-grid">
					<div class="action-grid">
						<h3 class="block bold upper"><span contenteditable="true">${title}</span> | <a href="${url}" target="_blank">LINK</a></h3>
						<button class="print-hidden btn-danger" onclick="deleteParentElement(this.parentElement.parentElement)">${activeLanguage().removeText}</button>
						<button class="print-hidden btn-success btn-new-line" onclick="addBulletpointLine('${id2}')">${activeLanguage().newLineButton}</button>
					</div>
					<div class="text-right">
						<span class="block bold"><span contenteditable="true">2020</span> - <span contenteditable="true">2028</span></span>
					</div>
				</div>
				<ul id="${id2}" class="list-style-indent">
					<li><span contenteditable="true">${activeLanguage().defaultBulletPoint}</span><button class="print-hidden btn-danger" onclick="deleteParentElement(this)">${activeLanguage().removeText}</button></li>
				</ul>
			</div>`;
		document.getElementById(id).remove();
	});
}

function createNewSection() {
	const sectionsElement = document.getElementById("sections");

	const id = generateUUID();

	sectionsElement.innerHTML += `
	<div id="${id}-section" class="section" style="display: block;">
		<button class="print-hidden btn-danger" onclick="deleteParentElement(this)">${activeLanguage().removeText}</button>
		<h2 id="${id}-title" contenteditable="true" class="text-center">${activeLanguage().newSectionText}</h2>
		<button id="add-${id}-btn" class="print-hidden btn-success btn-add-more" onclick="addBulletPointSection('${id}')">
		${activeLanguage().addMoreText}</button>
		<div id="${id}"></div>
	</div>`;
}

function getDomainFromUrl(url) {
	const urlElement = document.createElement("a");
	urlElement.setAttribute("href", url);
	return urlElement.hostname;
}

function isValidHttpUrl(string) {
	string = string.replace("www.", "");
	try {
		const newUrl = new URL(string);
		return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
	} catch {
		return false;
	}
}

function deleteParentElement(element) {
	element.parentElement.remove();
}

function addBulletpointLine(id) {
	document.getElementById(id).innerHTML += `
		<li><span contenteditable="true">Lorem ipsum dolor sit amet</span><button class="print-hidden btn-danger" onclick="deleteParentElement(this)">${activeLanguage().removeButtonText}</button></li>`;
}

function toggleElementDisplay(elementId) {
	const element = document.getElementById(elementId);
	element.style.display = element.style.display === "block" ? "none" : "block";
}

function generateUUID() {
	let d = new Date().getTime();
	let d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		let r = (d > 0 ? (d + Math.random() * 16) % 16 : (d2 + Math.random() * 16) % 16) | 0;
		d = Math.floor(d / 16);
		d2 = Math.floor(d2 / 16);
		return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
	});
}

function activeLanguage() {
	return translations[CURRENT_LANGUAGE];
}

// END ! ! ! !

// Function to save the page content to localStorage
function saveContent() {
    var bodyHTML = document.body.innerHTML;
    localStorage.setItem(STORAGE_KEY, bodyHTML);
}

// Function to retrieve and write the content from localStorage
function retrieveContent() {
    var savedContent = localStorage.getItem(STORAGE_KEY);
    if (savedContent) {
        document.body.innerHTML = savedContent;
    }
}

function updateLanguageSelect(){
	var temp = localStorage.getItem('language') || 'en';
	var mySelect = document.getElementById('language-selector');

	for(var i, j = 0; i = mySelect.options[j]; j++) {
	    if(i.value === temp) {
	        mySelect.selectedIndex = j;
	        break;
	    }
	}
}

// Retrieve content on page load if available
document.addEventListener("DOMContentLoaded", (event) => {
	changeLanguage(localStorage.getItem('language') || 'en');

    setTimeout(() => updateLanguageSelect());

    retrieveContent();

    // Periodically save the content every 30 seconds (30000 milliseconds)
	setInterval(saveContent, 1000);
});


