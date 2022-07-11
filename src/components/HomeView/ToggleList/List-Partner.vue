<template>
  <div id="Partner">
    <ul>
      <li v-for="item in serveData.const" :key="item.id" class="wow flip">
        <img :src="item.imgUrl" alt="">
        <p>{{ item.introduction }}</p>
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
import {reactive, onMounted, watch, computed} from 'vue'
import {useRouter} from 'vue-router'
import allInterfaces from "@/api/allInterfaces";

const router = useRouter();

const serveData = reactive({
  const: []
})

onMounted(()=>{
  allInterfaces.links({page:1,limit:12}).then(res=>{
    serveData.const = res.data.data
  })
})

function jump(url) {
  router.push({path: url})
}

</script>

<style scoped lang="scss">
p {
  margin: 0;
  padding: 0;
  display: none;
}

#Partner {
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, 45%);
    place-content: space-between space-between;
    padding: 20px 0;

    li {
      margin-bottom: 20px;
      position: relative;

      img {
        width: 100%;
        height: 80px;
        object-fit: contain;
      }
    }
  }
}


@media only screen and (min-width: 770px) {
  #Partner {
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fill, 15%);
      place-content: space-between space-between;
      padding: 20px 0;

      li {
        margin-bottom: 20px;
        position: relative;

        img {
          width: 100%;
          height: 80px;
          object-fit: contain;
        }

        p {
          position: absolute;
          font-size: 14px;
          padding: 5px;
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
          top: 0;
          display: none;
          height: 100%;
          min-width: 100%;
        }

        &:hover {
          p {
            display: block;
          }
        }
      }
    }
  }
}
</style>