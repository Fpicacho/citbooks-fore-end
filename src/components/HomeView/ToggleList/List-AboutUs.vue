<template>
  <div id="AboutUs">
    <div class="container">
      <div class="box">
        <div class="textBox wow slideInLeft">
          <span>AboutUs.</span>
          <p>{{$t('ToggleList.bar[0]')}}</p>
        </div>
        <div class="ContentContainer wow slideInRight">
          <p>
            {{ $t('AboutUs.content[0]') }}<br/><br/>
            <!-- {{ $t('AboutUs.content[1]') }}<br/><br/>
            {{ $t('AboutUs.content[2]') }} -->
          </p>
          <div class="box">
            <router-link to="/introduction">
              <div class="MoreBtn">→</div>
            </router-link>
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
  color: #343d4c;
  a{
    text-decoration: none;
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
  .textBox{
    span{
      display: none;
    }
    p{
      font-size: 26px;
    }
  }
  ul {
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-bottom: 30px;

    li {
      h1 {
        margin: 0;
        color: #298dff;
      }

      p {
        margin: 0;
        font-size: 14px;
      }
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

@media only screen and (min-width: 770px) {
  #AboutUs {
    font-size: 16px;
    .box {
      display: flex;
      justify-content: space-between;

      .textBox {
        width: 35%;
        position: relative;
        p {
          font-size: 28px;
          font-weight: bold;
          position: relative;
          top: 7px;
          z-index: 1;
        }

        span {
          display: block;
          font-size: 45px;
          color: #f8f8f8;
          font-weight: bold;
          font-family: 'Arial Black', serif;
          position: absolute;
          z-index: 1;
          top: 0;
        }
      }

      .ContentContainer {
        width: 65%;
      }
    }
  }
}
</style>