<template>
  <div id="BusinessList">
    <ul>
      <li>
        <div class="item a1 wow bounceIn">
          <div>
            <h1 class="title">{{$t('BusinessList.Importoforiginalbooks')}}</h1>
            <p class="describe">{{$t('BusinessList.ImportoforiginalbooksMS')}}</p>
          </div>
          <p>{{$t('BusinessList.LearnMore')}}→</p>
        </div>
        <div class="item a2 wow bounceIn">
          <div>
            <h1 class="title">{{$t('BusinessList.Importofelectronicresources')}}</h1>
            <p class="describe">{{$t('BusinessList.ImportofelectronicresourcesMS')}}</p>
          </div>
          <p>{{$t('BusinessList.LearnMore')}}→</p>
        </div>
      </li>
      <li>
        <div class="item a3 wow bounceIn">
          <div>
            <h1 class="title">{{$t('BusinessList.Newspaperimport')}}</h1>
            <p class="describe">{{$t('BusinessList.NewspaperimportMS')}}</p>
          </div>
          <p>{{$t('BusinessList.LearnMore')}}→</p>
        </div>
        <div class="item a4 wow bounceIn">
          <div>
            <h1 class="title">{{$t('BusinessList.Businessexport')}}</h1>
            <p class="describe">{{$t('BusinessList.BusinessexportMS')}}</p>
          </div>
          <p>{{$t('BusinessList.LearnMore')}}→</p>
        </div>
      </li>
      <li>
        <div class="item a5 wow bounceIn">
          <div>
            <h1 class="title">{{$t('BusinessList.BookFairServices')}}</h1>
            <p class="describe">{{$t('BusinessList.BookFairServicesMS')}}</p>
          </div>
          <p>{{$t('BusinessList.LearnMore')}}→</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BusinessList"
}
</script>

<style scoped lang="scss">
#BusinessList{
  background: #f2f3f4;
  padding: 30px 16px;
  h1,p{
    margin: 0;
    padding: 0;
  }
  h1{
    font-size: 24px;
    margin-bottom: 10px;
  }
  p{
    font-size: 14px;
  }
  ul li .item{
    height: 200px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    color: #fff;
    margin-bottom: 20px;
    transition: all .3s;
    &:hover{
      justify-content: space-between;
      transition: all .3s;
      cursor:pointer;
    }
  }
  .a1{
    background: url('../../assets/img/BusinessListBgc1.jpg');
    background-size: 100% auto;
  }
  .a2{
    background: url('../../assets/img/BusinessListBgc2.jpg');
    background-size: 100% auto;
  }
  .a3{
    background: url('../../assets/img/BusinessListBgc3.jpeg');
    background-size: 100% auto;
  }
  .a4{
    background: url('../../assets/img/BusinessListBgc4.jpeg');
    background-size: 100% auto;
  }
  .a5{
    background: url('../../assets/img/BusinessListBgc5.jpg');
    background-size: 100% auto;
  }
}
@media only screen and (min-width: 770px)  {
  #BusinessList{
    width: 80%;
    margin: 35px auto;
    ul{
      display: flex;
      justify-content: space-between;
      li{
        width: 32.5%;
        &:nth-child(3){
          .item{
            height: 87.3%;
          }
        }
      }
    }
  }
}
</style>