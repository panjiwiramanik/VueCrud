import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		siswa : [
			{
				nis: "1617116684",
				nama_lengkap: "Muhamad Panji Wiramanik",
				jenis_kelamin: "Laki - Laki",
				alamat: "Jl. Kapten Abdul Hamid No. 21"
			},
			{
				nis: "1617116684",
				nama_lengkap: "Muhamad Panji Wiramanik",
				jenis_kelamin: "Laki - Laki",
				alamat: "Jl. Kapten Abdul Hamid No. 21"
			},
			{
				nis: "1617116684",
				nama_lengkap: "Muhamad Panji Wiramanik",
				jenis_kelamin: "Laki - Laki",
				alamat: "Jl. Kapten Abdul Hamid No. 21"
			}
		],
		kelas : [
			{
				nama_kelas : "XII RPL 1",
				jurusan : "RPL"
			},
			{
				nama_kelas : "XII RPL 2",
				jurusan : "RPL"
			},
			{
				nama_kelas : "XII RPL 3",
				jurusan : "RPL"
			}
		]
	},
	mutations: {

	},
	actions: {

	}
})
