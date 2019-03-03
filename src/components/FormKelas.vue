<template>
	<div>
		<b-form @submit="onSubmit" @reset="onReset">
			
			<b-row class="text-left">
				<b-col md="6" sm="12">
					<b-form-group id="namakelas" label="Nama Kelas:" label-for="namakelas">
						<b-form-input 
							id="namakelas" type="text" 
							v-model="form.nama_kelas" required placeholder="Masukkan Nama Kelas" />
					</b-form-group>
				</b-col>
	
				<b-col md="6" sm="12">
					<b-form-group id="kejuruan" label="Jurusan:" label-for="kejuruan">
						<b-form-input 
							id="kejuruan" type="text" 
							v-model="form.jurusan" required placeholder="Masukkan Jurusan" />
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
		computed: {
			form() {
				return this.$store.state.form_kelas
			}
		},
		methods: {
			onSubmit(evt) {
				evt.preventDefault()
				if (this.form.id != null) {
					this.$store.dispatch('editDataKelas', this.form)
					.then( () => {
							this.form.id = ''
							this.form.nama_kelas = ''
							this.form.jurusan = ''
						}
					)
				} else {
					this.$store.dispatch('addDataKelas', this.form)
				}

			},
			onReset(evt) {
				evt.preventDefault()
				this.form.id = ''
				this.form.nama_kelas = ''
				this.form.jurusan = ''
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
