// ==UserScript==
// @name         DMHY with WebTor.io
// @namespace    https://github.com/gslin/dmhy-webtor-userscript
// @version      0.20200515.0
// @description  Add WebTor.io links to DMHY
// @author       Gea-Suan Lin <gslin@gslin.com>
// @match        https://share.dmhy.org/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    for (let arrow of document.querySelectorAll('a.download-arrow.arrow-magnet')) {
        // magnet:?xt=urn:btih:TROPIGOFPTGGAL22NDEQVUUHHM7WEBKU
        let magneturi = arrow.getAttribute('href');
        let magneturi_cleaned = magneturi.replace(/&.*/, '');

        let webtor_url = 'https://webtor.io/show?&pwd=%2F&magnet=' + encodeURIComponent(magneturi_cleaned) + '&mode=default'

        let el = document.createElement('a');
        el.classList.add('download-arrow');
        el.classList.add('arrow-magnet');
        el.setAttribute('href', webtor_url);
        el.setAttribute('target', '_blank');

        arrow.parentElement.appendChild(el);
    }
})();
