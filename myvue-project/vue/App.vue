<template>
    <div class="container">

        <div class="top">
            蜗牛商城后台管理系统
        </div>

        <div class="bottom">
            <div class="bottom_left">
                <ul>
                    <li>
                        类型管理
                        <ul>
                            <li>
                                <router-link to="/FindUser">查看类型</router-link>
                            </li>
                            <li>
                                <router-link to="/AddType">添加类型</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        图书管理
                        <ul>
                            <li>查看图书</li>
                            <li>添加图书</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="bottom_right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>


<script>

</script>


<style scoped>

    .container{
        width: 1002px;
        margin: auto;
    }

    .top{
        background-color: #0ffff0;
        height: 100px;
        text-align: center;
        line-height: 100px;
    }

    .bottom{
        background-color: #00f0ff;
        height: 480px;
    }

    .bottom_left{
        width: 20%;
        height: 100%;
        float: left;
    }

    .bottom_right{
        width: 80%;
        height: 100%;
        float: left;
    }
</style>