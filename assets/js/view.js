
function createEventCard(event) {
  return `
    <div class="card mb-3 border-0">
      <div class="card-body">
        <h5 class="card-title">${event.title}</h5>
        <p class="mb-1">${event.date}</p>
        <p class="mb-0">${event.time}</p>
      </div>
    </div>
  `;
}


function createImageFigure(image) {
  return `
    <div class="col-6 col-lg-3">
        <figure class="figure">
        <img width="100%" src="${image.src}" data-fancybox="gallery" class="figure-img img-fluid rounded" alt="${image.caption}">
        <figcaption class="figure-caption">${image.caption}</figcaption>
        </figure>
    </div>
  `;
}

function createFooterLink(link) {
    return `
        <dd class="mb-1">
            <a class="link text-secondary" href=${link.href} target="blank">${link.label}</a>
        </dd>
    `;
}

function renderData() {
    const bannerPrincipal = document.querySelector("#banner-principal");

    if (bannerPrincipal) {
        bannerPrincipal.querySelector("h1").innerText = PROJECT_TITLE;
        bannerPrincipal.querySelector("h2").innerText = PROJECT_SLOGAN;
    }

    const videoPlayer = document.querySelector("#video-player");
    if (videoPlayer) {
        videoPlayer.src = PROJECT_VIDEO;
    }

    const aboutSection = document.querySelector("#sobre .section-text");
    if (aboutSection) aboutSection.innerHTML = ABOUT_MESSAGE;

    const mainImg = document.querySelector("#sobre .figure-img");
    if (mainImg) mainImg.src = MAIN_IMAGE;

    const mainImgCaption = document.querySelector("#sobre figcaption");
    if (mainImgCaption) mainImgCaption.innerHTML = MAIN_IMAGE_CAPTION;

    const imagesContainer = document.querySelector("#galeria");
    if (imagesContainer) {
        imagesContainer.innerHTML = IMAGES.map(createImageFigure).join("");
    }

    const eventsContainer = document.querySelector("#eventos");
    if (eventsContainer) {
        eventsContainer.innerHTML = EVENTS.map(createEventCard).join("");
    }

    const welcomeContainer = document.querySelector("#participe");
    if (welcomeContainer) {
        welcomeContainer.querySelector("p").innerHTML = SUBSCRIPTION_MESSAGE
    }

    const footerTitle = document.querySelector("#footer-title");
    if (footerTitle) {
        footerTitle.innerText = FOOTER_TITLE
    }

    const footerDescription = document.querySelector("#footer-description");
    if (footerDescription) {
        footerDescription.innerText = FOOTER_DESCRIPTION
    }

    const linksContainer = document.querySelector("#links");
    if (linksContainer) {
        linksContainer.innerHTML = FOOTER_LINKS.map(createFooterLink).join("");
    }

    const copyRightInfo = document.querySelector("#copyright");
    if (copyRightInfo) {
        copyRightInfo.innerText = FOOTER_COPYRIGHT;
    }

    const footerLogo = document.querySelector("#footer-logo");
    if (footerLogo) {
        footerLogo.src = FOOTER_LOGO;
    }

}
