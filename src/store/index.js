import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const axios = require('axios');

var store = new Vuex.Store({
	state: {
		siswa : [],
		siswaFields : [
			{ key : "index", label : "No" },
			{ key : "nis", label : "NIS" },
			{ key : "foto", label : "Foto" },
			{ key : "nama_lengkap", label : "Nama Lengkap" },
			{ key : "jenis_kelamin", label : "Jenis Kelamin" },
			{ key : "alamat", label : "Alamat" }
		],
		kelas : [],
		kelasFields : [
			{ key : "index", label : "No" },
			{ key : "nama_kelas", label : "Nama Kelas" },
			{ key : "jurusan", label : "Jurusan" }
		],
		mainProps: {
			center: true,
			blank: true,
			blankColor: '#bbb',
			width: 50,
			height: 50
		}
	},
	getters: {
		siswa (state) {
			return state.siswa
		},
		siswaFields (state) {
			return state.siswaFields
		},
		kelas (state) {
			return state.kelas
		},
		kelasFields (state) {
			return state.kelasFields
		},
		mainProps (state) {
			return state.mainProps
		},
	},
	actions: {
		loadDataSiswa({commit}) {
			axios.get("https://sekolahapi.derazu.tech/siswa")
			.then((response) => {
				commit('updateSiswa', response.data.result)
			})
		},
		loadDataKelas({commit}) {
			axios.get("https://sekolahapi.derazu.tech/kelas")
			.then((response) => {
				commit('updateKelas', response.data.result)
			})
		}
	},
	mutations: {
		updateSiswa(state, siswa) {
			state.siswa = siswa
		},
		updateKelas(state, kelas) {
			state.kelas = kelas
		}
	}
})

store.dispatch("loadDataSiswa")
store.dispatch("loadDataKelas")

export default store
