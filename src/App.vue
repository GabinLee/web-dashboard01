<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style lang="scss">
/* default settings */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }
  html, body{ font-size: 10px; }
  a{ display: inline-block; text-decoration: none; color: inherit; }
  button{
    border: none;
    cursor: pointer;
  }
  button:focus{ outline: none; }
  input:focus{ outline: none; }
  img{ width: 100%; display: block; }

  .shadow{ box-shadow: 2px 0 6px 0 rgba(51, 51, 51, 0.25); }
  .border-radius-6{ border-radius: 6px; }
  .padding-20{ padding: 20px; }
  .padding-15{ padding: 15px; }

  .b-head{
    font-size: 26px;
    text-transform: uppercase;
  }
  .b-title{
    font-size: 16px;
    text-transform: uppercase;
  }
  .b-text{ font-size: 14px; line-height: 1.5; }
  .fs16{ font-size: 16px; }
  .fs14{ font-size: 14px; }
  .fs12{ font-size: 12px; }

  .card-box{
    border: 1px solid #bebebe;
  }
  .card-head{
    background-color: #eee;
    border-bottom: 1px solid #bebebe;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding: 14px 20px;
    font-size: 16px;
    font-weight: 700;
    color: #669DF6;
    text-transform: none;
  }
  .card-body{
    font-size: 14px;
    padding: 14px 20px;
    line-height: 1.5;
    color: #555;
  }
  .add-btn, .modify-btn, .delete-btn{
    margin: 5px;
    padding: 5px 10px;
    color: #fff;
  }
  .add-btn{
    background-color: #3DC360;
  }
  .modify-btn{
    background-color: #FCCF52;
  }
  .delete-btn{
    background-color: #EC5246;
  }
</style>