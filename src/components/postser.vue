<template>
    
<div class="postse">
 <img id="loaddata"  style="width: 20%;
    margin: auto;
    display: block;" :src="suc">


<div  class="cardsp"  v-for='(poe,index) in pos ' :key="index">
  <b-card title=''  sub-title="">
    <h4>{{poe.title}}</h4>
    <b-card-text v-html=" poe.body">
      
    </b-card-text>
    <b-card-text>A second paragraph of text in the card.</b-card-text>

       <br> <router-link  :to=" {name:'Post',params:{id:poe.id},query:{q:'1',sex:'كأفآنفسك'}}" class="card-link">Reader more</router-link> <br>
  </b-card>
</div>

</div>
 
</template>

<script>
import axios from 'axios';
export default {
    name:"postser",

    data:function(){
      return{
        suc:'',

        pos:[],


      }
     


    },
     methods: {
      
     getf:function(){

 axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.pos = res.data
        
        console.log('run')
      })
      .catch(err => {
        console.error(err); 
        alert("check your conect Internet");
      })

      


     },
      },
       beforeMount:function() {
         
         this.suc="https://cdn.clipart.email/1f405fb0e29d60dfcfdfb03ab6296e13_loading-gif-png-picture-654656-loading-gif-png_1181-1181.gif"; 
         },

       mounted:function() {this.getf() },

       beforeUpdate:function(){
         
         var loaddata = document.getElementById('loaddata');
         loaddata.style.display='none';
         this.suc="";
         
         }
   
}
</script>