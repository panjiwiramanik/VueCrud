<template>
  <div class="container">
    <h3 class="my-3">Tambah Data Siswa</h3>
    <FormSiswa></FormSiswa>
    <br>
    <br>
    <h3 class="my-3">Data Siswa</h3>
    <b-table responsive hover :items="siswa" :fields="siswaFields">
		<template slot="index" slot-scope="data">
			{{ data.index + 1 }}
		</template>
		<template slot="foto" slot-scope="data">
			<b-img-lazy fluid v-bind="mainProps" :src="data.value" />
		</template>
    </b-table>
    <p v-show="siswa < 1">Tidak Ada Data</p>
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
				return this.$store.getters.siswa;
			},
			siswaFields() {
				return this.$store.getters.siswaFields;
			},
			mainProps() {
				return this.$store.getters.mainProps;
			}
		},
		components: {
			FormSiswa
		}
	}
</script>
