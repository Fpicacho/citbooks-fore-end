<template>
<div id="Partner">
  <ul>
    <li v-for="item in serveData" :key="item.id" class="wow flip">
      <img :src="item.img" alt="">
      <p>{{item.describe}}</p>
    </li>
  </ul>
  <div style="text-align: center">
    <n-button strong secondary type="primary" style="width:50%" @click="jump('/cooperate')">
      查看更多
    </n-button>
  </div>
</div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter();

let serveData = [
  {id:1,img:'https://docs.alibabagroup.com/assets2/images/cn/global/logo_header.png',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:2,img:'https://www.tencent.com/img/index/tencent_logo.png',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:3,img:'https://pic2.zhimg.com/80/v2-f6b1f64a098b891b4ea1e3104b5b71f6_720w.png',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:4,img:'https:///www.baidu.com/img/flexible/logo/pc/result.png',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:5,img:'http://www.chinawanda.com/static/images/logo_style.png',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:6,img:'https://img2.baidu.com/it/u=2416572543,1181469736&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=157',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:7,img:'https://img2.baidu.com/it/u=2738327552,2106498984&fm=253&fmt=auto&app=138&f=JPEG?w=775&h=500',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:8,img:'https://www.firefox.com.cn/media/protocol/img/logos/firefox/browser/logo-lg-high-res.fbc7ffbb50fd.png',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},

]
function jump(url) {
  router.push({path: url})
}

</script>

<style scoped lang="scss">
p{
  margin: 0;
  padding: 0;
  display: none;
}
#Partner{
  ul{
    display: grid;
    grid-template-columns: repeat(auto-fill,45%);
    place-content: space-between space-between;
    padding: 20px 0;
    li{
      margin-bottom: 20px;
      position: relative;
      img{
        width: 100%;
        height: 80px;
        object-fit: contain;
      }
    }
  }
}


@media only screen and (min-width: 770px) {
  #Partner{
    ul{
      display: grid;
      grid-template-columns: repeat(auto-fill,15%);
      place-content: space-between space-between;
      padding: 20px 0;
      li{
        margin-bottom: 20px;
        position: relative;
        img{
          width: 100%;
          height: 80px;
          object-fit: contain;
        }
        p{
          position: absolute;
          font-size: 14px;
          padding: 5px;
          background: rgba(0,0,0,0.6);
          color: #fff;
          top: 0;
          display: none;
          height: 100%;
        }
        &:hover{
          p{
            display: block;
          }
        }
      }
    }
  }
}
</style>