<template>
  <div id="MediaList">
    <!--媒体资讯-->
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
import url from '@/assets/img/breadImg/new3.jpg'

const RunBannerData = {
  imgUrl: url,
  title: {
    cn: '行业资讯',
    en: 'Industry information'
  }
}
const BreadNavigationData = {
  title: {
    cn: '媒体资讯',
    en: 'Media information'
  },
  navigation: [
    {
      link: "/",
      cn: "首页",
      en: "Home"
    },
    {
      link: "/mediaList",
      cn: "媒体资讯",
      en: "MediaInformation"
    },
  ],
  describe: {
    cn: "",
    en: ""
  }
}
const serveData = reactive({const: []})
const page = reactive({const: 1})
const isNull = reactive({const: true})
const router = useRouter();
const store = useStore();

onMounted(() => {
  getEnterpriseList({page: page.const, limit: 5})
})

function load() {
  page.const = page.const + 1
  allInterfaces.media({page: page.const, limit: 5}).then(res => {
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

function getEnterpriseList(params) {
  allInterfaces.media(params).then(res => {
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
  getEnterpriseList({page: 1, limit:serveData.const.length })
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

#MediaList {
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
  #MediaList {
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