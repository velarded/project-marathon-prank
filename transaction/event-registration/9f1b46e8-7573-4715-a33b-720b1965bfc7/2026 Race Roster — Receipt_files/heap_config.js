!function(){var SERVER_SIDE_CONFIG={"privacy":{"disableTextCapture":false,"enableSecureCookies":true},"compressCookies":false,"salesforceAura":false,"supportedDomains":[],"replaySettings":{},"integrations":[{"name":"contentsquare","fn":function integration(dependencyContainer) {
  var HASHED_CS_PROJ_ID='b7f38a17d0d36';
  var SOURCE_NAME = 'contentsquare';

  function loadCsLiteScript() {
    window._uxa = window._uxa || [];
    var mt = document.createElement('script');
    mt.type = 'text/javascript';
    mt.async = true;
    mt.src = '//t.contentsquare.net/uxa/' + HASHED_CS_PROJ_ID + '.js';
    document.getElementsByTagName('head')[0].appendChild(mt);
  }

  function isCsLiteMetadataPresent() {
    var csMetadata;
    if (window._uxa && window._uxa.push) {
      csMetadata = window._uxa.push(['getSessionData']);
    }
    return csMetadata && csMetadata.projectId;
  }

  function csLiteLoadedTimer() {
    if (isCsLiteMetadataPresent()) {
      clearTimerAndLoad();
    }
  }

  function clearTimerAndLoad() {
    clearInterval(csLiteLoaded);
    dependencyContainer.markAdapterAsResolved(SOURCE_NAME);
  }

  try {
    if (isCsLiteMetadataPresent()) {
      dependencyContainer.markAdapterAsResolved(SOURCE_NAME);
      return;
    }

    if (HASHED_CS_PROJ_ID) {
      loadCsLiteScript();
    }

    var csLiteLoaded = setInterval(csLiteLoadedTimer, 100);
    setTimeout(clearTimerAndLoad, 3000);
    //eslint-disable-next-line no-empty
  } catch (e) {}
},"config":{"isBlocking":true,"blockDurationInMs":5000}}],"snapshots":{"change":{"[data-product-id=\"*\"]":{"j":{},"f":{},"t":{"Upsell Product Name":".event-registration__product-item-title"}},"#sign-up-choice.form-check-input[type=\"radio\"]":{"a":{},"j":{},"f":{},"st":{},"ex":{},"t":{"Password Choice":"div.form-check"}}},"click":{".text-right .btn.btn-success":{"a":{},"j":{},"f":{},"st":{},"ex":{},"t":{"Order Total":".receipt .receipt__line-item.receipt__line-item--big-total .receipt__line-item-amount"}}},"pageview":{"/transaction/event-registration/*/payment":{"a":{},"j":{},"f":{},"st":{},"ex":{},"s":{"Payment_Page_Order_Total":".receipt .receipt__line-item.receipt__line-item--big-total .receipt__line-item-amount"}}}},"sdk":{"version":"5.3.10","isExperimentalVersion":false,"domain":"https://cdn.us.heap-api.com","plugins":[]},"ingestServer":"https://c.us.heap-api.com","appServer":"https://heapanalytics.com","csSettings":{"csProjectId":"82836","csHashedProjId":"b7f38a17d0d36","heapTagStatus":"heap_sideloads_cs"}};function t(e){var n;return-1===e.indexOf('core')&&e.push('core'),e.sort(function(e,n){return e<n?-1:n<e?1:0}).join('-')}function i(){var e=t(SERVER_SIDE_CONFIG.sdk.plugins||[]),n=heap&&heap.clientConfig&&heap.clientConfig.sdk||{},i=n.domain||SERVER_SIDE_CONFIG.sdk.domain,o=encodeURIComponent(n.version||SERVER_SIDE_CONFIG.sdk.version),r;return i+'/v5/'+(n.version||!SERVER_SIDE_CONFIG.sdk.isExperimentalVersion?'heapjs-static':'heapjs-experimental')+'/'+o+'/'+e+'/heap.js'}function e(){var e=i(),n=document.createElement('script');n.type='text/javascript',n.src=e,n.async=!0;var e=document.getElementsByTagName('script')[0];e.parentNode.insertBefore(n,e)}window.heap.serverConfig=SERVER_SIDE_CONFIG,window.heap.init(window.heap.envId,window.heap.clientConfig,window.heap.serverConfig),e()}();