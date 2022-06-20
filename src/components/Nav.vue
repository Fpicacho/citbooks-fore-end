<template>
  <div id="Nav">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/img/logo.png" alt="" class="wow slideInLeft">
      </router-link>
    </div>
    <div class="navList wow slideInRight">
      <n-dropdown trigger="click"
                  :options="options"
                  :show-arrow="true"
                  @select="handleSelect"
      >
        <n-button>
          <n-icon>
            <cash-icon/>
          </n-icon>
        </n-button>
      </n-dropdown>
      <ChangeLanguageBtn style="margin-left: 10px" @click="ChangeLanguage"/>
    </div>
    <div class="pc-navList wow slideInRight">
      <n-menu mode="horizontal" :options="options" @update:value="handleSelect"/>
      <ChangeLanguageBtn @click="ChangeLanguage"/>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive} from "vue";
import {useRouter} from "vue-router"
import ChangeLanguageBtn from "@/components/ChangeLanguageBtn"
import {List as CashIcon} from '@vicons/ionicons5'

const language = ref('cn')

const router = useRouter();

const options = reactive([
  {
    label: "关于我们",
    key: "AboutUs",
    children: [
      {
        label: "公司简介",
        key: "introduction"
      },
      {
        label: "组织结构",
        key: "organize",
      }, {
        label: "合作伙伴",
        key: "Cooperate",
      }, {
        label: "公司文化",
        key: "Culture",
      }, {
        label: "党建和社会责任",
        key: "Responsibility"
      }, {
        label: "招聘信息",
        key: "Recruitment"
      }
    ]
  }, {
    label: "公司业务",
    key: "Business",
    children: [{
      label: "原版图书进口",
      key: "BookImport",
    }, {
      label: "电子资源进口",
      key: "ElectronicImport",
    }, {
      label: "报刊进口",
      key: "NewsImport",
    }, {
      label: "出口业务",
      key: "ExportBusiness",
    }]
  }, {
    label: "企业动态",
    key: "news",
    children: [{
      label: "企业动态",
      key: "EnterpriseList",
    }, {
      label: "行业资讯",
      key: "IndustryList",
    }, {
      label: "媒体资讯",
      key: "MediaList",
    }]
  }, {
    label: "特色服务",
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
  }
])

function handleSelect(key) {
  router.push({name:key})
}


function ChangeLanguage() {
  if (language.value === 'cn') {
    language.value = 'en'
    options[0].label = 'AboutUs'
    options[0].children[0].label = 'Company Profile'
    options[0].children[1].label = 'OrganizationalStructure'
    options[0].children[2].label = 'Partner'
    options[0].children[3].label = 'CompanyCulture'
    options[0].children[4].label = 'Responsibility'
    options[0].children[5].label = 'Job Offers'
    options[1].label = 'Business'
    options[1].children[0].label = 'ImportOfOriginalBooks'
    options[1].children[1].label = 'ImportOfElectronicResources'
    options[1].children[2].label = 'NewspaperImport'
    options[1].children[3].label = 'ExportBusiness'
    options[2].label = 'News'
    options[2].children[0].label = 'EntrepriseNews'
    options[2].children[1].label = 'IndustryInformation'
    options[2].children[2].label = 'MediaInformation'
    options[3].label = 'SpecialFunction'
    options[3].children[0].label = 'BookFairServices'
    options[3].children[1].label = 'DataProcessing'
    options[3].children[2].label = 'ProfessionalStudies'
  } else {
    language.value = 'cn'
    options[0].label = '关于我们'
    options[0].children[0].label = '公司简介'
    options[0].children[1].label = '组织结构'
    options[0].children[2].label = '合作伙伴'
    options[0].children[3].label = '公司文化'
    options[0].children[4].label = '党建和社会责任'
    options[0].children[5].label = '招聘信息'
    options[1].label = '公司业务'
    options[1].children[0].label = '原版图书进口'
    options[1].children[1].label = '电子资源进口'
    options[1].children[2].label = '报刊进口'
    options[1].children[3].label = '出口业务'
    options[2].label = '企业动态'
    options[2].children[0].label = '企业动态'
    options[2].children[1].label = '行业资讯'
    options[2].children[2].label = '媒体资讯'
    options[3].label = '特色服务'
    options[3].children[0].label = '书展服务'
    options[3].children[1].label = '数据加工'
    options[3].children[2].label = '专业研究'
  }
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
  #Nav{
    .logo{
      img{
        width: 100px;
      }
    }
  }
}
@media only screen and (max-width: 449px) {
  .navList {
    display: flex;
  }
  .pc-navList {
    display: none;
  }
  #Nav{
    .logo{
      img{
        width: 200px;
      }
    }
  }
}

@media only screen and (min-width: 374px) and (max-width: 769px) {
  .navList {
    display: flex;
  }
  .pc-navList {
    display: none;
  }
  #Nav{
    .logo{
      img{
        width: 200px;
      }
    }
  }
}

@media only screen and (min-width: 770px) {
  .navList {
    display: none;
  }
  .pc-navList {
    display: flex;
    align-items: center;
  }
  #Nav{
    .logo{
      img{
        width: 300px;
      }
    }
  }
}
</style>