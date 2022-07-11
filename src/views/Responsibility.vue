<template>
  <div id="ElectronicImport">
    <!--  社会和党建责任 列表-->
    <RunBanner :data="RunBannerData"/>
    <div class="container">
      <BreadNavigation :data="BreadNavigationData"/>
      <ul class="list">
        <li v-for="item in serveData.const" :id="item.id" @click="jump(item.id)">
          <div class="l">
            <p class="year">{{ TimestampConversion(item.time, "year") }}</p>
            <p class="date">{{ TimestampConversion(item.time, "date") }}</p>
            <span></span>
          </div>
          <div class="r">
            <h1 class="title">{{ item.title }}</h1>
            <p class="m-day">{{ TimestampConversion(item.time, "year") }} {{
                TimestampConversion(item.time, "date")
              }}</p>
            <p class="describe">{{ item.introduction }}</p>
            <p class="more">{{$t('seeMore')}}</p>
          </div>
        </li>
      </ul>
      <div style="text-align: center; margin-top:20px">
        <n-button strong secondary type="primary" style="width:30%" @click="load" v-if="isNull.const">
          {{$t('loadMore')}}
        </n-button>
        <n-button strong secondary type="primary" style="width:30%" @click="load" disabled v-else >
          {{$t('noMore')}}
        </n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive, onMounted, watch, computed} from 'vue'
import {useRouter} from 'vue-router'
import RunBanner from '@/components/RunBanner'
import BreadNavigation from '@/components/BreadNavigation';
import allInterfaces from "@/api/allInterfaces";
import {useStore} from 'vuex'
import url from '@/assets/img/breadImg/new1.jpg'

const RunBannerData = {
  imgUrl: url,
  title: {
    cn: '企业动态',
    en: 'Entreprise News'
  }
}
const BreadNavigationData = {
  title: {
    cn: "社会与党建责任",
    en: "Entreprise News"
  },
  navigation: [
    {
      link: "/",
      cn: "首页",
      en: "Home"
    },
    {
      link: "/responsibility",
      cn: "社会与党建责任",
      en: "responsibility"
    },
  ],
  describe: {
    cn: "由于企业的生产经营与履行社会责任密切相关所以为了保证企业健康发展企业党组织还必须把履行社会责任作为企业党建的重要内容结合履行社会责任加强党建工作以抓好党建工作保证企业履行好社会责任...",
    en: "Since the production and operation of an enterprise is closely related to the fulfillment of social responsibility, in order to ensure the healthy development of the enterprise, the party organization of the enterprise must also take the fulfillment of social responsibility as an important part of the party building of the enterprise, combined with the fulfillment of social responsibility and strengthen the party building work to ensure that the enterprise fulfills its social responsibility well"
  }
}
const serveData = reactive({const: []})
const page = reactive({const: 1})
const isNull = reactive({const: true})
const router = useRouter();
const store = useStore();

onMounted(() => {
  getNews({page: page.const, limit: 5})
})

function load() {
  page.const = page.const + 1
  allInterfaces.news({page: page.const, limit: 5}).then(res => {
    if (res.data.data.length < 5) {
      isNull.const = false
      res.data.data.forEach(item => {
        serveData.const.push(item)
      })
    }else{
      res.data.data.forEach(item => {
        serveData.const.push(item)
      })
    }
  })
}

function getNews(params) {
  allInterfaces.news(params).then(res => {
    serveData.const = res.data.data
  })
}

function jump(id) {
  router.push({path: '/articleDetails', query: {id}})
}

// 语言切换监听
const getLanguageState = computed(() => {
  return store.state.LanguageState;
})
watch(getLanguageState, (newVal) => {
  // 发送newVal 以告知服务端需要什么版本的文章
  getNews({page: 1, limit:serveData.const.length })
});
// 语言切换监听end

function TimestampConversion(time, type) {
  const t = new Date(time * 1000)
  if (type === 'year') {
    return t.getFullYear()
  } else {
    return `${t.getMonth() + 1}/${t.getDate()}`
  }
}
</script>


<style scoped lang="scss">
.container {
  width: 75%;
  margin: 20px auto;
}

#ElectronicImport {
  .list {
    * {
      margin: 0;
      padding: 0;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      cursor: pointer;
      transition: all .3s;
      margin-top: 20px;

      .r {
        .m-day {
          display: none;
        }
      }

      &:hover {
        background: #fbfbfb;
        transition: all .3s;

        .l {
          color: #00C9A7;
          transition: all .3s;
        }

        .r {
          .title {
            color: #00C9A7;
            transition: all .3s;
          }
        }
      }

      .l {
        color: #D2D2D2;
        width: 10%;
        text-align: right;

        .date {
          font-size: 30px;
        }

        span {
          display: block;
          height: 3px;
          background: #D2D2D2;
          width: 60px;
          float: right;
          margin-top: 10px;
        }
      }

      .r {
        width: 85%;

        .title {
          transition: all .3s;
          color: #555;
          font-size: 22px;
        }

        .describe, .more {
          transition: all .3s;
          color: #898989;
          font-size: 14px;
          margin-top: 10px;
        }
      }
    }
  }
}

@media only screen and (min-width: 374px) and (max-width: 769px) {
  #ElectronicImport {
    .list {
      li {
        padding: 10px 0;

        .l {
          display: none;
        }

        .r {
          width: 100%;

          .m-day {
            display: block;
            margin-top: 10px;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>