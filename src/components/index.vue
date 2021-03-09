<template>
<div>
    <el-button @click="go">LogicFlow</el-button>
</div>
    
</template>
<script>

export default {
    data() {
        return {}
    },
    components:{
    },
    methods: {
        go() {
            this.$router.push({
                name: 'LF',
            });
        }
    }
}


</script>
