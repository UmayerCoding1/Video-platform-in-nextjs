"use client";

import React, { ReactNode } from "react";
// import { ImageKitProvider as IKProvider } from '@imagekit/next';
import { IKContext } from "imagekitio-react";
import { SessionProvider } from "next-auth/react";

const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!;
const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!;

interface AuthResponse {
  signature: string;
  token: string;
  expire: number;
}

interface Props {
  children: ReactNode;
}

export default function ImageProvider({ children }: Props) {
  const authenticator = async (): Promise<AuthResponse> => {
    const response = await fetch("/api/imagekit-auth");
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Authentication failed: ${errorText}`);
    }

    const data: AuthResponse = await response.json();
    return data;
  };

  return (
    <SessionProvider>
      <IKContext
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticator={authenticator}
      >
        {children}
      </IKContext>
    </SessionProvider>
  );
}
