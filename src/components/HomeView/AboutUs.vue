<template>
  <div id="AboutUs">
    <div class="container">
      <div class="titleBox">
        <h1>{{ $t('AboutUs.title') }}</h1>
        <p>About Us</p>
      </div>
      <div class="box">
        <img src="../../assets/img/aobot.png" alt="">
        <div class="ContentContainer">
          <p>
            {{ $t('AboutUs.content[0]') }}<br/><br/>
            {{ $t('AboutUs.content[1]') }}<br/><br/>
            {{ $t('AboutUs.content[2]') }}
          </p>
          <div class="box">
            <div class="MoreBtn">→</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs"
}
</script>

<style scoped lang="scss">
#AboutUs {
  padding: 30px 16px;

  img {
    width: 100%;
  }

  .titleBox {
    text-align: center;

    h1 {
      margin: 0;
    }

    p {
      color: #999;
      font-weight: 800;
      margin: 0 0 20px;
    }
  }

  .ContentContainer {
    .box {
      display: flex;
      flex-direction: row-reverse;

      .MoreBtn {
        width: 50px;
        height: 50px;
        background: linear-gradient(150deg, #298dff 0%, #00baff 100%);
        text-align: center;
        line-height: 50px;
        color: #fff;
        font-weight: bold;
        font-size: 18px;
        border-radius: 100% 0 0 0;
      }
    }
  }
}

@media only screen and (min-width: 414px) {
  #AboutUs {
    .container {
      width: 80%;
      margin: 0 auto;
    }

    .box {
      display: flex;
      justify-content: space-between;

      img {
        width: 40%;
        object-fit: cover;
      }

      .ContentContainer {
        width: 55%;
      }
    }
  }
}
</style>