<template>
  <div class="container mt-5">
    <h3 class="fw-bold mb-4">Quản trị viên: Danh sách Tài khoản</h3>
    <div class="table-responsive shadow-sm">
      <table class="table table-hover table-bordered align-middle mb-0">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>Họ và Tên</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Phân Quyền (Role)</th>
            <th class="text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td class="fw-bold">{{ user.fullName }}</td>
            <td>{{ user.email }}</td>
            <td>
              <span :class="user.status === 'active' ? 'badge bg-success' : 'badge bg-danger'">
                {{ user.status === 'active' ? 'Hoạt động' : 'Bị Khóa' }}
              </span>
            </td>
            <td>
              <select class="form-select form-select-sm" v-model="user.role">
                <option value="Admin">Admin</option>
                <option value="Nhân viên">Nhân viên CSKH</option>
                <option value="Khách hàng">Khách hàng</option>
              </select>
            </td>
            <td class="text-center">
              <button class="btn btn-sm btn-primary">Lưu Quyền</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminUserList',
  data() {
    return {
      users: [] // Mảng chứa dữ liệu
    }
  },
  mounted() {
    // Gọi API giả lập từ db.json
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => {
        this.users = data;
      })
      .catch(error => console.error("Lỗi kết nối:", error));
  }
}
</script>