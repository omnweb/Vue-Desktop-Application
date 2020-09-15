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
import { ipcRenderer } from  'electron' // Dispara um evento qdo o usuário seleciona as legendas
export default {
    components: { Pill },
    data: function () {
        return {
            files: [],
            groupedWords:[]
        }
    },
    methods: {
        //Processando a legenda
        processSubtitles() {
            const paths = this.files.map(f => f.path)
            ipcRenderer.send('process-subtitles', paths)
            ipcRenderer.on('process-subtitles', (event, resp) => {
                this.groupedWords = resp
            })
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