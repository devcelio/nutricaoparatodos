function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r
    }, '');
}

function loadMetaPixel() {
    !function (f, b, e, v, n, t, s) {
        if (f.fbq) return; n = f.fbq = function () {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
        n.queue = []; t = b.createElement(e); t.async = !0;
        t.src = v; s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
        'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '765497479647499');
    fbq('track', 'PageView');
}

function setupFacebookPixel() {
    window.onload = function () {
        const consent = getCookie('cookie_consent');
        const banner = document.getElementById('cookie-consent-banner');
        if (consent === 'accepted') {
            loadMetaPixel();
            banner.classList.add('d-none')
        } else if (consent === 'rejected') {
            banner.classList.add('d-none')
        } else {
            banner.classList.remove('d-none')
        }
    }

    document.getElementById('accept-cookies').onclick = function () {
        setCookie('cookie_consent', 'accepted', 365);
        loadMetaPixel();
        const banner = document.getElementById('cookie-consent-banner')
        banner.classList.add('d-none')
        console.log(el)
    }

    document.getElementById('reject-cookies').onclick = function () {
        setCookie('cookie_consent', 'rejected', 365);
        const banner = document.getElementById('cookie-consent-banner')
        banner.classList.add('d-none')
    }
}