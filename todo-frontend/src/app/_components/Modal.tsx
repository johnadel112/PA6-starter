"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
export default function Modal({ children }: { children: React.ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  useEffect(() => {
    const element = dialog.current;
    const previous = document.activeElement as HTMLElement | null;
    element?.showModal();
    return () => {
      element?.close();
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      aria-labelledby="todo-title"
      onCancel={(event) => {
        event.preventDefault();
        router.back();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            router.back();
        }
      }}
    >
      <button className="secondary" onClick={() => router.back()} autoFocus>
        Close
      </button>
      <div style={{ marginTop: 24 }}>{children}</div>
    </dialog>
  );
}
