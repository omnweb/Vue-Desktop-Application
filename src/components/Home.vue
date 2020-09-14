<template>
  <v-container fluid>
      <v-form>
          <!-- Multiple recebe mais de um arquivo -->
          <v-file-input 
            multiple 
            chips 
            v-model="files" 
            prepend-icon="mdi-message-text" 
            append-outer-icon="mdi-send"
            label="Selecione as Legendas" 
            outlined 
            @click:append-outer="processSubtitles"
            />
      </v-form>
    <div class="pills">
          <Pill v-for="word in groupedWords" :key="word.name"
            :name="word.name" :amount="word.amount" />
      </div>
  </v-container>
</template>

<script>
import Pill from './Pill'
export default {
    components: { Pill },
    data: function () {
        return {
            files:[],
            groupedWords:[
                {name:'i', amount: 1234},
                {name:'you', amount: 950},
                {name:'he', amount: 820},
            ]
        }
    },
    methods: {
        //Processando a legenda
        processSubtitles(){
            console.log(this.files)
        }
    }
}
</script>

<style>
    .pills {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>