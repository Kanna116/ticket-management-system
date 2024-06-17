<template>
  <div class="modal-screen">
    <div class="ticket-container">
      <div class="ticket-left">
        <p class="ticket-id">{{ 'TICKET - 12' }}</p>
        <h2 class="ticket-main-title">
          {{
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dicta, tempore facilis accusamus ex rerum ullam temporibus et'
          }}
        </h2>
        <div class="ticket-desc-container">
          <h4>Description</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eum incidunt dolores vitae
            odit dolore voluptatum voluptas modi voluptates, assumenda unde maxime magnam!
            Repellendus, dolor quia quidem qui animi nemo?
          </p>
        </div>
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
  flex-direction: column;
  align-items: center;
}
.ticket-container {
  margin-top: 100px;
  min-width: 50vw;
  max-width: 80vw;
  min-height: 70vh;
  width: fit-content;
  height: fit-content;

  background-color: #fff;
  border-radius: 7px;
  padding: 30px;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
}
.ticket-left {
  width: 60%;
  /* background-color: red; */
  border-right: 1px solid #00000050;
  padding: 0px 15px;
}
.ticket-left .ticket-main-title {
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
}
.ticket-desc-container {
  width: 100%;
  height: fit-content;
  margin-top: 20px;
}
.ticket-desc-container h4 {
  font-size: 14px;
  font-weight: 600;
}
.ticket-desc-container p {
  font-size: 12px;
  margin-top: 10px;
  font-weight: 500;
}
.ticket-right {
  width: 40%;
  background-color: beige;
  padding: 10px 20px;
}
</style>
