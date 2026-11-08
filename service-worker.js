const CACHE_NAME = "standout-v2.7-BETA-RELEASE";

// Resolve app assets against the service worker's registration scope. This
// supports both a domain-root deployment and a project subfolder deployment.
const APP_SCOPE_URL = self.registration.scope;
const APP_SCOPE_PATH = new URL(APP_SCOPE_URL).pathname;
const resolveAppURL = path => new URL(path.replace(/^\/+/, ""), APP_SCOPE_URL).href;
const resolveAppPath = pathname => pathname.startsWith(APP_SCOPE_PATH)
  ? "/" + pathname.slice(APP_SCOPE_PATH.length)
  : pathname;

const FONT_AWESOME_CACHE =
  "standout-fontawesome-v2";

const BACKGROUND_CACHE =
  "standout-background-v5";

const WELCOME_CACHE =
  "standout-welcome-v4";


const WELCOME_ASSETS = [
  "/welcome.mp4"
];


const FONT_AWESOME_FILES = [
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/webfonts/fa-solid-900.woff2",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/webfonts/fa-regular-400.woff2",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/webfonts/fa-brands-400.woff2"
];


const APP_SHELL = [
  "/",
  "/index.html",
  "/manifest.json",
  "/documentation.html",
  "/standout-guide.html",
  "/drop-info.html",

  // well-known
  "/.well-known/assetlinks.json",

  // CSS
  "/CSS/index-embedded.css",
  "/CSS/documentation-embedded.css",
  "/CSS/standout-guide-embedded.css",
  "/CSS/base.css",
  "/CSS/buttons.css",
  "/CSS/components.css",
  "/CSS/features.css",
  "/CSS/effects.css",
  "/CSS/timer.css",
  "/CSS/account.css",
  "/CSS/badges.css",
  "/CSS/momentum.css",
  "/CSS/monthly-report.css",
  "/CSS/welcome.css",
  "/CSS/daily-challenge.css",
  "/CSS/season.css",
  "/CSS/mastery.css",
  "/CSS/drop-info.css",

  // JS
  "/JS/features/cards/catalogue-data.js",
  "/JS/app-part1.js",
  "/JS/app-part2.js",
  "/JS/app-part3.js",
  "/JS/features/background/background.js",
  "/JS/features/badges/badges.js",
  "/JS/features/achievements/achievements.js",
  "/JS/features/cards/catalogue.js",
  "/JS/features/cards/custom-cards.js",
  "/JS/features/cards/marketplace.js",
  "/JS/features/momentum/momentum.js",
  "/JS/features/sound/sound.js",
  "/JS/features/welcome-intro.js",
  "/JS/features/monthly-drop.js",
  "/JS/features/daily-challenge/daily-challenge.js",
  "/JS/season.js",
  "/JS/features/monthly-resolution/monthly-resolution.js",
  "/JS/features/season/season-core.js",
  "/JS/features/season/season-state.js",
  "/JS/features/season/season-progression.js",
  "/JS/features/season/season-ui.js",
  "/JS/features/mastery/mastery.js",
  "/JS/drop-info.js",

  // Modular foundation and extracted features
  "/JS/core/service-worker-registration.js",
  "/JS/core/event-delegation.js",
  "/JS/core/bootstrap.js",
  "/JS/core/storage.js",
  "/JS/core/events.js",
  "/JS/core/dom.js",
  "/JS/features/missions/history.js",
  "/JS/features/missions/completion.js",
  "/JS/features/missions/progression.js",
  "/JS/features/missions/scheduler.js",
  "/JS/features/goals/goals.js",
  "/JS/features/countdowns/countdowns.js",
  "/JS/features/skills.js",
  "/JS/features/app-shell.js",
  "/JS/features/startup.js",
  "/JS/features/legacy-compatibility.js",
  "/JS/features/app-part3-compatibility.js",
  "/JS/features/navigation.js",
  "/JS/features/timer.js",
  "/JS/features/modals.js",
  "/JS/features/music.js",
  "/JS/features/monthly-report.js",
  "/JS/features/cheats.js",
  "/JS/features/data/persistence.js",
  "/JS/features/data/reset.js",
  "/JS/features/data/reset-ui.js",
  "/JS/features/data/daily-cycle.js",
  "/JS/features/data/backup.js",
  "/JS/features/data/restore.js",
  "/JS/features/economy/points.js",
  "/JS/features/missions/management.js",
  "/JS/features/notifications/notifications.js",

  "/icon.jpeg"
];


