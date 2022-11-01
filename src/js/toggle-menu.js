const header = document.querySelector('.page-body__page-header');

const listSitesSelectButton = header.querySelector('.selector-site__button');
const listSitesSelect = header.querySelector('.selector-site__list');

const listProductsButton = header.querySelector('.header-menu__link--products');
const listProducts = header.querySelector('#listProducts');

const listDocumentationButton = header.querySelector('.header-menu__link--documents');
const listDocumentation = header.querySelector('#listDocuments');

const listCompanyButton = header.querySelector('.header-menu__link--company');
const listCompany = header.querySelector('#listCompany');


const isListOpen = function (target, targetButton) {
  if (target.classList.contains('show')) {
    target.classList.remove('show');
    targetButton.setAttribute('aria-expanded', 'false');
    targetButton.classList.add('collapsed');
  }
};

const closeAllMenu = function () {
  isListOpen(listProducts, listProductsButton);
  isListOpen(listDocumentation, listDocumentationButton);
  isListOpen(listCompany, listCompanyButton);
};

const closeSitesSelect = function () {
  if (listSitesSelect.classList.contains('show')) {
    listSitesSelect.classList.remove('show');
    listSitesSelectButton.setAttribute('aria-expanded', 'false');
    listSitesSelectButton.classList.add('collapsed');
  }
}


listSitesSelectButton.addEventListener('click', function() {
  if (!this.classList.contains('collapsed')) {
    closeAllMenu();
  }
});

listProductsButton.addEventListener('click', function() {
  if (!this.classList.contains('collapsed')) {
    closeSitesSelect();
  }
});

listDocumentationButton.addEventListener('click', function() {
  if (!this.classList.contains('collapsed')) {
    closeSitesSelect();
  }
});

listCompanyButton.addEventListener('click', function() {
  if (!this.classList.contains('collapsed')) {
    closeSitesSelect();
  }
});

