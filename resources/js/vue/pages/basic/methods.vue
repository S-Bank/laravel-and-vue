<template>
    <div>
        <h2>methods and some other basic</h2>
        <h4>counter number {{ counter }}</h4>
        <button @click="updateCounter(1)"> Increse </button>
        <button @click="updateCounter(-1)"> Decrese </button>
    

        <br />
        <br />
        <br />

        <div v-for="(blog, i) in blogs" :key="i" >
            <h3>{{ blog.title }}</h3>
            <p>{{ blog.descrption }}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
       return{
           counter: 0,
           blogs: []
       } 
    },
    methods:{
        updateCounter(number){
            this.counter += number;
        }
    },
    created(){
        setTimeout(() => {  
            console.log("World!");
            let post = [
                {title:"Blog titile 1", descrption:"blog descrption", id: 1},
                {title:"Blog titile 2", descrption:"blog descrption", id: 2},
                {title:"Blog titile 3", descrption:"blog descrption", id: 3},
            ]

            this.blogs = post
        }, 2000);
        
    }
}
</script>