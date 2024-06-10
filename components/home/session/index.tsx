import React from "react";

import { useSession, signOut, signIn } from "next-auth/react";
const Index = () => {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <div>
          <p className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
            {session.user && session.user.name}
          </p>
          <button
            className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => {
              signOut();
            }}
          >
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <button
          className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          onClick={() => {
            signIn("auth0");
          }}
        >
          Iniciar sesión
        </button>
      )}
    </div>
  );
};

export default Index;
