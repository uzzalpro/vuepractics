<template>
    <div class="hooks">
        <!-- <h1>{{ title }}</h1> -->
        <h1>Post</h1>
        <input type="text" v-model="searchTerm" placeholder="search">
        <!-- <button @click="changeTitle">click me</button> -->

        <div v-for="post in filteredPosts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ $filters.snippet(post.body) }}</p> <hr>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name:'HookComponent',
    
    data(){
        return {
            // title: 'Hook Part',
            posts:[],
            searchTerm:''
        }
    },

    computed: {
    filteredPosts() {
      return this.posts.filter(post => {
        return post.title.match(this.searchTerm);
      });
    },
  },
    methods: {
        // changeTitle(){
        //     this.title = 'for practics vue'
        // }
    },
    // beforeCreated(){
    //     alert('beforeCreated - Hook')
    // },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            // console.log(response);
            this.posts = response.data;
        })
        .catch(error => {
            console.log(error);
        })
    },
    // beforeDestroy(){

    // },
    // destroyed(){},
    // beforeMount(){},
    // mounted(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(response =>{
    //         // console.log(response);
    //         this.post = response.data;
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // },
    // beforeUpdate(){
    //     alert('beforeUpdate - Hook')
    // },
    // updated(){
    //     alert('updated - Hook')
    // },
    // methods:{
    //     unfriend(name){
    //         this.$emit('delete', {name});
    //     }
    // }

}
</script>


<style scoped>
h1 {
color: brown;
text-align: center;
}

</style>
