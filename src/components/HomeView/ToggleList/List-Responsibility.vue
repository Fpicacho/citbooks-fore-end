<template>
  <div id="NewsList">
    <!--   <div v-html="container.const"></div>-->
    <div class="container">
      <ul class="listMenu">
        <li class="listBox">
          <ul class="r">
            <li v-for="item in container.const" :key="item.id" class="cursor" @click="jump('/articleDetails',item.id)">
              <span class="title2">{{ item.title }}</span>
              <span class="date">{{ TimestampConversion(item.time) }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {reactive, onMounted, watch, computed} from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import allInterfaces from "@/api/allInterfaces";

const router = useRouter();

let container = reactive({const: ""})
const store = useStore();
onMounted(() => {
  getResponsibility()
})

function getResponsibility() {
  allInterfaces.news({
    page: 1,
    limit: 5
  }).then(res => {
    container.const = res.data.data
  })
}

// 语言切换监听
const getLanguageState = computed(() => {
  return store.state.LanguageState;
})
watch(getLanguageState, (newVal) => {
  // 发送newVal 以告知服务端需要什么版本的文章
  getResponsibility()
});
// 语言切换监听end
function TimestampConversion(time) {
  const t = new Date(time * 1000)
  return `${t.getFullYear()}-${t.getMonth() + 1}-${t.getDate()}`
}
function jump(url, id) {
  router.push({path: url, query: {id: id}})
}
</script>

<style scoped lang="scss">
#NewsList {
  padding: 0 16px 20px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: #4c4c4c;
    transition: color .3s;

    &:hover {
      color: #ea4335;
      transition: color .3s;
    }
  }

  .listMenu {
    background: #fff;

    .listBox {
      width: 100%;
      .l {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
        padding: 20px 0;

        span {
          transition: color .3s;

          &:hover {
            transition: color .3s;
            color: #ea4335
          }
        }
      }

      .r {
        li {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          transition: color .3s;
          &:nth-child(1) {
            color: #ea4335;
          }

          .title2 {
            width: 60%;
            display: -webkit-box; /*作为弹性伸缩盒子模型显示*/
            -webkit-line-clamp: 1; /*显示的行数；如果要设置2行加...则设置为2*/
            overflow: hidden; /*超出的文本隐藏*/
            text-overflow: ellipsis; /* 溢出用省略号*/
            -webkit-box-orient: vertical; /*伸缩盒子的子元素排列：从上到下*/
          }

          &:hover {
            color: #ea4335;
            transition: color .3s
          }
        }
      }

    }
  }

  .cursor {
    cursor: pointer;
  }
}

@media only screen and (max-width: 374px) {
  .decorate {
    display: none;
  }
  .container {
    width: 100%;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 374px) and (max-width: 769px) {
  .decorate {
    display: none;
  }
  .container {
    width: 100%;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 770px) {
  .listMenu {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px 40px;
    border-radius: 15px;
    box-shadow: 0 5px 20px 20px rgb(0 0 0 / 3%);
    font-size: 14px;
    overflow: hidden;
    margin-top: 30px;

  }
  .container {
    width: 80%;
    margin: 0 auto;
  }
}

</style>