const BACKGROUND_ASSETS = [

  "/Images/s1.jpg",
  "/Images/s2.jpg",
  "/Images/a1.jpg",
  "/Images/a2.jpg",
  "/Images/a3.jpg",
  "/Images/b1.jpg",
  "/Images/b2.jpg",
  "/Images/b3.jpg",
  "/Images/b4.jpg",
  "/Images/b5.jpg",
  "/Images/c1.jpg",
  "/Images/c2.jpg",
  "/Images/c3.jpg",
  "/Images/c4.jpg",
  "/Images/c5.jpg",
  "/Images/d1.jpg",
  "/Images/d2.jpg",
  "/Images/d3.jpg",
  "/Images/d4.jpg",
  "/Images/d5.jpg",
  "/Images/d6.jpg",
  "/Images/d7.jpg",
  "/Images/e1.jpg",
  "/Images/e2.jpg",
  "/Images/e3.jpg",
  "/Images/e4.jpg",
  "/Images/e5.jpg",
  "/Images/e6.jpg",
  "/Images/e7.jpg",
  "/Images/e8.jpg",
  "/Images/w4.jpg",
  "/Images/Endgame_Cap.gif",
  "/Images/Endgame_Thor.gif",
  "/Music/Complete.mp3",
  "/Music/Achievements.mp3",
  "/Music/m1.mp3",
  "/Music/m2.mp3",
  "/Music/m3.mp3",
  "/Music/m4.mp3",
  "/Music/m5.mp3",
  "/Music/m6.mp3",
  "/Music/CardMint.mp3",
  "/Music/DailyChallenge.mp3",
  "/AchievedGoal.mp4",
  "/badges/aug-2026.png",
  "/badges/sep-2026.png",
  "/badges/oct-2026.png",
  "/badges/nov-2026.png",
  "/assets/cards/season-01-ascension",
  "/assets/cards/season-01-beyond-limits",
  "/Images/SS1.jpg",
  "/Images/SS2.jpg",
  "/Images/SS3.jpg",
  "/Images/SS4.jpg",
  "/Images/SS5.jpg",
  "/Images/SS6.jpg",
  "/Images/SS7.jpg",
  "/Images/SS8.jpg",
  "/Images/SS9.jpg",
  "/Images/SS10.jpg",
  "/Images/SS11.jpg",
  "/Images/SS12.jpg",
  "/Images/SS13.jpg",
  "/Images/SS14.jpg",
  "/Images/SS15.jpg",
  "/Images/S1.jpg",
  "/Images/S2.jpg",
  "/Images/S3.jpg",
  "/Images/S4.jpg",
  "/Images/S5.jpg",
  "/Images/S6.jpg",
  "/Images/S7.jpg",
  "/Images/S8.jpg",
  "/Images/S9.jpg",
  "/Images/S10.jpg",
  "/Images/S11.jpg",
  "/Images/S12.jpg",
  "/Images/S13.jpg",
  "/Images/S14.jpg",
  "/Images/S15.jpg",
  "/Images/S16.jpg",
  "/Images/S17.jpg",
  "/Images/S18.jpg",
  "/Images/S19.jpg",
  "/Images/S20.jpg",
  "/Images/S21.jpg",
  "/Images/S22.jpg",
  "/Images/S23.jpg",
  "/Images/S24.jpg",
  "/Images/S25.jpg",
  "/Images/S26.jpg",
  "/Images/S27.jpg",
  "/Images/S28.jpg",
  "/Images/S29.jpg",
  "/Images/S30.jpg",
  "/Images/S31.jpg",
  "/Images/S32.jpg",
  "/Images/S33.jpg",
  "/Images/S34.jpg",
  "/Images/S35.jpg",
  "/Images/B1.jpg",
  "/Images/B2.jpg",
  "/Images/B3.jpg",
  "/Images/B4.jpg",
  "/Images/B5.jpg",
  "/Images/B6.jpg",
  "/Images/B7.jpg",
  "/Images/B8.jpg",
  "/Images/B9.jpg",
  "/Images/B10.jpg",
  "/Images/B11.jpg",
  "/Images/B12.jpg",
  "/Images/B13.jpg",
  "/Images/B14.jpg",
  "/Images/B15.jpg",
  "/Images/B16.jpg",
  "/Images/B17.jpg",
  "/Images/B18.jpg",
  "/Images/B19.jpg",
  "/Images/B20.jpg",
  "/Images/B21.jpg",
  "/Images/B22.jpg",
  "/Images/B23.jpg",
  "/Images/C1.jpg",
  "/Images/C2.jpg",
  "/Images/C3.jpg",
  "/Images/C4.jpg",
  "/Images/C5.jpg",
  "/Images/C6.jpg",
  "/Images/C7.jpg",
  "/Images/C8.jpg",
  "/Images/C9.jpg",
  "/Images/C10.jpg",
  "/Images/C11.jpg",
  "/Images/C12.jpg",
  "/Images/C13.jpg",
  "/Images/C14.jpg",
  "/Images/C15.jpg",
  "/Images/C16.jpg",
  "/Images/C17.jpg",
  "/Images/C18.jpg",
  "/Images/C19.jpg",
  "/Images/D1.jpg",
  "/Images/D2.jpg",
  "/Images/D3.jpg",
  "/Images/D4.jpg",
  "/Images/D5.jpg",
  "/Images/D6.jpg",
  "/Images/X1.jpg",
  "/Images/X2.jpg",
  "/Images/X3.jpg",
  "/Images/X4.jpg",
  "/Images/X5.jpg",
  "/Images/X6.jpg",
  "/Images/X7.jpg",
  "/Images/X8.jpg",
  "/Images/X9.jpg",
  "/Images/X10.jpg",
  "/Images/X11.jpg",
  "/Images/X12.jpg",
  "/Images/X13.jpg",
  "/Images/X14.jpg",
  "/Images/X15.jpg",
  "/Images/X16.jpg",
  "/Images/X17.jpg",
  "/Images/X18.jpg",
  "/Images/X19.jpg",
  "/Images/X20.jpg",
  "/Images/X21.jpg",
  "/Images/X22.jpg",
  "/Images/X23.jpg",
  "/Images/X24.jpg",
  "/Images/A1.jpg",
  "/Images/A2.jpg",
  "/Images/A3.jpg",
  "/Images/A4.jpg",
  "/Images/A5.jpg",
  "/Images/A6.jpg",
  "/Images/A7.jpg",
  "/Images/A8.jpg",
  "/Images/A9.jpg",
  "/Images/A10.jpg",
  "/Images/A11.jpg",
  "/Images/A12.jpg",
  "/Images/A13.jpg",
  "/Images/A14.jpg",
  "/Images/A15.jpg",
  "/Images/A16.jpg",
  "/Images/A17.jpg",
  "/Images/A18.jpg",
  "/Images/A19.jpg",
  "/Images/A20.jpg",
  "/Images/A21.jpg",
  "/Images/A22.jpg",
  "/Images/A23.jpg",
  "/Images/A24.jpg",
  "/Images/A25.jpg",
  "/Images/A26.jpg",
  "/Images/A27.jpg",
  "/Images/A28.jpg",
  "/Images/A29.jpg",
  "/Images/A30.jpg",
  "/Images/A31.jpg",
  "/Images/A32.jpg",
  "/Images/A33.jpg",
  "/Images/A34.jpg",
  "/Images/A35.jpg",
  "/Images/A36.jpg",
  "/Images/A37.jpg",
  "/Images/A38.jpg",
  "/Images/A39.jpg",
  "/Images/A40.jpg",
  "/Images/A41.jpg",
  "/Images/A42.jpg",
  "/Images/A43.jpg",
  "/Images/A44.jpg",
  "/Images/A45.jpg",
  "/assets/season-01-Ascension.jpg",
  "/assets/season-01-beyond-limits.jpg"
];


