<template>
  <!--页脚 src/components/Footer.vue-->
  <div id="Footer">
    <div class="container">
      <div class="link">
        <ul class="linkNav wow bounceInLeft">
          <li class="linkNavList">
            <h1>{{ $t("Footer[0]") }}</h1>
            <div class="xjbox">
              <router-link to="/introduction">{{
                $t("Footer[1]")
              }}</router-link>
              <span>&nbsp;|&nbsp;</span>
              <router-link to="/organize">{{ $t("Footer[2]") }}</router-link>
            </div>
            <div class="xjbox">
              <router-link to="/introduction">{{
                $t("Footer[3]")
              }}</router-link>
              <span>&nbsp;|&nbsp;</span>
              <router-link to="/organize">{{ $t("Footer[4]") }}</router-link>
            </div>
            <router-link to="/responsibility">{{
              $t("Footer[5]")
            }}</router-link>
            <router-link to="/recruitment">{{ $t("Footer[6]") }}</router-link>
          </li>
          <li class="linkNavList">
            <h1>{{ $t("Footer[7]") }}</h1>
            <router-link to="/bookImport">{{ $t("Footer[8]") }}</router-link>
            <router-link to="/electronicImport">{{
              $t("Footer[9]")
            }}</router-link>
            <router-link to="/newsImport">{{ $t("Footer[10]") }}</router-link>
            <router-link to="/exportBusiness">{{
              $t("Footer[11]")
            }}</router-link>
          </li>
        </ul>
        <ul class="linkNav wow bounceInLeft">
          <li class="linkNavList">
            <h1>{{ $t("Footer[12]") }}</h1>
            <router-link to="/enterpriseList">{{
              $t("Footer[13]")
            }}</router-link>
            <router-link to="/industryList">{{ $t("Footer[14]") }}</router-link>
            <router-link to="/mediaList">{{ $t("Footer[15]") }}</router-link>
          </li>
          <li class="linkNavList">
            <h1>{{ $t("Footer[16]") }}</h1>
            <router-link to="/bookFairServices">{{
              $t("Footer[17]")
            }}</router-link>
            <router-link to="/dataProcessing">{{
              $t("Footer[18]")
            }}</router-link>
            <router-link to="/professionalStudies">{{
              $t("Footer[19]")
            }}</router-link>
          </li>
        </ul>
      </div>
      <div class="information wow bounceInUp">
        <div class="phoneBox">
          <p>
            <a href="tel:010-88820201">010-88820201</a>
            &nbsp;
            <span>{{ $t("Footer[20]") }}</span>
          </p>
          <p>
            <a href="tel:025-83314729">025-83314729</a>
            &nbsp;
            <span>{{ $t("Footer[21]") }}</span>
          </p>
          <!-- <p class="workDay">{{ $t('Footer[22]') }} <br>{{ $t('Footer[23]') }}</p> -->
          <div>
            <div>
              <p>{{ $t("Footer[22]") }}</p>
              <p>{{ $t("Footer[23]") }}</p>
            </div>
            <div>
              <p>{{ $t("Footer[25]") }} &nbsp;&nbsp; {{ $t("Footer[26]") }}</p>
            </div>
          </div>
        </div>
        <div class="qrcodeBox">
          <img
            :src="props.footerData.data.qrcode"
            alt=""
            style="border-radius: 15px"
          />
          <p>{{ $t("Footer[24]") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["footerData"]);
</script>

<style scoped lang="scss">
p,
h1 {
  margin: 0;
  padding: 0;
}

#Footer {
  //background: #333333;
  background: #fafafc;
  padding: 30px 16px;
  margin-top: 30px;
  border-top: 1px solid rgb(239, 239, 245);
  //color: #fff;
  color: #4c4c4c;

  .linkNav {
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-bottom: 25px;

    .linkNavList {
      h1 {
        font-size: 20px;
        color: #4c4c4c;
        border-bottom: 2px solid #007bff;
        font-weight: 100;
      }

      a {
        margin-top: 10px;
        color: #999999;
        font-size: 14px;
        text-decoration: none;
        display: block;
        transition: color 0.3s;

        &:hover {
          transition: color 0.3s;
          color: #007bff;
        }
      }
    }
  }

  .information {
    text-align: center;

    .phoneBox {
      font-size: 20px;

      a {
        color: #298dff;
        text-decoration: none;
      }

      //span{
      //  color: #fff;
      //}
      .workDay {
        font-size: 16px;
        //color: #fff;
        margin: 20px 0;
      }
    }
  }

  .qrcodeBox {
    img {
      width: 100px;
      height: 100px;
      transition: all 0.3s;

      &:hover {
        width: 200px;
        height: 200px;
        transition: all 0.3s;
      }
    }
  }
}

@media only screen and (min-width: 770px) {
  .container {
    width: 85%;
    display: flex;
    justify-content: space-between;
  }
  #Footer {
    display: flex;
    justify-content: space-around;

    .link {
      display: flex;
      width: 45%;
      justify-content: space-around;

      .linkNav {
        width: 45%;
        display: flex;
      }
    }
  }
  .information {
    display: flex;
    justify-content: space-between;
    width: 40%;
  }
}
.xjbox {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  span {
    font-size: 14px;
    color: #999;
  }
  a {
    margin-top: 0 !important;
  }
}
</style>
