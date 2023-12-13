<template>
<div id="app">
  <h2>{{ title }}</h2>
  <MyNavbar></MyNavbar>

  <HookComponent></HookComponent>
  <AllFriend :friends="friends" @delete="deleteFriend"></AllFriend>
  <OnlineFriend :friends="friends" ></OnlineFriend>
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyNavbar from './components/Navbar.vue';
import AllFriend from './components/AllFriends.vue';
import OnlineFriend from './components/OnlineFriends.vue';
import HookComponent from './components/Hooks.vue';

export default {
  name: 'app',
  data(){
    return {
      title: 'Hello World :)',
      friends:[
                {name:'A', online:true},
                {name:'B', online:true},
                {name:'C', online:false},
                {name:'D', online:true},
                {name:'E', online:false},
                {name:'F', online:true}
            ]

    }
  },
  components:{
    MyNavbar,
    AllFriend,
    OnlineFriend,
    HookComponent,
  },
  methods:{
    deleteFriend(payload){
      // console.log(payload);
      this.friends = this.friends.filter(friend =>{
        return friend.name !== payload.name
      })

    }
  }

}
</script>

<style>
h2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
