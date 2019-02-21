<template>
  <div class="container" id="app">
    <h3 class="my-3">Tambah Data kelas</h3>
    <FormKelas></FormKelas>	
    <br>
    <br>
    <h3 class="my-3">Data kelas</h3>
    <b-table responsive hover :items="kelas" :fields="kelasFields">
		<template slot="index" slot-scope="data">
			{{ data.index + 1 }}
		</template>
    </b-table>
    <p v-show="kelas < 1">Tidak Ada Data</p>
  </div>
</template>

<script>
	import 'bootstrap/dist/css/bootstrap.css'
	import 'bootstrap-vue/dist/bootstrap-vue.css'
	import 'es6-promise/auto'
	import FormKelas from '@/components/FormKelas'

	export default {
		computed: {
			kelas() {
				return this.$store.getters.kelas;
			},
			kelasFields() {
				return this.$store.getters.kelasFields;
			}
		},
		components: {
			FormKelas
		}
	}
</script>
