<template>
  <!-- src\components\HomeView\BusinessList.vue -->
  <div>
    <div class="BusinessList">
      <img src="../../assets/img/yewu/BJ1.jpg" @click="jump('bookImport')" />
      <img src="../../assets/img/yewu/BJ2.jpg" @click="jump('newsImport')" />
      <img
        src="../../assets/img/yewu/BJ3.jpg"
        @click="jump('bookFairServices')"
      />
      <img
        src="../../assets/img/yewu/BJ4.jpg"
        @click="jump('electronicImport')"
      />
      <img
        src="../../assets/img/yewu/BJ5.jpg"
        @click="jump('exportBusiness')"
      />
      <img
        src="../../assets/img/yewu/BJ6.jpg"
        @click="showModal = !showModal"
      />
    </div>
    <!-- 业务平台模态框 -->
    <n-modal v-model:show="showModal">
      <n-card
        style="width: 600px"
        title="业务平台链接"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <p>
          <a href="">书展平台</a>
        </p>
        <p>
          <a href="">书目采选</a>
        </p>
      </n-card>
    </n-modal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const showModal = ref(false);

function jump(id) {
  router.push(id);
}
</script>

<style scoped lang="scss">
.BusinessList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin: 20px auto;
  img {
    width: 32.5%;
    margin-bottom: 20px;
    cursor: pointer;
  }
}
@media screen and (max-width: 770px) {
  .BusinessList {
    width: 80%;
    margin: 35px auto;
    flex-direction: column;
    img {
      width: 100%;
      margin-bottom: 0;
      margin-top: 5px;
    }
  }
}
</style>
