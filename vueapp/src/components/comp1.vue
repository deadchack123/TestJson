<template>
  <div>
    <input type="text" v-model="name" @input="removeItem" />
    <input type="text" v-model="name2" />
    <a href="http://localhost:3000/json1.json" download>DOWNLOAD</a>
    <button @click="saveFieldsInJson">Загрузить файлы</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            name: '',
            name2: ''
        }
    },
    beforeMount() {
        this.getFile()
    },
    methods: {
        removeItem() {
            this.$emit('remove', this.name)
        },
        getFile () {
            axios.get(`http://localhost:3000/getJson`).then(res => {
                /* eslint-disable no-console */
                console.log(res.data)
                const ourData = JSON.parse(res.data)
                /* eslint-enable no-console */
                this.name = ourData.name
                this.name2 = ourData.name2
            })
        },
        saveFieldsInJson() {
            axios.get(`http://localhost:3000/?name=${this.name}&name2=${this.name2}`).then(res => {
                /* eslint-disable no-console */
                console.log(res)
                /* eslint-enable no-console */
            }).catch(e => {
                 /* eslint-disable no-console */
                console.error(e)
                /* eslint-enable no-console */
            })
        }
    },
    computed: {
    }
}
</script>