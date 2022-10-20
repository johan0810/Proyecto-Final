<template>
  <div class="container">
    <h1>Documentacion de Induccion Para Aprendices</h1>
    <div class="pdf">
      <div class="card">
        <div class="content">
          <router-link class="link" to="/User/Documentacion/ManualDelAprendiz/"
            >Ver Documento
          </router-link>
        </div>
      </div>

      <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

      <router-link class="link" to="/User/Documentacion/"> </router-link>
      <router-view></router-view>
    </div>
  </div>
  kkkk
</template>

<style scoped>
@import url(/src\assets\Proyecto\Estilos\document.css);
</style>