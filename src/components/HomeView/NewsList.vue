<template>
  <div id="NewsList">
    <div class="container">
      <ul class="listMenu">
        <li class="listBox">
          <div class="l">
            <div class="title">📰 {{$t('HomeNewsList.news')}}</div>
            <span class="cursor">{{$t('HomeNewsList.seeMore')}} >></span>
          </div>
          <ul class="r">
            <li v-for="item in newsList" :key="item.id" class="cursor">
              <span class="title2">{{ item.title }}</span>
              <span class="date">{{ item.date }}</span>
            </li>
          </ul>
        </li>
        <div style="float:left;margin-top: 30px;width: 1px;height: 200px; background: #eeeeee;" class="decorate"></div>
        <li class="listBox">
          <div class="l">
            <div class="icon">📖 {{$t('HomeNewsList.bookFair')}}</div>
            <span class="cursor">{{$t('HomeNewsList.seeMore')}} >></span>
          </div>
          <ul class="r">
            <li v-for="item in booxList" :id="item.id" class="cursor">
              <span class="title2">{{ item.title }}</span>
              <span>{{ item.date }}</span>
            </li>
          </ul>
        </li>
        <div style="float:left;margin-top: 30px;width: 1px;height: 200px; background: #eeeeee;" class="decorate"></div>
        <li class="listBox">
          <div class="l">
            <div class="title">📺 {{$t('HomeNewsList.video')}}</div>
          </div>
          <video width="320" height="240" controls="controls">
            <source src="movie.mp4" type="video/mp4">
          </video>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const newsList = ref([
  {
    id: 1,
    title: "北京冬奥会全面开赛，让我们一起为运动健儿加油！",
    date: "2022-10-11"
  }, {
    id: 2,
    title: "中科公司协同国内出版社助力柬埔寨科学抗疫",
    date: "2022-04-12"
  }, {
    id: 3,
    title: "中科公司输出版权积极协助国际社会抗击疫情",
    date: "2022-11-11"
  }, {
    id: 4,
    title: "在常态化疫情防控中开拓创新 拥抱春天",
    date: "2022-07-21"
  }, {
    id: 5,
    title: "中科公司于泰国曼谷主办“中泰文学翻译与出版”研讨会",
    date: "2022-05-21"
  }
])
const booxList = ref([
  {
    id: 1,
    title: "北京冬奥会全面开赛，让我们一起为运动健儿加油！",
    date: "2022-10-11"
  }, {
    id: 2,
    title: "中科公司协同国内出版社助力柬埔寨科学抗疫",
    date: "2022-04-12"
  }, {
    id: 3,
    title: "中科公司输出版权积极协助国际社会抗击疫情",
    date: "2022-11-11"
  }, {
    id: 4,
    title: "在常态化疫情防控中开拓创新 拥抱春天",
    date: "2022-07-21"
  }, {
    id: 5,
    title: "中科公司于泰国曼谷主办“中泰文学翻译与出版”研讨会",
    date: "2022-05-21"
  }
])

</script>

<style scoped lang="scss">
#NewsList {
  padding: 0 16px 20px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  .listMenu {
    background: #fff;
    .listBox {
      .l {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
        padding: 20px 0;
        span{
          transition: color .3s;
          &:hover{
            transition: color .3s;
            color:#ea4335
          }
        }
      }
      .r {
        li {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          transition: color .3s;
          &:nth-child(1){
            color: #ea4335;
          }
          .title2 {
            width: 60%;
            display: -webkit-box;/*作为弹性伸缩盒子模型显示*/
            -webkit-line-clamp: 1; /*显示的行数；如果要设置2行加...则设置为2*/
            overflow: hidden; /*超出的文本隐藏*/
            text-overflow: ellipsis; /* 溢出用省略号*/
            -webkit-box-orient: vertical;/*伸缩盒子的子元素排列：从上到下*/
          }
          &:hover{
            color: #ea4335;
            transition: color .3s
          }
        }
      }
      video{
        width: 100%;
        height: 145px;
        border-radius: 10px;
      }
    }
  }
  .cursor{
    cursor: pointer;
  }
}
@media only screen and (max-width: 374px) {
  .decorate{
    display: none;
  }
  .container{
    width: 100%;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 374px) and (max-width: 769px) {
  .decorate{
    display: none;
  }
  .container{
    width: 100%;
    margin: 0 auto;
  }
}
@media only screen and (min-width: 770px) {
  .listMenu{
    display: flex;
    //width: 100%;
    justify-content: space-between;
    padding: 20px 40px;
    border-radius: 15px;
    box-shadow: 0 5px 20px 20px rgb(0 0 0 / 3%);
    font-size: 14px;
    overflow: hidden;
    margin-bottom: 30px;
    .listBox{
      width: 30%;
    }
  }
  .container{
    width: 80%;
    margin: 0 auto;
  }
}

</style>