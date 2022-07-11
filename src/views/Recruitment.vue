<template>
  <div id="Recruitment">
    <!--招聘信息-->
    <RunBanner :data="RunBannerData"/>
    <div class="container">
      <BreadNavigation :data="BreadNavigationData"/>
      <ul class="workList">
        <li class="item wow bounceIn" v-for="item in serveData.const" :key="item.id">
          <div class="t">
            <div class="tl">
              <h2>{{ item.title }}</h2>
              <p>薪资:{{ item.salary }} | 年龄要求:{{ item.age }} </p>
              <ul class="tagList">
                <li>
                  <n-tag type="success" v-for="(item2,index) in item.tag">
                    {{ item2 }}
                  </n-tag>
                </li>
              </ul>
            </div>
            <img src="../assets/img/workikcon.jpg" alt="">
          </div>
          <div class="b">
            <p>
              {{ item.introduction }}
            </p>
            <n-button strong type="primary" @click="goto(item.id)">
              查看详情
            </n-button>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup>
import {reactive, onMounted} from "vue"
import {useRouter} from 'vue-router'
import RunBanner from '@/components/RunBanner'
import BreadNavigation from '@/components/BreadNavigation'
import allInterfaces from "@/api/allInterfaces";
import img from "@/assets/img/breadImg/zhaopin.jpg"

const router = useRouter()
const RunBannerData = {
  imgUrl: img,
  title: {
    cn: '招聘信息',
    en: 'Recruitment'
  }
}
const BreadNavigationData = {
  title: {
    cn: "招聘信息",
    en: "Recruitment"
  },
  navigation: [
    {
      link:"/",
      cn:"首页",
      en:"Home"
    },
    {
      link: "/recruitment",
      cn: "招聘信息",
      en: "recruitment"
    },
  ],
  describe: {
    cn: "人才是企业最重要的资源、最宝贵的财富，用远大的事业造就人，用良好的文化和真挚的感情凝聚人，用合理的待遇稳定人是公司的人才理念；尊重人才、爱惜人才、用好人才、培养人才、激励人才是公司的用人原则；打造一支敢于担当、勇于创新、专业出色、素质优良的职业化队伍是我们的人才建设目标。公司热忱欢迎各类人才加入我们的团队，共同开创更辉煌的明天！",
    en: "Talent is the most important resource and most valuable wealth of an enterprise. To cultivate people with lofty careers, to unite people with good culture and sincere feelings, and to stabilize people with reasonable treatment is the company's talent concept; to respect talents, cherish talents, and use Good talents, cultivating talents, and motivating talents are the company's employment principles; it is our talent construction goal to create a professional team that dares to take responsibility, has the courage to innovate, has excellent professionalism and excellent quality. The company warmly welcomes all kinds of talents to join our team and jointly create a more brilliant tomorrow!"
  }
}
const serveData = reactive({
  const: []
})
onMounted(() => {
  allInterfaces.recruit().then(res => {
    // console.log(res.data.data)
    serveData.const = res.data.data
  })
})
function goto(id){
  router.push({path: '/recruitmentContainer', query: {id}})
}

</script>

<style scoped lang="scss">
.container {
  width: 75%;
  margin: 20px auto;
}

#Recruitment {
  .workList {
    display: grid;
    grid-template-columns: repeat(3, 32%);
    justify-content: space-between;
    grid-row-gap: 25px;

    .item {
      padding: 5px 20px;
      border: 1px solid #EBEBEB;
      cursor: pointer;
      transition: all .3s;

      &:hover {
        box-shadow: 10px 10px 30px #c1c1c1;
        transition: all .3s;
      }

      .t {
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
          width: 70px;
          height: 70px;
        }

        .tagList {
          .n-tag {
            margin-right: 10px;
          }
        }
      }

      .b {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          font-size: 14px;
          width: 65%;
          line-height: 18px;
          overflow: hidden;

          text-overflow: ellipsis;

          display: -webkit-box;

          -webkit-line-clamp: 2;

          -webkit-box-orient: vertical;
        }
      }
    }
  }
}

@media only screen and (max-width: 770px) {
  #Recruitment {
    .workList {
      display: grid;
      grid-template-columns: repeat(1, 100%);
      justify-content: space-between;
      grid-row-gap: 25px;
    }
  }
}
</style>