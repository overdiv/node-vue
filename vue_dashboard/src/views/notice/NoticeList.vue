<template>
  <section>
    <el-table :data="noticeData">
      <el-table-column prop="noticeMngNo" label="No" width="70" align="center"></el-table-column>
      <el-table-column prop="subj" label="제목" header-align="center">
        <template slot-scope="scope">
          <span class="link" @click="oneDetail(scope.row.noticeMngNo)">{{scope.row.subj}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="noticeTp" align="center" label="구분" width="150">
      </el-table-column>
      <el-table-column prop="regDt" align="center" label="등록일" width="220">
      </el-table-column>
    </el-table>

     <el-pagination layout="prev, pager, next" 
      :page-size="pageSize" 
      :total="total"
      :current-page.sync="currentPage" 
      @current-change="onPageChange"> 
    </el-pagination>
    
    <div class="bottomBtns">
      <el-button @click="$router.push('/notice/register')" type="primary">공지사항 등록</el-button>
    </div>
  </section>
</template>

<script>
  import axios from 'axios';
  import { noticeList } from '@/api/app.js'
  import camelCase from 'camelcase-keys';
  import Cookies from 'js-cookie'
  export default {
    data(){
      return {
        noticeOption: '',
        noticeData: [],
        total: 1,
        pageSize: 10,
        currentPage: 1,
        options: [{
          value: '10',
          label: '전체'
        }, {
          value: '20',
          label: '제목'
        }, {
          value: '30',
          label: '내용'
        }],
        noticeOption: '10',
        conts: ''
      }
    },
    methods:{
      onList() {
        // axios.get('http://localhost:3000/notice/list')
        noticeList()
        .then(res => {
          console.log('res = ', res.data.body);
          const data = camelCase(res.data.body);
          console.log('res = ', data);

          this.total = data.length

          let currentMaxLow = this.currentPage * this.pageSize
          let currentMinLow = currentMaxLow - this.pageSize

          console.log(currentMaxLow, currentMinlow);

          this.noticeData = data.slice(currentMinLow, currentMaxLow)
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {

        })
      },
      onSubmit(){
        //console.log('onSubmit');
        this.$router.push('/notice/register');
      },
      oneDetail(no){
        console.log('no =', no);
        this.$router.push({
          path: '/notice/detail',
          query: {no:no}
        });
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
    mounted() {
      this.onList()
    },
    
  }
</script>