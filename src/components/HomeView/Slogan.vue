<template>
  <div id="Slogan">
    <p>{{ $t("slogan") }}</p>
  </div>
</template>

<script>
export default {
  name: "Slogan",
};
</script>

<style scoped lang="scss">
#Slogan {
  background: #fff;
  width: 80%;
  margin: 0 auto;
  p {
    text-align: center;
    margin: 0;
    padding: 15px;
    border-bottom: 5px solid #ea4335;
    color: #0086ff;
    letter-spacing: 0.2rem;
    font-size: 0.3rem;
    background-image: -webkit-linear-gradient(
      left,
      #147b96,
      #e6d205 25%,
      #147b96 50%,
      #e6d205 75%,
      #147b96
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-background-size: 200% 100%;
    -webkit-animation: maskedAnimation 4s infinite linear;
    @keyframes maskedAnimation {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: -100% 0;
      }
    }
  }
}
@media only screen and (max-width: 374px) {
  #Slogan {
    width: 100%;
    margin: 0;
    p {
      font-size: 0.1rem;
    }
  }
}
@media only screen and (max-width: 449px) {
  #Slogan {
    width: 100%;
    margin: 0;
    p {
      font-size: 0.1rem;
    }
  }
}

@media only screen and (min-width: 374px) and (max-width: 769px) {
  #Slogan {
    width: 100%;
    margin: 0;
    p {
      font-size: 0.1rem;
    }
  }
}
</style>
