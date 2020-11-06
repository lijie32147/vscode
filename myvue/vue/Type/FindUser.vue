<template>
    <div>
        用户信息查询
        <table border="1" class="table table-hover">
            <tr>
                <td>用户名</td>
                <td>密码</td>
                <td>操作</td>
            </tr>
            <tr v-for="item in list" :key="item.uid">
                <td>{{item.uname}}</td>
                <td>{{item.upassword}}</td>
                <button>
                    <button class="btn btn-primary" @click = "del1(item.uid)">删除</button>
                    |
                    <button class="btn btn-primary" @click = "update">修改</button>
                </button>
            </tr>
        </table>
    </div>
</template>


<script>
    export default{
        data(){
            return{
                list: []
            }
        },

        created(){
            this.updateTable();
        },

        methods: {

            updateTable(){
                axios.post("/user/findAllUser",{}).then(response => {
                    console.log(response);
                    this.list = response.data;
                });
            },

            del(uid){
                axios.post("/user/del/" + uid).then(function(){
                    layer.msg("删除成功！！！");
                });
            },

            del1(uid){

                let self = this;

                layer.confirm('确认删除吗？？？', {
                    btn: ['确认','取消']
                }, function(){
                    
                    axios.get("/user/del/" + uid).then(function(){
                        layer.msg("删除成功！！！");
                        self.updateTable();
                    });
                }, function(){
                    
                });
            },

            update(){
                console.log("update.........");
            }
        }
    }

</script>


<style scoped>

</style>