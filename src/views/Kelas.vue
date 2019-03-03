<template>
  <div class="container" id="app">
    <h3 class="my-3"><span v-if="edits">Edit</span><span v-else>Tambah</span> Data kelas</h3>
    <FormKelas></FormKelas>	
    <br>
    <br>
    <h3 class="my-3">Data kelas</h3>
    <b-table responsive hover :items="kelas" :fields="kelasFields">
		<template slot="index" slot-scope="data">
			{{ data.index + 1 }}
		</template>
		<template slot="id" slot-scope="data">
			<b-button variant="warning" @click="edit(data.value)">Edit</b-button>
			&nbsp;
			<b-button variant="danger" @click="hapus(data.value)">Hapus</b-button>
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
			edits() {
				return this.$store.state.edits;
			},
			kelas() {
				return this.$store.getters.kelas;
			},
			kelasFields() {
				return this.$store.getters.kelasFields;
			}
		},
		methods: {
			edit: function(value) {
				this.$store.dispatch('detailDataKelas', value)
			},
			hapus: function(value) {
				this.$store.dispatch('deleteDataKelas', value)
			}
		},
		components: {
			FormKelas
		}
	}
</script>
