<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      
      <b-row class="text-left">
        <b-col md="6" sm="12">
          <b-form-group id="Nis" label="NIS:" label-for="Nis">
            <b-form-input 
              id="Nis" type="text" 
              v-model="form.nis" required placeholder="Masukkan Nis" />
          </b-form-group>
        </b-col>
  
        <b-col md="6" sm="12">
          <b-form-group id="namaLengkap" label="Nama Lengkap:" label-for="namaLengkap">
            <b-form-input 
              id="namaLengkap" type="text" 
              v-model="form.nama_lengkap" required placeholder="Masukkan Nama Lengkap" />
          </b-form-group>
        </b-col>
      </b-row>
      
      <b-row class="text-left">
        <b-col md="6" sm="12">
          <b-form-group id="jenisKelamin" label="Jenis Kelamin:" label-for="jenisKelamin">
            <b-form-select id="jenisKelamin" v-model="form.jenis_kelamin" required :options="jk_options" :value="pilih"/>
          </b-form-group>
        </b-col>
  
        <b-col md="6" sm="12">
          <b-form-group id="Alamat" label="Alamat:" label-for="Alamat">
            <b-form-input 
              id="Alamat" type="text" 
              v-model="form.alamat" required placeholder="Masukkan Alamat" />
          </b-form-group>
        </b-col>
      </b-row>
      
      <div class="float-right">
        <b-button class="mr-3" type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </div>

    </b-form>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import 'es6-promise/auto'

  export default {
    data() {
      return {
        form: {
          nis: "",
          nama_lengkap: "",
          jenis_kelamin: "pilih",
          alamat: ""
        },
        jk_options: [
          { value: 'pilih', text: '-- Pilih Jenis Kelamin --' },
          { value: 'Laki - Laki', text: 'Laki - Laki' },
          { value: 'Perempuan', text: 'Perempuan' }
        ]
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        this.form.nis = ''
        this.form.nama_lengkap = ''
        this.form.jenis_kelamin = 'pilih'
        this.form.alamat = ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
