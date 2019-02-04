<template>
  <section>
    <el-table>
      <el-table-column label="No" width="70" align="center"></el-table-column>
      <el-table-column label="제목" header-align="center">
      </el-table-column>
      <el-table-column align="center" label="구분" width="150">
      </el-table-column>
      <el-table-column align="center" label="등록일" width="220">
      </el-table-column>
    </el-table>
    
    <div class="bottomBtns">
      <el-button @click="onSubmit" type="primary">공지사항 등록</el-button>
    </div>
  </section>
</template>

<script>
  export default {
    methods:{
      onSubmit(){
        //console.log('onSubmit');
        this.$router.push('/noticeRegister');
      }
    }
  }
</script>