/* ===========================
   INSTALL → CACHE APP SHELL
=========================== */

self.addEventListener("install", event => {
  console.log("🟡 SW installing…");

  event.waitUntil((async () => {
    const appCache = await caches.open(CACHE_NAME);
    const fontAwesomeCache = await caches.open(FONT_AWESOME_CACHE);
    const welcomeCache = await caches.open(WELCOME_CACHE);
    const clients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    const total = APP_SHELL.length + FONT_AWESOME_FILES.length + WELCOME_ASSETS.length;
    let completed = 0;

    const broadcast = message => {
      for (const client of clients) client.postMessage(message);
    };
    const reportProgress = () => {
      completed += 1;
      broadcast({
        type: "STANDOUT_UPDATE_PROGRESS",
        completed,
        total,
        percent: Math.round((completed / total) * 100)
      });
    };

    broadcast({ type: "STANDOUT_UPDATE_START", total });

    // Cache each shell asset independently so one optional/missing asset does
    // not prevent the rest of the application from being updated.
    await Promise.all(APP_SHELL.map(async path => {
      try {
        const assetURL = resolveAppURL(path);
        const response = await fetch(assetURL, { cache: "no-cache" });
        if (response.ok) await appCache.put(assetURL, response.clone());
        else console.warn("⚠️ Shell file unavailable:", path, response.status);
      } catch (error) {
        console.warn("⚠️ Shell cache failed:", path, error);
      } finally {
        reportProgress();
      }
    }));

    // Third-party fonts are part of the same visible download progress.
    for (const url of FONT_AWESOME_FILES) {
      try {
        const response = await fetch(url, { mode: "cors", cache: "no-cache" });
        if (response.ok) await fontAwesomeCache.put(url, response.clone());
        else console.warn("⚠️ Font Awesome file unavailable:", url, response.status);
      } catch (error) {
        console.warn("⚠️ Could not cache Font Awesome:", url, error);
      } finally {
        reportProgress();
      }
    }

    // Cache welcome assets individually to keep progress measurable.
    for (const path of WELCOME_ASSETS) {
      try {
        const assetURL = resolveAppURL(path);
        const response = await fetch(assetURL, { cache: "no-cache" });
        if (response.ok) await welcomeCache.put(assetURL, response.clone());
        else console.warn("⚠️ Welcome asset unavailable:", path, response.status);
      } catch (error) {
        console.warn("⚠️ Welcome asset cache failed:", path, error);
      } finally {
        reportProgress();
      }
    }

    broadcast({ type: "STANDOUT_UPDATE_READY", percent: 100 });
    console.log("✅ StandOut update assets processed; waiting for the user to reload.");

    // Keep the current app running until the in-app update prompt is accepted.
    // The page sends SKIP_WAITING when the user selects "Reload now".
  })());
});

