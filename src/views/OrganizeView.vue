<template>
  <div id="Organize">
    <!--组织结构-->
    <RunBanner :data="RunBannerData"/>
    <div class="container">
      <div class="table-wrap nobd">
        <table cellpadding="0" cellspacing="0" class="cnt_lst_table_lr wow slideInLeft" width="100%">
          <tbody>
          <tr>
            <th colspan="2" class="green">中国科技资料进出口总公司</th>
          </tr>
          <tr>
            <td width="50%">管理层</td>
            <td width="50%">审读办公室</td>
          </tr>
          <tr>
            <td width="50%" class="bgc">销售部</td>
            <td width="50%" class="bgc">进口部</td>
          </tr>
          <tr>
            <td width="50%">客服部</td>
            <td width="50%">财务部</td>
          </tr>
          <tr>
            <td width="50%" class="bgc">市场研究部</td>
            <td width="50%" class="bgc">人力行政部</td>
          </tr>
          <tr>
            <td width="50%">出口部</td>
            <td width="50%">期刊部</td>
          </tr>
          <tr>
            <td width="50%" class="bgc">系统部</td>
            <td width="50%" class="bgc">办公室</td>
          </tr>
          </tbody>
        </table>
        <div class="bk10"></div>
        <table cellpadding="0" cellspacing="0" class="cnt_lst_table_lr wow slideInRight" width="100%">
          <tbody>
          <tr>
            <th colspan="2" class="green">客服部</th>
          </tr>
          <tr>
            <td width="50%">销售助理</td>
            <td width="50%" class="nobd">财务助理</td>
          </tr>
          <tr>
            <td width="50%" class="bgc">编目加工</td>
            <td width="50%" class="bgc">报关</td>
          </tr>
          <tr>
            <td width="50%">仓管部</td>
            <td width="50%" class="nobd">发行部</td>
          </tr>
          </tbody>
        </table>
        <div class="bk10"></div>
        <table cellpadding="0" cellspacing="0" class="cnt_lst_table_lr wow slideInLeft" width="100%">
          <tbody>
          <tr>
            <th colspan="2" class="green">销售部</th>
          </tr>
          <tr>
            <td width="50%">A区</td>
            <td width="50%" class="nobd">B区</td>
          </tr>
          <tr>
            <td width="50%" class="bgc">C区</td>
            <td width="50%" class="bgc">D区</td>
          </tr>
          <tr>
            <td width="50%">E区</td>
            <td width="50%" class="nobd">K区</td>
          </tr>
          <tr>
            <td width="50%" class="bgc">电子产品</td>
            <td width="50%" class="bgc">文员</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import RunBanner from '@/components/RunBanner'
import img from '@/assets/img/breadImg/zuzhijiegou.jpeg'
const RunBannerData = {
  imgUrl: img,
  title: {
    cn: '组织机构',
    en: 'Organization'
  }
}

</script>
<style scoped lang="scss">
.container {
  width: 75%;
  margin: 50px auto;

  .green {
    text-align: left;
    text-indent: 2em;
    background: #298dff;
    color: #fff;
  }

  td {
    text-indent: 2em;
    padding: 10px 0;
  }

  .bgc {
    background: #E4F0FF;
  }
}
@media only screen and (max-width: 769px){
  .container{
    width: 80%;
    margin: 10px auto;
  }
}
</style>