import {Button} from "@mantine/core";
import {GoogleIcon} from "./GoogleIcon";
import {ButtonProps} from "@mantine/core";
import {AuthFirebase} from "../../../../../../api/firebase/firebase";
import {useNavigate} from "react-router-dom";

interface GoogleButtonProps extends ButtonProps {
}

export function GoogleButton(props: GoogleButtonProps) {
  const firebaseAuth = new AuthFirebase();
  const navigate = useNavigate();

  return (
    <Button
      leftIcon={<GoogleIcon/>}
      variant="default"
      color="gray"
      onClick={() => {
        firebaseAuth.signInWithGoogle()
          .then(() => navigate("/"))
          .catch((error) => console.log(error));
      }}
      {...props}
    />
  );
}
