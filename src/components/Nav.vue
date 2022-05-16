<template>
  <div id="Nav">
    <div class="logo">
      <img src="../assets/img/logo.png" alt="">
    </div>
    <div class="navList">
      <n-dropdown trigger="click"
                  :options="options"
                  :show-arrow="true">
        <n-button>
          <n-icon>
            <cash-icon/>
          </n-icon>
        </n-button>
      </n-dropdown>
    </div>

    <div class="pc-navList">
      <n-menu mode="horizontal" :options="menuOptions" />
    </div>
  </div>
</template>

<script setup>
import {ref, h} from "vue";
import {NMenu} from "naive-ui";
import {List as CashIcon} from '@vicons/ionicons5'

const menuOptions = [{
  label: "关于我们",
  key: "AboutUs",
  children: [{
    label: "公司简介",
    key: "CompanyProfile",
  }, {
    label: "组织结构",
    key: "OrganizationalStructure",
  }, {
    label: "合作伙伴",
    key: "Partner",
  }, {
    label: "公司文化",
    key: "CompanyCulture",
  }]
}, {
  label: "公司业务",
  key: "Business",
  children: [{
    label: "原版图书进口",
    key: "ImportOfOriginalBooks",
  }, {
    label: "电子资源进口",
    key: "ImportOfElectronicResources",
  }, {
    label: "报刊进口",
    key: "NewspaperImport",
  }, {
    label: "出口业务",
    key: "ExportBusiness",
  }]
}, {
  label: "新闻动态",
  key: "news",
  children: [{
    label: "媒体报道",
    key: "MediaCoverage",
  }, {
    label: "行业资讯",
    key: "IndustryInformation",
  }, {
    label: "企业新闻",
    key: "CorporateNews",
  }]
}, {
  label: "特色功能",
  key: "SpecialFunction",
  children: [{
    label: "书展服务",
    key: "BookFairServices",
  }, {
    label: "数据加工",
    key: "DataProcessing",
  }, {
    label: "专业研究",
    key: "ProfessionalStudies",
  }]
},{
  label: "English",
  key: "changeLanguage",
}]

const options = ref([
  {
    type: "render",
    key: "main",
    render: renderCustomHeader
  }
])

function renderCustomHeader() {
  return h(NMenu, {options: menuOptions, accordion: "accordion"})
}

</script>

<style scoped lang="scss">

#Nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #efeff5;
}
@media only screen and (max-width: 374px) {
  .navList{
    display: block;
  }
  .pc-navList{
    display: none;
  }
}

@media only screen and (min-width: 374px) and (max-width: 413px) {
  .navList{
    display: block;
  }
  .pc-navList{
    display: none;
  }
}

@media only screen and (min-width: 414px) {
  .navList{
    display: none;
  }
  .pc-navList{
    display: block;
  }
}
</style>