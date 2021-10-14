<template>
  <div>
    <div class="page-header clear-filter" filter-color='orange'>
      <parallax
        class="page-header-image"
        style="background-image:url('img/bg6.jpg')"
      >
      </parallax>
       <div class="content-center">
      <div class="container">
          <h1 class="h1-seo">Dermatología</h1>
            <h3>Elige tu mejor opción</h3>
            <h3> Cudad
                <select name="Ciudad" style="color:gray;font-size:18px;">
                    <option>Bogotá</option>
                    <option>Cali</option>
                    <option>Medellín</option>
                </select>
                    Calificación
                <select name="Calificación" style="color:gray;font-size:18px;">
                    <option>1 estrella</option>
                    <option>2 estrellas</option>
                    <option>3 esstrellas</option>
                </select>
            Precios
                <select name="Precios" style="color:gray;font-size:18px;">
                 
                    <option >  $100.000-$200.000 </option>
                    <option>$200.000-$300.000</option>
                    <option>>$300.000</option>
                   
                </select>
                
                <input type="submit" value="buscar" style="color:gray;font-size:18px;">
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
            <div class="col-md-4">
              <div class="team-player">
                <img  
                  src="img/avatar.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Romina Hadid</h4>
                 <a  href="/#/Perfil_medico">ver perfil</a>
                <p class="category text-primary" >Dermatología estética</p>
                <p class="description">
           Adipiscing elit, magna dignissim cras condimentum per semper. Massa risus dignissim porta 
                 condimentum purus at aptent etiam hac conubia. 
                odio condimentum imperdiet ac torquent, fermentum  <a href="#">links</a>.
                 penatibus curae aliquam mus praesent quam, mattis mi facilisi cubilia etiam ad. 
                </p>
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
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/ryan.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Ryan Tompson</h4>
                 <a  href="/#/Perfil_medico">ver perfil</a>
                <p class="category text-primary">dermatología pediátrica</p>
                <p class="description">
                 Adipiscing elit, magna dignissim cras condimentum per semper. Massa risus dignissim porta 
                 condimentum purus at aptent etiam hac conubia. 
                odio condimentum imperdiet ac torquent, fermentum  <a href="#">links</a>.
                 penatibus curae aliquam mus praesent quam, mattis mi facilisi cubilia etiam ad. 
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-linkedin"></i
                ></a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/eva.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Eva Jenner</h4>
                 <a  href="/#/Perfil_medico">ver perfil</a>
                <p class="category text-primary">Patologías de la piel</p>
                <p class="description">
              Adipiscing elit, magna dignissim cras condimentum per semper. Massa risus dignissim porta 
                 condimentum purus at aptent etiam hac conubia. 
                odio condimentum imperdiet ac torquent, fermentum  <a href="#">links</a>.
                 penatibus curae aliquam mus praesent quam, mattis mi facilisi cubilia etiam ad. 
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-google-plus"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-youtube"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
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
import { Parallax } from '@/components';




export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    Parallax


  
   

   
 
  }
};
</script>
<style></style>
