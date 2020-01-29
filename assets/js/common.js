// Google Tags Manager
! function(e, t, a, n, g) {
    e[n] = e[n] || [], e[n].push({
        "gtm.start": (new Date).getTime(),
        event: "gtm.js"
    });
    var m = t.getElementsByTagName(a)[0],
        r = t.createElement(a);
    r.async = !0, r.src = "https://www.googletagmanager.com/gtm.js?id=GTM-5FRN8PS", m.parentNode.insertBefore(r, m)
}(window, document, "script", "dataLayer");

// Firebase Configuration
var firebaseConfig = {
    apiKey: "AIzaSyAagvet1Xb8m5w9FGII2UoYV_MGtV7ovEY",
    authDomain: "tinyaustralia.firebaseapp.com",
    databaseURL: "https://tinyaustralia.firebaseio.com",
    projectId: "tinyaustralia",
    storageBucket: "tinyaustralia.appspot.com",
    messagingSenderId: "515130950482",
    appId: "1:515130950482:web:e976b6cbd7d397a419b08b",
    measurementId: "G-H7803S9QJL"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();