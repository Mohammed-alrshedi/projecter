<template>
    <div>

*****        <marquee>this is Page {{id}}</marquee>
<input v-model="id" type="text" id="d">
{{ run() }}
    </div>
</template>

<script>
export default {
    name:'sadas',
    props:['id'],

    methods:{
       
       run:function(){
           if ( this.id == '1997'){

               alert("انت ممتاز");
           }
       
       }


    }
}
</script>
