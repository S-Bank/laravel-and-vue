<template>
    <div>
        <h4 ref="myref">this is hooks class</h4>
        <p>my name is {{ name }}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:"hussain"
        }
    },
    beforeCreate(){
        // check login or not and other limited data access like props
        console.log(this.name);
    },
    created() {        
        console.log("data and funtions are available but html is not access");
        
    },
    mounted(){
        // curd and ecommarce application this use method
        // local stroage data access
        // render html after availabe
        console.log(this.$refs.myref);
    }
}

</script>
