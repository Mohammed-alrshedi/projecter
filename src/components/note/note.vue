<template>
    <div class="container">

        <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">404 ! ~ Can a Help you ?</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>

  <router-link  :to=" {name:'Helpid',params:{id:numberpage}}" class="card-link">Reader more</router-link>

  <hr> <button id="sucs" class=" btn btn-success" @click="pushhome()"> {{success}} </button>
  {{id}}
</div>


    </div>
 



</template>

<script>
export default {
    name:'helps',
   props:['id'],
        data:function(){
            return{
            numberpage: Math.floor(Math.random() * 100),
            success:'success'

            }
        },

methods: {
    pushhome:function(){
        const thiss =this
        this.success = 'Loading . . . ';
        document.getElementById("sucs").disabled = true;

        document.getElementById("sucs").classList.remove('btn-success');
        setTimeout(function(){

                    thiss.$router.push('/posts');

        },5000);

    },
  
},
  beforeRouteLeave (to, from, next) {
                        let exit_ms=confirm("Are you sure ?");

        console.log('rsun');
      
            if(exit_ms == true){
            next(true);
        }else{
        next(false);
        document.getElementById("sucs").disabled = false;
        this.success = 'success';

        document.getElementById("sucs").classList.add('btn-success');
        }
      

        
    },
}
</script>