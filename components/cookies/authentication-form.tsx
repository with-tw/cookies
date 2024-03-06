'use client';
import {
  Card,
  CardHeader,
  CardHeaderDescription,
  CardHeaderTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function AuthenticationForm() {
  const [view, setView] = useState<'login' | 'create-account'>('login');
  return (
    <Card className="authentication-form w-[420px]">
      <CardHeader>
        <CardHeaderTitle>
          {view === 'login' && 'Log In'}
          {view === 'create-account' && 'Create new account'}
        </CardHeaderTitle>
        <CardHeaderDescription>
          {view === 'login'
            ? 'Do not have an account?'
            : 'Already have an account?'}{' '}
          <button
            className="text-blue-500 hover:text-blue-600"
            onClick={() => {
              setView(view === 'login' ? 'create-account' : 'login');
            }}>
            {view === 'login'
              ? 'Create new account'
              : 'Log into existing account'}
          </button>
        </CardHeaderDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4">
        {view === 'login' && (
          <>
            <Input
              withLabel="Email Address"
              labelDirection="v"
              placeholder="ironman@avengers.com"
              stretch
            />
            <Input
              withLabel="Password"
              labelDirection="v"
              placeholder="**********"
              stretch
            />
          </>
        )}
        {view === 'create-account' && (
          <>
            <Input
              withLabel="Create username"
              labelDirection="v"
              placeholder="@ironman"
              stretch
            />
            <Input
              withLabel="Your Email Address"
              labelDirection="v"
              placeholder="ironman@avengers.com"
              stretch
            />
            <Input
              withLabel="Create a Password"
              labelDirection="v"
              placeholder="**********"
              stretch
            />
          </>
        )}
      </CardContent>
      <CardFooter>
        <Button stretch withArrow={view === 'create-account'}>
          {view === 'login' ? 'Log In' : 'Get Started'}
        </Button>
      </CardFooter>
    </Card>
  );
}
