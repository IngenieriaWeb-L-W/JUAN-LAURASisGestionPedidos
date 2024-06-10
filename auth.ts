import NextAuth from 'next-auth';
//import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaAdapter } from 'next-auth/adapters/prisma';
import { PrismaClient } from '@prisma/client';
import Auth0 from 'next-auth/providers/auth0';
 
const prisma = new PrismaClient()
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Auth0],
})