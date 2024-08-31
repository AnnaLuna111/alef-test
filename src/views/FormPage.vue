<template>
  <div class="page d-column gap20">
    <h1>Персональные данные</h1>
    <form @submit.prevent="handleSubmit" class="d-column gap30">
      <UserForm :user="user" :children="children" />
      <div class="form-actions">
        <button type="submit" class="btn btn-inverse">Сохранить</button>
      </div>
    </form>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue';

export default {
  components: {
    UserForm,
  },
  data() {
    return {
      user: {
        fullName: '',
        age: null,
      },
      children: [],
    };
  },
  created() {
    // Загружаем данные из localStorage, если они есть
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      this.user = parsedData.user || { fullName: '', age: null };
      this.children = parsedData.children || [];
    }
  },
  methods: {
    handleSubmit() {
      const data = {
        user: this.user,
        children: this.children,
      };
      // Сохраняем данные в localStorage
      localStorage.setItem('formData', JSON.stringify(data));
    },
  },
};
</script>

<style scoped>
.page {
  width: 100%;
  min-width: 616px;
}
.form {
  width: 100%;
}

h1 {
  font-size: 16px;
  font-weight: 500;
}
</style>