/* ===========================
   MESSAGE
=========================== */
self.addEventListener("message", event => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});


/* ===========================
   ACTIVATE → CLEAN OLD CACHES
=========================== */

self.addEventListener("activate", event => {
  console.log("🟢 SW activating");

  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(key => {
      if (
        key === CACHE_NAME ||
        key === FONT_AWESOME_CACHE ||
        key === BACKGROUND_CACHE ||
        key === WELCOME_CACHE
      ) return Promise.resolve();
      return caches.delete(key);
    }));

    cacheBackgroundAssets().catch(error => {
      console.warn("Background asset caching failed:", error);
    });

    // Claim first so the new worker controls existing StandOut tabs.
    await self.clients.claim();
    const windows = await self.clients.matchAll({ type: "window", includeUncontrolled: true });

    for (const client of windows) {
      if (!client.url || !client.url.startsWith(APP_SCOPE_URL)) continue;
      client.postMessage({ type: "SW_UPDATED", cacheName: CACHE_NAME });

      // Updated app shells reload from their controllerchange handler after
      // the user accepts the in-app "Reload now" prompt. Do not navigate here:
      // that would bypass the prompt and reload before it can be seen.
    }
  })());
});


/* =========================================================
   FETCH → CACHE STRATEGY
========================================================= */

