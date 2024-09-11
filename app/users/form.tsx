"use client"

import { useFormState, useFormStatus } from "react-dom";
import { updateNameAction } from "./actions";
import { useRef } from "react";

interface FormProps {
    userId: string;
}

export default function Form({ userId }: FormProps) {
    const formRef = useRef<HTMLFormElement>(null);
    const [state, action] = useFormState(updateNameAction, {
        userId,
        name: "",
        message: "",
    });

    if (state.message === 'success') {
        formRef.current?.reset();
    }

    return (
        <form ref={formRef} action={action}>
            <input className="text-slate-950 px-4 py-2 rounded-lg" type="text" name="name" />
            <SubmitButton />
        </form>
    );
}

export function SubmitButton() {
    const status = useFormStatus();
    return (
        <button className="bg-blue-700 hover:bg-blue-400 px-4 py-2 ml-1 font-bold rounded-lg" type="submit">
           {status.pending ? "Saving..." : "Save" } 
        </button>
    )
}
