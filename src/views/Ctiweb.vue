<template>
  <div id="Ctiweb">
    <!-- 线上书展 -->
    <RunBanner :data="RunBannerData" />
    <div class="container">
      <BreadNavigation :data="BreadNavigationData" />
      <div class="_container">
        <div class="searchBox">
          <div class="t">
            <n-input
              v-model:value="value"
              type="text"
              placeholder="按名称、作者、ISBN、出版社...搜索。"
            />
            <n-button type="primary"> 搜索 </n-button>
          </div>
          <div class="b">
            <p style="border-bottom: 1px dashed;color: rgb(119, 119, 119);font-size: 14px;cursor: pointer;dispaly:">按类型搜索</p>
          </div>
        </div>
        <ul class="bookList">
          <li class="bookItem" v-for="item in data.bookList.list" :id="item.id">
            <div class="l">
              <img :src="item.imgUrl" alt="" />
            </div>
            <div class="r">
              <div class="box1">
                <p class="title">
                  {{ item.title }}
                </p>
                <p class="press">{{ item.press }}</p>
                <p class="author">{{ item.author }}</p>
                <p class="theme">主题：{{ item.theme }}</p>
                <p class="category">
                  <n-tag
                    type="success"
                    :bordered="false"
                    v-for="(item2, index) in item.category"
                    :id="index"
                  >
                    {{ item2 }}
                  </n-tag>
                </p>
              </div>
              <div class="box2">
                <span class="info">
                  <span style="color: #888">ISBN：</span>{{ item.isbn }}
                </span>
                <span class="info">
                  <span style="color: #888">中图分类号：</span
                  >{{ item.classificationNUB }}
                </span>
                <span class="info">
                  <span style="color: #888">装帧：</span>{{ item.binding }}
                </span>
                <span class="info">
                  <span style="color: #888">页数：</span>{{ item.pages }}
                </span>
                <span class="info">
                  <span style="color: #888">供货状态：</span
                  >{{ item.SupplyStatus }}
                </span>
                <span class="info">
                  <span style="color: #888">价格：</span>{{ item.price }}
                </span>
                <n-button type="success" size="small"> 加入书单 </n-button>
              </div>
            </div>
          </li>
        </ul>
        <n-pagination v-model:page="page" :page-count="100" />
      </div>
    </div>
  </div>
</template>

<script setup>
import RunBanner from "@/components/RunBanner";
import BreadNavigation from "@/components/BreadNavigation";
import url from "@/assets/img/breadImg/shuzhanfuwu.jpg";
import { reactive } from "vue";

const RunBannerData = {
  imgUrl: url,
  title: {
    cn: "线上书展",
    en: "Online book fair",
  },
};
const BreadNavigationData = {
  title: {
    cn: "",
    en: "",
  },
  navigation: [
    {
      link: "/",
      cn: "首页",
      en: "Home",
    },
    {
      link: "/ctiweb",
      cn: "线上书展",
      en: "Book Fair Services",
    },
  ],
  describe: {
    cn: "",
    en: "",
  },
};

const data = reactive({
  bookList: {
    length: 3,
    list: [
      {
        id: 0,
        imgUrl:
          "https://www.javascriptc.com/books/you-dont-know-js/images/up-cover.jpg",
        title:
          "你不知道的JavaScript（上卷）= You Don’t Know JS Scope &closures this & object prototypes",
        press: "人民邮电出版社",
        author: "Kyle Simpson",
        theme: "计算机",
        category: ["编程语言", "前端开发"],
        isbn: "7115385734",
        classificationNUB: "k15",
        binding: "xxxxxx",
        pages: 999,
        SupplyStatus: "现货",
        price: 99,
      },
      {
        id: 1,
        imgUrl:
          "https://th.bing.com/th/id/OIP.epvtOunj6U2Ebt3B95pWcAHaLH?w=202&h=303&c=7&r=0&o=5&pid=1.7",
        title: "斗罗大陆",
        press: "人民邮电出版社",
        author: "唐家三少",
        theme: "小说",
        category: ["穿越", "异世界"],
        isbn: "7115385784",
        classificationNUB: "A25",
        binding: "xxxxxx",
        pages: 300,
        SupplyStatus: "现货",
        price: 22,
      },
      {
        id: 3,
        imgUrl:
          "https://th.bing.com/th/id/OIP.JWxNWPLMo-Erv3Iu2F5_CQHaJa?w=160&h=204&c=7&r=0&o=5&pid=1.7",
        title: "时间简史（插图版）",
        press: "人民邮电出版社",
        author: "史蒂芬·霍金",
        theme: "计算机",
        category: ["编程语言", "前端开发"],
        isbn: "7535732305",
        classificationNUB: "S23",
        binding: "xxxxxx",
        pages: 1500,
        SupplyStatus: "现货",
        price: 199,
      },
    ],
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 80%;
  margin: 20px auto;
  ._container {
    width: 986px;
    margin: 0 auto;
    .searchBox{
      display: flex;
      flex-direction: column;
      .t{
        display: flex;

      }
    }
    .bookList {
      p,
      span {
        margin: 0;
        padding: 0;
        font-size: 13px;
      }
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #aaaaaa;
      .bookItem {
        display: flex;
        min-height: 180px;
        border-bottom: 1px solid #ddd;
        margin-bottom: 15px;
        .l {
          img {
            width: 100px;
            margin-right: 25px;
          }
        }
        .r {
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: space-between;
          .box1 {
            .title {
              font-size: 16px;
              color: #000;
              text-decoration: underline;
              word-wrap: break-word;
              word-break: break-all;
            }
            .press {
              color: #888;
            }
            .author {
              color: #49afd0;
              font-style: italic;
            }
            .theme {
              margin-top: 10px;
            }
            .category {
              margin-top: 5px;
              .n-tag {
                margin-right: 5px;
                font-size: 13px;
              }
            }
          }
          .box2 {
            text-align: right;
            margin-bottom: 5px;
            .info {
              margin-right: 8px;
            }
          }
        }
      }
    }
    .n-pagination {
      justify-content: center;
      margin-top: 25px;
    }
  }
}
</style>
