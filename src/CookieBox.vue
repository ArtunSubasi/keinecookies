<template>  
  <router-link to="/cookie-auswahl">
    <div id="cookieBox"></div>
  </router-link>
</template>

<script>
module.exports = {
}
</script>

<style scoped>
#cookieBox {
    position: fixed !important;
    display: inline-block !important;
    visibility: visible !important;
    z-index: 2147483647 !important;
    top: auto !important;
    right: 12px !important;
    bottom: 12px !important;
    left: auto !important;
    padding: 6px 8px 6px 6px !important;
    font-size: 12px !important;
    opacity: 1 !important;
    line-height: 14px !important;
    text-decoration: none !important;
    transform: none !important;
    margin: 0 !important;
    width: 48px !important;
    height: 48px !important;
    overflow: visible !important;
    white-space: nowrap;
    cursor: pointer;
    background-image: url("./assets/cookie-icon.png");
}
</style>
