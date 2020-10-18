/* This is a basic privacy setting user.js file for firefox.
This config uses the settings recomended for basic privacy and security on privacytools.io,
visit the site for more imformation.*/

/*A result of the Tor Uplift<https://wiki.mozilla.org/Security/Tor_Uplift> effort, this preference isolates all browser
identifier sources (e.g. cookies) to the first party domain,
with the goal of preventing tracking across different domains.
(Don't do this if you are using the Firefox Addon "Cookie AutoDelete" with Firefox v58 or below.)*/
user_pref("privacy.firstparty.isolate", true);

/*A result of the Tor Uplift<https://wiki.mozilla.org/Security/Tor_Uplift> effort,
this preference makes Firefox more resistant to browser fingerprinting.*/
user_pref("privacy.resistFingerprinting", true);

//[FF67+] Blocks Fingerprinting
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);

//[FF67+] Blocks CryptoMining
user_pref("privacy.trackingprotection.cryptomining.enabled", true);

/*This is Mozilla's new built-in tracking protection.
One of it's benefits is blocking tracking (i.e. Google Analytics)
on privileged pages<https://github.com/gorhill/uMatrix/wiki/Privileged-Pages>
where add-ons that usually do that are disabled.*/
user_pref("privacy.trackingprotection.enabled", true);

//The attribute would be useful for letting websites track visitors' clicks.
user_pref("browser.send_pings", false);

/*Disable preloading of autocomplete URLs.
Firefox preloads URLs that autocomplete when a user types into the address bar,
which is a concern if URLs are suggested that the user does not want to connect to.
Source<https://www.ghacks.net/2017/07/24/disable-preloading-firefox-autocomplete-urls/>*/
user_pref("browser.urlbar.speculativeConnect.enabled", false);

/*Disable that websites can get notifications if you copy, paste, or cut something from a web page,
and it lets them know which part of the page had been selected.*/
user_pref("dom.event.clipboardevents.enabled", false);

/*Disables playback of DRM-controlled HTML5 content, which, if enabled,
automatically downloads the Widevine Content Decryption Module provided by Google Inc.
Details<https://support.mozilla.org/kb/enable-drm#w_opt-out-of-cdm-playback-uninstall-cdms-and-stop-all-cdm-downloads>*/
user_pref("media.eme.enabled", false);

/*Disables the Widevine Content Decryption Module provided by Google Inc.,
used for the playback of DRM-controlled HTML5 content.
Details<https://support.mozilla.org/kb/enable-drm#w_disable-the-google-widevine-cdm-without-uninstalling>*/
user_pref("media.gmp-widevinecdm.enabled", false);

/*Disable cookies
    0 = Accept all cookies by default
    1 = Only accept from the originating site (block third-party cookies)
    2 = Block all cookies by default*/
user_pref("network.cookie.cookieBehavior", 1);

/*Only send Referer header when the full hostnames match.
(Note: if you notice significant breakage, you might try 1 combined with an XOriginTrimmingPolicy tweak below.)
Source<https://feeding.cloud.geek.nz/posts/tweaking-referrer-for-privacy-in-firefox/>
    0 = Send Referer in all cases
    1 = Send Referer to same eTLD sites
    2 = Send Referer only when the full hostnames match*/
user_pref("network.http.referer.XOriginPolicy", 2);

/*When sending Referer across origins, only send scheme, host, and port in the Referer header of cross-origin requests.
Source<https://feeding.cloud.geek.nz/posts/tweaking-referrer-for-privacy-in-firefox/>
    0 = Send full url in Referer
    1 = Send url without query string in Referer
    2 = Only send scheme, host, and port in Referer*/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/*WebGL is a potential security risk.
Source<https://security.stackexchange.com/questions/13799/is-webgl-a-security-concern>*/
user_pref("webgl.disabled", true);

/*This preference controls when to store extra information about a session:
contents of forms, scrollbar positions, cookies, and POST data. Details
    0 = Store extra session data for any site. (Default starting with Firefox 4.)
    1 = Store extra session data for unencrypted (non-HTTPS) sites only. (Default before Firefox 4.)
    2 = Never store extra session data.*/
user_pref("browser.sessionstore.privacy_level", 2);

/*Disables sending additional analytics to web servers.
Details<https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon>*/
user_pref("beacon.enabled", false);

/*Prevents Firefox from sending information about downloaded executable files to
Google Safe Browsing to determine whether it should be blocked for safety reasons.
Details<https://support.mozilla.org/en-US/kb/how-does-phishing-and-malware-protection-work#w_what-information-is-sent-to-mozilla-or-its-partners-when-phishing-and-malware-protection-are-enabled>*/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/*Disable Firefox prefetching pages it thinks you will visit next:
Prefetching causes cookies from the prefetched site to be loaded and other potentially unwanted behavior.
Details here<https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ>
and here<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control> */
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.prefetch-next", false);

//Disabling WebRTC and related Settings
user_pref("media.peerconnection.enabled", false);

//Other WebRTC settings, to be 100% sure that WebRTC is disabled
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.identity.timeout", 1);
