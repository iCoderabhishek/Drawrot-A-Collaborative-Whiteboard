"use client"

import {Hero} from '@repo/ui/hero-section'
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();
  return <Hero onDashboard={() => router.push("/dashboard")} onSignin={() => router.push("/signin")}/>;
}
