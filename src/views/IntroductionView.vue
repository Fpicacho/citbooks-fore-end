<template>
  <!--组织结构 src/views/IntroductionView.vue-->
  <div id="Introduction">
    <RunBanner :data="RunBannerData"/>
    <div class="container">
      <div class="contentBox">
        <div class="l wow slideInLeft">
          <h1>中国科技资料进出口总公司</h1>
          <p>中国科技资料进出口总公司是1987年由原国家外经贸部批准成立的全民所有制企业。公司主要经营图书、报纸、期刊、电子文献及电子书的进口业务，版权进出口业务，相关批发和零售业务，是由北京市新闻出版广电局认证授权具有完全的出版物经营和出版物进口经营资质的企业。</p>
          <p>中科公司在经营中追求为客户提供“专业化、人性化和个性化”的专业服务，先后在北京、南京、上海、广州、武汉、成都、西安设立办公点，保证了对客户服务的及时响应。中科总公司以深厚的专业积累、细致周到的服务在行业中创下了优良的口碑，客户覆盖面和业务量成倍增长。目前与中国科技资料进出口总公司有业务往来的国内高校多达400余家，与全国大部分重点高校均有长期的业务往来。除此之外公司与国内的公共图书馆、科研院所等单位的图书文献机构也有着长期良好的业务关系。</p>
          <p>我公司通过多年的经营已同全球近千家知名出版集团或出版社建立了合作关系或有业务往来，保持着良好的业务关系，成为其中国大陆地区最大的代理商之一。我公司着力扩充小语种图书、绝版图书或者出版时间久远图书的采购渠道，特别是开辟东南亚图书的采购渠道，改善了过去对这一地区采购图书的困难状况，提高了客户满意度。外文原版图书的总体订到率在行业中名列前茅。</p>
          <p>从2005年起，经原国家新闻出版总署批准，我公司开创性地在国内重点院校及科研单位举办“外文原版图书巡回书展”，借助这一平台，让读者能够直观见到国外最新的原版图书，缩短了到货周期，为客户采购外文原版图书带来更多便捷。这一首创性的服务模式是我公司为提升业内服务层次所做的有益尝试，已成为我公司的业务特色和品牌标志。中科公司建立了完备的国际物流系统，在美国、英国、德国、新加坡、香港、印度等地拥有指定的空运和海运货运代理商，物流网络覆盖了全球主要国家和地区。国内运输全部实现“到桌”式服务。</p>
          <p>中科拥有一支精通业务、拼搏向上、不断进取、敬业团结的员工队伍。现有员工近100人，下设客服部、销售部、市场研究部、进口部、财务部、人力行政部、总经理办公室、审读办公室、出口部、期刊部等部门。公司人员以80后为主力，新老衔接合理、业务骨干年富力强、后备梯队承接有序。公司人员都有较高的教育背景，硕士研究生学历和本科生学历占到公司人员70%以上。</p>
          <p>在多年来的经营中中科公司逐渐积淀了深厚的行业资源，建立了顺畅的经营体系，凭借多年经营的良好业绩和在行业中的影响力，经国家新闻出版广电总局批准，中科公司在对国内高等院校、科研院所开展相关业务时可享受免税的政策，这一政策大大促进了中科总公司同国内高等院校、科研院所及各级图书馆的合作，也充分印证了中科公司在行业内具有的实力。中国科技资料进出口总公司以“创新、诚信、服务、求实”为经营理念，以扩大国际科技信息交流、引进高新技术、发展对外科技贸易为宗旨，立志为我国科技进步和信息化建设提供专业的服务。</p>
        </div>
        <div class="r wow slideInRight">
          <ul class="digitalList">
            <li>
              <n-number-animation :from="0" :to="1987"/>
              <p>成立于1987年</p>
            </li>
            <li>
              <n-number-animation :from="0" :to="100"/>+
              <p>100余人的专业团队</p>
            </li>
            <li>
              <n-number-animation :from="0" :to="400" />+
              <p>服务对象400余家</p>
            </li>
          </ul>
          <img src="https://tse1-mm.cn.bing.net/th/id/R-C.6b5946a30c6cc764ca713e31bc3e5a4d?rik=194dazu9FIUogQ&riu=http%3a%2f%2fwww.cbs.com.cn%2fuploads%2fallimg%2f200424%2f1-2004241J146.jpg&ehk=Xm5vjFs9zGX8rIU3drX956bdWUhGWtuS7ksIUzO6gdc%3d&risl=&pid=ImgRaw&r=0" alt="">
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import {watch, computed} from 'vue'
import {useStore} from 'vuex'
import RunBanner from '@/components/RunBanner'

const store = useStore();
const RunBannerData = {
  imgUrl: 'http://www.chinawanda.com/static/images/tx_banner.jpg',
  title: {
    cn: '公司简介',
    en: 'Company Profile'
  }
}



// 语言切换监听
const getLanguageState = computed(() => {
  return store.state.LanguageState;
})
watch(getLanguageState, (newVal) => {
  // 发送newVal 以告知服务端需要什么版本的文章
  console.log(newVal)
});
// 语言切换监听end

</script>

<style scoped lang="scss">
#Introduction{
  .container {
    width: 80%;
    margin: 0 auto;
    .contentBox{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 25px;
      .l{
        width: 100%;
        p{
          color: #666;
        }
      }
      .r{
        width: 100%;
        height: 100%;
        overflow: hidden;
        ul{
          display: flex;
          justify-content: space-between;
          text-align: center;
          padding: 0 20px;
          font-size: 25px;
          color: #298dff;
          p{
            font-size: 16px;
            color: #666;
          }
        }
        img{
          object-fit: cover;
          //width: 100%;
          //height: 200px;
        }
      }
    }
  }
}
@media only screen and (min-width: 770px)  {
  #Introduction{
    .container {
      .contentBox{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 25px;
        .l{
          width: 60%;
          p{
            text-indent : 40px;
            color: #666;
          }
        }
        .r{
          width: 35%;
          height: 100%;
          padding: 10px;
          overflow: hidden;
          img{
            object-fit: contain;
            height: 100%;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 769px) {
  img{
    object-fit: cover;
    width: 100%;
    height: 200px;
  }
}

</style>