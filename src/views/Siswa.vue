<template>
  <div class="container">
    <h3 class="my-3">Tambah Data Siswa</h3>
    <FormSiswa></FormSiswa>
    <br>
    <br>
    <h3 class="my-3">Data Siswa</h3>
    <b-table responsive hover :items="siswa" />
  </div>
</template>

<script>
	import 'bootstrap/dist/css/bootstrap.css'
	import 'bootstrap-vue/dist/bootstrap-vue.css'
	import 'es6-promise/auto'
	import FormSiswa from '@/components/FormSiswa'

	export default {
		computed: {
			siswa() {
				return this.$store.state.siswa;
			}
		},
		methods: {

		},
		components: {
			FormSiswa
		}
	}
</script>
