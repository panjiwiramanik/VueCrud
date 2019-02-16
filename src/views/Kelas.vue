<template>
  <div class="container" id="app">
    <h3 class="my-3">Tambah Data kelas</h3>
    <FormKelas></FormKelas>	
    <br>
    <br>
    <h3 class="my-3">Data kelas</h3>
    <b-table responsive hover :items="kelas" />
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
				return this.$store.state.kelas;
			}
		},
		methods: {

		},
		components: {
			FormKelas
		}
	}
</script>
