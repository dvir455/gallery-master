'use strict';

$(init);

function init() {
  renderGallery();
  _eventListeners();
}

function renderGallery() {
  const projects = getProjects();
  const itemsContainer = $('.items-cont');
  const strHtmls = projects.map(
    (proj) =>
      `
  <div  class="col-md-4 col-sm-6 portfolio-item"> 
  <a class="portfolio-link" data-toggle="modal"  href="#${proj.id}"> 
  <div class="portfolio-hover" data-id="${proj.id}"> 
  <div class="portfolio-hover-content"> 
  <i class="fa fa-plus fa-3x "></i>
   </div> 
  </div> 
  <img class="img-fluid" src="img/portfolio/${proj.imgUrl}" >
   </a> <div class="portfolio-caption"> 
  <h4>${proj.title}</h4> 
  <p class="text-muted">${proj.desc}</p>
   </div>
  `
  );
  itemsContainer.html(strHtmls);
}

function renderModal() {
  const projId = this.dataset.id;
  const project = getProject(projId);
  const MODAL = $('.modal-container');
  const updatedModal = `
  <div
  class="portfolio-modal modal fade"
  id="${project.id}"
  tabindex="-1"
  role="dialog"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl"></div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="modal-body">
              <!-- Project Details Go Here -->
              <h2>${project.name}</h2>
              <p class="item-intro text-muted">
                ${project.title}
              </p>
              <img
                class="img-fluid d-block mx-auto"
                src="img/portfolio/${project.id}.jpg"
                alt=""
              />
              <p>
               ${project.desc}
              </p>
              <ul class="list-inline">
                <li>Date: ${_getDate(project.publishedAt)}</li>
                <li>Client: ${project.client}</li>
                <li>Category: ${project.category}</li>
              </ul>
              <a class="btn btn-info" href="${
                project.url
              }" target="_blank"><i class="fa fa-times"></i> Open Project</a>
              <button
                class="btn btn-primary"
                data-dismiss="modal"
                type="button"
              >
                <i class="fa fa-times"></i>
                Close Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  `;
  MODAL.html(updatedModal);
}

function sendMail(ev) {
  ev.preventDefault();
  const emailVal = $('#input-email').val();
  const subjectVal = $('#input-subject').val();
  const textVal = $('#input-textarea').val();

  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=thedvirr@gmail.com&su=${subjectVal}&body=${textVal}`,
    '_blank'
  );
}
function _getDate(date) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  var time = new Date(date);
  var month = time.getMonth();

  return `${time.getFullYear()} ${months[month]}`;
}

function _eventListeners() {
  $('#input-submit').click(sendMail);
  $('.portfolio-hover').click(renderModal);
}
