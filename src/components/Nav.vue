<template>
  <div id="Navv">
    <div id="Nav">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/img/logo.png" alt="" class="wow slideInLeft" />
        </router-link>
      </div>
      <div class="navList wow slideInRight">
        <n-dropdown
          trigger="click"
          :options="options"
          :show-arrow="true"
          @select="handleSelect"
        >
          <n-button>
            <n-icon>
              <cash-icon />
            </n-icon>
          </n-button>
        </n-dropdown>
        <ChangeLanguageBtn style="margin-left: 10px" @click="ChangeLanguage" />
      </div>
      <div class="pc-navList wow slideInRight">
        <router-link to="/" class="home">{{ $t("home") }}</router-link>
        <n-menu
          mode="horizontal"
          :options="options"
          @update:value="handleSelect"
        />
        <ChangeLanguageBtn @click="ChangeLanguage" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import ChangeLanguageBtn from "@/components/ChangeLanguageBtn";
import { List as CashIcon } from "@vicons/ionicons5";

const language = ref("cn");

const router = useRouter();

const options = reactive([
  {
    label: "关于我们",
    key: "AboutUs",
    children: [
      {
        label: "公司简介",
        key: "introduction",
      },
      {
        label: "组织结构",
        key: "organize",
      },
      {
        label: "合作伙伴",
        key: "Cooperate",
      },
      {
        label: "公司文化",
        key: "Culture",
      },
      {
        label: "党建和社会责任",
        key: "Responsibility",
      },
      {
        label: "招聘信息",
        key: "Recruitment",
      },
    ],
  },
  {
    label: "公司业务",
    key: "Business",
    children: [
      {
        label: "原版图书进口",
        key: "BookImport",
      },
      {
        label: "电子资源进口",
        key: "ElectronicImport",
      },
      {
        label: "报刊进口",
        key: "NewsImport",
      },
      {
        label: "出口业务",
        key: "ExportBusiness",
      },
    ],
  },
  {
    label: "新闻动态",
    key: "news",
    children: [
      {
        label: "公司动态",
        key: "EnterpriseList",
      },
      {
        label: "行业资讯",
        key: "IndustryList",
      },
      {
        label: "媒体资讯",
        key: "MediaList",
      },
    ],
  },
  {
    label: "特色服务",
    key: "SpecialFunction",
    children: [
      {
        label: "书展服务",
        key: "BookFairServices",
      },
      {
        label: "数据加工",
        key: "DataProcessing",
      },
      {
        label: "专业研究",
        key: "ProfessionalStudies",
      },
    ],
  },
  {
    label: "业务平台",
    key: "ywpt",
    children: [
      {
        label: "线上书展",
        key: "http://bookshow.ctibooks.com.cn/#/",
      },
      {
        label: "书目采选",
        key: "http://218.94.19.14:50101/ctiweb/newSelectBook/bookSelectIndex.action",
      },
    ],
  },
]);

function handleSelect(key) {
  const RegExr = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
  if (RegExr.test(key)) {
    window.open(key, "_blank");
  } else {
    router.push({ name: key });
  }
}

function ChangeLanguage() {
  if (language.value === "cn") {
    language.value = "en";
    options[0].label = "AboutUs";
    options[0].children[0].label = "Company Profile";
    options[0].children[1].label = "OrganizationalStructure";
    options[0].children[2].label = "Partner";
    options[0].children[3].label = "CompanyCulture";
    options[0].children[4].label = "Responsibility";
    options[0].children[5].label = "Job Offers";
    options[1].label = "Business";
    options[1].children[0].label = "ImportOfOriginalBooks";
    options[1].children[1].label = "ImportOfElectronicResources";
    options[1].children[2].label = "NewspaperImport";
    options[1].children[3].label = "ExportBusiness";
    options[2].label = "News";
    options[2].children[0].label = "CompanyDynamics";
    options[2].children[1].label = "IndustryInformation";
    options[2].children[2].label = "MediaInformation";
    options[3].label = "SpecialFunction";
    options[3].children[0].label = "BookFairServices";
    options[3].children[1].label = "DataProcessing";
    options[3].children[2].label = "ProfessionalStudies";
    options[4].label = "Business platform";
    options[4].children[0].label = "Online Book Fair";
    options[4].children[1].label = "Bibliographic selection";
  } else {
    language.value = "cn";
    options[0].label = "关于我们";
    options[0].children[0].label = "公司简介";
    options[0].children[1].label = "组织结构";
    options[0].children[2].label = "合作伙伴";
    options[0].children[3].label = "公司文化";
    options[0].children[4].label = "党建和社会责任";
    options[0].children[5].label = "招聘信息";
    options[1].label = "公司业务";
    options[1].children[0].label = "原版图书进口";
    options[1].children[1].label = "电子资源进口";
    options[1].children[2].label = "报刊进口";
    options[1].children[3].label = "出口业务";
    options[2].label = "新闻动态";
    options[2].children[0].label = "公司动态";
    options[2].children[1].label = "行业资讯";
    options[2].children[2].label = "媒体资讯";
    options[3].label = "特色服务";
    options[3].children[0].label = "书展服务";
    options[3].children[1].label = "数据加工";
    options[3].children[2].label = "专业研究";
    options[4].label = "业务平台";
    options[4].children[0].label = "线上书展";
    options[4].children[1].label = "书目采选";
  }
}
</script>

<style scoped lang="scss">
#Navv {
  border-bottom: 1px solid #e0e0e6;
}
#Nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
  width: 80%;
  margin: 0 auto;

  .home {
    font-size: 16px;
    color: #333639;
    text-decoration: none;
    transition: 0.3s all;
    height: 42px;
    line-height: 40px;
    padding: 0 20px;
    border-bottom: 2px solid #0000;
    border-bottom: 0;
    &:hover {
      color: #18a058;
      transition: 0.3s all;
    }
  }
}
@media only screen and (max-width: 374px) {
  #Nav {
    width: 90%;
    .logo {
      img {
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
  #Nav {
    width: 90%;
    .logo {
      img {
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
  #Nav {
    width: 90%;
    .logo {
      img {
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
  #Nav {
    .logo {
      img {
        width: 300px;
      }
    }
  }
}
</style>
<style>
.n-menu-item-content-header {
  font-size: 16px;
}
</style>
