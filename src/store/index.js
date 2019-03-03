import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const axios = require('axios');

var store = new Vuex.Store({
	state: {
		edits: false,
		jk_options: [
			{ value: 'pilih', text: '-- Pilih Jenis Kelamin --' },
			{ value: 'Laki-Laki', text: 'Laki - Laki' },
			{ value: 'Perempuan', text: 'Perempuan' }
		],
		form_siswa: {
			id: null,
			nis: null,
			nama_lengkap: null,
			jenis_kelamin: "pilih",
			alamat: null
		},
		form_kelas: {
			id: null,
			nama_kelas: null,
			jurusan: null
		},
		siswa : [],
		siswaFields : [
			{ key : "index", label : "No" },
			{ key : "nis", label : "NIS" },
			{ key : "nama_lengkap", label : "Nama Lengkap" },
			{ key : "jenis_kelamin", label : "Jenis Kelamin" },
			{ key : "alamat", label : "Alamat" },
			{ key : "id", label : "Aksi" }
		],
		kelas : [],
		kelasFields : [
			{ key : "index", label : "No" },
			{ key : "nama_kelas", label : "Nama Kelas" },
			{ key : "jurusan", label : "Jurusan" },
			{ key : "id", label : "Aksi" }
		]
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
		}
	},
	actions: {
		addFormKelas({commit}, payload) {
			commit('addFormKelas', payload)
		},
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
		},
		addDataSiswa({commit}, payload) {
			axios.post("https://sekolahapi.derazu.tech/siswa/add", payload)
			.then((response) => {
				commit('addSiswa', response.data.result)
			})
		},
		addDataKelas({commit}, payload) {
			axios.post("https://sekolahapi.derazu.tech/kelas/add", payload)
			.then((response) => {
				commit('addKelas', response.data.result)
			})
		},
		editDataKelas({commit}, payload) {
			axios.post("https://sekolahapi.derazu.tech/kelas/" + payload.id, payload)
			.then((response) => {
				commit('editKelas', response.data.result)
			})
		},
		editDataSiswa({commit}, payload) {
			axios.post("https://sekolahapi.derazu.tech/siswa/" + payload.id, payload)
			.then((response) => {
				commit('editSiswa', response.data.result)
			})
		},
		deleteDataKelas({commit}, payload) {
			axios.delete("https://sekolahapi.derazu.tech/kelas/" + payload)
			.then(() => {
				commit('deleteKelas', payload)
			})
		},
		deleteDataSiswa({commit}, payload) {
			axios.delete("https://sekolahapi.derazu.tech/siswa/" + payload)
			.then(() => {
				commit('deletesiswa', payload)
			})
		},
		detailDataKelas({commit}, payload) {
			axios.get("https://sekolahapi.derazu.tech/kelas/" + payload)
			.then((response) => {
				commit('edits')
				commit('addDetailKelas', response.data.result)
			})
		},
		detailDataSiswa({commit}, payload) {
			axios.get("https://sekolahapi.derazu.tech/siswa/" + payload)
			.then((response) => {
				commit('edits')
				commit('addDetailSiswa', response.data.result)
			})
		}
	},
	mutations: {
		edits(state) {
			state.edits = true
		},
		addDetailKelas(state, form) {
			state.form_kelas.id = form.id
			state.form_kelas.nama_kelas = form.nama_kelas
			state.form_kelas.jurusan = form.jurusan
		},
		addDetailSiswa(state, form) {
			state.form_siswa.id = form.id
			state.form_siswa.nis = form.nis
			state.form_siswa.nama_lengkap = form.nama_lengkap
			state.form_siswa.jenis_kelamin = form.jenis_kelamin
			state.form_siswa.alamat = form.alamat
		},
		updateSiswa(state, siswa) {
			state.siswa = siswa
		},
		updateKelas(state, kelas) {
			state.kelas = kelas
		},
		addSiswa(state, siswa) {
			state.siswa.push(siswa)
		},
		addKelas(state, kelas) {
			state.kelas.push(kelas)
		},
		editKelas(state, kelas) {
			state.edits = false
			const item = state.kelas.find(item => item.id === kelas.id)
			Object.assign(item, kelas)
		},
		editSiswa(state, siswa) {
			state.edits = false
			const item = state.siswa.find(item => item.id === siswa.id)
			Object.assign(item, siswa)
		},
		deleteKelas(state, kelasid) {
			var id = state.kelas.findIndex(s => s.id === kelasid)
			state.kelas.splice(id, 1)
		},
		deleteSiswa(state, siswaid) {
			var id = state.siswa.findIndex(s => s.id === siswaid)
			state.siswa.splice(id, 1)
		}
	}
})

store.dispatch("loadDataSiswa")
store.dispatch("loadDataKelas")

export default store
