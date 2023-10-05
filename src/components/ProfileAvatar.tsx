import React from "react";
import { ImgComp } from "./ImageComp";

const ProfileAvatar = ({ classStyle }: { classStyle: string }) => {
  return (
    <div>
      <ImgComp
        src="
      https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=6hQNACQQjktni8CxSS_QSPqJv2tycskYmpFGzxv3FNs="
        alt="user profile"
        className={`${classStyle} m-auto rounded-full`}
      />
    </div>
  );
};

export default ProfileAvatar;
