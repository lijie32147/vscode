<template>
    <div>
        用户信息查询
        <table border="1" width="100%">
            <tr>
                <td>用户名</td>
                <td>密码</td>
                <td>操作</td>
            </tr>
            <tr v-for="item in list" :key="item.uid">
                <td>{{item.uname}}</td>
                <td>{{item.upassoword}}</td>
                <button>
                    <button @click = "del1(item.uid)">删除</button>
                    |
                    <button @click = "update">修改</button>
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
            axios.post("/user/findAllUser",{}).then(response => {
                console.log(response);
                this.list = response.data;
            });
        },

        methods: {
            del(uid){
                axios.get("/user/del/" + uid).then(function(){
                    layer.msg("删除成功！！！");
                });
            },

            del1(uid){
                axios.get("/user/del/" + uid).then(function(){
                    layer.msg("删除成功！！！");
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