self.addEventListener(
  "fetch",
  event => {

    const url =
      event.request.url;

    const pathname =
      resolveAppPath(new URL(url).pathname);


    /* =====================================================
       FONT AWESOME
       BACKGROUND
       WELCOME VIDEO
    ===================================================== */

    if (
      FONT_AWESOME_FILES.includes(url) ||
      BACKGROUND_ASSETS.includes(pathname) ||
      WELCOME_ASSETS.includes(pathname)
    ) {

      event.respondWith((async () => {
        const isFontAwesome = FONT_AWESOME_FILES.includes(url);
        const isWelcomeAsset = WELCOME_ASSETS.includes(pathname);

        const targetCacheName = isFontAwesome
          ? FONT_AWESOME_CACHE
          : isWelcomeAsset
            ? WELCOME_CACHE
            : BACKGROUND_CACHE;

        const targetCache = await caches.open(targetCacheName);
        const assetURL = isFontAwesome ? url : resolveAppURL(pathname);

        const cached = await targetCache.match(assetURL);
        if (cached) return cached;

        try {
          const response = await fetch(event.request);

          if (response.ok) {
            await targetCache.put(assetURL, response.clone());
          }

          return response;
        } catch (error) {
          console.warn("Offline asset unavailable:", event.request.url);
          throw error;
        }
      })());

      return;

    }


    /* =====================================================
       APP REQUESTS

       1. Use cached version first.
       2. If not cached, try network.
       3. Cache successful same-origin GET requests.
       4. If offline navigation fails, return index.html.
    ===================================================== */

    event.respondWith(

      (async () => {

        const cached =
          await caches.match(
            event.request
          );


        if (cached) {

          return cached;

        }


        try {

          const response =
            await fetch(
              event.request
            );


          /*
           * Runtime-cache successful
           * same-origin GET requests.
           */

          if (
            event.request.method === "GET" &&
            new URL(
              event.request.url
            ).origin === self.location.origin &&
            response.ok
          ) {

            const runtimeCache =
              await caches.open(
                CACHE_NAME
              );


            await runtimeCache.put(
              event.request,
              response.clone()
            );

          }


          return response;

        } catch (error) {

          /*
           * Only navigation requests should
           * fall back to index.html.
           */

          if (
            event.request.mode === "navigate"
          ) {

            const offlinePage =
              await caches.match(
                resolveAppURL("/index.html")
              );


            if (offlinePage) {

              return offlinePage;

            }

          }


          throw error;

        }

      })()

    );

  }
);


/* =========================================================
   CACHE BACKGROUND ASSETS
========================================================= */

async function cacheBackgroundAssets() {

  const cache =
    await caches.open(
      BACKGROUND_CACHE
    );


  for (
    const url of BACKGROUND_ASSETS
  ) {

    try {

      const assetURL = resolveAppURL(url);
      const existing =
        await cache.match(
          assetURL
        );


      if (existing) {

        console.log(
          "Already cached:",
          url
        );

        continue;

      }


      const response =
        await fetch(
          assetURL
        );


      if (
        response.ok
      ) {

        await cache.put(
          assetURL,
          response.clone()
        );


        console.log(
          "✅ Background cached:",
          url
        );

      }

    } catch (error) {

      console.warn(
        "⚠️ Background cache failed:",
        url,
        error
      );

    }

  }

        }
