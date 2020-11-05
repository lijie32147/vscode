<template>
    <div>
        <form>
            用户名：<input type="text" v-model="uname"> <br>
            密码：<input type="text" v-model="upassword"> <br>
            <button @click="add" type="button">添加</button>
        </form>
    </div>
</template>


<script>
    export default{
        data(){
            return{
                uname: "",
                upassword: ""
            }
        },

        methods: {
            add(){
                
                let self = this;

                console.log(window.axios);

                axios.post("/user/register",{uname: this.uname, upassword: this.upassword})
                .then((response)=>{
                    self.uname = '';
                    self.upassword = '';
                    layer.msg("添加成功!!!",function(){
                        self.$router.push("/FindUser");
                    });
                    
                });
            }
            
        }
    }

</script>


<style scoped>

</style>