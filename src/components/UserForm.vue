<template>
  <div class="d-column gap30">
    <!-- Поля для персональных данных -->
    <div class="d-column gap10">
      <div class="form__input">
        <label>Имя</label>
        <input v-model="user.name" type="text" placeholder="Введите имя" />
      </div>
      <div class="form__input">
        <label>Возраст</label>
        <input v-model="user.age" type="number" placeholder="Введите возраст" />
      </div>
    </div>

    <!-- Поля для детей -->
    <div class="d-column gap10">
      <div class="d-center jcsb ">
        <h3>Дети (макс. 5)</h3>
        <button v-if="children.length < 5" @click="addChild" class="btn">+ Добавить ребенка</button>

      </div>
      <div v-for="(child, index) in children" :key="index" class="grid ">
        <div class="form__input">
          <label>Имя</label>
          <input v-model="child.name" type="text" placeholder="Имя ребенка" />
        </div>
        <div class="form__input">
          <label>Возраст</label>
          <input v-model="child.age" type="number" placeholder="Возраст ребенка" />
        </div>
        <button @click="removeChild(index)">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
    children: Array,
  },
  methods: {
    addChild() {
      this.children.push({ name: '', age: null });
    },
    removeChild(index) {
      this.children.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.form__input {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px 16px;
  border: 1px solid var(--vt-c-divider-light-1);
  border-radius: 4px;
}

label {
  font-size: 13px;
  color: var(--vt-c-black-soft);
}

input {
  border: none;
  font-size: 14px;
  color: var(--vt-c-black);
}

h3 {
  font-size: 16px;
  font-weight: 500;
}

.grid {
  grid-template-columns: 260px 260px 1fr;
  gap: 18px;
}
</style>
