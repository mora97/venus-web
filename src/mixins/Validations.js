export default {
  data() {
    return {
      errors: [],
      password: '',
      next: true
    }
  },
  methods: {
    checkForm(code) {
      this.errors = []
      if (code == 0) {
        if (!this.email_phone) {
          this.errors.push(0);
        } else if (!this.isValidEmail_Phone(this.email_phone)) {
          this.errors.push(1);
        } else {
          this.errors.push(-1)
        }
      } else if (code == 1) {
        if (!this.nameField_1) {
          this.errors.push(0);
        } else if (!this.isValidName(this.nameField_1)) {
          this.errors.push(1);
        } else {
          this.errors.push(-1)
        }

        if (!this.nameField_2) {
          this.errors.push(0);
        } else if (!this.isValidName(this.nameField_2)) {
          this.errors.push(1);
        } else {
          this.errors.push(-1)
        }

        if (!this.phoneNumber) {
          this.errors.push(0);
        } else if (!this.isValidPhoneNumber(this.phoneNumber)) {
          this.errors.push(1);
        } else {
          this.errors.push(-1)
        }

        if (!this.email) {
          this.errors.push(0);
        } else if (!this.isValidEmail(this.email)) {
          this.errors.push(1);
          this.next = false;
        } else {
          this.errors.push(-1)
        }

        if (!this.accepted) {
          this.errors.push(1)
        } else {
          this.errors.push(-1)
        }

      } else if (code == 2 && this.editable != true) {

        if (!this.editedName) {
          this.errors.push('نام خود را وارد نمایید');
        } else if (!this.isValidName(this.editedName)) {
          this.errors.push('نام وارد شده اشتباه است');
        }
        if (!this.options[0]) {
          this.errors.push('شمار موبایل خود را وارد نمایید');
        } else if (!this.isValidPhoneNumber(this.options[0])) {
          this.errors.push('شماره موبایل نامعتبر است');
        }
        if (!this.options[1]) {
          this.errors.push('ایمیل خود را وارد نمایید');
        } else if (!this.isValidEmail(this.options[1])) {
          this.errors.push('ایمیل نامعتبر است');
        }
      }

      if (code == 1 || code == 0) {
        if (!this.password) {
          this.errors.push(0);
        } else if (!this.isValidPassword(this.password)) {
          this.errors.push(1);
        } else {
          this.errors.push(-1)
        }
      }

      for (let i = 0; i < this.errors.length; i++) {
        if (this.errors[i] != -1) {
          this.next = false;
          break;
        }
        this.next = true
      }
    },
    isValidEmail_Phone(email_phone) {
      var emailResult = this.isValidEmail(email_phone)
      var phoneResult = this.isValidPhoneNumber(email_phone)

      if (emailResult == true)
        return true
      if (phoneResult == true)
        return true

      return false;
    },
    isValidEmail(email) {
      var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email)
    },
    isValidPhoneNumber(phoneNumber) {
      var regex = /^\(?([0-9]{11})$/;
      return regex.test(phoneNumber)
    },
    isValidName(name) {
      var enRegex = /^[a-zA-Z ]+$/;
      var prRegex = /^[\u0600-\u06FF\s]+$/;
      var isEn = enRegex.test(name);
      var isPr = prRegex.test(name)

      if (isPr || isEn) {
        return true
      }

      return false;
    },
    isValidPassword(password) {
      if (password.length < 6) {
        return false
      }
      return true;
    }
  }
}
