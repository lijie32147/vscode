<template>
    <div>
        用户信息查询
        <table border="1" class="table table-hover">
            <tr>
                <td width="40%">用户名</td>
                <td width="40%">密码</td>
                <td width="20%">操作</td>
            </tr>
            <tr v-for="item in list" :key="item.uid">
                <td>{{item.uname}}</td>
                <td>{{item.upassword}}</td>
                <td>
                    <button class="btn btn-primary" @click = "del1(item.uid)">删除</button>
                    |
                    <button class="btn btn-primary" @click = "upd(item)">修改</button>
                </td>
            </tr>
        </table>

        <div id="u1" style="display:none">
            用户名：<input type="text" v-model="uname"> <br>
            密码：<input type="text" v-model="upassword"> <br>
            <button type="button" @click="doupd()">修改</button>
        </div>
    </div>
</template>


<script>
    export default{
        data(){
            return{
                uid: '',
                uname: '',
                upassword: '',
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

            upd(item){

                this.uid = item.uid;
                this.uname = item.uname;
                this.upassword = item.upassword;

                layer.open({
                    type: 1,
                    skin: 'layui-layer-rim',
                    area: ['420px', '240px'],
                    content: $("#u1")
                });
            },

            doupd(){

                let data = {uid: this.uid, uname: this.uname, upassword: this.upassword};
                let self = this;

                axios.post("/user/updateUser",data).then(function(){
                    layer.msg("修改成功！！！");
                    self.uname = self.upassword = "";
                    self.updateTable();
                });
            }
        }
    }

</script>


<style scoped>

</style>