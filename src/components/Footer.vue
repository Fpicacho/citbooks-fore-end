<template>
<div id="Footer">
  <div class="container">
    <div class="link">
      <ul class="linkNav">
        <li class="linkNavList">
          <h1>{{$t('Footer[0]')}}</h1>
          <p>{{$t('Footer[1]')}}</p>
          <p>{{$t('Footer[2]')}}</p>
          <p>{{$t('Footer[3]')}}</p>
          <p>{{$t('Footer[4]')}}</p>
          <p>{{$t('Footer[5]')}}</p>
          <p>{{$t('Footer[6]')}}</p>
        </li>
        <li class="linkNavList">
          <h1>{{$t('Footer[7]')}}</h1>
          <p>{{$t('Footer[8]')}}</p>
          <p>{{$t('Footer[9]')}}</p>
          <p>{{$t('Footer[10]')}}</p>
          <p>{{$t('Footer[11]')}}</p>
        </li>
      </ul>
      <ul class="linkNav">
        <li class="linkNavList">
          <h1>{{$t('Footer[12]')}}</h1>
          <p>{{$t('Footer[13]')}}</p>
          <p>{{$t('Footer[14]')}}</p>
          <p>{{$t('Footer[15]')}}</p>
        </li>
        <li class="linkNavList">
          <h1>{{$t('Footer[16]')}}</h1>
          <p>{{$t('Footer[17]')}}</p>
          <p>{{$t('Footer[18]')}}</p>
          <p>{{$t('Footer[19]')}}</p>
        </li>
      </ul>
    </div>
    <div class="information">
      <div class="phoneBox">
        <p>010-88820201 <span>{{$t('Footer[20]')}}</span></p>
        <p>025-83314729 <span>{{$t('Footer[21]')}}</span></p>
        <p class="workDay">{{$t('Footer[22]')}} <br>{{$t('Footer[23]')}}</p>
      </div>
      <div class="qrcodeBox">
        <img src="http://www.ctibooks.com.cn:80/css/img/tmcodenum.jpg" alt="" style="border-radius:15px">
        <p>{{$t('Footer[24]')}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>

</script>

<style scoped lang="scss">
p,h1{
  margin: 0;
  padding: 0;
}
#Footer{
  background: #333333;
  padding: 30px 16px;
  color: #fff;
  .linkNav{
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-bottom: 25px;
    .linkNavList{
      h1{
        font-size: 20px;
        border-bottom: 2px solid #007bff;
      }
      p{
        margin-top:10px;
        color: #aaa;
        font-size: 14px;
      }
    }
  }
  .information{
    text-align: center;
    .phoneBox{
      font-size: 24px;
      p{
        color: #298dff;
      }
      span{
        color: #fff;
      }
      .workDay{
        font-size: 16px;
        color: #fff;
        margin:20px 0;
      }
    }
  }
}
@media only screen and (min-width: 770px) {
  .container{
    width: 85%;
    display: flex;
    justify-content:space-between;
  }
  #Footer {
    display: flex;
    justify-content:space-around;
    .link{
      display: flex;
      width: 45%;
      justify-content:space-around;
      .linkNav{
        width:45%;
        display: flex;

      }
    }
  }
  .information{
    display: flex;
    justify-content:space-between;
    width: 30%;
  }
}
</style>