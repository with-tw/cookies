'use client';
import { Button } from '@/components/ui/button';
import {
  Toast,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastTitle,
} from '@/components/ui/toast';
import React from 'react';

export const ToastComponentDemo = () => {
  return (
    <div className="demo-toast p-4 rounded-xl shadow-lg bg-neutral-800 relative w-[420px] h-auto">
      <ToastTitle>Toast Title</ToastTitle>
      <ToastDescription>Description text for toast component</ToastDescription>
      <ToastAction altText="Explore">Explore</ToastAction>
    </div>
  );
};

export const ToastExampleDefault = () => {
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef(0);
  return (
    <ToastProvider>
      <Button
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}>
        Show toast
      </Button>
      <Toast open={open} onOpenChange={setOpen}>
        <ToastTitle>Testing toast</ToastTitle>
        <ToastDescription>
          Description text for the testing toast
        </ToastDescription>
        <ToastAction altText="Got it">Got it</ToastAction>
      </Toast>
    </ToastProvider>
  );
};

export const ToastExampleTopRight = () => {
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef(0);
  return (
    <ToastProvider position="top-right">
      <Button
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}>
        Show toast
      </Button>
      <Toast open={open} onOpenChange={setOpen}>
        <ToastTitle>Top-right toast</ToastTitle>
        <ToastDescription>{`Using position="top-right"`}</ToastDescription>
        <ToastAction altText="Got it">Got it</ToastAction>
      </Toast>
    </ToastProvider>
  );
};

export const ToastExampleTopLeft = () => {
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef(0);
  return (
    <ToastProvider position="top-left">
      <Button
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}>
        Show toast
      </Button>
      <Toast open={open} onOpenChange={setOpen}>
        <ToastTitle>Top-left toast</ToastTitle>
        <ToastDescription>{`Using position="top-left"`}</ToastDescription>
        <ToastAction altText="Got it">Got it</ToastAction>
      </Toast>
    </ToastProvider>
  );
};

export const ToastExampleBottomLeft = () => {
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef(0);
  return (
    <ToastProvider position="bottom-left">
      <Button
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}>
        Show toast
      </Button>
      <Toast open={open} onOpenChange={setOpen}>
        <ToastTitle>Bottom-left toast</ToastTitle>
        <ToastDescription>{`Using position="bottom-left"`}</ToastDescription>
        <ToastAction altText="Got it">Got it</ToastAction>
      </Toast>
    </ToastProvider>
  );
};

export const ToastExampleBottomRight = () => {
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef(0);
  return (
    <ToastProvider position="bottom-right">
      <Button
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}>
        Show toast
      </Button>
      <Toast open={open} onOpenChange={setOpen}>
        <ToastTitle>Bottom-right toast</ToastTitle>
        <ToastDescription>{`Using position="bottom-right"`}</ToastDescription>
        <ToastAction altText="Got it">Got it</ToastAction>
      </Toast>
    </ToastProvider>
  );
};
