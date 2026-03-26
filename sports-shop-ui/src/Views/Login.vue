<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div class="card shadow-sm border-0">
          <div class="card-body p-4">
            <h3 class="text-center mb-4 fw-bold">ĐĂNG NHẬP</h3>
            <form>
              <div class="mb-3">
                <label class="form-label">Email của bạn</label>
                <input type="email" class="form-control" placeholder="Nhập email..." />
              </div>
              <div class="mb-3">
                <label class="form-label">Mật khẩu</label>
                <input type="password" class="form-control" placeholder="Nhập mật khẩu..." />
              </div>
              <div class="d-grid gap-2 mt-4">
                <button type="button" class="btn btn-dark btn-lg">Đăng Nhập</button>
              </div>
              <div class="text-center mt-3">
                <a href="#" class="text-decoration-none text-muted">Chưa có tài khoản? Đăng ký ngay</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>