<template>
    <div class="wid100 hig100">
        新闻信息

        <table border="1" width="100%">
            <tr>
                新闻标题：<input type="text">
                新闻状态：<input type="text">
                <button>查询</button>
            </tr>
            <tr>
                <td>新闻id</td>
                <td>新闻标题</td>
                <td>新闻类型</td>
                <td>添加时间</td>
                <td>新闻状态</td>
                <td>操作</td>
            </tr>
            <tr v-for="item in list" :key="item.nid">
                <td>{{item.nid}}</td>
                <td>{{item.ntitle}}</td>
                <td>{{item.tid}}</td>
                <td>{{item.naddtime.substring(0,item.naddtime.indexOf('T'))}}</td>
                <td>{{item.nstatus}}</td>
                <td>
                    <button @click="check">审核</button>
                    <button @click="del">删除</button>
                </td>
            </tr>
            
        </table>
    </div>
</template>

<script>
    export default{
        data() {
            return{
                list: []
            }      
        },

        created(){
            let self = this;

            axios.post("http://localhost:8080/news/findAll",{}).then(response => {
                console.log(response.data);

                self.list = response.data;
            });
        }
    }
</script>


<style scoped>
</style>

