import AuthForm from "../components/auth/auth-form";
import { getSession } from "next-auth/client";
function AuthPage() {
  return <AuthForm />;
}

export default AuthPage;

export async function getServerSideProps(contex) {
  const session = await getSession({ req: contex.req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
