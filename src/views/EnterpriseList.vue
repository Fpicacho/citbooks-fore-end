<template>
  <div id="ElectronicImport">
    <!--  媒体报道列表-->
    <RunBanner :data="RunBannerData"/>
    <div class="container">
      <BreadNavigation :data="BreadNavigationData"/>
      <ul class="list">
        <li v-for="item in serveData" :id="item.id" @click="jump(item.id)">
          <div class="l">
            <p class="year">{{ item.year }}</p>
            <p class="date">{{ item.date }}</p>
            <span></span>
          </div>
          <div class="r">
            <h1 class="title">{{ item.title }}</h1>
            <p class="m-day">{{ item.year }} / {{ item.date }}</p>
            <p class="describe">{{ item.describe }}</p>
            <p class="more">查看更多+</p>
          </div>
        </li>
      </ul>
      <div style="text-align: center; margin-top:20px">
        <n-button strong secondary type="primary" style="width:30%" @click="load">
          加载更多
        </n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive} from 'vue'
import {useRouter} from 'vue-router'
import RunBanner from '@/components/RunBanner'
import BreadNavigation from '@/components/BreadNavigation';

const RunBannerData = {
  imgUrl: 'http://www.chinawanda.com/static/images/tx_banner.jpg',
  title: {
    cn: '企业动态',
    en: 'Entreprise News'
  }
}
const BreadNavigationData = {
  title: {
    cn: "企业动态",
    en: "Entreprise News"
  },
  navigation: [
    {
      link: "/",
      cn: "企业动态",
      en: "EntrepriseNews"
    },
    {
      link: "/electronicImport",
      cn: "企业动态",
      en: "Electronic"
    },
  ],
  describe: {
    cn: "由于企业的生产经营与履行社会责任密切相关所以为了保证企业健康发展企业党组织还必须把履行社会责任作为企业党建的重要内容结合履行社会责任加强党建工作以抓好党建工作保证企业履行好社会责任...",
    en: "Since the production and operation of an enterprise is closely related to the fulfillment of social responsibility, in order to ensure the healthy development of the enterprise, the party organization of the enterprise must also take the fulfillment of social responsibility as an important part of the party building of the enterprise, combined with the fulfillment of social responsibility and strengthen the party building work to ensure that the enterprise fulfills its social responsibility well"
  }
}
const serveData = reactive([
  {
    id: 1,
    title: "北京冬奥会全面开赛，让我们一起为运动健儿加油！",
    year: "2022",
    date: "06-04",
    describe: "冬季奥林匹克运动会简称冬奥会。是世界规模最大的冬季综合运动会，每四年举办一届。北京冬季奥运会设7个大项，15个分项，109个小项。"
  },
  {
    id: 2,
    title: "北京冬奥会全面开赛，让我们一起为运动健儿加油！",
    year: "2022",
    date: "06-04",
    describe: "冬季奥林匹克运动会简称冬奥会。是世界规模最大的冬季综合运动会，每四年举办一届。北京冬季奥运会设7个大项，15个分项，109个小项。"
  },
  {
    id: 3,
    title: "北京冬奥会全面开赛，让我们一起为运动健儿加油！",
    year: "2022",
    date: "06-04",
    describe: "冬季奥林匹克运动会简称冬奥会。是世界规模最大的冬季综合运动会，每四年举办一届。北京冬季奥运会设7个大项，15个分项，109个小项。"
  },
  {
    id: 4,
    title: "北京冬奥会全面开赛，让我们一起为运动健儿加油！",
    year: "2022",
    date: "06-04",
    describe: "冬季奥林匹克运动会简称冬奥会。是世界规模最大的冬季综合运动会，每四年举办一届。北京冬季奥运会设7个大项，15个分项，109个小项。"
  }
])
const router = useRouter();

function load() {
  const test = [{
    id: 1,
    title: "1231231000，让我们一起为运动健儿加油！",
    year: "2088",
    date: "06-04",
    describe: "冬季奥林匹克运动会简称冬奥会。是世界规模最大的冬季综合运动会，每四年举办一届。北京冬季奥运会设7个大项，15个分项，109个小项。"
  }, {
    id: 1,
    title: "1231231000，让我们一起为运动健儿加油！",
    year: "2088",
    date: "06-04",
    describe: "冬季奥林匹克运动会简称冬奥会。是世界规模最大的冬季综合运动会，每四年举办一届。北京冬季奥运会设7个大项，15个分项，109个小项。"
  }, {
    id: 1,
    title: "1231231000，让我们一起为运动健儿加油！",
    year: "2088",
    date: "06-04",
    describe: "冬季奥林匹克运动会简称冬奥会。是世界规模最大的冬季综合运动会，每四年举办一届。北京冬季奥运会设7个大项，15个分项，109个小项。"
  }, {
    id: 1,
    title: "1231231000，让我们一起为运动健儿加油！",
    year: "2088",
    date: "06-04",
    describe: "冬季奥林匹克运动会简称冬奥会。是世界规模最大的冬季综合运动会，每四年举办一届。北京冬季奥运会设7个大项，15个分项，109个小项。"
  }]
  test.forEach(item => {
    serveData.push(item)
  })

}

function jump(id) {
  router.push({path: '/articleDetails', query: {id}})
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
      .r{
        .m-day{
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
          .m-day{
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