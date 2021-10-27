// Yandex.Metrika counter
export function googleAnalytics() {
    if (typeof window === "undefined") {
        console.log('SSR')
    }
    else {
        // Global site tag (gtag.js) - Google Analytics
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-VHRW3PBBSX');
    }
}