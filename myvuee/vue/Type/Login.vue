<template>
    <div>
        <form>
            用户名：<input type="text" v-model="uname"> <br>
            密码：<input type="password" v-model="upassword"> <br>
            <button type="button" @click="login">登录</button>
        </form>
    </div>
</template>

<script>
    export default{
        data() {
            return{
                uname: "",
                upassword: ""
            }
        },

        methods: {

            login(){

                let user = {
                    uname: this.uname,
                    upassword: this.upassword
                }

                axios.post("http://localhost:8080/user/login",user).then((response)=>{
                    if(response.data.msg == "ok"){
                        alert("登录成功！！！");
                        this.$router.push("NewsMessage");
                    }else{
                        alert("登录失败！！！");
                    }
                });
            }   
        }
    }
</script>


<style scoped>
</style>