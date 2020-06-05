<template>
  <div class="table-sample padding-15">
    <div class="table-top-box fs14">
      <div class="search-box">
        <input type="text" placeholder="Search" class="border-radius-6">
        <button><v-icon>mdi-magnify</v-icon></button>
      </div>
      <button class="add-btn border-radius-6 fs14">추가</button>
    </div>
    <div class="table-wrap">
      <table class="card-box">
        <thead class="card-head">
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Tel</th>
            <th>Address</th>
            <th>Point</th>
            <th></th>
          </tr>
        </thead>

        <tbody class="fs14">
          <tr v-for="item in table" :key="item">
            <td>{{item.no}}</td>
            <td>{{item.name}}</td>
            <td>{{item.email}}</td>
            <td>{{item.tel}}</td>
            <td>{{item.address}}</td>
            <td>{{item.point}}</td>
            <td class="btn-box">
              <button class="modify-btn border-radius-6">수정</button>
              <button class="delete-btn border-radius-6">삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    
  </div>
</template>


<script>
export default {
  data: () => ({
    table: [
      { no: 1, name: "name", email: "sample@sample.com", tel: "010-0000-0000", address: "경기도 시흥시 서울대학로", point: 1205 },
      { no: 2, name: "name", email: "sample@sample.com", tel: "010-0000-0000", address: "경기도 시흥시 서울대학로", point: 119 },
      { no: 3, name: "name", email: "sample@sample.com", tel: "010-0000-0000", address: "경기도 시흥시 서울대학로", point: 621 },
      { no: 4, name: "name", email: "sample@sample.com", tel: "010-0000-0000", address: "경기도 시흥시 서울대학로", point: 2013 },

      // { no: 4, name: "name", email: "sample@sample.com", tel: "010-0000-0000", address: "경기도 시흥시 서울대학로", point: 2013 },
      // { no: 4, name: "name", email: "sample@sample.com", tel: "010-0000-0000", address: "경기도 시흥시 서울대학로", point: 2013 },
      // { no: 4, name: "name", email: "sample@sample.com", tel: "010-0000-0000", address: "경기도 시흥시 서울대학로", point: 2013 },
      // { no: 4, name: "name", email: "sample@sample.com", tel: "010-0000-0000", address: "경기도 시흥시 서울대학로", point: 2013 },
      // { no: 4, name: "name", email: "sample@sample.com", tel: "010-0000-0000", address: "경기도 시흥시 서울대학로", point: 2013 },
      // { no: 4, name: "name", email: "sample@sample.com", tel: "010-0000-0000", address: "경기도 시흥시 서울대학로", point: 2013 },
      // { no: 4, name: "name", email: "sample@sample.com", tel: "010-0000-0000", address: "경기도 시흥시 서울대학로", point: 2013 },
      // { no: 4, name: "name", email: "sample@sample.com", tel: "010-0000-0000", address: "경기도 시흥시 서울대학로", point: 2013 },
      // { no: 4, name: "name", email: "sample@sample.com", tel: "010-0000-0000", address: "경기도 시흥시 서울대학로", point: 2013 }
    ]
  })
  
}
</script>


<style lang="scss" scoped>
.table-sample{
  height: 100%;
  .table-top-box{
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    .search-box{
      position: relative;
      input{
        width: 300px;
        height: 40px;
        border: 1px solid #bebebe;
        padding: 0 10px;
      }
      button{
        background-color: #bebebe;
        width: 40px;
        height: 40px;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
      .v-icon{
        color: #fff;
      }
    }
    
  }
  .table-wrap{
    max-height: calc(100% - 40px);
    overflow: auto;
    border: 1px solid #bebebe;
    border-left: none;
  }
  table{
    width: 100%;
    border: none;
    border-collapse: collapse;
    text-align: left;
    position: relative;
    thead{
      border: none;
      th{
        background-color: #eee;
        border: 1px solid #bebebe;
        border-top: none;
        padding: 10px;
        position: sticky;
        top: 0
      }
    }
    
    tbody{
      tr{
        height: 50px;
        transition: all .25s;
      }
      tr:hover{
        background-color: #DBE8FD;
      }
      td{
        border: 1px solid #bebebe;
        border-bottom: none;
        padding: 0 10px;
        padding-top: 0;
      }
    }
    
    .btn-box{
      padding: 0;
      text-align: center;
    }
  }
  
}
</style>