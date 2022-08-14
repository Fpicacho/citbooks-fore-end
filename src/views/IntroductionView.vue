<template>
  <!--公司简介 src/views/IntroductionView.vue-->
  <div id="Introduction">
    <RunBanner :data="RunBannerData"/>
    <div class="container">
      <div class="contentBox">
        <div class="l wow slideInLeft">
          <h1>{{$t('introduction.title')}}</h1>
          <div v-html="container.const"></div>
        </div>
        <div class="r wow slideInRight">
          <ul class="digitalList">
            <li>
              <n-number-animation :from="0" :to="1987"/>
              <p>{{$t('introduction.tag[0]')}}</p>
            </li>
            <li>
              <n-number-animation :from="0" :to="100"/>+
              <p>{{$t('introduction.tag[1]')}}</p>
            </li>
            <li>
              <n-number-animation :from="0" :to="400" />+
              <p>{{$t('introduction.tag[2]')}}</p>
            </li>
          </ul>

          <div style="text-align: center">
            <img :src="img1" alt="">
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive,onMounted,watch,computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import allInterfaces from "@/api/allInterfaces";
import RunBanner from '@/components/RunBanner'
import img1 from '@/assets/img/breadImg/rc.jpeg'
import img2 from '@/assets/img/breadImg/gongsijianjie.jpg'

const store = useStore();
const router = useRouter();
const RunBannerData = {
  imgUrl: img2,
  title: {
    cn: '公司简介',
    en: 'Company Profile'
  }
}

let container = reactive({const:""})
onMounted(()=>{
  getAboutus()
})


function getAboutus(){
  allInterfaces.aboutus().then(res=>{
    container.const = res.data.container
  })
}

// 语言切换监听
const getLanguageState = computed(() => {
  return store.state.LanguageState;
})
watch(getLanguageState, (newVal) => {
  // 发送newVal 以告知服务端需要什么版本的文章
  getAboutus()
});
// 语言切换监听end

</script>

<style scoped lang="scss">
#Introduction{
  .container {
    width: 80%;
    margin: 0 auto;
    .contentBox{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 25px;
      .l{
        width: 100%;
        p{
          color: #666;
        }
      }
      .r{
        width: 100%;
        height: 100%;
        overflow: hidden;
        ul{
          display: flex;
          justify-content: space-between;
          text-align: center;
          padding: 0 20px;
          font-size: 25px;
          color: #298dff;
          p{
            font-size: 16px;
            color: #666;
          }
        }
        img{
          object-fit: cover;
          //width: 100%;
          //height: 200px;
        }
      }
    }
  }
}
@media only screen and (min-width: 770px)  {
  #Introduction{
    .container {
      .contentBox{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 25px;
        .l{
          width: 60%;
          p{
            text-indent : 40px;
            color: #666;
          }
        }
        .r{
          width: 35%;
          height: 100%;
          padding: 10px;
          overflow: hidden;
          img{
            object-fit: contain;
            height: 100%;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 769px) {
  img{
    object-fit: cover;
    width: 100%;
    height: 200px;
  }
}

</style>