export default {
  data() {
    return {
      code: 0,
      activePlaceHolder: []
    }
  },
  methods: {
    getElemetnId(event) {
      var path = event.path || (event.composedPath && event.composedPath());
      var usernameFlag = 0,
        passwordFlag = 0,
        nameField_1_Flag = 0,
        nameField_2_Flag = 0,
        phoneNumberFlag = 0,
        emailFlag = 0,
        oldPsswordFlag = 0,
        newPsswordFlag = 0,
        confirmNewPasswordFlag = 0;

      console.log(this.code);
      if (this.code == 0) {
        for (let i = 0; i < path.length - 2; i++) {
          switch (path[i].id) {
            case "input-username":
              this.activePlaceHolder.splice(0, 1, true);
              usernameFlag = 1;
              break;
            case "input-password":
              this.activePlaceHolder.splice(1, 1, true);
              passwordFlag = 1;
              break;
          }
        }

        if (this.email_phone == "" && usernameFlag == 0) {
          this.activePlaceHolder.splice(0, 1, false);
        } else {
          this.activePlaceHolder.splice(0, 1, true);
        }

        if (this.password == "" && passwordFlag == 0) {
          this.activePlaceHolder.splice(1, 1, false);
        } else {
          this.activePlaceHolder.splice(1, 1, true);
        }
      } else if (this.code == 1) {
        for (let i = 0; i < path.length - 2; i++) {
          switch (path[i].id) {
            case "input-nameField_1":
              this.activePlaceHolder.splice(0, 1, true)
              nameField_1_Flag = 1;
              break;
            case "input-nameField_2":
              this.activePlaceHolder.splice(1, 1, true)
              nameField_2_Flag = 1;
              break;
            case "input-phone-number":
              this.activePlaceHolder.splice(2, 1, true);
              phoneNumberFlag = 1;
              break;
            case "input-email":
              this.activePlaceHolder.splice(3, 1, true);
              emailFlag = 1;
              break;
            case "input-password":
              this.activePlaceHolder.splice(4, 1, true);
              passwordFlag = 1;
              break;
          }
        }

        if (this.nameField_1 == "" && nameField_1_Flag == 0) {
          this.activePlaceHolder.splice(0, 1, false);
        } else {
          this.activePlaceHolder.splice(0, 1, true);
        }

        if (this.nameField_2 == "" && nameField_2_Flag == 0) {
          this.activePlaceHolder.splice(1, 1, false);
        } else {
          this.activePlaceHolder.splice(1, 1, true);
        }

        if (this.phoneNumber == "" && phoneNumberFlag == 0) {
          this.activePlaceHolder.splice(2, 1, false);
        } else {
          this.activePlaceHolder.splice(2, 1, true);
        }

        if (this.email == "" && emailFlag == 0) {
          this.activePlaceHolder.splice(3, 1, false);
        } else {
          this.activePlaceHolder.splice(3, 1, true);
        }

        if (this.password == "" && passwordFlag == 0) {
          this.activePlaceHolder.splice(4, 1, false);
        } else {
          this.activePlaceHolder.splice(4, 1, true);
        }
      } else if (this.code == 2) {
        for (let i = 0; i < path.length - 2; i++) {
          switch (path[i].id) {
            case "input-old-password":
              this.activePlaceHolder.splice(0, 1, true);
              oldPsswordFlag = 1;
              break;
            case "input-new-password":
              this.activePlaceHolder.splice(1, 1, true);
              newPsswordFlag = 1;
              break;
            case "input-confirm-new-password":
              this.activePlaceHolder.splice(2, 1, true);
              confirmNewPasswordFlag = 1;
              break
          }
        }

        if (this.oldPassword == "" && oldPsswordFlag == 0) {
          this.activePlaceHolder.splice(0, 1, false);
        } else {
          this.activePlaceHolder.splice(0, 1, true);
        }

        if (this.newPassword == "" && newPsswordFlag == 0) {
          this.activePlaceHolder.splice(1, 1, false);
        } else {
          this.activePlaceHolder.splice(1, 1, true);
        }

        if (this.confirmNewPassword == "" && confirmNewPasswordFlag == 0) {
          this.activePlaceHolder.splice(2, 1, false);
        } else {
          this.activePlaceHolder.splice(2, 1, true);
        }
      }
    }
  }
}
