<template>
    <div>
        <form>
            用户名：<input type="text" v-model="uname"> <br>
            密码：<input type="password" v-model="upassword"> <br>
            确认密码：<input type="password" v-model="upassword2"> <br>
            <button type="button" @click="Register">去注册</button>
        </form>
    </div>
</template>

<script>
    export default{
        data() {
            return{
                upassword: "",
                upassword2: ""
            }
        },

        methods: {
            Register(){
                if(this.upassword != this.upassword2){
                    alert("两次密码不一致");
                }

                let user = {
                    uname: this.uname,
                    upassword: this.upassword
                };

                axios.post("http://localhost:8080/user/register",user).then((response)=>{

                    let msg = response.data.msg;

                    console.log(msg);

                    if(msg == "ok"){
                        alert("注册成功！！！");
                        this.$router.push("Login");
                    }else{
                        alert("注册失败！！！");
                    }
                });
            }   
        }
    }
</script>


<style scoped>
</style>