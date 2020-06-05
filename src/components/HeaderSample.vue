<template>
  <div class="header-sample">
    <div class="group">
      <div class="sample1 padding-15">
        <div class="card-box border-radius-6">
          <div class="card-head">Sample1</div>
          <div class="card-body">
            <button class="checked"><span>about</span></button>
            <button><span>services</span></button>
            <button><span>projects</span></button>
            <button><span>contact</span></button>
          </div>
        </div>
      </div>

      <div class="sample2 padding-15">
        <div class="card-box border-radius-6">
          <div class="card-head">Sample2</div>
          <div class="card-body">
            <button class="checked"><span data-hover="about">about</span></button>
            <button><span data-hover="services">services</span></button>
            <button><span data-hover="projects">projects</span></button>
            <button><span data-hover="contact">contact</span></button>
          </div>
        </div>
      </div>

      <div class="sample3 padding-15">
        <div class="card-box border-radius-6">
          <div class="card-head">Sample3</div>
          <div class="card-body">
            <button class="checked"><span>about</span></button>
            <button><span>services</span></button>
            <button><span>projects</span></button>
            <button><span>contact</span></button>
          </div>
        </div>
      </div>

      <div class="sample4 padding-15">
        <div class="card-box border-radius-6">
          <div class="card-head">Sample4</div>
          <div class="card-body">
            <button class="checked"><span>about</span></button>
            <button><span>services</span></button>
            <button><span>projects</span></button>
            <button><span>contact</span></button>
          </div>
        </div>
      </div>

      <div class="sample5 padding-15">
        <div class="card-box border-radius-6">
          <div class="card-head">Sample5</div>
          <div class="card-body">
            <button class="checked"><span>about</span></button>
            <button><span>services</span></button>
            <button><span>projects</span></button>
            <button><span>contact</span></button>
          </div>
        </div>
      </div>

      <div class="sample6 padding-15">
        <div class="card-box border-radius-6">
          <div class="card-head">Sample6</div>
          <div class="card-body">
            <button class="checked"><span>about</span></button>
            <button><span>services</span></button>
            <button><span>projects</span></button>
            <button><span>contact</span></button>
          </div>
        </div>
      </div>

      <div class="sample7 padding-15">
        <div class="card-box border-radius-6">
          <div class="card-head">Sample7</div>
          <div class="card-body">
            <button class="checked"><p><span data-hover="about">about</span></p></button>
            <button><p><span data-hover="services">services</span></p></button>
            <button><p><span data-hover="projects">projects</span></p></button>
            <button><p><span data-hover="contact">contact</span></p></button>
          </div>
        </div>
      </div>

      <div class="sample8 padding-15">
        <div class="card-box border-radius-6">
          <div class="card-head">Sample8</div>
          <div class="card-body">
            <button class="checked"><p><span data-hover="about">about</span></p></button>
            <button><p><span data-hover="services">services</span></p></button>
            <button><p><span data-hover="projects">projects</span></p></button>
            <button><p><span data-hover="contact">contact</span></p></button>
          </div>
        </div>
      </div>

      <div class="sample9 padding-15">
        <div class="card-box border-radius-6">
          <div class="card-head">sample9</div>
          <div class="card-body">
            <button class="checked"><p><span data-hover="about">about</span></p></button>
            <button><p><span data-hover="services">services</span></p></button>
            <button><p><span data-hover="projects">projects</span></p></button>
            <button><p><span data-hover="contact">contact</span></p></button>
          </div>
        </div>
      </div>

      <div class="sample10 padding-15">
        <div class="card-box border-radius-6">
          <div class="card-head">sample10</div>
          <div class="card-body">
            <button class="checked"><p><span data-hover="about">about</span></p></button>
            <button><p><span data-hover="services">services</span></p></button>
            <button><p><span data-hover="projects">projects</span></p></button>
            <button><p><span data-hover="contact">contact</span></p></button>
          </div>
        </div>
      </div>

      <div class="sample11 padding-15">
        <div class="card-box border-radius-6">
          <div class="card-head">sample10</div>
          <div class="card-body">
            <button class="checked"><span>about</span></button>
            <button><span>services</span></button>
            <button><span>projects</span></button>
            <button><span>contact</span></button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
export default {
  
}
</script>


