<template>
  <div id="footer" class="border-top">
    <div class="row" style="direction: ltr">
      <div class="col-md-5" id="footer-upper">
        <footer-upper></footer-upper>
      </div>
      <hr id="upper-divider" />
      <div class="col-md-7" id="footer-middle">
        <footer-middle></footer-middle>
      </div>
    </div>
    <hr class="mt-0" style="padding: 0 -1em"/>
    <div id="footer-lower">
      <footer-lower></footer-lower>
    </div>
  </div>
</template>

<script>
import FooterMiddle from "./footer/Footer-Middle";
import FooterUpper from "./footer/Footer-Upper";
import FooterLower from "./footer/Footer-Lower";

export default {
  components: {
    FooterLower,
    FooterMiddle,
    FooterUpper
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.col-sm-5 {
  padding: 0 0
}
.col-sm-7 {
  padding: 0 0 !important;
}
#footer {
  background: var(--background-color);
  font-family: IRANSans;
  font-size: 0.9em;
}
#upper-divider {
  display: none;
}
#footer-lower {
  padding: 0 0.5em
}
#footer-lower .row:first-child {
  margin-right: 0em;
}
#social-net {
  margin-right: 10em;
}
#email-address {
  margin-right: 3.9em;
}
#support_resp {
  margin-right: -1.5em;
}
#footer-middle {
  margin: auto 0
}
#footer-upper {
 margin-top: 1em;
}
@media (max-width: 768px) {
  #footer {
    background: var(--background-color);
    padding: 0 0.7em;
  }
  #upper-divider {
    display: block;
    padding: 0 1em;
    width: 100%;
  }
  #social-net {
    display: none;
  }
  #footer-lower {
    font-size: 0.8em;
  }
  img {
    width: 2em;
    height: 2em;
    margin-top: -0.5em;
  }
  #email-address {
    margin-right: 1em;
  }
  #footer-upper, #footer-middle {
    margin: 0 auto
  }
}
</style>
