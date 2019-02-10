<template>
  <section>
    <el-table :data="noticeData">
      <el-table-column prop="noticeMngNo" label="No" width="70" align="center"></el-table-column>
      <el-table-column prop="subj" label="제목" header-align="center">
      </el-table-column>
      <el-table-column prop="noticeTp" align="center" label="구분" width="150">
      </el-table-column>
      <el-table-column prop="regDt" align="center" label="등록일" width="220">
      </el-table-column>
    </el-table>
    
    <div class="bottomBtns">
      <el-button @click="onSubmit" type="primary">공지사항 등록</el-button>
    </div>
  </section>
</template>

<script>
  import axios from 'axios';
  import camelCase from 'camelcase-keys';
  export default {
    data(){
      return {
        noticeData: []
      }
    },
    created(){
      axios.get('http://localhost:3000/notice/list')
      .then(res => {
        const data = camelCase(res.data.body)
        // console.log('res = ', res)
        console.log('res = ', res)
        this.noticeData = data
      })
      .catch( (res, err) => {
        console.log(err);
      })
      .finally(res => {
        
      })
    },
    methods:{
      onSubmit(){
        //console.log('onSubmit');
        this.$router.push('/noticeRegister');
      }
    }
  }
</script>