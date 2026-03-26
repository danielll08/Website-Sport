<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <Header />

    <main class="flex-grow-1 container mt-4">
      <div class="text-center mb-5">
        <button 
          class="btn" 
          :class="currentTab === 'Login' ? 'btn-primary' : 'btn-outline-primary'" 
          @click="currentTab = 'Login'"
        >
          Giao diện Đăng Nhập
        </button>
        <button 
          class="btn ms-2" 
          :class="currentTab === 'Admin' ? 'btn-danger' : 'btn-outline-danger'" 
          @click="currentTab = 'Admin'"
        >
          Giao diện Bảng Admin
        </button>
      </div>

      <Login v-if="currentTab === 'Login'" />
      <AdminUserList v-if="currentTab === 'Admin'" />
    </main>

    <Footer />
  </div>
</template>

<script>
// Header và Footer vẫn ở thư mục components
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

// Trỏ đúng đường dẫn sang thư mục views cho 2 trang chính
import Login from './Views/Login.vue'
import AdminUserList from './Views/AdminUserList.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Login,
    AdminUserList
  },
  data() {
    return {
      currentTab: 'Login' 
    }
  }
}
</script>
<style>
body {
  background-color: #f8f9fa;
}
</style>
