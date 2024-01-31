document.addEventListener('DOMContentLoaded', function () {

    let next = document.getElementById('next')
    let then = document.getElementById('then')
    let slider = document.querySelector('.slidey')
    let projects = document.querySelector('.slidey .projects')
    let smolprojects = document.querySelector('.slidey .smolprojects')

    let running = 2000;
    let autoTime = 7000;
    let timeOut;
    let autoTimeOut;

    next.onclick = function () {
        showslidey('next');
    }

    then.onclick = function () {
        showslidey('then');
    }

    function showslidey(variable) {
        let allProjects = document.querySelectorAll('.slidey .projects .project')
        let allSmolProjects = document.querySelectorAll('.slidey .smolprojects .smolproject')

        if (variable === 'next') {
            projects.appendChild(allProjects[0]);
            smolprojects.appendChild(allSmolProjects[0]);
            slider.classList.add('next');
        }

        else {
            let lastone = allProjects.length - 1;
            projects.prepend(allProjects[lastone]);
            smolprojects.prepend(allSmolProjects[lastone]);
            slider.classList.add('then');
        }

        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            slider.classList.remove('next');
            slider.classList.remove('then');
        }, running)

        clearTimeout(autoTimeOut);
        autoTimeOut = setTimeout(() => {
            next.click();
        }, autoTime);
    }

    let previews = document.querySelectorAll('.slidey .projects .project .preview button');
    let closes = '<span class="close">&times;</span>';
    let body = document.body;

    previews.forEach(button => {
        button.addEventListener('click', function () {
            let projectDiv = button.closest('.project');
            let sources = projectDiv.querySelector('img').getAttribute('src');
            openPopup(sources);
        });
    });

    function openPopup(sources) {
        let popups = `
            <div class="popups">
                ${closes}
                <img src="${sources}">
            </div>
        `;

        body.insertAdjacentHTML('beforeend', popups);

        let popupper = document.querySelector('.popups');
        let closeButton = popupper.querySelector('.close');

        closeButton.addEventListener('click', function () {
            closePopup();
        });

        body.style.overflow = 'hidden';
    }

    function closePopup() {
        let popups = document.querySelector('.popups');
        if (popups) {
            popups.remove();
            body.style.overflow = '';
        }
    }
});