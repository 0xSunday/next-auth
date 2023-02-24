import classes from "./profile-form.module.css";
import { useRef } from "react";
function ProfileForm(props) {
  const enterdNewPassword = useRef();
  const enterdOldPassword = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const oldPassword = enterdOldPassword.current.value;
    const newPassword = enterdNewPassword.current.value;
   

    props.onChangePassword({ oldPassword, newPassword });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={enterdNewPassword} />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={enterdOldPassword} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
