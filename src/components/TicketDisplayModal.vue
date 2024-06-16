<template>
  <div class="modal-screen">
    <div class="ticket-container">
      <div class="ticket-left">
        <p class="ticket-id">{{ 'TICKET - 12' }}</p>
        <h1>
          {{
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dicta, tempore facilis accusamus ex rerum ullam temporibus et'
          }}
        </h1>
      </div>
      <div class="ticket-right">
        <p>Label</p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.modal-screen {
  width: 100vw;
  height: 100vh;
  background-color: #00000050;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ticket-container {
  min-width: 50vw;
  max-width: 80vw;
  width: fit-content;
  height: fit-content;

  min-height: 70vh;
  background-color: #fff;
  border-radius: 7px;
  padding: 10px 20px;
}
.ticket-container .ticket-left{
    width: 60%;
    height: 100%;
    border-right: 1px solid black;
}
.ticket-left h1{
    font-size: 20px;
}
.ticket-container .ticket-right{
    width: 40%;
    height: 100%;
    background-color: beige;
}
</style>
