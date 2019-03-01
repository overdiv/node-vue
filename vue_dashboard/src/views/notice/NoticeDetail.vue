<template>
  <section class="detail">
    <el-form ref="form" label-width="120px">
      <el-form-item label="제목">
        <el-input v-model="form.subj" readonly></el-input>
      </el-form-item>
      <el-form-item label="구분" label-width="">
        <el-input v-model="form.noticeTp" readonly></el-input>
      </el-form-item>
      <el-form-item label="작성일">
        <el-input v-model="form.regDt" readonly></el-input>
      </el-form-item>
      <el-form-item label="내용">
        <el-input v-html="form.conts" readonly></el-input>
      </el-form-item>
    </el-form>
    <div class="bottomBtns">
      <el-button type="primary" @click="$router.push('/noticeList')"> tempalte 안에서는 this를 생략가능하다 목록</el-button>
      <el-button type="primary" @click="onUpdate">수정</el-button>
      <el-button type="primary">삭제</el-button>
    </div>
  </section>
</template>
<script>
  import { VueEditor } from 'vue2-editor'
  import axios from 'axios'
  import camelCase from 'camelcase-keys'
  export default {
    components: {
      VueEditor
    },
    data() {
      return {
        no : this.$route.query.no,
        form: {} //form 초기화가 필요하다 data를 넣어주려면
      }
    },
    mounted() {
      console.log('no =', this.$route.query.no)
      axios.get(`http://localhost:3000/notice/detail/${this.no}`)
      .then(res =>{
        console.log('res =', res.data.body);
        const data = camelCase(res.data.body)
        console.log('data =', data);
        this.form = data
      })
      .catch(err =>{
        console.log(err);
      })
      .finally(()=>{

      })
    },
    methods:{
      onUpdate(){
        this.$router.push({
          path:'/noticeRegister',
          query: {no:this.no}
        })
      }
    }
  }
</script>
<style scoped>
  .el-select .el-input {
    width: 110px;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>