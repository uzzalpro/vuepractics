<template>
    <div id="onlinefriend">
        <h2>Online Friends</h2>
        <div v-for="(friend, index) in friends" :key="index">
            <h6 v-if="friend.online">{{ friend.name }}</h6>

        </div>
    </div>
</template>

<script>
export default {
    name:'OnlineFriend',
    props:['friends'],
    data(){
        return {
            
        }
    }

}
</script>


<style scoped>
h6 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #00881d;
  /* margin-top: 60px; */
}
</style>
