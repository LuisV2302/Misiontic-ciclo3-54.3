<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="h1-seo">Dermatología</h1>
          <h3>Elige tu mejor opción</h3>
          <h3>
            Cudad
            <select name="Ciudad" style="color: gray; font-size: 18px">
              <option>Bogotá</option>
              <option>Cali</option>
              <option>Medellín</option>
            </select>
            Calificación
            <select name="Calificación" style="color: gray; font-size: 18px">
              <option>1 estrella</option>
              <option>2 estrellas</option>
              <option>3 esstrellas</option>
            </select>
            Precios
            <select name="Precios" style="color: gray; font-size: 18px">
              <option>$100.000-$200.000</option>
              <option>$200.000-$300.000</option>
              <option>>$300.000</option>
            </select>

            <input
              type="submit"
              value="buscar"
              style="color: gray; font-size: 18px"
            />
          </h3>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="section section-team text-center">
        <div class="container">
          <h2 class="title">Especialistas</h2>
          <div class="team">
            <div class="row">
              <div
                class="col-md-4"
                v-for="(medico, index) in listadomedicos"
                :key="index"
              >
                <div class="team-player">
                  <img
                    src="img/avatar.jpg"
                    alt="Thumbnail Image"
                    class="rounded-circle img-fluid img-raised"
                  />
                  <h4 class="title">{{ medico.nombre }}</h4>
                  <button v-on:click="dirigirPerfil(medico._id)">
                    ver perfil
                  </button>
                  <p class="category text-primary">{{ medico.especialidad }}</p>
                  <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                    ><i class="fab fa-instagram"></i
                  ></a>
                  <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                    ><i class="fab fa-facebook-square"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Parallax } from "@/components";
import axios from "axios";

export default {
  name: "landing",
  bodyClass: "landing-page",
  components: {
    Parallax,
  },
  data() {
    return {
      listadomedicos: null,
    };
  },
  props: ["idPaciente"],
  created() {
    axios
      .get("https://vast-forest-78933.herokuapp.com/medico/")
      .then((res) => (this.listadomedicos = res.data));
  },
  methods: {
    dirigirPerfil(id) {
      this.$router.push({
        name: "perfil medico",
        params: {
          idMedico: id,
          idPaciente: this.idPaciente,
        },
      });
    },
  },
};
</script>
<style></style>
