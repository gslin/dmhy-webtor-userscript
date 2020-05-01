// ==UserScript==
// @name         DMHY with WebTor.io
// @namespace    https://github.com/gslin/dmhy-webtor-userscript
// @version      0.20200502.0
// @description  Add WebTor.io links to DMHY
// @author       Gea-Suan Lin <gslin@gslin.com>
// @match        https://share.dmhy.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    for (let arrow of document.querySelectorAll('a.download-arrow.arrow-magnet')) {
        let webtor_url = 'https://webtor.io/show?&pwd=%2F&magnet=' + encodeURIComponent(arrow.getAttribute('href')) + '&mode=default'

        let el = document.createElement('a');
        el.classList.add('download-arrow');
        el.classList.add('arrow-magnet');
        el.setAttribute('href', webtor_url);
        el.setAttribute('target', '_blank');

        arrow.parentElement.appendChild(el);
    }
})();