<style lang="scss" scoped>
.header-sample{
  .group{
    display: flex;
    flex-wrap: wrap;
  }
  .group > div{
    width: 50%;
  }
  
  .card-body{
    button{
      height: 40px;
      margin: 0 15px;
      padding: 0 10px;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 1px;
      color: #999;
    }
    span{
      position: relative;
    }
    .checked{ color: #000; font-weight: bold; }
  }


  .sample1{
    span:before{
      content: "";
      width: 0;
      height: 3px;
      background-color: #3DC360;
      position: absolute;
      bottom: -3px;
      left: 50%;
      transform: translate(-50%, 0%);
      transition: .2s;
    }
    button:hover span:before, .checked span:before{
      width: 100%;
    }
  }

  .sample2{
    span:before{
      content: "";
      width: 0%;
      height: 3px;
      background-color: #3DC360;
      position: absolute;
      bottom: -6px;
      transition: all 0.3s ease;
    }
    span:after{
      content: attr(data-hover);
      color: #000;
      max-width: 0%;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.3s ease;
    }
    button:hover span:before, .checked span:before{
      opacity: 1;
      width: 100%;
    }
    button:hover span:after{ max-width: 100%; }
    .checked:hover span:after{ max-width: 0; }
  }

  .sample3{
    span:before, span:after{
      content: "";
      background-color: #3DC360;
      width: 0;
      height: 2px;
      transition: all 0.35s ease;
      -webkit-transition: all 0.35s ease;
      position: absolute;
    }
    span:before{
      top: -6px;
      left: 0;
    }
    span:after{
      bottom: -6px;
      right: 0;
    }
    button:hover{
      color: #000;
      transition: all 0.2s ease;
    }
    button:hover span:before, button:hover span:after,
    .checked span:before, .checked span:after{
      width: 100%;
    }
  }

  .sample4{
    span:before{
      content: "";
      width: 100%;
      border-top: 2px solid #3DC360;
      border-bottom: 2px solid #3DC360;
      opacity: 0;
      transition: all 0.35s ease;
      -webkit-transition: all 0.35s ease;
      position: absolute;
      top: 25%;
      bottom: 25%;
      left: 0;
    }
    button:hover{
      color: #000;
      transition: all 0.2s ease;
    }
    button:hover span:before, .checked span:before{
      opacity: 1;
      top: -6px;
      bottom: -6px;
    }
  }

  .sample5{
    button{ padding: 0; }
    span{ padding: 0 10px; }
    span:before{
      content: "";
      border-left: 2px solid #3DC360;
      border-right: 2px solid #3DC360;
      opacity: 0;
      transition: all 0.35s ease;
      -webkit-transition: all 0.35s ease;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 15%;
      right: 15%;
    }
    button:hover{
      color: #000;
      transition: all 0.2s ease;
    }
    button:hover span:before, .checked span:before{
      opacity: 1;
      left: 0;
      right: 0;
    }
  }

  .sample6{
    span:before{
      content: "";
      height: 2px;
      border-left: 12px solid #3DC360;
      border-right: 12px solid #3DC360;
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 20%;
      right: 20%;
      transform: translateY(-50%);
      transition: all 0.35s ease;
    }
    button:hover{
      color: #000;
      transition: all 0.2s ease;
    }
    button:hover span:before, .checked span:before{
      opacity: 1;
      left: -16px;
      right: -16px;
    }
  }

  .sample7{
    p{
      position: relative;
      overflow: hidden;
    }
    span{
      display: inline-block;
      padding: 5px 0;
      transition: all 0.5s ease;
    }
    span:before{
      content: "";
      width: 100%;
      height: 2px;
      background-color: #3DC360;
      position: absolute;
      top: 100%;
    }
    span:after{
      content: attr(data-hover);
      color: #000;
      padding: 5px 0;
      white-space: nowrap;
      position: absolute;
      top: 100%;
      left: 0;
    }
    button:hover span, .checked span{
      transform: translateY(-100%);
    }  
  }

  .sample8{
    p{
      position: relative;
      overflow: hidden;
    }
    span{
      display: inline-block;
      padding: 5px 0;
      transition: all .5s ease;
    }
    span:before{
      content: "";
      width: 100%;
      height: 2px;
      background-color: #3DC360;
      position: absolute;
      bottom: 100%;
    }
    span:after{
      content: attr(data-hover);
      color: #000;
      padding: 5px 0;
      white-space: nowrap;
      position: absolute;
      bottom: 100%;
      left: 0;
    }
    button:hover span, .checked span{
      transform: translateY(100%);
    }  
  }
  
  .sample9{
    p{
      position: relative;
      overflow: hidden;      
    }
    span{
      display: inline-block;
      padding: 0 5px;
      transition: all 0.5s ease;
    }
    span:before{
      content: "";
      width: 2px;
      height: 100%;
      background-color: #3DC360;
      position: absolute;
      top: 0;
      left: 100%;
      z-index: 999;
    }
    span:after{
      content: attr(data-hover);
      color: #000;
      padding: 0 5px 0 8px;
      white-space: nowrap;
      position: absolute;
      top: 0;
      left: 100%;
    }
    button:hover span, .checked span{
      transform: translateX(-100%);
    }
  }

  .sample10{
    p{
      position: relative;
      overflow: hidden;      
    }
    span{
      display: inline-block;
      padding: 0 5px;
      transition: all 0.5s ease;
    }
    span:before{
      content: "";
      width: 2px;
      height: 100%;
      background-color: #3DC360;
      position: absolute;
      top: 0;
      right: 100%;
    }
    span:after{
      content: attr(data-hover);
      color: #000;
      padding: 0 8px 0 5px;
      white-space: nowrap;
      position: absolute;
      top: 0;
      right: 100%;
    }
    button:hover span, .checked span{
      transform: translateX(100%);
    }
  }

  .sample11{
    button{ padding: 0; }
    span{ padding: 6px 10px; }
    span:before{
      content: "";
      width: 14px;
      height: 14px;
      border-left: 2px solid #3DC360;
      border-top: 2px solid #3DC360;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(100%, 50%);
      transition: all 0.35s ease;
    }
    span:after{
      content: "";
      width: 14px;
      height: 14px;
      border-right: 2px solid #3DC360;
      border-bottom: 2px solid #3DC360;
      opacity: 0;
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(-100%, -50%);
      transition: all 0.35s ease;
    }
    button:hover span:before, .checked span:before,
    button:hover span:after, .checked span:after{
      opacity: 1;
      transform: translate(0%, 0%);
    }
  }


}


</style>