<template>
  <div class="d-column gap60">
    <section v-if="user && user.name && user.age !== null" class="d-column gap20">
      <h2>Персональные данные</h2>
      <p>{{ user.name }}, {{ user.age }} {{ getAgeLabel(user.age) }}</p>
    </section>

    <section v-if="children.length" class="d-column gap20">
      <h2>Дети</h2>
      <ul class="d-column gap20">
        <li v-for="(child, index) in children" :key="index">
          <p>{{ child.name }}, {{ child.age }} {{ getAgeLabel(child.age) }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      children: [],
    };
  },
  methods: {
    getAgeLabel(age) {
      if (age % 10 === 1 && age % 100 !== 11) {
        return 'год';
      } else if ((age % 10 >= 2 && age % 10 <= 4) && (age % 100 < 10 || age % 100 >= 20)) {
        return 'года';
      } else {
        return 'лет';
      }
    }
  },
  created() {
    // Получаем данные из localStorage
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      this.user = parsedData.user || {};
      this.children = parsedData.children || [];

      this.user = {
        ...this.user,
        name: this.user.name || '',
        age: this.user.age || null
      };

      this.children = this.children.filter(child => child.name && child.age !== null);
    }
  },
};
</script>

<style scoped>
h2 {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
}

p {
  font-size: 16px;
  font-weight: 700;
}

ul {
  list-style-type: none;
  padding: 0;
  align-items: flex-start;
}

li {
  padding: 10px 20px;
  background: var(--color-border);
  border-radius: 5px;
}
</style>
