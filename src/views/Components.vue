<template>
  <div class="components">
    <div class="btn-box fs16">
      <button @click="clickedComponentsCategory(1)" :class="{ selected : selectedComponentsCategory == 1 ? true : false}">Table</button>
      <button @click="clickedComponentsCategory(2)" :class="{ selected : selectedComponentsCategory == 2 ? true : false}">Header</button>
    </div>
    <div class="contents-box">
      <TableSample :class="{ block : selectedComponentsCategory == 1 ? true : false}"></TableSample>
      <HeaderSample :class="{ block : selectedComponentsCategory == 2 ? true : false}"></HeaderSample>
    </div>

  </div>
</template>

<script>
import HeaderSample from '@/components/HeaderSample.vue'
import TableSample from '@/components/TableSample.vue'

export default {
  components: {
    HeaderSample, TableSample
  },
  data: () => ({
    selectedComponentsCategory: 1
  }),
  methods: {
    clickedComponentsCategory(index) {
      this.selectedComponentsCategory = index;
    }
  }
}
</script>


<style lang="scss" scoped>
.components{
  height: 100%;
  .btn-box{
    height: 40px;
    margin-left: 10px;
    margin-bottom: 15px;
    display: inline-flex;
    align-items: center;
    button{
      height: 40px;
      margin: 0 5px;
      padding: 0 12px;
      color: #555;
      position: relative;
    }
    button::before{
      content: "";
      width: 0;
      height: 2px;
      background-color: #669DF6;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      transition: all .25s;
    }
    button:hover{ color: #000; }
    button:hover::before{ width: 100%; }
    .selected{
      color: #000;
      font-weight: bold;
    }
    .selected::before{ width: 100%; }
  }

  .contents-box{
    height: calc(100% - 55px);
    overflow: auto;
    .table-sample{
      display: none;
      transition: all .25s;
    }
    .header-sample{
      display: none;
      transition: all .25s;
    }
    .block{ display: block; }
  }

}
</style>