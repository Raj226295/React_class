import style from './css/UserProfile.module.css';

function UserProfile() {
  return (
    <div>
       
      <div className={style.card}>
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
          className="avatar"
        />

        <div className={style.textWrap}>
          <h4>Raj vardhan singh</h4>
          <p>Web Developer and Designer</p>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
