import { useSession, signIn, signOut } from "next-auth/react";

const AdminPanel = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <p>You need to sign in to access this page.</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {session.user.name}!</h1>
      <button onClick={() => signOut()}>Sign Out</button>
      {/* Add/Edit/Delete logic here */}
    </div>
  );
};

export default AdminPanel;
